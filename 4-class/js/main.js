class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    console.log(this.name + " " +this.age);
  }
}

const person = new Person("Mike", 23);
person.hello();