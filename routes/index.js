const express = require('express');
const router = express.Router();
const skills = require('../models/skill')
const allSkills = skills.getAll();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'Express Skills' });
});

//GET /skills
router.get('/skills', function (req, res, next) {
  res.render('skills/index.ejs', {skills: allSkills});
});

module.exports = router;
