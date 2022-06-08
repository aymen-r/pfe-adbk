const express = require('express')
const evaluation_commandeController = require('../controllers/evaluation.controller.js')
const router = express.Router();

router.get('/', evaluation_commandeController.findAll);
router.get('/:id', evaluation_commandeController.findOne);
router.post('/', evaluation_commandeController.create);
router.put('/:id', evaluation_commandeController.update);
router.delete('/:id', evaluation_commandeController.destroy);

module.exports = router