const dotenv = require('dotenv')
const { Sequelize } = require('sequelize')

const configDatabase = require('../config/database')

dotenv.config()

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(configDatabase)
  }
}

module.exports = new Database()
