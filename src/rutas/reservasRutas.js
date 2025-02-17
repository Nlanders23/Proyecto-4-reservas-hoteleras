const express = require('express')
const rutas = express.Router()
const reservaControlador = require('../controladores/reservaControlador.js')

rutas.post('/', reservaControlador.crearReserva)
rutas.get('/reserva/:id', reservaControlador.obtenerReservaId)
rutas.get('/reserva/', reservaControlador.obtenerReservaPorFechas)
rutas.get('/reservaPorEstado', reservaControlador.obtenerReservasPorestado)
rutas.get('/reservaPorHotel', reservaControlador.obtenerReservasPorHotel)
rutas.get('/reservaPorHabitacion', reservaControlador.obtenerReservasPorHabitacion)
rutas.get('/reservaPorHuespedes',reservaControlador.obtenerReservaPorHuespedes)
rutas.get('/listaDeReservas', reservaControlador.obtenerlistaDeRerserva)
rutas.put('/reserva/:id', reservaControlador.actualizarReserva)
rutas.delete('/reserva/:id', reservaControlador.eliminarReserva)

module.exports = rutas