const Router = require('express').Router();
const {getAnswer} = require('../controllers/controller')

Router.post('/ans',getAnswer);

module.exports = Router;