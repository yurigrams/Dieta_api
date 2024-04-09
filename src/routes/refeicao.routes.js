const { Router } = require('express')


const RefeicaoController = require('../controllers/RefeicaoController')


const refeicaoRoutes = Router()


// Controller
const refeicaoController = new RefeicaoController()


// Rotas
refeicaoRoutes.post('/create', refeicaoController.create)
refeicaoRoutes.get('/show/:id', refeicaoController.show)
refeicaoRoutes.get('/showRefeicaoUser/:idUser', refeicaoController.showRefeicaoUser)
refeicaoRoutes.put('/update/:id', refeicaoController.update)
refeicaoRoutes.delete('/delete/:id', refeicaoController.delete)
refeicaoRoutes.get('/showMetricaRefeicao/:idUser', refeicaoController.showMetricaRefeicao)

// Exporta
module.exports = refeicaoRoutes