const {Router} = require('express');
const {typeDiets} = require('../handlers/dietsHandlers')

const dietsRouter = Router();




dietsRouter.get('/', typeDiets);

module.exports = dietsRouter;