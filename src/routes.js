const { Router } = require('express')


const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

// Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

//Query Params (URL) 90% GET: req.query (Filtros, ordenação, paginação, ...)
//Route Params (URL): req.params (Identificar um recurso na alteração ou remoção)
//Body - POST e PUT: req.body (Dados para criação ou alteração de um registro)

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', SearchController.index)

module.exports = routes