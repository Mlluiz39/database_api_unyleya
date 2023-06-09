const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')

const ProductController = require('./app/controllers/ProductController')

const upload = multer(multerConfig)

routes.get('/', (req, res) => {
  res.json({ message: 'API de produtos da unyleya' })
})

routes.get('/products', ProductController.index)
routes.get('/products/:id', ProductController.show)
routes.post('/products', upload.single('path'), ProductController.store)
routes.put('/products/:id', upload.single('path'), ProductController.update)
routes.delete('/products/:id', ProductController.delete)

module.exports = routes
