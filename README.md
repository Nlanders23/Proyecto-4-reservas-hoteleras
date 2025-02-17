# Proyecto-4-reservas-hoteleras

Bienvenidos al proyecto 4: Sistema de reservas Hoteleras, con Node.js y Express.
Para inicializar este proyecto te invitamos a clonar este repositorio y posteriormente ejecutarlo con Visual Studio code.
Una vez dentro ve a la terminal  de VSC e ingresa el comando npm install para instalar los node_modules.
En la Raíz de proyecto crea un archivo .env para configurar las variables de entorno, y escribe dentro de el lo siguiente:

    PORT =3000
    SERVER_URL= http://localhost:3000

Por último, para levantar nuestra aplicación ejecuta el comando npm run start en la terminal. Una vez ejecutado el comando debería aparecer un mensaje que diga "Puerto conectado" en nuestra terminal, lo cual nos indicará que estamos listos para utilizar nuestra aplicación a través de ThunderClient, Postman u otro servicio.

Arquitectura de carpetas:

PROYECTO-4-RESERVAS-HOTELERAS
  |-src
  |   |-controladores
  |   |  |-reservaControlador.js
  |   |-modelos
  |   |  |-Reserva.js
  |   |-rutas
  |   |  |-reservasRutas.js
  |-.gitignore
  |-data.json
  |-index.js
  |-package.json
  |-README.md


Modelo de Reserva:

Ejemplo: 

"reservas": [
    {
     "id": 1,
     "fechaInicio": "2024-11-20",
     "fechaTermino": "2024-11-25",          
     "cantidadHuespedes": 2,
     "hotel": "Hotel Sol y Mar",
     "tipoHabitacion": "Suite",
     "estado": "Confirmada"
    }
]

EndPoints y Metodos:

 1. Crear una Reserva 
   - Método: POST
   - Ruta: http://localhost:3000/api
   - Decripción:
     Debes enviar los parámetros de la reserva en formato JSON en el body de la petición. Ejemplo:
      { 
       "fechaInicio": "2025-11-20",
       "fechaTermino": "2025-11-25",          
       "cantidadHuespedes": 6,
       "hotel": "Hotel Sport",
       "tipoHabitacion": "Familiar",
       "estado": "Reservada"
      } 
    En el caso del id, se genera de forma aleatoria por lo cual no es necesario incluirlo dentro del Body.

2. Obtener lista de reservas
   - Método: GET
   - Ruta: http://localhost:3000/api/listaDeReservas
   - Descripción: 
     En este caso no se deben  enviar parámetros, solo basta con configurar el método y la ruta para generar la petición.

3. Obtener reserva por id
   - Método: GET
   - Ruta: http://localhost:3000/api/reserva/:id
   - Descripción:
   Para hacer la solicitud, debemos enviar el parámetro (id) en la ruta, tal como se muestra en el siguiente ejemplo: 
   
   http://localhost:3000/api/reserva/1

   esto nos retornará la información de la reserva con id: 1
      {
        "id": 1,
        "fechaInicio": "2024-11-20",
        "fechaTermino": "2024-11-25",          
        "cantidadHuespedes": 2,
        "hotel": "Hotel Sol y Mar",
        "tipoHabitacion": "Suite",
        "estado": "Confirmada"
      }
    
    En el caso de no existir la reserva se emitirá un mensaje que diga: "Reserva no encontrada"

4. Actualizar Reserva por id
   - Método: PUT
   - Ruta: http://localhost:3000/api/reserva/:id
   - Descripción:

   Para hacer la petición debemos enviar el id de la reserva que deseamos actualizar en nuestra ruta (http://localhost:3000/api/reserva/1) y los parámetros actualizados en el body de la petición:

       { 
        "fechaInicio": "2024-11-20",
        "fechaTermino": "2024-11-25",          
        "cantidadHuespedes": 6,
        "hotel": "Hotel Sol y Mar",
        "tipoHabitacion": "Familiar",
        "estado": "Reservada"
       } 

5. Eliminar reserva por id
   - Método: DELETE
   - Ruta: http://localhost:3000/api/reserva/:id
   - Descripción:
   Para hacer la solicitud, debemos enviar el parámetro (id) en la ruta, tal como se muestra en el siguiente ejemplo: 
   
   http://localhost:3000/api/reserva/1

   Una vez generada la petición se nos mostrará un mensaje que diga: "Reserva eliminada con éxito"

6. Filtrar reservas por Hotel
   - Método: GET
   - Ruta: http://localhost:3000/api/reservaPorHotel
   - Descripción: 
   Para hacer la solicitud debemos enviar los parámetros (hotel) y su valor a partir de la Query. 

   params: hotel      value: Hotel sol y Mar 
   
   obteniendo como resultado las reservas 
   
     {
        "id": 1,
        "fechaInicio": "2024-11-20",
        "fechaTermino": "2024-11-25",          
        "cantidadHuespedes": 2,
        "hotel": "Hotel Sol y Mar",
        "tipoHabitacion": "Suite",
        "estado": "Confirmada"
     }

7. Filtrar reservas por rangos
   - Método: GET
   - Ruta: http://localhost:3000/api/reservaPorRango
   - Descripción: 
   Para hacer la solicitud debemos enviar los parámetros (fecha de inicio y fecha de termino) y su valor a partir de la Query. 

   params: fechaInicio      value: 2024-11-20
   params: fechaTermino     value: 2024-11-25
   
   obteniendo como resultado las reservas 
   
     {
        "id": 1,
        "fechaInicio": "2024-11-20",
        "fechaTermino": "2024-11-25",          
        "cantidadHuespedes": 2,
        "hotel": "Hotel Sol y Mar",
        "tipoHabitacion": "Suite",
        "estado": "Confirmada"
     }

8. Filtrar reserva por tipo de habitación
   - Método: GET
   - Ruta: http://localhost:3000/api/reservaPorHabitación
   - Descripción: 
   Para hacer la solicitud debemos enviar los parámetros (tipo de habitación) y su valor a partir de la Query. 

   params: tipoHabitacion      value: Suite
   
   obteniendo como resultado las reservas 
   
     {
        "id": 1,
        "fechaInicio": "2024-11-20",
        "fechaTermino": "2024-11-25",          
        "cantidadHuespedes": 2,
        "hotel": "Hotel Sol y Mar",
        "tipoHabitacion": "Suite",
        "estado": "Confirmada"
     }

9. Filtrar reserva por estado
   - Método: GET
   - Ruta: http://localhost:3000/api/reservaPorEstado
   - Descripción: 
   Para hacer la solicitud debemos enviar los parámetros (estado de la reserva) y su valor a partir de la Query. 

   params: estado      value: Confirmada
   
   obteniendo como resultado las reservas 
   
     {
        "id": 1,
        "fechaInicio": "2024-11-20",
        "fechaTermino": "2024-11-25",          
        "cantidadHuespedes": 2,
        "hotel": "Hotel Sol y Mar",
        "tipoHabitacion": "Suite",
        "estado": "Confirmada"
     }

10. Filtrar reserva por número de huespedes
   - Método: GET
   - Ruta: http://localhost:3000/api/reservaPorHuespedes
   - Descripción: 
   Para hacer la solicitud debemos enviar los parámetros (cantidad de huespedes) y su valor a partir de la Query. 

   params: cantidadHuespedes      value: 2
   
   obteniendo como resultado las reservas 
   
     {
        "id": 1,
        "fechaInicio": "2024-11-20",
        "fechaTermino": "2024-11-25",          
        "cantidadHuespedes": 2,
        "hotel": "Hotel Sol y Mar",
        "tipoHabitacion": "Suite",
        "estado": "Confirmada"
     }