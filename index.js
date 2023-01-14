// Importamos express que vamos a usar para procesar las solicitudes
const express = require('express');
// Declaramos un objeto que va a instanciar express
const app = express();
// Definimos el puerto que vamos a usar para escuchar las peticiones a la API
const PORT = 3000;
const programmingLanguajesRouter = require('./routes/programmingLanguage');

// Declaramos que usaremos json para manejar las solicitudes
app.use(express.json());
// Declaramos que usaremos la recolección de información de las solicitudes en la URL
app.use(
    express.urlencoded({
        extended:true
    })
)

// Declaramos para una solicitud GET con url / como respondemos
app.get("/", (req, res) => {
    res.json({message: "OK"});
});

app.use("/lenguajes", programmingLanguajesRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
});

// Habilita el inicio del servidor en node
app.listen(PORT, () => {
    console.log(`App en ejecución escuchando en http://localhost:${PORT}`);
});