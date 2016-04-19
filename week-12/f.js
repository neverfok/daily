var Human = function(age, alive) {
  this.age   = age;
  this.alive = alive;
}

Human.prototype.birthday = function() {
  this.age += 1;
}

Human.prototype = {
  birthday: function() {
    this.age += 101;
  }
}

var human = new Human(45, true);
console.log(human.age);
human.birthday();
console.log(human.age);
console.log(human.__proto__);
console.log(human.constructor.toString());
