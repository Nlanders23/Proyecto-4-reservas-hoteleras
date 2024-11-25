const express = require('express')
const rutas = express.Router()
const reservaControlador = require ('../controladores/reservaControlador.js')
rutas.post('/', reservaControlador.crearReserva)

module.exports = rutas