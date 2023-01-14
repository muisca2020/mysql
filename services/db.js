// Esto carga el módulo mysql2
const mysql = require('mysql2/promise');
// Y con esto cargamos la configuración
const config = require('../config');

// Esta función es con la que lanzaremos las instrucciones a la base de datos
async function query(sql, params) {
    // Aquí se usa una promesa para esperar por una conexión con la base de datos
    const connection = await mysql.createConnection(config.db);
    // Aquí usamos una promesa para lanzar un comando a la base de datos y esperar la respuesta
    const [results, ] = await connection.execute(sql, params);

    return results;
}

module.exports = {
    query
}