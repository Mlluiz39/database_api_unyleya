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
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `https://apiproductunyleya.fly.dev/path-files/${this.path}`
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
