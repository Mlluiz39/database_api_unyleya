const Sequelize = require('sequelize')

const configDatabase = require('../config/database')

const Product = require('../app/models/Product')

const models = [Product]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(configDatabase)

    models.map(model => model.init(this.connection))
  }
}

module.exports = new Database()
