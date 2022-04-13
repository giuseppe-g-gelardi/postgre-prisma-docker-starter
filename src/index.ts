import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import colors from 'colors'
import connectMessage from './util/logDecoration'

dotenv.config()
colors.enable()

const app = express()
const port = process.env.PORT || "3825"

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// api routes go here
app.use('/api/test', require('./routes/testRoutes'))

// server
app.listen(port, () => {
  connectMessage(port)
})
