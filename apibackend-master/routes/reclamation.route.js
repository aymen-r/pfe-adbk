const express = require('express')
const router = express.Router();
const reclamationController = require('../controllers/reclamation.controller.js')

router.get('/', reclamationController.getReclamations);
router.get('getreclamationsbyidclient/:id', reclamationController.getReclamationsByIdClient);
router.post('/', reclamationController.createReclamation);
router.delete('/:id', reclamationController.deleteReclamation);

module.exports = router