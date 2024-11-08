const { Router } = require('express')
const routes = Router();
const QuerysControllers = require('./Controllers/QuerysControllers')


 routes.get('/', QuerysControllers.verify);
 routes.get('/receitas', QuerysControllers.index);
 routes.get('/receitas/exists', QuerysControllers.exists);
 routes.post('/receitas', QuerysControllers.create);
 routes.delete('/receitas/:_id', QuerysControllers.delete);
 routes.put('/receitas/:_id', QuerysControllers.update);

 module.exports = routes