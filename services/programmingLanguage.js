// Es el modelo
const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function create(programmingLanguages) {
    const resultado = await db.query(`
        INSERT INTO lenguajes_programacion 
        (nombre, anio_salida, github_rank) 
        VALUES
        (
            "${programmingLanguages.nombre}", 
            "${programmingLanguages.anio_salida}",
            "${programmingLanguages.github_rank}"
        )
    `);

    let message = "Error al crear el registro del lenguaje de programación";
    if(resultado.affectedRows)
        message = "Registro de lenguaje creado con éxito";
    return message;
}

async function read(page = 1) {
    const offset = helper.getOffSet(page, config.listPerPage);
    const rows = await db.query(`
        SELECT * FROM programacion.lenguajes_programacion LIMIT ${offset}, ${config.listPerPage}
    `);
 
    const data = helper.emptyRows(rows);
    const metadata = {page};

    return {
        data, 
        metadata
    }
}

async function update(id, programmingLanguages) {
    const resultado = await db.query(`
        UPDATE lenguajes_programacion 
        SET nombre = "${programmingLanguages.nombre}", 
        anio_salida = ${programmingLanguages.anio_salida}, 
        github_rank = ${programmingLanguages.github_rank} 
        WHERE id = ${id}
        `);
        
    let message = "Error al actualizar el registro del lenguaje de programación";
    if(resultado.affectedRows)
        message = "Registro de lenguaje actualizado con éxito";
    return message;
}

async function borrar(id) {
    const resultado = await db.query(`
        DELETE FROM lenguajes_programacion  
        WHERE id = ${id}
        `);
        
    let message = "Error al borrar el registro del lenguaje de programación";
    if(resultado.affectedRows)
        message = "Registro de lenguaje borrado con éxito";
    return message;
}

module.exports = {
    create, 
    read,
    update,
    borrar
}