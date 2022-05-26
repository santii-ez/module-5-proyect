const express = require('express');
const router = express.Router();

const mainController = require('../controller/mainController');

router.get('/', mainController.index);
router.get('/detail/:menuId', mainController.detail);

module.exports = router;