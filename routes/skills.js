const express = require('express');
const router = express.Router();

//Require the controller that exports Skills CRUD functions
const skillsCtrl = require('../controllers/skills');


//All actual paths start with "/skills"


//GET /skills
router.get('/', skillsCtrl.index);
//GET /skills/new
router.get('/new', skillsCtrl.new);
//POST /skills
router.post('/', skillsCtrl.create);
//GET /skills/:id
router.get('/:id', skillsCtrl.show);
router.delete('/:id', skillsCtrl.delete);
module.exports = router;
