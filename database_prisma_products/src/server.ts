import Express from 'express'
import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = Express()
app.use(Express.json())

const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get('/products', async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany()
    res.json(products)
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao buscar os produtos.' })
  }
})

// Criar um novo produto
app.post('/products', async (req: Request, res: Response) => {
  const { name, code, description, category, price } = req.body

  const isProductExist = name && code && description && category && price

  try {
    if (!isProductExist) {
      return res
        .status(400)
        .json({ error: 'É necessário informar os dados do produto!!!' })
    }
    const product = await prisma.product.create({
      data: {
        name,
        code,
        description,
        category,
        price,
      },
    })
    res.json(product)
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao criar o produto !' })
  }
})

app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`)
})
