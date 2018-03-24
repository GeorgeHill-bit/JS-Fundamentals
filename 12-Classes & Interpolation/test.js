class Player {
    this.name = Name
    this.points = points
    }   
}

var kobe = Player('kobe', 85)
var jordan = new Name('jordan', 85)
console.log(kobe.points)
console.log(jordan.points)
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
    var sansa = new Cat('sansa', "30 pounds", true)
    var timmy = new Cat('sansa', "30 pounds", true)
    var ricky = new Cat('sansa', "30 pounds", true)
  
    console.log(sansa)
    console.log(timmy)
    console.log(ricky)