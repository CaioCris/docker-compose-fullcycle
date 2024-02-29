const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sqlInsert = `INSERT INTO people(name) values('Caio')`
connection.query(sqlInsert)

const sqlSelect = `SELECT * FROM people`
async function executeQuery(query) {
    try {
        const [rows, fields] = await connection.execute(query); // Executando a consulta
        connection.release(); // Liberando a conexão de volta para o pool
        return rows; // Retornando os resultados da consulta
    } catch (error) {
        throw error; // Lançando o erro para ser tratado no código que chamar essa função
    }
}

connection.end()

app.get('/', async (req, res) => {
    const result = await executeQuery(sqlSelect)
    console.log(`result -> ${result}`)
    res.send(`<h1>Full Cycle Rocks!</h1>`)
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})