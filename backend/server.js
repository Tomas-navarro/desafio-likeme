import express from 'express'
import 'dotenv/config'
import postRoutes from './routes/posts.routes.js'
import cors from 'cors'

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors({
  origin: 'http://localhost:5173'  
}))

app.use(express.json())

app.use(postRoutes)

app.listen(PORT, console.log(`Server Running on 👀 http://localhost:${PORT}`))