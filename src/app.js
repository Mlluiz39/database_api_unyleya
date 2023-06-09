const express = require('express')
const routes = require('./routes')
const resolve = require('path').resolve
const cors = require('cors')

require('./database')

class App {
  constructor() {
    this.app = express()
    this.app.use(cors())
    this.middleware()
    this.routes()
  }

  middleware() {
    this.app.use(express.json())
  }

  routes() {
    this.app.use(routes)
  }
}

module.exports = new App().app
