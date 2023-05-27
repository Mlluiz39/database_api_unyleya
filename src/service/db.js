const dotenv = require('dotenv')
const { Sequelize } = require('sequelize')

dotenv.config()

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,

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
