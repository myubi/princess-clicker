var gold = 0;
var name = prompt("Please enter your daugther name", "Olive");

document.getElementById("name").innerHTML = name;

function jobClick(num){
  gold += num;
  document.getElementById("gold").innerHTML = gold;
};
