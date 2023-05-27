const express = require('express')

const cors = require('cors')

const app = express()

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
  const { firstName, hamburger, drink, follow_up } = req.body
  const product = await Product.create({
    id: Product.id,
    firstName,
    hamburger,
    drink,
    follow_up,
  })
  return res.json(product)
})

router.put('/product/:id', async (req, res) => {
  const { firstName, hamburger, drink, follow_up } = req.body
  const product = await Product.update(
    { firstName, hamburger, drink, follow_up },
    { where: { id: req.params.id } }
  )
  return res.json(product)
})

router.delete('/product/:id', async (req, res) => {
  const product = await Product.destroy({ where: { id: req.params.id } })
  return res.json(product)
})

app.use('/', router)

module.exports = app