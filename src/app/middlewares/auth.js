const Jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = Jwt.verify(token, process.env.TOKEN_SECRET)

    req.userId = decoded.id
    req.userName = decoded.name

    return next()
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' })
  }
}
