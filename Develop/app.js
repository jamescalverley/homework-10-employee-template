
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
//! look at Handlebars activity for adding content to html templates

 

// ---------------------------

const inquirer = require("inquirer");

let ID = 1;
let employeeList = [];


//* CLASSES ====================
class Employee {
    constructor( name, role, email ){
        this.id = ID++;
        this.name = name;
        this.role = role;
        this.email = email;
    }
};

class Manager extends Employee {
    constructor( name, email, officeNumber ){
        super(name, 'Manager', email);
        this.officeNumber = officeNumber;
    }
};

class Engineer extends Employee {
    constructor( name, email, gitHub ){
        super( name, 'Engineer', email )
        this.gitHub = gitHub;
    }
};

class Intern extends Employee {
    constructor ( name, email, school ){
        super( name, 'Intern', email )
        this.school = school;
    }
};


//* FUNCTIONS FOR GETTING INFO ==================
//? need to add in loop that takes the required number of employees and runs the loop that many times

async function getManagerInfo( runTimes ){
    let num = 0;
    while( num < runTimes){
        const resp = await inquirer.prompt([
            {
                name: 'name',
                message: "MANAGER - What is the manager's name?",
                type: 'input'
            },
            {
                name: 'email',
                message: "MANAGER - What is the manager's email address?",
                type: 'input'
            },
            {
                name: 'officeNumber',
                message: "MANAGER - What is the manager's office number?",
                type: 'input'
            },
        ]);
        num++
        let newManager = new Manager ( resp.name, resp.email, resp.officeNumber );
        employeeList.push(newManager);

        console.log("Employee List", employeeList)
    };
};


async function getEngineerInfo( runTimes ){
    let num = 0;
    while( num < runTimes){
        const resp = await inquirer.prompt([
            {
                name: 'name',
                message: "ENGINEER - What is the employee's name?",
                type: 'input'
            },
            {
                name: 'email',
                message: "ENGINEER - What is the employee's email address?",
                type: 'input'
            },
            {
                name: 'gitHub',
                message: "ENGINEER - What is the employee's gitHub profile?",
                type: 'input'
            },
        ]);
        num++
        let newEngineer = new Engineer ( resp.name, resp.email, resp.gitHub );
        employeeList.push(newEngineer);

        console.log("Employee List", employeeList)
    };
};

async function getInternInfo( runTimes ){
    let num = 0;
    while( num < runTimes){
        const resp = await inquirer.prompt([
            {
                name: 'name',
                message: "INTERN - What is the employee's name?",
                type: 'input'
            },
            {
                name: 'email',
                message: "INTERN - What is the employee's email address?",
                type: 'input'
            },
            {
                name: 'school',
                message: "INTERN - What school did the employee attend?",
                type: 'input'
            },
        ]);
        num++
        let newIntern = new Intern ( resp.name, resp.email, resp.school );
        employeeList.push(newIntern);

        console.log("Employee List", employeeList)
    };
};


async function addEmployees(){
    const response = await inquirer.prompt([
        {
            name: 'employeeType',
            message: "What type of employee would you like to add to the team?",
            type: 'list',
            choices: ['Engineer', 'Intern', '---FINISH---']
        }
    ]);

    let employeeType = response.employeeType;
    if(response.employeeType == "FINISH"){
        process.exit(0);
    };

    if( employeeType == "Engineer"){
        let response = await inquirer.prompt([
            {
                name: "numEngineers",
                message: "How many engineers would you like to add?",
                type: "input"
            }
        ]);

        let numEngineers = response.numEngineers;
        console.log("Number of Engineers to add:",numEngineers);
        await getEngineerInfo( numEngineers );
        await addEmployees();

    };
    if( employeeType == "Intern"){
        let response = await inquirer.prompt([
            {
                name: "numInterns",
                message: "How many interns would you like to add?",
                type: "input"
            }
        ]);

        let numInterns = response.numInterns;
        console.log("Number of Interns to add:", numInterns);
        await getInternInfo( numInterns );
        await addEmployees();
    } 
};

async function mainFn(){
    await getManagerInfo(1);
    await addEmployees();

       
    

};

//! prompt at the end if they want to add any more or if they are finished


mainFn();





  

//! NEXT STEPS: 
// add new employees to an array
// create new employees based on template
// write team to a JSON file



