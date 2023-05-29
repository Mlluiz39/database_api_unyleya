const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  dialect: 'postgres',
  host: 'silly.db.elephantsql.com',
  username: 'yagchbpz',
  password: 'GcmDilEdfX9z-joX_ZivinBxbU8zx5Iz',
  database: 'yagchbpz',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}
