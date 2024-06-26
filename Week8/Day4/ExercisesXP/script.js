/*
Exercise 1 : Analyzing
Instructions
Analyze these pieces of code before executing them. What will be the outputs ?
------1------*/
//answer: ['bread, 'carrot', 'potato', 'chicken', 'apple', 'orange']
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

//------2------
//answer: ['U', 'S', 'A']
const country = "USA";
console.log([...country]);


//------Bonus------
//answer: [undefined, undefined]
let newArray = [...[,,]];
console.log(newArray);

/*
🌟 Exercise 2 : Employees
Instructions
Using this array:*/

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
/*Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]*/
const welcomeStudents = users.map(item => {
    return `Hello ${item.firstName}`
})
console.log(welcomeStudents);

/*
2. Using the filter() method, create a new array, containing only the Full Stack Residents.*/

const fullstackStudents = users.filter(item => item.role === 'Full Stack Resident')
console.log(fullstackStudents);

/*
3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.*/

const lastName = users
.filter(item => item.role === 'Full Stack Resident')
.map(item =>item.lastName)
console.log(lastName);

/*
🌟 Exercise 3 : Star Wars
Instructions
Using this array const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

Use the reduce() method to combine all of these into a single string.*/
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
