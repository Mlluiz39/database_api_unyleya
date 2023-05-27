require('dotenv').config()
const { Sequelize } = require('sequelize')



const sequelize = new Sequelize({
  dialect: 'postgres',
  host: '164.152.48.202',
  username: 'postgres',
  password: 'Julia2912',
  database: 'postgres',

  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
})

sequelize
  .authenticate()
  .then(() => {
    console.log('conectado com sucesso!.')
  })
  .catch(err => {
    console.error('erro ao conectar ao database:', err)
  })

module.exports = sequelize
