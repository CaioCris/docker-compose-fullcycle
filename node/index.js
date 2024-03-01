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

const nomeInserir = process.argv[2] || 'Caio'; 

const sqlInsert = `INSERT INTO people(name) values(?)`;
connection.query(sqlInsert, [nomeInserir], function (err, results, fields) {
    if (err) {
        console.error('Erro ao inserir:', err);
        return;
    }
    console.log('Registro inserido com sucesso:', results);
});

const sqlSelect = `SELECT * FROM people`

app.get('/', (req, res) => {
    connection.query(sqlSelect, function (err, rows, fields) {
        if (err) {
            console.error('Erro ao executar a consulta:', err);
            res.status(500).send('Erro ao processar a requisição');
            return;
        }

        let response = '<h1>Full Cycle Rocks!</h1>';

        response += '<table border="1">';
        response += '<tr><th>ID</th><th>Nome</th></tr>';

        rows.forEach(row => {
            response += `<tr><td>${row.id}</td><td>${row.name}</td></tr>`;
        });

        response += '</table>';

        res.send(response);
    });
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})