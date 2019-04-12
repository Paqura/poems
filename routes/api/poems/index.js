const express = require('express');
const router = express.Router();
const poemsController = require('../../../controllers/poems');

router.get('/', poemsController.getAll);
router.get('/:id', poemsController.getById);
router.post('/add', poemsController.add);
router.post('/edit/:id', poemsController.edit);

module.exports = router;