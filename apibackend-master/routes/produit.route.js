const express = require('express')
const produitController = require('../controllers/produit.controller.js')
const router = express.Router();

router.get('/', produitController.findAll);
router.get('/:id', produitController.findOne);
router.post('/', produitController.create);
router.put('/:id', produitController.update);
router.delete('/:id', produitController.destroy);
router.get("/findallbyidresto/:id", produitController.findAllByIdResto);

module.exports = router