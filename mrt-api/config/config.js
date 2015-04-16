var path = require('path'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    dir = path.join(__dirname, '/..');

module.exports = {
  app: {
    root: path.normalize(dir),
    env: env
  },

  development: {
    db: {
      url: 'mongodb://localhost/mrt-dev'
    }
  },

  test: {
    db: {
      url: 'mongodb://localhost/mrt-test'
    }
  },

  production: {
    db: {
      url: process.env.MONGO_URL
    }
  }
};
