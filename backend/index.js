require("dotenv").config()

const express = require('express')
const cors = require('cors')
// const route = require('./routes/route.js')
const PORT = process.env.DB_PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(cors({credentials:false, origin:"http://localhost:5173"}))


require("./config/db.js")

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`)
})