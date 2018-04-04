class Player {
    constructor(name, points) {
    this.name = name
    this.points = points
    }   
}

var kobe = new Player('kobe', 85);
var jordan = new Player('jordan', 85);
console.log(kobe.points);
console.log(jordan.points);
// Challenge building a class with three
// Build a class called Cat tghat has name, weight, and tail properties
// Make three cats with the blueprint.
// The console should read the following:
// Sansa, 30 pounds, true
// Timmy, 250 pounds, true
// Ricky, 8 pounds, true

class Cat { 
    constructor (name, weight, tail) {

        this.name = name,
        this.weight = weight,
        this.tail = tail
    }
}
    var catSansa = new Cat('sansa', "30 pounds", true);
    var catTimmy = new Cat('timmy', "250 pounds", true);
    var catRicky = new Cat('ricky', "8 pounds", true);
  
    console.log(catSansa);
    console.log(catTimmy, catTimmy.weight);
    console.log(catRicky);
