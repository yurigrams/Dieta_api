const { Router } = require('express')


const JogadorController = require('../controllers/JogadorController')


const jogadorRoutes = Router()


// Controller
const jogadorController = new JogadorController()


// Rotas
jogadorRoutes.post('/create', jogadorController.create)
jogadorRoutes.get('/show', jogadorController.show)
jogadorRoutes.put('/update/:id', jogadorController.update)
jogadorRoutes.delete('/delete/:id', jogadorController.delete)

// Exporta
module.exports = jogadorRoutes