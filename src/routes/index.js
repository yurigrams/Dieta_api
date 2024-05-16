const { Router } = require('express')


const jogadorRoutes = require('./jogador.routes')
const timeRoutes = require('./time.routes')
const partidaRoutes = require('./partida.routes');


const routes = Router()


// Rotas dos controllers
routes.use('/jogador', jogadorRoutes)
routes.use('/time', timeRoutes)
routes.use('/partida', partidaRoutes)


module.exports = routes