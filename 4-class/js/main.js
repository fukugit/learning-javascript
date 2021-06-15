class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log(this.name + " " +this.age);
  }
}

class Japanese extends Person {
  constructor(name, age, gender) {
    super(name, age);
    this.gender = gender;
  }
  bye() {
    console.log("bye " + this.name)
  }
}
const japanese = new Japanese("Mike", 23, "man");
japanese.bye();