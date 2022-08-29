const xmEnv = require("./env.config.js");
const XM_ENV = xmEnv[process.env.XM];

module.exports = {
  apps: [
    {
      name: XM_ENV.APP_NAME,
      script: "npm",
      args: "start",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: process.env.NODE_ENV,
        XM: process.env.XM,
        PORT: XM_ENV.PORT,
        // ASSET_PREFIX: process.env.ASSET_PREFIX
      }
    }
  ]
}
