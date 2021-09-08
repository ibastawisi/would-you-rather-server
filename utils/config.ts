require('dotenv').config()

const PORT = process.env.PORT || 3001
const MONGODB_URI = process.env.MONGODB_URI
const SECRET = process.env.SECRET || 'super-secret'

export {
  MONGODB_URI,
  PORT,
  SECRET
}