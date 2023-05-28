const express = require('express')

const app = express()
const port = 3000

const cors = require('cors')

const Product = require('./src/models/Product')

app.use(cors())
app.use(express.json())

const router = express.Router()

router.get('/', (req, res) => {
  return res.json({ message: 'API de produtos' })
})

router.get('/products', async (req, res) => {
  const product = await Product.findAll()
  return res.json(product)
})

router.get('/products/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id)
  return res.json(product)
})

router.post('/products', async (req, res) => {
  const { name, code, category, description, price } = req.body
  const product = await Product.create({
    id: Product.id,
    name,
    code,
    category,
    description,
    price,
  })
  return res.json(product)
})

router.put('/products/:id', async (req, res) => {
  const { name, code, category, description, price } = req.body
  const product = await Product.update(
    { name, code, category, description, price },
    { where: { id: req.params.id } }
  )
  return res.json(product)
})

router.delete('/products/:id', async (req, res) => {
  const product = await Product.destroy({ where: { id: req.params.id } })
  return res.json(product)
})

app.use('/', router)

app.listen(port, () => {
  console.log(`Back end is page at http://localhost:${port}`)
})

module.exports = app
