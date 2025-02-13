const Reserva = require('../modelos/Reserva.js')
const uuid = require('uuid')
const data = require('../../data.json')


const crearReserva = async (req, res) => {
    const id = uuid.v4()
    const {fechaInicio, fechaTermino, hotel, tipoHabitacion, estado, cantidadHuespedes} = req.body
    const reserva = new Reserva(id, fechaInicio, fechaTermino, hotel, tipoHabitacion, estado, cantidadHuespedes) 
    res.json({message: 'Reserva creada con exito', reserva})
}

const obtenerReservaId = async (req, res) => {
    const reserva = data.reservas.find(r => r.id === Number(req.params.id))
    res.json({message: 'Reserva obtenida con exito', reserva})
    
    if(!reserva) {
        res.status(404).json({message: 'Reserva no encontrada'})
    }
}

const obtenerReservaPorFechas = async (req, res) => {
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

    res.json({message: 'Reserva obtenida con exito', reservasFiltradas})
}

const obtenerReservasPorestado= async (req, res) => {
    const reserva = data.reservas.filter (r => r.estado.toUpperCase() === req.query.estado.toUpperCase())   
    res.json({message: 'Reserva obtenida con exito', reserva})

    if(!reserva) {
        res.status(404).json({message: 'Reserva no encontrada'})
    }
}

const obtenerReservasPorHotel= async (req, res) => {
    const reserva = data.reservas.filter (r => r.hotel.toUpperCase() === req.query.hotel.toUpperCase())  
    res.json({message: 'Reserva obtenida con exito', reserva})

    if(!reserva) {
        res.status(404).json({message: 'Reserva no encontrada'})
    }
}

const obtenerReservasPorHabitacion= async (req, res) => {
    const reserva = data.reservas.filter (r => r.tipoHabitacion.toUpperCase() === req.query.tipoHabitacion.toUpperCase())  
    res.json({message: 'Reserva obtenida con exito', reserva})

    if(!reserva) {
        res.status(404).json({message: 'Reserva no encontrada'})
    }
}

const obtenerReservaPorHuespedes = async (req, res) => {
    const reserva = data.reservas.find(r => r.cantidadHuespedes === Number(req.query.cantidadHuespedes))
    res.json({message: 'Reserva obtenida con exito', reserva})

    if(!reserva) {
        res.status(404).json({message: 'Reserva no encontrada'})
    }
}

const obtenerlistaDeRerserva = async (req, res) => {
    const reserva = data.reservas
    res.json({message: 'La lista de reservas se ha obtenido con exito', reserva})
}

const actualizarReserva = async (req, res) => {
    const reservaId = parseInt(req.params.id);
    const reservaIndex = data.reservas.findIndex((e) => e.id === reservaId)
   
    if (reservaIndex === -1) {
        return res.status(404).json({ message: "Reserva no encontrada" });
    }

   data.reservas[reservaIndex] = {...data.reservas[reservaIndex], ...req.body}

    res.json({
        message: 'Reserva actualizada',
        data: data.reservas[reservaIndex]
    });
};

const eliminarReserva = async (req, res) => {
    const reservaId = parseInt(req.params.id);
    const reservaIndex = data.reservas.findIndex((e) => e.id === reservaId)
   
    if (reservaIndex === -1) {
        return res.status(404).json({ message: "Reserva no encontrada" });
    }

   data.reservas.splice(reservaIndex, 1)

    res.json({
        message: 'Reserva eliminada con exito',
    });
}


module.exports = {
    crearReserva,
    obtenerReservaId,
    obtenerReservaPorFechas,
    obtenerReservasPorestado,
    obtenerReservasPorHotel,
    obtenerReservasPorHabitacion,
    obtenerReservaPorHuespedes,
    obtenerlistaDeRerserva,
    actualizarReserva,
    eliminarReserva
}