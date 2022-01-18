const personPrototypes = {
  greeting: function() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
};

const mary = Object.create(personPrototypes);

mary.firstName = "Mary";
mary.lastName = "Sue";
mary.age = "30";

mary.getsMarried("Thompson");

console.log(mary.greeting());

const brad = Object.create(personPrototypes, {
  firstName: { value: "Brad" },
  lastName: { value: "Smith" },
  age: { value: "32" }
});

console.log(brad);

console.log(brad.greeting());
