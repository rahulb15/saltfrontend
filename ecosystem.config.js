module.exports = {
  apps: [{
    name: 'saltfrontend',
    cwd: '/root/saltstayz/saltfrontend',
    script: 'npm',
    args: 'start',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      PORT: 3005,
      NODE_ENV: 'production'
    }
  }]
}
