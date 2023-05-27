const Sequelize = require('sequelize')
const db = require('../service/db')


const Product = db.define('products', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  code: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

Product.sync()

module.exports = Product