const express = require("express");
const app = express();
const port = 3000;

const dbConfig = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const mysql = require("mysql2");

app.get("/register/:name", async (req, res) => {
  try {
    let name = req.params.name;
    handlerInsertPeople(name);
    res.send(`<h1>Registrado com sucesso!</h1>`);
  } catch (e) {
    res.send(e);
  }
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});

async function handlerInsertPeople(name) {
  try {
    const connection = mysql.createConnection(dbConfig);
    const sql = `INSERT INTO people SET ?`;
    connection.query(sql, { name: name });
  } catch (e) {
    throw e;
  } finally {
    connection.end();
  }
}
