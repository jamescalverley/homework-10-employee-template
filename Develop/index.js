const fs = require("fs");

//! TODO
//? add hyperlinks to cards
//? only have renderCards [] run once and not save cards past that
//? issue with the way that engineer card is being rendered ????
//* sort cards in 3 piles: manager: {}, engineer: [{}-], intern: [{}-]
//* then render cards for pile with the specifc needed card
//? put all employee data, card, lists into one {}

window.onload = function() {
  console.log( "page loaded ==========" );
  
  renderCards();
};

const teamData = [
  {
    id: 1,
    name: "Elon Musk",
    role: "Manager",
    email: "elon@gmail.com",
    officeNumber: "234"
  },
  {
    id:2,
    name: "Barrack Obama",
    role: "Engineer",
    email: "barrack@obama.com",
    gitHub: "obama44"
  },
  {
    id:3,
    name: "Mike Babcock",
    role: "Engineer",
    email: "babs@gmail.com",
    gitHub: "babbycock"
  },
  {
    id:4,
    name: "Richard Branson", 
    role: "Intern",
    email: "branson@gmail.com",
    school: "Harvard"
  },
  {
    id:5,
    name: "Kyle Dubas", 
    role: "Intern",
    email: "dubbie@gmail.com",
    school: "UofT"
  }
];

let manager = {
  managerData: [],
  managerCard: '', 
  managerList: []
};

let engineer = {
  engineerData: [],
  engineerCard: '',
  engineerList: []
};

let intern = {
  internData: [],
  internCard: '',
  internList: []
};

function renderCards(){
  console.log(teamData)

  teamData.forEach( result => {
    if( result.role == 'Manager'){
      manager.managerData.push(result);
    } if( result.role == 'Engineer'){
      engineer.engineerData.push(result);
    } if( result.role == 'Intern'){
      intern.internData.push(result)
    };
  })

  console.log('[MANAGER DATA]', manager.managerData)
  console.log('[ENGINEER DATA]', engineer.engineerData)
  console.log('[INTERN DATA]', intern.internData)

  manager.managerData.forEach(result => {
    manager.managerCard += `
      <div class="card" id="managerCard" style="width: 18rem;">
        <div class="card-header">
            <h4 class="name">${result.name}</h4>
            <h5 class="title">Manager</h5>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item id">ID: ${result.id}</li>
            <li class="list-group-item email">Email: ${result.email}</li>
            <li class="list-group-item officeNum">Office Number: ${result.officeNumber}</li>
          </ul>
        </div>
      </div>`

      manager.managerList.push(manager.managerCard);
  });
  
    console.log('[MANAGER LIST]', manager.managerList)
    document.getElementById('main').innerHTML += manager.managerList;

  engineer.engineerData.forEach( result => {
    engineer.engineerCard += `
      <div class="card" id="engineerCard" style="width: 18rem;">
      <div class="card-header">
          <h4 class="name">${result.name}</h4>
          <h5 class="title">Engineer</h5>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item id">ID: ${result.id}</li>
          <li class="list-group-item email">Email: ${result.email}</li>
          <li class="list-group-item github">Git Hub: ${result.gitHub}</li>
        </ul>
      </div>
    </div>`
    engineer.engineerList.push(engineer.engineerCard);
  });
    //handles bug of duplicate cards of the first element in array
    engineer.engineerList.splice(0,1)
    console.log('[ENGINEER LIST]', engineer.engineerList)
    document.getElementById('main').innerHTML += engineer.engineerList;

    intern.internData.forEach(result => {
      intern.internCard += ` 
      <div class="card" id="internCard" style="width: 18rem;">
        <div class="card-header">
            <h4 class="name">${result.name}</h4>
            <h5 class="title">Intern</h5>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item id">ID: ${result.id}</li>
            <li class="list-group-item email">Email: ${result.email}</li>
            <li class="list-group-item school">School: ${result.school}</li>
          </ul>
        </div>
      </div>`

      intern.internList.push(intern.internCard);
    });
    //handles bug of duplicate cards of the first element in array
      intern.internList.splice(0,1)
      console.log('[INTERN LIST]', intern.internList)
      document.getElementById('main').innerHTML += intern.internList;
      

      






  
};




