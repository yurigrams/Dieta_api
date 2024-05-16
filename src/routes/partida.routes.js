const { Router } = require('express')


const PartidaController = require('../controllers/PartidaController')


const partidaRoutes = Router()


// Controller
const partidaController = new PartidaController()


// Rotas
partidaRoutes.post('/create', partidaController.create)
partidaRoutes.put('/update/:id', partidaController.update)
partidaRoutes.delete('/delete/:id', partidaController.delete)

// Exporta
module.exports = partidaRoutes