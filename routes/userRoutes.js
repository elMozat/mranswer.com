const express = require('express');

const router = express.Router();

router.route('/', (req, res) => {
  res.render('/admin/index');
});

module.exports = router;
