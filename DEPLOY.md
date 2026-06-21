# nipponstudy 生产级 VPS 部署方案

## 项目分析

| 项目 | 内容 |
|------|------|
| 框架 | Next.js 16.2.6 (App Router) |
| 数据库 | Supabase PostgreSQL（云端，无需在 VPS 装 DB） |
| ORM | Prisma |
| 样式 | TailwindCSS v4 |
| AI API | 火山引擎方舟（豆包） |
| Node.js | v24.13.0 |
| 域名 | barryshow.net |
| VPS 位置 | 美国 |
| CDN | Cloudflare |

## 架构图

```
Cloudflare (CDN + SSL + 缓存)
    │ 用户请求 (Proxy 开启 = 橙云)
    ▼
VPS (美国 Ubuntu)
    ├─ Nginx (反向代理 + Brotli + 缓存 + 安全头)
    │     └─ 端口 443 (HTTPS) / 80 → 301 to 443
    └─ PM2 (Node.js 进程管理)
          └─ next start (端口 3000)
                ├─ Prisma → Supabase PostgreSQL (云端)
                └─ 火山引擎 API (出站)
```

## 部署步骤总览

```
1. VPS 基础环境配置（Node.js + Nginx + PM2）
2. 项目代码拉取与构建
3. Nginx 反向代理配置
4. Cloudflare DNS + SSL 配置
5. 环境变量配置
6. 启动与验证
7. 上线检查清单
```

---

# 第一步：VPS 基础环境配置

## 1.1 SSH 登录 VPS

```bash
ssh root@134.195.211.142
# 密码: 22eP5w7TTA
```

## 1.2 更新系统

```bash
apt update && apt upgrade -y
apt install -y curl wget git ufw nginx certbot python3-certbot-nginx build-essential
```

## 1.3 安装 Node.js v24（如未安装）

```bash
# 使用 NodeSource 安装
curl -fsSL https://deb.nodesource.com/setup_24.x | bash -
apt install -y nodejs
node --version   # 确认 >= 24
npm --version
```

## 1.4 安装 PM2

```bash
npm install -g pm2
pm2 startup systemd   # 开机自启
```

## 1.5 配置防火墙 (UFW)

```bash
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable
ufw status verbose   # 确认 SSH / 80 / 443 开放
```

## 1.6 创建部署用户

```bash
# 创建一个非 root 用户来运行应用（安全性）
adduser deployer
usermod -aG sudo deployer
su - deployer
```

---

# 第二步：项目部署

## 2.1 拉取代码

```bash
# 推荐方式：直接 git clone（自动跟踪最新版本）
su - deployer
mkdir -p /home/deployer/apps
git clone https://github.com/barryshow/nipponstudy.git /home/deployer/apps/nipponstudy
cd /home/deployer/apps/nipponstudy
```

## 2.2 添加 standalone 输出配置

**文件: next.config.ts**

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // 静态资源 CDN 缓存
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400" },
        ],
      },
    ];
  },
};

export default nextConfig;
```

## 2.3 创建环境变量文件

```bash
cd /home/deployer/apps/nipponstudio
cat > .env.production << 'EOF'
# ========== 数据库 ==========
DATABASE_URL="你的 Supabase PostgreSQL 连接串"

# ========== Supabase ==========
NEXT_PUBLIC_SUPABASE_URL="你的 Supabase URL"
NEXT_PUBLIC_SUPABASE_ANON_KEY="你的 Supabase anon key"

# ========== AI API（火山引擎方舟/豆包） ==========
# 从 Vercel 环境变量抄过来
ARKS_API_KEY="你的火山引擎 API key"
ARKS_BASE_URL="https://ark.cn-beijing.volces.com/api/v3"

# ========== 其他 ==========
NODE_ENV=production
EOF
```

> ⚠️ **从 Vercel 迁移环境变量：**
> 登录 [vercel.com](https://vercel.com/barryshow-projects/nipponstudy/settings/environment-variables)
> 导出所有 production 环境变量（或手动复制），写入 `.env.production`。
> 特别注意：`DATABASE_URL`、`ARKS_API_KEY`、Supabase 相关 key 必须正确。

## 2.4 安装依赖并构建

```bash
cd /home/deployer/apps/nipponstudy
npm ci --production=false
npx prisma generate
npm run build
```

> **注意：** `npm ci` 会严格按照 `package-lock.json` 安装，保证构建环境一致。

## 2.5 配置 PM2 启动

**文件: /home/deployer/apps/nipponstudy/ecosystem.config.js**

```javascript
module.exports = {
  apps: [
    {
      name: "nipponstudy",
      // standalone output 的运行入口
      script: "node_modules/next/dist/bin/next",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "127.0.0.1",
      },
      // 错误日志
      error_file: "/home/deployer/apps/nipponstudy/logs/err.log",
      out_file: "/home/deployer/apps/nipponstudy/logs/out.log",
      merge_logs: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      // 进程管理
      instances: 2, // 根据 VPS CPU 核心数调整
      exec_mode: "cluster",
      max_memory_restart: "1G",
      // 自动重启
      watch: false,
      autorestart: true,
      restart_delay: 3000,
      max_restarts: 10,
    },
  ],
};
```

```bash
# 创建日志目录
mkdir -p /home/deployer/apps/nipponstudy/logs

# 启动应用
pm2 start ecosystem.config.js --env production
pm2 save
pm2 status
```

## 2.6 standalone 模式构建优化（可选）

如果使用 `output: "standalone"`，Next.js 会把产物输出到 `.next/standalone/`。这种方式更高效：

```bash
# 构建后，产物在 .next/standalone/
# 目录结构：
# .next/standalone/
#   ├── package.json
#   ├── server.js          # 独立服务器入口
#   └── .next/             # 构建产物（不含 node_modules）
# public/                  # 需要手动复制到 standalone
```

PM2 配置对应的修改：

```javascript
// 使用 standalone 模式时
script: ".next/standalone/server.js",
```

但注意：需要手动复制 `public/`、`.env.production` 到 `.next/standalone/`。

---

# 第三步：Nginx 配置

## 3.1 创建 Nginx 配置文件

**文件: /etc/nginx/sites-available/nipponstudy**

```nginx
# 使用 upstream 定义后端
upstream nextjs_upstream {
    server 127.0.0.1:3000;
    keepalive 64;
}

# HTTP → HTTPS 重定向
server {
    listen 80;
    server_name barryshow.net www.barryshow.net;
    return 301 https://$host$request_uri;
}

# HTTPS 主服务器块
server {
    listen 443 ssl http2;
    server_name barryshow.net www.barryshow.net;

    # SSL 证书路径（由 certbot 或 Cloudflare Origin CA 填充）
    ssl_certificate     /etc/letsencrypt/live/barryshow.net/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/barryshow.net/privkey.pem;

    # SSL 配置（现代 + 兼容）
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    ssl_session_tickets off;

    # HSTS（启用后浏览器强制 HTTPS，注意先测试）
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;

    # 安全头
    add_header X-Content-Type-Options nosniff always;
    add_header X-Frame-Options DENY always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # 中国大陆访问优化：不要暴露 VPS IP
    server_tokens off;

    # 日志
    access_log /var/log/nginx/nipponstudy-access.log;
    error_log  /var/log/nginx/nipponstudy-error.log;

    # ===== 静态资源缓存（走 Cloudflare CDN 回源） =====

    # _next/static — 哈希文件名，永久缓存
    location /_next/static {
        alias /home/deployer/apps/nipponstudy/.next/static;
        expires 365d;
        add_header Cache-Control "public, max-age=31536000, immutable";
        access_log off;
    }

    # public/static — 自定义静态资源
    location /static {
        alias /home/deployer/apps/nipponstudy/public/static;
        expires 365d;
        add_header Cache-Control "public, max-age=31536000, immutable";
        access_log off;
    }

    # public/images — 图片
    location /images {
        alias /home/deployer/apps/nipponstudy/public/images;
        expires 30d;
        add_header Cache-Control "public, max-age=2592000";
        access_log off;
    }

    # favicon
    location = /favicon.ico {
        root /home/deployer/apps/nipponstudy/public;
        expires 7d;
        add_header Cache-Control "public, max-age=604800";
        access_log off;
    }

    location = /robots.txt {
        root /home/deployer/apps/nipponstudy/public;
        access_log off;
    }

    # ===== 动态请求 → Node.js =====
    location / {
        # 反向代理到 Next.js
        proxy_pass http://nextjs_upstream;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # 超时设置（AI API 可能较慢）
        proxy_connect_timeout 15s;
        proxy_send_timeout 30s;
        proxy_read_timeout 60s;

        # 缓冲设置
        proxy_buffering on;
        proxy_buffer_size 4k;
        proxy_buffers 8 16k;
        proxy_busy_buffers_size 32k;

        # Cloudflare 回源 IP 白名单
        include /etc/nginx/cloudflare-ips.conf;
        real_ip_header CF-Connecting-IP;
    }

    # ===== API 路由特殊处理（不缓存动态 API）= ====
    location /api/ {
        proxy_pass http://nextjs_upstream;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        # API 不缓存
        add_header Cache-Control "no-store, no-cache, must-revalidate" always;
        # 允许跨域（如果需要）
        add_header Access-Control-Allow-Origin "*" always;
    }

    # 限制 body 大小（防止恶意大请求）
    client_max_body_size 10m;
}
```

## 3.2 启用站点

```bash
ln -sf /etc/nginx/sites-available/nipponstudy /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default  # 删除默认站点
nginx -t   # 测试配置
systemctl reload nginx
```

## 3.3 配置 Cloudflare 回源 IP 白名单

```bash
# 下载 Cloudflare IP 列表，让 Nginx 能获取真实访客 IP
cat > /etc/nginx/cloudflare-ips.conf << 'EOF'
# Cloudflare IPv4
set_real_ip_from 173.245.48.0/20;
set_real_ip_from 103.21.244.0/22;
set_real_ip_from 103.22.200.0/22;
set_real_ip_from 103.31.4.0/22;
set_real_ip_from 141.101.64.0/18;
set_real_ip_from 108.162.192.0/18;
set_real_ip_from 190.93.240.0/20;
set_real_ip_from 188.114.96.0/20;
set_real_ip_from 197.234.240.0/22;
set_real_ip_from 198.41.128.0/17;
set_real_ip_from 162.158.0.0/15;
set_real_ip_from 104.16.0.0/13;
set_real_ip_from 104.24.0.0/14;
set_real_ip_from 172.64.0.0/13;
set_real_ip_from 131.0.72.0/22;
# Cloudflare IPv6
set_real_ip_from 2400:cb00::/32;
set_real_ip_from 2606:4700::/32;
set_real_ip_from 2803:f800::/32;
set_real_ip_from 2405:b500::/32;
set_real_ip_from 2405:8100::/32;
set_real_ip_from 2a06:98c0::/29;
set_real_ip_from 2c0f:f248::/32;
EOF
```

---

# 第四步：Cloudflare 配置

## 4.1 DNS 配置

在 Cloudflare Dashboard 添加 DNS 记录：

| 类型 | 名称 | 值 | Proxy |
|------|------|-----|-------|
| A | `@` | `134.195.211.142` | ✅ 开启（橙云） |
| A | `www` | `134.195.211.142` | ✅ 开启（橙云） |

> **重要：必须开启 Proxy（橙云）**
> 开启后 Cloudflare 会：
> - 隐藏 VPS 真实 IP
> - 提供 CDN 加速
> - 自动优化中国大陆访问路由
> - 提供 DDoS 防护

## 4.2 SSL/TLS 配置

在 Cloudflare Dashboard → SSL/TLS：

| 设置 | 推荐值 |
|------|--------|
| SSL/TLS encryption mode | **Full (strict)** |
| Always Use HTTPS | **开启** |
| Minimum TLS Version | **1.2** |
| Automatic HTTPS Rewrites | **开启** |

### Full (strict) 模式下，有 2 种证书方案：

**方案 A：使用 Let's Encrypt（推荐，免费自动化）**

Nginx 上运行 certbot：
```bash
certbot --nginx -d barryshow.net -d www.barryshow.net --non-interactive --agree-tos -m your-email@example.com
# 证书会自动续期
certbot renew --dry-run  # 测试续期
```

**方案 B：使用 Cloudflare Origin CA（回源加密更完整）**

1. Cloudflare → SSL/TLS → Origin Server → Create Certificate
2. 选择 `barryshow.net` 和 `*.barryshow.net`
3. 私钥格式选 PEM
4. 将证书和私钥复制到 VPS：

```bash
# 在 VPS 上
mkdir -p /etc/ssl/cloudflare
# 把 Cloudflare 给的证书内容粘贴到
nano /etc/ssl/cloudflare/origin.pem
nano /etc/ssl/cloudflare/origin-key.pem
```

然后修改 Nginx 的 SSL 路径指向这些文件。

> **推荐方案 A (Let's Encrypt)**——简单自动续期，且 Full (strict) 下 Cloudflare 到 VPS 也是 HTTPS。

## 4.3 Speed 优化（Cloudflare 面板）

| 功能 | 建议 | 说明 |
|------|------|------|
| Auto Minify | ✅ 开启 JS/CSS/HTML | 自动压缩 |
| Brotli | ✅ 开启 | 比 Gzip 压缩率更高 |
| Polish | 开启 Lossless | 无损压缩图片（需开启橙云） |
| Early Hints | ✅ 开启 | 103 Early Hints 提前推送资源 |
| HTTP/2 | ✅ 保持开启 | 多路复用 |
| HTTP/3 (QUIC) | ✅ 开启 | 降低连接延迟 |

## 4.4 缓存规则（Cloudflare → Page Rules 或 Cache Rules）

创建以下页面规则（Cloudflare 免费版支持 3 条）：

```
1. *barryshow.net/_next/static/*
   → Cache Level: Standard
   → Edge Cache TTL: 30 days

2. *barryshow.net/images/*
   → Cache Level: Standard
   → Edge Cache TTL: 7 days

3. *barryshow.net/api/*
   → Cache Level: Bypass
```

---

# 第五步：一键部署脚本

## 5.1 手动一键部署脚本

**文件: /home/deployer/apps/nipponstudy/deploy.sh**

```bash
#!/bin/bash
set -e

echo "===== nipponstudy 部署脚本 ====="
cd /home/deployer/apps/nipponstudy

# 1. 拉取最新代码
echo "[1/5] 拉取代码..."
git fetch origin main
git reset --hard origin/main

# 2. 安装依赖
echo "[2/5] 安装依赖..."
npm ci --production=false

# 3. 生成 Prisma Client
echo "[3/5] 生成 Prisma Client..."
npx prisma generate

# 4. 构建
echo "[4/5] 构建项目..."
npm run build

# 5. 重启 PM2
echo "[5/5] 重启服务..."
pm2 restart ecosystem.config.js --env production

echo "===== 部署完成 ====="
echo "查看日志: pm2 logs nipponstudy"
echo "查看状态: pm2 status"
```

```bash
chmod +x deploy.sh
```

## 5.2 手动部署命令（不用脚本）

```bash
ssh root@134.195.211.142 "cd /home/deployer/apps/nipponstudy && git pull origin main && npm ci && npx prisma generate && npm run build && pm2 restart ecosystem.config.js"
```

## 5.3 GitHub Actions 自动部署（CI/CD）

**文件: .github/workflows/deploy.yml**（放到项目根目录）

```yaml
name: Deploy to VPS

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "24"

      - name: Install dependencies
        run: npm ci

      - name: Generate Prisma Client
        run: npx prisma generate

      - name: Build
        run: npm run build
        env:
          DATABASE_URL: ${{ secrets.DATABASE_URL }}
          NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.NEXT_PUBLIC_SUPABASE_URL }}
          NEXT_PUBLIC_SUPABASE_ANON_KEY: ${{ secrets.NEXT_PUBLIC_SUPABASE_ANON_KEY }}
          ARKS_API_KEY: ${{ secrets.ARKS_API_KEY }}
          ARKS_BASE_URL: ${{ secrets.ARKS_BASE_URL }}

      - name: Deploy to VPS via rsync
        uses: easingthemes/ssh-deploy@main
        with:
          SSH_PRIVATE_KEY: ${{ secrets.VPS_SSH_KEY }}
          ARGS: "-avz --delete --exclude='node_modules' --exclude='.git' --exclude='.env*'"
          SOURCE: "."
          REMOTE_HOST: "134.195.211.142"
          REMOTE_USER: "deployer"
          TARGET: "/home/deployer/apps/nipponstudy"

      - name: Restart PM2 on VPS
        uses: appleboy/ssh-action@v1
        with:
          host: "134.195.211.142"
          username: "deployer"
          key: ${{ secrets.VPS_SSH_KEY }}
          script: |
            cd /home/deployer/apps/nipponstudy
            npm ci --production=false
            npx prisma generate
            npm run build
            pm2 restart ecosystem.config.js --env production
```

> **注意：**
> - GitHub Actions 方式需要配置 `VPS_SSH_KEY` 和所有环境变量到 GitHub Secrets
> - 需要先将本地 SSH 公钥添加到 VPS 的 `/home/deployer/.ssh/authorized_keys`
> - 对于初学者，推荐使用 **ssh 手动部署**（步骤 5.1 或 5.2）而不是 GitHub Actions

---

# 第六步：安全加固

## 6.1 SSH 安全

```bash
# 编辑 SSH 配置
nano /etc/ssh/sshd_config

# 修改以下配置：
PermitRootLogin no              # 禁止 root SSH 登录
PasswordAuthentication no        # 禁止密码登录（需先配好 SSH 密钥）
PubkeyAuthentication yes
MaxAuthTries 3                   # 最大认证尝试次数
ClientAliveInterval 300          # 5 分钟无操作断开
ClientAliveCountMax 2

# 重启 SSH
systemctl restart sshd
```

## 6.2 自动安全更新

```bash
apt install -y unattended-upgrades
dpkg-reconfigure --priority=low unattended-upgrades
# 选择 Yes
```

## 6.3 Fail2Ban（防暴力破解）

```bash
apt install -y fail2ban
cat > /etc/fail2ban/jail.local << 'EOF'
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 5

[sshd]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/auth.log
maxretry = 3
bantime = 86400

[nginx-http-auth]
enabled = true
port = http,https
EOF

systemctl enable fail2ban
systemctl start fail2ban
```

## 6.4 Nginx 额外安全配置

在 `/etc/nginx/nginx.conf` 的 `http` 块中添加：

```nginx
# 隐藏 Nginx 版本
server_tokens off;

# 限制请求速率（防止暴力攻击）
limit_req_zone $binary_remote_addr zone=login:10m rate=5r/s;

# 限制连接数
limit_conn_zone $binary_remote_addr zone=addr:10m;
```

## 6.5 配置日志轮转

```bash
cat > /etc/logrotate.d/nipponstudy << 'EOF'
/home/deployer/apps/nipponstudy/logs/*.log {
    daily
    rotate 14
    compress
    delaycompress
    notifempty
    missingok
    copytruncate
}
EOF
```

---

# 第七步：中国大陆访问优化（专题）

## 7.1 核心策略

| 策略 | 说明 |
|------|------|
| **Cloudflare 橙云（Proxy）** | 所有流量经过 Cloudflare CDN，隐藏源站 IP |
| **使用 CN 友好路由** | Cloudflare 在中国有节点（虽非官方），能显著降低延迟 |
| **开启 Brotli 压缩** | 比 Gzip 压缩率更高，减少传输量 |
| **资源永久缓存** | `_next/static/*` 设为 1 年缓存，避免重复下载 |
| **减少 HTTP 请求** | SSR 页面直接返回 HTML，减少 JS 体积 |
| **禁止直连 VPS IP** | 避免被 GFW 干扰 |

## 7.2 缓存策略总结

| 资源类型 | Cache-Control | 说明 |
|----------|---------------|------|
| `/_next/static/*` | `public, max-age=31536000, immutable` | 哈希文件名，永久缓存 |
| `/images/*` | `public, max-age=2592000` | 图片缓存 30 天 |
| HTML 页面 | 不缓存（动态 SSR） | 由 Cloudflare Edge Cache TTL 控制 |
| `/api/*` | `no-store, no-cache, must-revalidate` | 永远不缓存 |

## 7.3 API / 页面分离建议

本项目没有独立后端 API，所有 API 都由 Next.js 提供（`/api/*` 路由）。如未来需要分离：

```
/ 路由          → SSR 页面，Next.js 处理
/api/contact   → Next.js API Route
/api/seed      → Next.js API Route
/api/assessment → Next.js API Route
```

Nginx 上的 `location /api/` 块已经配置了不缓存。

## 7.4 针对国内的额外优化

1. **字体优化**：当前使用 Geist（Google Fonts）。如果需要更好国内访问，考虑：
   - 使用本地字体文件（项目已使用 `next/font`，自动下载到本地）
   - ✅ 已经是最优方案，因为 `next/font` 会把字体文件打包到 `/_next/static/`
2. **图片优化**：使用 `next/image` + `<Image>` 组件，自动使用 WebP/AVIF 格式
3. **第三方脚本**：避免加载 Google Analytics 等国内不可访问的资源

---

# 第八步：Vercel → VPS 迁移说明

## 8.1 需要迁移的内容

| 内容 | 迁移方式 |
|------|----------|
| 代码 | `git clone` 到 VPS，保持 GitHub 为源码仓库 |
| 环境变量 | 从 Vercel 导出 → 写入 `.env.production`（已在第 2 步） |
| 构建命令 | 不变：`npm run build` |
| 域名 | Vercel 域名 `nipponstudy.vercel.app` 下线，只用 `barryshow.net` |
| 静态资源 | 在 `public/` 中，随代码一起部署 |
| 数据库（Supabase） | 不动，Prisma 连接串不变 |
| 图片 | 如果使用 Vercel KV / Blob，需要迁移到本地或 S3 |

## 8.2 Vercel 域名下线步骤

1. 确认新 VPS 已正常访问 `https://barryshow.net`
2. 进入 [Vercel Dashboard → nipponstudy → Domains](https://vercel.com/barryshow-projects/nipponstudy/domains)
3. 删除 `nipponstudy.vercel.app`（或保留作为备用）
4. 确保不产生额外费用

---

# 第九步：上线检查清单

## 部署前

- [ ] VPS 基础环境已配置（Node.js v24, Nginx, PM2）
- [ ] UFW 防火墙已开启（仅 22/80/443）
- [ ] 代码已 git clone 到 VPS
- [ ] `.env.production` 已创建（所有环境变量正确）
- [ ] `npx prisma generate` 成功
- [ ] `npm run build` 成功（无错误）
- [ ] Nginx 配置已创建并测试通过 (`nginx -t`)
- [ ] Cloudflare DNS A 记录已添加（Proxy 开启）
- [ ] Cloudflare SSL 设为 Full (strict)
- [ ] SSL 证书已配置（certbot 或 Origin CA）
- [ ] PM2 已启动并 save

## 部署后

- [ ] `https://barryshow.net` 可以正常访问
- [ ] `http://barryshow.net` 自动跳转到 HTTPS
- [ ] `https://www.barryshow.net` 可访问并跳转
- [ ] API 接口正常（如 `/api/contact`）
- [ ] 静态资源加载正常（CSS/JS/图片）
- [ ] 数据库连接正常（联系表单提交测试）
- [ ] AI 分析功能正常
- [ ] 移动端显示正常
- [ ] SSL 证书有效期检查（`curl -I https://barryshow.net`）
- [ ] HSTS 头已生效
- [ ] PM2 已设为开机自启 (`pm2 startup`)
- [ ] certbot 自动续期已配置 (`certbot renew --dry-run`)
- [ ] 日志轮转已配置
- [ ] Fail2Ban 已运行

## 持续监控

- [ ] PM2 日志：`pm2 logs nipponstudy`
- [ ] Nginx 日志：`tail -f /var/log/nginx/nipponstudy-access.log`
- [ ] 磁盘使用：`df -h`
- [ ] 内存使用：`free -m`
- [ ] SSL 证书到期：`certbot certificates`
- [ ] 定期更新：`unattended-upgrades` 已配置自动进行

---

# 常见错误排查指南

## ERR 1: 502 Bad Gateway

**原因：** Nginx 无法连接到 Next.js

```bash
# 检查 Next.js 是否在运行
pm2 status
pm2 logs nipponstudy --lines 20

# 检查端口监听
ss -tlnp | grep 3000

# 重启
pm2 restart nipponstudy
systemctl reload nginx
```

## ERR 2: 404 Not Found

**原因：** Nginx 的 `root` 或 `alias` 路径错误

```bash
# 检查路径是否存在
ls -la /home/deployer/apps/nipponstudy/.next/static/
ls -la /home/deployer/apps/nipponstudy/public/

# 检查 Nginx 配置路径
nginx -T | grep "root\|alias" | grep nipponstudy
```

## ERR 3: SSL 证书问题

```bash
# 检查证书
certbot certificates

# 尝试手动续期
certbot renew --force-renewal
systemctl reload nginx
```

## ERR 4: Prisma 连接错误

```bash
# 检查 DATABASE_URL 是否正确
grep DATABASE_URL /home/deployer/apps/nipponstudy/.env.production

# 测试数据库连接
cd /home/deployer/apps/nipponstudy
npx prisma db push --accept-data-loss  # 重新同步 schema
```

## ERR 5: 部署后页面没有更新

```bash
# 检查 git 版本
cd /home/deployer/apps/nipponstudy
git log --oneline -3

# 如果正确但构建没更新
npm run build
pm2 restart nipponstudy
```

## ERR 6: 内存不足导致构建失败

```bash
# 检查当前内存
free -m

# 如果 VPS 内存 < 2GB，添加 swap
dd if=/dev/zero of=/swapfile bs=1M count=2048
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo '/swapfile none swap sw 0 0' >> /etc/fstab

# 或者用 --experimental-vm-modules 参数构建时限制内存
NODE_OPTIONS="--max_old_space_size=2048" npm run build
```

## ERR 7: Cloudflare 显示 "This site can't be reached"

```bash
# 检查 DNS 解析
nslookup barryshow.net

# 检查 VPS 是否可访问（关闭 Proxy 测试）
# 临时将 DNS 记录改为 DNS only（灰色云），测试 VPS 直接访问
# 测试成功后改回 Proxy（橙色云）
```

## ERR 8: pm2 日志乱码或中文不显示

```bash
# 设置 locale
export LANG=zh_CN.UTF-8
# 或使用英文
LC_ALL=C pm2 logs nipponstudy
```

---

# 快速启动命令汇总

## 首次部署（按顺序执行）

```bash
# VPS 上
ssh root@134.195.211.142

# 基础环境
apt update && apt upgrade -y
apt install -y curl wget git ufw nginx certbot python3-certbot-nginx fail2ban
curl -fsSL https://deb.nodesource.com/setup_24.x | bash -
apt install -y nodejs
npm install -g pm2
pm2 startup systemd

# 防火墙
ufw default deny incoming && ufw default allow outgoing
ufw allow ssh && ufw allow 80/tcp && ufw allow 443/tcp
ufw --force enable

# 创建用户
adduser deployer
usermod -aG sudo deployer

# 切换用户后部署
su - deployer
mkdir -p /home/deployer/apps/nipponstudy/logs
git clone https://github.com/barryshow/nipponstudy.git /home/deployer/apps/nipponstudy
cd /home/deployer/apps/nipponstudy

# 创建 .env.production（必须，省略）
# nano .env.production

npm ci --production=false
npx prisma generate
npm run build
pm2 start ecosystem.config.js --env production
pm2 save

# 回到 root 配 Nginx
exit  # 回到 root
nano /etc/nginx/sites-available/nipponstudy  # 粘贴配置
ln -sf /etc/nginx/sites-available/nipponstudy /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx

# SSL 证书
certbot --nginx -d barryshow.net -d www.barryshow.net --non-interactive --agree-tos -m your-email@example.com

# Fail2Ban
systemctl enable fail2ban && systemctl start fail2ban

echo "部署完成！浏览器打开 https://barryshow.net"
```

## 日常更新

```bash
# VPS 上执行
su - deployer
cd /home/deployer/apps/nipponstudy
git pull origin main
npm ci
npx prisma generate
npm run build
pm2 restart ecosystem.config.js --env production
```