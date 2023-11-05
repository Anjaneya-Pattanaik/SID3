const express = require('express');
const router = express.Router();
const container =require('../containers/form');
router.get('/', container.form);
router.post('/', container.formprocess);
module.exports = router;