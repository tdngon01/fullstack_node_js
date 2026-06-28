const express = require('express');
const router = express.Router();

// Khai bao router
router.get('/', (req, res) => {
  res.render('sample.ejs');
});

module.exports = router;

