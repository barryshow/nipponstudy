module.exports = {
  apps: [
    {
      name: "nipponstudy",
      // 使用 next start 命令
      script: "node_modules/next/dist/bin/next",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3001,
        HOSTNAME: "127.0.0.1",
      },
      // 日志
      error_file: "/home/deployer/apps/nipponstudy/logs/err.log",
      out_file: "/home/deployer/apps/nipponstudy/logs/out.log",
      merge_logs: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      // 进程管理
      instances: 2, // VPS CPU 核心数，可调整
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