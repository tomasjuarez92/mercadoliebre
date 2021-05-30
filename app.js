const path = require ('path')
const express = require('express')
const app = express ()

app.use(express.static(path.resolve(__dirname,"./public")));

app.listen(process.env.PORT || 3000,() => console.log('Terminal Corriendo'))

app.get('/', (req,res) => res.sendFile(path.resolve(__dirname,"./views/home.html")))
app.get('/register', (req,res) => res.sendFile(path.resolve(__dirname,"./views/register.html")))
app.get('/login', (req,res) => res.sendFile(path.resolve(__dirname,"./views/login.html")))
app.get('/busqueda-productos', (req,res) => res.sendFile(path.resolve(__dirname,"./views/busqueda-productos.html")))
