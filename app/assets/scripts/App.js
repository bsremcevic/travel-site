var $ = require('jquery');
var Person = require('./modules/Person')

/* This is how you can use properties and methods that you exposed from the module */
// console.log(Person.example);
// Person.exFun();


var jonn = new Person("John Doe", "blue");
jonn.greet();

var jane = new Person("Janne Smith", "green");
jane.greet();

$("h1").remove();
