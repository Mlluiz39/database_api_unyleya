const Sequelize = require('sequelize')
const { Model } = require('sequelize')

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        code: Sequelize.STRING,
        category: Sequelize.STRING,
        description: Sequelize.STRING,
        price: Sequelize.INTEGER,
        path: {
          type: Sequelize.STRING,
          defaultValue: '',
          get() {
            return `http://localhost:3000/path-files/${this.getDataValue(
              'path'
            )}`
          },
        },
      },
      {
        sequelize,
      }
    )
    return this
  }
}

module.exports = Product
