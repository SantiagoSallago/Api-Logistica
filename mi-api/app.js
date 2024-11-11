const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db');

const app = express();
const port = 3000;

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(bodyParser.json());

// Endpoint GET para obtener todos los usuarios
app.get('/usuarios', (req, res) => {
  connection.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
    res.json(results);
  });
});

// Endpoint GET para obtener un usuario por ID
app.get('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM usuarios WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al obtener el usuario' });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(results[0]);
  });
});

// Endpoint POST para crear un nuevo usuario
app.post('/usuarios', (req, res) => {
  const { nombre, correo, edad } = req.body;
  const query = 'INSERT INTO usuarios (nombre, correo, password) VALUES (?, ?, ?)';
  connection.query(query, [nombre, correo, password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al crear el usuario' });
    }
    res.status(201).json({
      id: results.insertId,
      nombre,
      correo,
      edad
    });
  });
});

// Endpoint PUT para actualizar un usuario
app.put('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  const { nombre, correo, edad } = req.body;
  const query = 'UPDATE usuarios SET nombre = ?, correo = ?, password = ? WHERE id = ?';
  connection.query(query, [nombre, correo, password, id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json({ id, nombre, correo, edad });
  });
});

// Endpoint DELETE para eliminar un usuario
app.delete('/usuarios/:id', (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM usuarios WHERE id = ?';
  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.status(204).send();
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});