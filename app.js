const express = require('express')

const cors = require('cors')

const app = express()

const port = process.env.PORT || 8080

const Product = require('./src/models/Product')

const router = express.Router()

app.use(cors())
app.use(express.json())

router.get('/product', async (req, res) => {
  const product = await Product.findAll()
  return res.json(product)
})

router.get('/product/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id)
  return res.json(product)
})

router.post('/product', async (req, res) => {
  const { name, code, category, description, price  } = req.body
  const product = await Product.create({
    id: Product.id,
    
  })
  return res.json(product)
})

router.put('/product/:id', async (req, res) => {
  const { name, code, category, description, price } = req.body
  const product = await Product.update(
    { name, code, category, description, price },
    { where: { id: req.params.id } }
  )
  return res.json(product)
})

router.delete('/product/:id', async (req, res) => {
  const product = await Product.destroy({ where: { id: req.params.id } })
  return res.json(product)
})

app.use('/', router)

app.listen(port, () => {
  console.log(`Back end is page at http://localhost:${port}`)
})

module.exports = app
