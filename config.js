const configs = {
  production: {
    host: 'community-sharing.herokuapp.com',
    protocol: 'https'
  },
  development: {
    hostname: 'localhost',
    protocol: 'http',
    port: 3000
  }
}

module.exports = configs[process.env.NODE || 'development']
