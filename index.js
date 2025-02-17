const express = require('express')
const app = express()
const reservasRutas = require('./src/rutas/reservasRutas.js')

require('dotenv').config();

const port = process.env.PORT ||3000
const serverUrl = process.env.SERVER_URL || `http://localhost:${port}`

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/api', reservasRutas)

app.listen(port, () => {
    console.log('Puerto conectado')
})

