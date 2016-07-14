var gold = 0;
var age = 10;
var name;
var birthday;
var bloodType;

function jobClick(num){
  gold += num;
  var findGold = document.getElementsByClassName("gold");
  for (var i = 0; i < findGold.length; i++) {
    findGold[i].innerHTML = gold;
  }
  if (gold === 500){
    document.getElementById("beggining").className += "hidden";
    document.getElementById("questions").className = document.getElementById("questions").className.replace( /(?:^|\s)hidden(?!\S)/g , '' );
  }
};

function startGame(){

   name = document.forms["initialSetup"]["name"].value;
   birthday = document.forms["initialSetup"]["birthday"].value;
   bloodType = document.forms["initialSetup"]["bloodType"].value;

   document.getElementById("name").innerHTML = name;
   document.getElementById("birthday").innerHTML = birthday;

  document.getElementById("questions").className += "hidden";

  document.getElementById("princess").className = document.getElementById("princess").className.replace( /(?:^|\s)hidden(?!\S)/g , '' );
  document.getElementById("attributes").className = document.getElementById("attributes").className.replace( /(?:^|\s)hidden(?!\S)/g , '' );
  document.getElementById("jobsandlessons").className = document.getElementById("jobsandlessons").className.replace( /(?:^|\s)hidden(?!\S)/g , '' );

  event.preventDefault();
};
