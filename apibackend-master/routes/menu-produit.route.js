const express = require('express')
const router = express.Router();
const menuProduitController = require('../controllers/menu-produit.controller.js')


router.get('/findallbymenuid/:id', menuProduitController.findAllByMenu);
router.post('/', menuProduitController.create);
router.delete('/:id', menuProduitController.delete);
router.get('/deleteallbymenu/:id', menuProduitController.deleteAllByMenu);

module.exports = router;