// complete this js code
// function Person(name, age) {}

// function Employee(name, age, jobTitle) {}

class Person{
    constructor(name,age){
        this.name = name;
        this.age = parseInt(age);
    }
    greet(){
		let message1 = `Hello, my name is ${this.name}, and I am ${this.age} years old`
		let mess2 = "."
        console.log(message1+mess2);
    }
    
}

//Creating an Employee Class:

class Employee extends Person{
    constructor(name,age,jobTitle){
        super(name,age);
        this.jobTitle = jobTitle;
    }

    jobGreet(){        
        console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
    }
}

//Example Test Case:

let Alice = new Person ('Alice',25);
Alice.greet();

// instance of the Employee class with the name "Bob", age 30, and job title "Manager", and call the jobGreet 

let Bob = new Employee('Bob',30,'Manager');
Bob.jobGreet();

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
