const skills = [
    {id: 1, skill: 'html', level: 'intermediate', easy: true},
    {id: 2, skill: 'css', level: 'intermediate', easy: true},
    {id: 3, skill: 'javascript', level: 'beginner', easy: false}
];

module.exports = {
    getAll, 
    getOne
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