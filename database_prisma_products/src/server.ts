import Express from 'express'
import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import multer from 'multer'

const prisma = new PrismaClient()
const app = Express()
app.use(Express.json())

const port = 3000

// Configuração do multer
const storage = multer.diskStorage({
  destination: function (req: Request, file: any, cb: any) {
    cb(null, './public/images')
  },
  filename: function (req: Request, file: any, cb: any) {
    cb(null, `${Date.now()}-${file.originalname}`)
  },
})

const upload = multer({ storage })

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

// Buscar todos os produtos

app.get('/products', async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany()
    res.json(products)
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao buscar os produtos.' })
  }
})

// Buscar um produto
app.get('/products/:id', async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    })
    res.json(product)
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao buscar o produto.' })
  }
})

// Criar um novo produto
app.post(
  '/products',
  upload.single('image'),
  async (req: Request, res: Response) => {
    const { name, code, description, category, price } = req.body
    const image = req.file?.path

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
          image,
          price,
        },
      })
      res.json(product)
    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro ao criar o produto !' })
    }
  }
)

// Atualizar um produto
app.put(
  '/products/:id',
  upload.single('image'),
  async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, code, description, category, price } = req.body
    const image = req.file?.path

    const isProductExist = name && code && description && category && price

    try {
      if (!isProductExist) {
        return res
          .status(400)
          .json({ error: 'É necessário informar os dados do produto!!!' })
      }
      const product = await prisma.product.update({
        where: {
          id: Number(id),
        },
        data: {
          name,
          code,
          description,
          category,
          image,
          price,
        },
      })
      res.json(product)
    } catch (error) {
      res
        .status(500)
        .json({ error: 'Ocorreu um erro ao atualizar o produto !' })
    }
  }
)

// Deletar um produto
app.delete('/products/:id', async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const product = await prisma.product.delete({
      where: {
        id: Number(id),
      },
    })
    res.json(product)
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao deletar o produto !' })
  }
})

app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`)
})
