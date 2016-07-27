var attributes = {
  "constitution": 0,
  "strength": 0,
  "intelligence": 0,
  "charisma": 0,
  "refinement": 0,
  "morality": 0,
  "faith": 0,
  "sin": 0,
  "sensitivity": 0,
  "stress": 0,
  "combatSkill":0,
  "combatAttack": 0,
  "combatDefense": 0,
  "magicalSkill": 0,
  "magicalAttack": 0,
  "magicalDefense": 0,
  "decorum": 0,
  "art": 0,
  "conversation": 0,
  "cooking": 0,
  "cleaning": 0,
  "temperament": 0
};

var attributesDiv = document.getElementById('attributes');

for (var attribute in attributes){
  var attributeDiv = document.createElement('div');
  attributesDiv.appendChild(attributeDiv);
  var spanTitle = document.createElement('span');
  spanTitle.className = 'attrName';
  spanTitle.innerHTML = attribute;
  attributeDiv.appendChild(spanTitle);
  var spanNumber = document.createElement('span');
  spanNumber.className = 'attrValue';
  spanNumber.id = attribute + "Val";
  spanNumber.innerHTML = attributes[attribute];
  attributeDiv.appendChild(spanNumber);
  var meter = document.createElement('meter');
  meter.value = attributes[attribute];
  meter.id = attribute;
  meter.min = 0;
  meter.max = 1000;
  attributeDiv.appendChild(meter);
}
