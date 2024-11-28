const Reserva = require('../modelos/Reserva.js')
const uuid = require('uuid')
const data = require('../../data.json')

const crearReserva = (req, res) => {
    const id = uuid.v4()
    const {fechaInicio, fechaTermino, hotel, tipoHabitacion, estado, numeroDeHuespedes} = req.body
    const reserva = new Reserva(id, fechaInicio, fechaTermino, hotel, tipoHabitacion, estado, numeroDeHuespedes) 
    res.json(reserva)
}

const obtenerReservaId = (req, res) => {
    const reserva = data.reservas.find(r => r.id === Number(req.params.id))
    res.json(reserva)
}

const obtenerReservaPorFechas = (req, res) => {
    const {fechaInicio, fechaTermino} = req.query 
    
    if(!fechaInicio || !fechaTermino) {
        return res.json('Error')
    }

    const fechaInicioFormateada = new Date(fechaInicio)
    const fechaTerminoFormateada = new Date(fechaTermino)

    const reservasFiltradas = data.reservas.filter(reservas => {
        const inicioReserva = new Date(reservas.fechaInicio)
        const finReserva = new Date(reservas.fechaTermino)

        return inicioReserva >= fechaInicioFormateada && finReserva <= fechaTerminoFormateada  
    })

    res.json(reservasFiltradas)
}

const obtenerReservasPorestado= (req, res) => {
    const reserva = data.reservas.filter (r => r.estado.toUpperCase() === req.query.estado.toUpperCase())   
    res.json(reserva)
}

const obtenerReservasPorHotel= (req, res) => {
    const reserva = data.reservas.filter (r => r.hotel.toUpperCase() === req.query.hotel.toUpperCase())  
    res.json(reserva)
}

const obtenerReservasPorHabitacion= (req, res) => {
    const reserva = data.reservas.filter (r => r.tipoHabitacion.toUpperCase() === req.query.tipoHabitacion.toUpperCase())  
    res.json(reserva)
}

const obtenerReservaPorHuespedes = (req, res) => {
    const reserva = data.reservas.find(r => r.cantidadHuespedes === Number(req.query.cantidadHuespedes))
    res.json(reserva)
}

module.exports = {
    crearReserva,
    obtenerReservaId,
    obtenerReservaPorFechas,
    obtenerReservasPorestado,
    obtenerReservasPorHotel,
    obtenerReservasPorHabitacion,
    obtenerReservaPorHuespedes
}