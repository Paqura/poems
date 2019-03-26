const express = require('express');
const router = express.Router();
const poemsController = require('../../../controllers/poems');

router.get('/', poemsController.getPoems);
router.post('/add', poemsController.addPoem);

module.exports = router;