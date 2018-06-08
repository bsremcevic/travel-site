function Person(fullName, favColor) {
  this.name = fullName;
  this.favColor = favColor;
  this.greet = function() {
    console.log("Hello There " + this.name + " color is " + this.favColor);
  }
}

/* you need to export what you want to expose outside of this module,
by including everything you want into the exports object */
// console.log("Hello from Person.js")
// exports.example = "eeee";
// exports.exFun = function(){
//   alert("Example");
// }

/* Instead of adding the constructor to the exports object
we want it to literally be the constructor function.
So, instead of adding a property to exports object (eg. exports.Property = Person),
we can target the exports object parent called module,
and set its property exports to equal the Person constructor function. */

module.exports = Person;
