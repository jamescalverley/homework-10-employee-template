// const fs = require("fs");

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
    name: "Richard Branson", 
    role: "Intern",
    email: "branson@gmail.com",
    school: "Harvard"
  }]


function renderCards(){
  const test = "test test test";
  console.log("[TEST]", test);
  let managerCard = '';
  teamData.forEach( result => {
    console.log(result)
    if( result.role == "Manager"){
      console.log(`[MANAGER] ${result.name}`)

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



      $('#main').html(managerCard);
    } if( result.role == "Engineer"){
      console.log(`[ENGINEER] ${result.name}`)
    } if( result.role == "Intern"){
      console.log(`[INTERN] ${result.name}`)
    }
  });
  
};



