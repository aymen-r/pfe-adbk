const express = require('express')
const menuController = require('../controllers/menu.controller.js')
const router = express.Router();

router.get('/', menuController.findAll);
router.get('/:id', menuController.findOne);
router.post('/', menuController.create);
router.put('/:id', menuController.update);
router.delete('/:id', menuController.destroy);
router.get("/findbyidresto/:id", menuController.findAllByIdResto);

module.exports = router;