var gold = 0;
var age = 10;
var name;
var birthday;
var birthmonth;
var birthyear = 1200;
var bloodType;

var starSigns =  {
  aries = [80,109],
  taurus = [110,140],
  gemini = [141,172],
  cancer = [173,203],
  leo = [204,234],
  virgo = [235,265],
  libra = [266,295],
  scorpio = [295,325],
  sagittarius = [325,355],
  capricorn = [356,19],
  aquarius = [20,49],
  pisces = [50,79]

};

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
   birthmonth = document.forms["initialSetup"]["birthmonth"].value;
   bloodType = document.forms["initialSetup"]["bloodType"].value;

   document.getElementById("name").innerHTML = name;
   document.getElementById("birthday").innerHTML = birthday;

  document.getElementById("questions").className += "hidden";

  document.getElementById("princess").className = document.getElementById("princess").className.replace( /(?:^|\s)hidden(?!\S)/g , '' );
  document.getElementById("attributes").className = document.getElementById("attributes").className.replace( /(?:^|\s)hidden(?!\S)/g , '' );
  document.getElementById("jobsandlessons").className = document.getElementById("jobsandlessons").className.replace( /(?:^|\s)hidden(?!\S)/g , '' );

  event.preventDefault();
};
