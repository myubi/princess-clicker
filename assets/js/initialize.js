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

var jobs = {
  "housework": 0,
  "babysitter": 4,
  "farm": 10,
  "church": 1,
  "inn": 8,
  "restaurant": 8
};

var lessons = {
  "dance": 50,
  "fencing": 40,
  "fighting": 30,
  "magic": 60,
  "painting": 40,
  "poetry": 40,
  "protocol": 40,
  "science": 30,
  "strategy": 50,
  "theology": 40
};

var attributesDiv = document.getElementById('attributes');

for (var attribute in attributes){
  var attributeDiv = document.createElement('div');
  attributesDiv.appendChild(attributeDiv);
  var spanTitle = document.createElement('span');
  spanTitle.className = 'attrName';
  spanTitle.innerHTML = attribute.charAt(0).toUpperCase() + attribute.slice(1);;
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

var jobsDiv = document.getElementById('jobs');

for (var job in jobs){
  var jobDiv = document.createElement('div');
  jobDiv.id = job;
  jobDiv.className = "button";
  jobDiv.setAttribute("onclick", "jobClick('" + job + "')");
  jobsDiv.appendChild(jobDiv);
  var jobIcon = document.createElement('img');
  jobIcon.src = "assets/img/jobs/" + job + ".png";
  jobDiv.appendChild(jobIcon);
  var jobTitle = document.createElement('span');
  jobTitle.innerHTML = job.charAt(0).toUpperCase() + job.slice(1);
  jobDiv.appendChild(jobTitle);
  var jobPrice = document.createElement('span');
  jobPrice.id = job + "Price";
  jobPrice.innerHTML = jobs[job] + " G";
  jobDiv.appendChild(jobPrice);
}

var lessonsDiv = document.getElementById('lessons');

for (var lesson in lessons){
  var lessonDiv = document.createElement('div');
  lessonDiv.id = lesson;
  lessonDiv.className = "button";
  lessonDiv.setAttribute("onclick", "lessonClick('" + lesson + "')");
  lessonsDiv.appendChild(lessonDiv);
  var lessonIcon = document.createElement('img');
  lessonIcon.src = "assets/img/lessons/" + lesson + ".png";
  lessonDiv.appendChild(lessonIcon);
  var lessonTitle = document.createElement('span');
  lessonTitle.innerHTML = lesson.charAt(0).toUpperCase() + lesson.slice(1);
  lessonDiv.appendChild(lessonTitle);
  var lessonPrice = document.createElement('span');
  lessonPrice.id = lesson + "Cost";
  lessonPrice.innerHTML = lessons[lesson] + " G";
  lessonDiv.appendChild(lessonPrice);
}
