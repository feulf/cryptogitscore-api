const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type, Cache-Control, *')
  res.header('Access-Control-Allow-Methods', 'PUT, DELETE, OPTIONS, *')
  next()
}

module.exports = cors