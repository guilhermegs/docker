const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql2')

app.get('/', (request, response) => {
    let text = "<h1>Full Cycle Rocks!</h1><br>"
    const connection = mysql.createConnection(config)

    const sql = `INSERT INTO people(name) values('Guilherme')`
    connection.query(sql)

    connection.query("SELECT name FROM people", (err, result, fields) => {
        if(err) throw err
        for (var i in result) {
            text += result[i].name + ","
        }
        response.send(text)
    })
    connection.end()
})


app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})