var main = new function(){
  var a = new function(){
    this.init = function(name){
      return new Person(name);
    }
    this.Person = Person;
  }
  this.a = a;
}

var b = main.a.init('b');

console.log(b instanceof main.a.Person);

class Person {
    constructor(name) {
        this.name = name;
    }
}