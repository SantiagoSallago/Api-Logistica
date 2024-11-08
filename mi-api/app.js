const express = require('express');
const app = express();
const port = 3000;

// MiddLeware para parsear el cuerpo de las solicitudes como JSON
app.get('/Usuarios', (req, res) => {
    res.json([
        { id: 1, nombre: 'Juan Carlo', email : 'juancarlo@gmail.com', password: '123456' },
        { id: 2, nombre: 'Santiago Martínez', email : 'santiagomartinez@gmail.com', password: '123456' },
        { id: 3, nombre: 'Pepe Argento', email : 'pepeArgento@gmail.com', password: '123456' },
        { id: 4, nombre: 'Luis Miguel', email : 'luismiguel@gmail.com', password: '123456' },
        { id: 5, nombre: 'Maria de la Paz', email : 'mariadelapaz@gmail.com', password: '123456' },
        { id: 6, nombre: 'Juan Travolta', email : 'juantravolta@gmail.com', password: '123456' },
        { id: 7, nombre: 'Carlos enrique', email : 'carlosenrique@gmail.com', password: '123456' },
        { id: 8, nombre: 'Luis Maria', email : 'luismaria@gmail.com', password: '123456' },
        { id: 9, nombre: 'Maria luisa', email : 'marialuisa@gmail.com', password: '123456' },
        { id: 10, nombre: 'Juan anastasio', email : 'juananastasio@gmail.com', password: '123456' },
        { id: 11, nombre: 'Carlos calito', email : 'carloscalito@gmail.com', password: '123456' },
        { id: 12, nombre: 'Luis luisito', email : 'luisluisito@gmail.com', password: '123456' },
        { id: 13, nombre: 'Maria marianez', email : 'mariamarianez@gmail.com', password: '123456' },
        { id: 14, nombre: 'Juan junior', email : 'juanjunior@gmail.com', password: '123456' },
        { id: 15, nombre: 'Carlos casares', email : 'carloscasares@gmail.com', password: '123456' },
        { id: 16, nombre: 'Luis Fernandez', email : 'luisfernandez@gmail.com', password: '123456' },
        { id: 17, nombre: 'Maria Fernandez', email : 'Mariafernandez@gmail.com', password: '123456' },
        { id: 18, nombre: 'Juan Fernandez', email : 'Juanfernandez@gmail.com', password: '123456' },
        { id: 19, nombre: 'Carlos Fernandez', email : 'Carlosfernandez@gmail.com', password: '123456' },
        { id: 20, nombre: 'Luis Fernandez', email : 'luisfernandez@gmail.com', password: '123456' },
    ]); 
});

// ENdPoint GET para obtener los usuarios por ID
app.get('/usuarios/:id', (req , res) => {
    const id = req.params.id;
    // Aquí Normalmente se buscaría el usuario en una base de datos
    res.json({ id, nombre: 'Juan Carlo', email : 'juancarlo@gmail.com', password: '123456' });
});

// Endpoint POST para crear un usuario
app.post('/usuarios', (req, res) => {
    const {nombre} = req.body;
    // Aquí se crearía el usuario en la base de datos
    res.status(201).json({id: 21,nombre, email, password})
});

// Endpont PUT para actualizar un usuario 
app.put('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const {nombre, email, password} = req.body;
    // Aquí se actualizaría el usuario en la base de datos
    res.json({id, nombre, email, password})
});