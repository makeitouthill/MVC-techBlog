const router = require('express').Router();

router.get(['/', '/homepage'], (req, res) => {
  res.render('homepage');
});

module.exports = router;