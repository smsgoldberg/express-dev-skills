const express = require('express');
const router = express.Router();

//Require the controller that exports Skills CRUD functions
const skillsCtrl = require('../controllers/skills');
const skills = require('../models/skill')
const allSkills = skills.getAll();

//All actual paths start with "/todos"

//GET /skills
router.get('/', function (req, res, next) {
   res.render('skills/index.ejs', {skills: allSkills});
});
module.exports = router;
