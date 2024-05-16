const { Router } = require('express')


const TimeController = require('../controllers/TimeController')


const timeRoutes = Router()


// Controller
const timeController = new TimeController()


// Rotas
timeRoutes.post('/create', timeController.create)
timeRoutes.get('/show', timeController.show)
// Exporta
module.exports = timeRoutes