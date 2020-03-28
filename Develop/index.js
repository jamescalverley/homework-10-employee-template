// const fs = require("fs");

//! TODO
//? add hyperlinks to cards
//? only have renderCards [] run once and not save cards past that
//? issue with the way that engineer card is being rendered ????
//* sort cards in 3 piles: manager: {}, engineer: [{}-], intern: [{}-]
//* then render cards for pile with the specifc needed card
//? put all employee data, card, lists into one {}

window.onload = function() {
  console.log( "page loaded ==========" );
  //renderCards();
  sortCards();
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

let managerData = [];
let engineerData = [];
let internData = [];

let managerCard = '';
let engineerCard = '';
let internCard = '';

let managerList = [];
let engineerList = [];
let internList = [];

let renderList = [];

function sortCards(){
  console.log(teamData)

  teamData.forEach( result => {
    if( result.role == 'Manager'){
      managerData.push(result);
    } if( result.role == 'Engineer'){
      engineerData.push(result);
    } if( result.role == 'Intern'){
      internData.push(result)
    };
  })

  console.log('[MANAGER DATA]', managerData)
  console.log('[ENGINEER DATA]', engineerData)
  console.log('[INTERN DATA]', internData)

  managerData.forEach(result => {
    managerCard += `
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

      managerList.push(managerCard);
  });
  
    console.log('[MANAGER LIST]', managerList)
    document.getElementById('main').innerHTML += managerList;

  engineerData.forEach( result => {
    engineerCard += `
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
    engineerList.push(engineerCard);
  });
    //handles bug of duplicate cards of the first element in array
    engineerList.splice(0,1)
    console.log('[ENGINEER LIST]', engineerList)
    document.getElementById('main').innerHTML += engineerList;

    internData.forEach(result => {
      internCard += ` 
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

      internList.push(internCard);
    });
    //handles bug of duplicate cards of the first element in array
      internList.splice(0,1)
      console.log('[INTERN LIST]', internList)
      document.getElementById('main').innerHTML += internList;
      

      






  
};




// function renderCards(){
//   let renderCards = [];
//   let managerCard = '';
//   let engineerCard = '';
//   let internCard = '';
//   teamData.forEach( result => {
//     console.log(result)
//     if( result.role == "Manager"){
//       console.log(`[MANAGER] ${result.name}`)
//       managerCard += `
//       <div class="card" id="managerCard" style="width: 18rem;">
//         <div class="card-header">
//             <h4 class="name">${result.name}</h4>
//             <h5 class="title">Manager</h5>
//         </div>
//         <div class="card-body">
//           <ul class="list-group list-group-flush">
//             <li class="list-group-item id">ID: ${result.id}</li>
//             <li class="list-group-item email">Email: ${result.email}</li>
//             <li class="list-group-item officeNum">Office Number: ${result.officeNumber}</li>
//           </ul>
//         </div>
//       </div>`
//       renderCards.push(managerCard);
//     } if( result.role == "Engineer"){
//       console.log(`[ENGINEER] ${result.name}`)
//       engineerCard += `
//       <div class="card" id="engineerCard" style="width: 18rem;">
//       <div class="card-header">
//           <h4 class="name">${result.name}</h4>
//           <h5 class="title">Engineer</h5>
//       </div>
//       <div class="card-body">
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item id">ID: ${result.id}</li>
//           <li class="list-group-item email">Email: ${result.email}</li>
//           <li class="list-group-item github">Git Hub: ${result.gitHub}</li>
//         </ul>
//       </div>
//     </div>`
    
//     renderCards.push(engineerCard)
//     } if( result.role == "Intern"){
//       console.log(`[INTERN] ${result.name}`)
 
//       internCard += ` 
//       <div class="card" id="internCard" style="width: 18rem;">
//         <div class="card-header">
//             <h4 class="name">${result.name}</h4>
//             <h5 class="title">Intern</h5>
//         </div>
//         <div class="card-body">
//           <ul class="list-group list-group-flush">
//             <li class="list-group-item id">ID: ${result.id}</li>
//             <li class="list-group-item email">Email: ${result.email}</li>
//             <li class="list-group-item school">School: ${result.school}</li>
//           </ul>
//         </div>
//       </div>`
//       renderCards.push(internCard);
//     }
    
//   });
//   console.log("[renderCards]", renderCards)
//   $('#main').html(renderCards);

// };



