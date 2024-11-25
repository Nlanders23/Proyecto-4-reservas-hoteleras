class Reserva {
    constructor(id, fechaInicio, fechaTermino, hotel, tipoHabitacion, estado, numeroDeHuespedes){
     this.id = id;
     this.fechaInicio = fechaInicio;
     this.fechaTermino = fechaTermino;
     this.hotel = hotel;
     this.tipoHabitacion = tipoHabitacion;
     this.estado = estado;
     this.numeroDeHuespedes = numeroDeHuespedes;
    }}

    module.exports = Reserva