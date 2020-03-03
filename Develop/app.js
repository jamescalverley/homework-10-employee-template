
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
                message: "MANAGER - What is the employee's name?",
                type: 'input'
            },
            {
                name: 'email',
                message: "MANAGER - What is the employee's email address?",
                type: 'input'
            },
            {
                name: 'officeNumber',
                message: "MANAGER - What is the employee's office number?",
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

async function mainFn(){
    await getManagerInfo();

    const response = await inquirer.prompt([
        {
            name: 'employeeType',
            message: "What type of employee would you like to add to the team?",
            type: 'list',
            choices: ['Engineer', 'Intern']
        }
    ]);

    let employeeType = response.employeeType;
    console.log("You picked", employeeType)

    if( employeeType == "Intern"){
        console.log("INTERN Fn");
    } if( employeeType == "Engineer"){
        console.log("ENGINEER Fn")
    };

    await getEngineerInfo();
    await getInternInfo();
};

//! NEXT STEPS  >>> if(engineer), prompt "how many to add?", then run getEngineerInfo function that many times
//! prompt at the end if they want to add any more or if they are finished

mainFn();



//* TESTING ====================
// let employeeOne = new Employee ('Joe', 'CEO', 'joe@gmail.com');
// console.log("Employee 1:", employeeOne);

// let engineerOne = new Engineer ('Daniel', 'daniel@gmail.com', 'githubUserName');
// console.log("Engineer 1:", engineerOne);

// let internOne = new Intern ('Chris', 'chris@gmail.com', 'UofT');
// console.log("Intern 1:", internOne);

//* TESTING >>> Writing to class ===============

class Test {
    constructor( name, location ){
        this.name = name;
        this.location = location;
    }

};
  
async function getUserInfo(){
    while (1){
        const response = await inquirer.prompt([
            {
                name: "name",
                message: "What is your name?",
                type: "input"

            },
            {
                name: "location",
                message: "What is your location?",
                type: "input"
            }

        ])

        let user = new Test ( response.name, response.location);
        console.log(user);
        console.log(user.name, "lives in", user.location);
        employeeList.push(user);
        console.log("Employee List:", employeeList)
    }
};

//! testing
//getUserInfo();
  

//* PROMPTS ====================
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

//! >>>>>>>> not calling main()
// main();

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
// async function getEmail(){
//     await inquirer.prompt([
//         {
//             name: "email",
//             message: "What is the employee's email address?",
//             type: "input"
//         }
//     ])
// }

// class Employee {
//     constructor( role, name, email){
//         this.id = ID++;
//         this.role = role;
//         this.name = name;
//         this.email = email;
//     }
//         login(){
//             console.log(this.name, "just logged in")
//         }

// };

// //? for number of employees needed, run:

// let employee = new Employee ("VP", "Barry", "barry@gmail.com");

// employee.login();



