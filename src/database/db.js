const { Sequelize } = require('sequelize')
const configDatabase = require('../config/database')

const sequelize = new Sequelize(configDatabase)
const dotenv = require('dotenv')

sequelize
  .authenticate()
  .then(() => {
    console.log('conectado com sucesso!.')
  })
  .catch(err => {
    console.error('erro ao conectar ao database:', err)
  })

module.exports = sequelize