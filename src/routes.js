const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')

const ProductController = require('./app/controllers/ProductController')

const authMiddleware = require('./app/middlewares/auth')

const upload = multer(multerConfig)

try {
  routes.use(authMiddleware)
} catch (error) {
  console.log(error)
} // All routes below this line will use the authMiddleware

routes.get('/products', ProductController.index)
routes.get('/products/:id', ProductController.show)
routes.post('/products', upload.single('file'), ProductController.store)
routes.put('/products/:id', upload.single('file'), ProductController.update)
routes.delete('/products/:id', ProductController.delete)

module.exports = routes
