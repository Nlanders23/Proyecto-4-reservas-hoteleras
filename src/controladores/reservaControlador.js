const Reserva = require('../modelos/Reserva.js')
const uuid = require('uuid')
const crearReserva = (req, res) => {
    const id = uuid.v4()
    const {fechaInicio, fechaTermino, hotel, tipoHabitacion, estado, numeroDeHuespedes} = req.body
    const reserva = new Reserva(id, fechaInicio, fechaTermino, hotel, tipoHabitacion, estado, numeroDeHuespedes) 
    res.json(reserva)
}
module.exports = {
    crearReserva
}