const yup = require('yup')
const Product = require('../models/Product')

class ProductController {
  async store(req, res) {
    try {
      const schema = yup.object().shape({
        name: yup.string().required(),
        code: yup.string().required(),
        category: yup.string().required(),
        description: yup.string().required(),
        price: yup.number().required(),
        path: yup.string()
      })

      try {
        schema.validateSync(req.body, { abortEarly: false })
      } catch (err) {
        console.log(err)
        return res.status(400).json({ error: err.errors })
      }

      const { filename: path } = req.file
      const { name, code, category, description, price } = req.body

      const product = await Product.create({
        name,
        code,
        category,
        description,
        price,
        path,
      })

      return res.json(product)
    } catch (error) {
      console.log(error)
    }
  }

  async index(req, res) {
    try {
      const products = await Product.findAll()

      return res.json(products)
    } catch (error) {
      console.log(error)
    }
  }
async update(req, res) {
    try {
      const schema = yup.object().shape({
        name: yup.string().required(),
        code: yup.string().required(),
        category: yup.string().required(),
        description: yup.string().required(),
        price: yup.number().required(),
        path: yup.string().required(),
      })

      try {
        schema.validateSync(req.body, { abortEarly: false })
      } catch (err) {
        console.log(err)
        return res.status(400).json({ error: err.errors })
      }

      const product = await Product.findByPk(req.params.id)

      if (!product) {
        return res.status(400).json({ error: 'Product not found' })
      }

      let path

      if (req.file) {
        path = req.file.filename
      }

      const { name, code, category, description, price } = req.body

      await product.update(
        {
          name,
          code,
          category,
          description,
          price,
          path,
        },
        { where: { id: req.params.id } }
      )

      return res.status(200).json()
    } catch (error) {
      console.log(error)
    }
  }

  async delete(req, res) {
    try {
      const product = await Product.findByPk(req.params.id)

      if (!product) {
        return res.status(400).json({ error: 'Product not found' })
      }

      await product.destroy()

      return res.status(200).json()
    } catch (error) {
      console.log(error)
    }
  }

  async show(req, res) {
    try {
      const product = await Product.findByPk(req.params.id)

      if (!product) {
        return res.status(400).json({ error: 'Product not found' })
      }

      return res.json(product)
    } catch (error) {
      console.log(error)
    }
  }

  async showByCategory(req, res) {
    try {
      const products = await Product.findAll({
        where: { category_id: req.params.id },
      })

      return res.json(products)
    } catch (error) {
      console.log(error)
    }
  }

  async showByCode(req, res) {
    try {
      const products = await Product.findAll({
        where: { code: req.params.code },
      })

      return res.json(products)
    } catch (error) {
      console.log(error)
    }
  }

  async showByName(req, res) {
    try {
      const products = await Product.findAll({
        where: { name: req.params.name },
      })

      return res.json(products)
    } catch (error) {
      console.log(error)
    }
  }

  async showByPrice(req, res) {
    try {
      const products = await Product.findAll({
        where: { price: req.params.price },
      })

      return res.json(products)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new ProductController()
