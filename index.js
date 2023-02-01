const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const db = require("./connection");
const response = require("./response");

//Ini adalah Routes
app.use(bodyParser.json());

app.get("/member", (req, res) => {
  const sql = `SELECT * FROM member`;
  db.query(sql, (err, fields) => {
    console.log(fields);
    response(200, fields, "Semua data berhasil di tampilkan", res);
  });
});

app.get("/member/:divisi", (req, res) => {
  const divisi = req.params.divisi;
  const sql = `SELECT * FROM member WHERE divisi = ${divisi}`;
  db.query(sql, (err, fields) => {
    console.log(fields);
    response(200, fields, "data divisi berhasil diambil", res);
  });
});
app.post("/member", (req, res) => {
  const { Nama, Divisi, Program } = req.body;
  const sql = `INSERT INTO member (nama,divisi,program) VALUES ('${Nama}','${Divisi}','${Program}')`;
  console.log(req.body);

  db.query(sql, (err, fields) => {
    console.log(fields);
    response(200, fields, "data berhasil ditambahkan", res);
  });
});

app.put("/member", (req, res) => {
  const { Nama, Program, Divisi } = req.body;
  const sql = `UPDATE member SET  divisi='${Divisi}' , program = '${Program}' WHERE nama ='${Nama}'`;
  db.query(sql, (err, fields) => {
    console.log(fields);
    response(200, fields, "data berhasil di update", res);
  });
});

app.delete("/member", (req, res) => {
  const { Nama } = req.body;
  const sql = `DELETE FROM member WHERE nama = '${Nama}'`;
  db.query(sql, (err, fields) => {
    console.log(fields);
    response(200, fields, "data sudah di hapus", res);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
