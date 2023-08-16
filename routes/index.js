const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'Express Skills' });
});

//GET /skills
router.get('/', skillsCtrl.index);
//GET /skills/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;
