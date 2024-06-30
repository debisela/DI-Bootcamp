/*
🌟 Exercise 1 : Location
Instructions
Analyze the code below. What will be the output?*/
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
//answer: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

/*
🌟 Exercise 2: Display Student Info
Instructions
function displayStudentInfo(objUser){
    //destructuring
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});


Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'*/

function displayStudentInfo(objUser){
    const {first, last} = objUser;
    console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

/*
🌟 Exercise 3: User & Id
Instructions
Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

Using methods taught in class, turn the users object into an array:
Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
FYI : The number is their ID number.



Modify the outcome of part 1, by multipling the user’s ID by 2.
Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]*/
const users = { user1: 18273, user2: 92833, user3: 90315 }
const arrUsers = Object.entries(users);
console.log(arrUsers);

let modifiedArrUsers = arrUsers.map(item => {
    return [item[0], (item[1] * 2)];
});
console.log(modifiedArrUsers);

/*
Exercise 4 : Person Class
Instructions
Analyze the code below. What will be the output?*/
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
//answer: object, because when we create an instance of a class it gives an object

/*
🌟 Exercise 5 : Dog Class
Instructions
Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
};
Analyze the options below. Which constructor will successfully extend the Dog class?
  // 1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size;
  }
};*/


  // 2: only this option will work, because we need the constructor from the parent class (name) and can add an addditional property (size) and then need to call the super from the parent class
/*class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};*/


 /* // 3
class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};


  // 4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
};*/

/*
🌟 Exercise 6 : Challenges
Evaluate these (ie True or False)*/

//[2] === [2]
//False, since we are comparing two arrays, which do not point to the same array(object) in the memory
//{} === {}
//False, same as with array, see above


//What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)//4 -> since we changed object1 and object2 points to same space in memory
console.log(object3.number)//4 -> same as above
console.log(object4.number)//5


/*Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
For example: Moooo I'm a cow, named Lily and I'm brown and white*/

class Animal {
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color
    }
}

class Mamal extends Animal {
    constructor(name, type, color,noise){
        super(name, type, color);
        this.noise = noise;
    }
    sound(){
        console.log(`this ${this.type} is called ${this.name}, makes a sound like this ${this.noise} and has the color ${this.color} `);
    }
}

let farmerCow = new Mamal('Pretzel','Cow','Black and White','Muuuh')
farmerCow.sound();

