const { Sequelize } = require('sequelize')

require('dotenv').config()
const sequelize = new Sequelize('postgres://yagchbpz:GcmDilEdfX9z-joX_ZivinBxbU8zx5Iz@silly.db.elephantsql.com/yagchbpz')

sequelize
  .authenticate()
  .then(() => {
    console.log('conectado com sucesso!.')
  })
  .catch(err => {
    console.error('erro ao conectar ao database:', err)
  })

module.exports = sequelize