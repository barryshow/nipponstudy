#!/bin/bash
set -e

# ==========================================
# nipponstudy 一键部署脚本
# 在 VPS 上执行：bash deploy.sh
# ==========================================

APP_DIR="/home/deployer/apps/nipponstudy"
LOG_DIR="$APP_DIR/logs"

echo "===== nipponstudy 部署脚本 ====="
echo "时间: $(date '+%Y-%m-%d %H:%M:%S')"
echo "目录: $APP_DIR"
echo ""

cd "$APP_DIR"

# 1. 拉取最新代码
echo "[1/5] 拉取最新代码..."
git fetch origin main
git reset --hard origin/main
echo "      当前版本: $(git log --oneline -1)"

# 2. 安装依赖
echo "[2/5] 安装依赖..."
npm ci --production=false
echo "      ✅ 依赖安装完成"

# 3. 生成 Prisma Client
echo "[3/5] 生成 Prisma Client..."
npx prisma generate
echo "      ✅ Prisma Client 生成完成"

# 4. 构建项目
echo "[4/5] 构建项目..."
npm run build
echo "      ✅ 构建完成"

# 5. 重启 PM2 服务
echo "[5/5] 重启 PM2 服务..."
pm2 restart ecosystem.config.js --env production
echo "      ✅ PM2 重启完成"

echo ""
echo "===== 部署完成 ====="
echo "查看状态: pm2 status"
echo "查看日志: pm2 logs nipponstudy"
echo "查看实时: pm2 monit"
echo ""
echo "访问地址: https://barryshow.net"