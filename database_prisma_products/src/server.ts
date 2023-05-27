import express from 'express'
import { prismaClient } from './database'

const app = express()
app.use(express.json())

const port = process.env.PORT ?? 4000

app.get('/products', async (request, response) => {
  const products = await prismaClient.product.findMany()
  return response.json(products)
})

app.post('/products', async (request, response) => {
  const { name, code, category, description, price, image } = request.body

  const newProduct = await prismaClient.product.create({
    data: { name, code, category, description, price, image },
  })
  return response.json(newProduct)
})

app.listen(port, () => console.log('Server is running on port ', port))
