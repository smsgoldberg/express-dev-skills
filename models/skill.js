const skills = [
    {id: 1, skill: 'html', level: 'intermediate', easy: true},
    {id: 2, skill: 'css', level: 'intermediate', easy: true},
    {id: 3, skill: 'javascript', level: 'beginner', easy: false}
];

module.exports = {
    getAll, 
    getOne,
    create
}

function getAll() {
    return skills; 
}

function getOne(id) {
    //URL params are string - convert to a number
    id = parseInt(id);
    //The Array.protoype.find iterator method is
    //ideal for finding objects within an array
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.level = '';
    skill.easy = false;
    skills.push(skill);
}

function deleteOne(id) {
    //All properties attached to req.params are strings!
    id = parseInt(id);
    //Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
