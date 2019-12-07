let isDone = false;

let simulation = {
    name: 'firstSim',
    population: 100,
    madeOn: 'Dec 7 2019',
    id: randomNG() * 100
};

function randomNG() {
    return Math.round(Math.random() * 200);
}

console.log(simulation);
console.log('Name of this object: ' + simulation.name);
console.log('ID of this object: ' + simulation.id);
console.log('Random number 1: ' + randomNG());
console.log('Random number 1: ' + randomNG());

function Assets() {
    this.bonds = randomNG() * 1000;
    this.equities = randomNG() * 1000;
}

function Person(id) {
    this.id = id;
    this.iQ = randomNG();
    this.salary = randomNG() * 1000;
    this.disposableIncome = this.salary * .05;
}

let i = 0;
let num = 0;
let personArr = [];
while(!isDone) {
    let identifier = 'a';
    let id = identifier + num;
    personArr.push(new Person(id));
    if(num == 100000) { //10 million people objects!
        isDone = !isDone;
    };
    num++;
}

console.log(personArr);

var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';

console.log(myObj);