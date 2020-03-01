
// * create classes for each employee type
// * ask questions with inquier
// * use the answers from inquier to assign to the classes
// * create html templates with bootstrap cards
// * add new cards to html pages for each employee added
// * use ul and li for the information in the employee cards
// * to add everything to index.html >>> at {{team}} element and then pass all cards into teamObj that will pass in the html to add to the index.html page
// ? use map function on array >> have an array of objects >>> each object is an employee >>>> go through the array and forEach object, join to template
// ? look at hot restaurant exercise for how to add dynamically add content to html section
// ! TDD is a bonus but not necessary
 

// ---------------------------

const inquirer = require("inquirer");


let ID = 1;

class Employee {
    constructor( role, name, email){
        this.id = ID++;
        this.role = role;
        this.name = name;
        this.email = email;
    }
};

class Manager extends Employee {
    constructor( name, email, officeNumber){
        super('Manager', name, email);
        this.officeNumber = officeNumber;
        this.directReports = []; //! is this needed??
    }
};
class Engineer {};
class Intern {};


let employeeOne = new Employee ('CEO', 'Joe', 'joe@gmail.com');

console.log(Employee);
console.log("This is all the info:", employeeOne);

async function main(){

    const response = await inquirer.prompt([
        {
            name: "teamNum",
            message: "How many employees are on your team?",
            type: "input"
        }
    ]);

    let teamMembers = response.teamNum;
    console.log("team members:", teamMembers)

    let num = 0;

    while( num < teamMembers){
        const resEmployee = await inquirer.prompt([
            {
                name: "name",
                message: "What is the employee's name?",
                type: "input"
            }
        ])

        console.log("Name entered:", resEmployee.name);
        employeeOne.name = resEmployee.name;

        console.log("Changed employeeOne to:", employeeOne.name);
        console.log("changed info:", employeeOne);
        num++;

    }

}

main();

//! NEXT STEPS: 
// add new employees to an array
// create new employees based on template
// write team to a JSON file

//? when prompted ask what type of employee they want to add>> Manager, Engineer, Intern. Can only add one Manager so

// while( new Manager.role = ""){
    //prompt (Manager, Engineer, Intern)
//} else {
    // prompt (Engineer, Intern )
//}

// ? create new class with function to get the info using inquirer>>>

//! not sure if this will work
async function getEmail(){
    await inquirer.prompt([
        {
            name: "email",
            message: "What is the employee's email address?",
            type: "input"
        }
    ])
}

class Employee {
    constructor( role, name, email){
        this.id = ID++;
        this.role = role;
        this.name = name;
        this.email = email;
    }
        login(){
            console.log(this.name, "just logged in")
        }

};

//? for number of employees needed, run:

let employee = new Employee ("VP", "Barry", "barry@gmail.com");

employee.login();



