var jobs = {
  "housework": {
    "payment": 0,
    "stress": 1
  },
  "babysitter": {
    "payment": 4,
    "stress": 3
  },
  "inn": {
    "payment": 8,
    "stress": 2
  },
  "farm": {
    "payment": 10,
    "stress": 3
  },
  "church": {
    "payment": 1,
    "stress": 1
  },
  "restaurant": {
    "payment": 8,
    "stress": 2
  },
  "lumberjack": {
    "payment": 12,
    "stress": 4
  },
  "salon": {
    "payment": 20,
    "stress": 3
  },
  "masonry": {
    "payment": 18,
    "stress": 3
  },
  "hunter": {
    "payment": 8,
    "stress": 3
  },
  "graveyard": {
    "payment": 8,
    "stress": 5
  },
  "tutor": {
    "payment": 20,
    "stress": 7
  },
  "bar": {
    "payment": 12,
    "stress": 5
  },
  "sleazyBar": {
    "payment": 45,
    "stress": 12
  },
  "cabaret": {
    "payment": 35,
    "stress": 8
  }
};

var lessons = {
  "dance": {
    "price": 50,
    "level": "novice",
    "classesTaken": 0
  },
  "fencing": {
    "price": 40,
    "level": "novice",
    "classesTaken": 0
  },
  "fighting": {
    "price": 30,
    "level": "novice",
    "classesTaken": 0
  },
  "magic": {
    "price": 60,
    "level": "novice",
    "classesTaken": 0
  },
  "painting": {
    "price": 40,
    "level": "novice",
    "classesTaken": 0
  },
  "poetry": {
    "price": 40,
    "level": "novice",
    "classesTaken": 0
  },
  "protocol": {
    "price": 40,
    "level": "novice",
    "classesTaken": 0
  },
  "science": {
    "price": 30,
    "level": "novice",
    "classesTaken": 0
  },
  "strategy": {
    "price": 50,
    "level": "novice",
    "classesTaken": 0
  },
  "theology": {
    "price": 40,
    "level": "novice",
    "classesTaken": 0
  }
};


function warClick(num){
  gold += num;

  updateGold();

  if (gold === 500){
    document.getElementById("beggining").className += "hidden";
    document.getElementById("questions").className = document.getElementById("questions").className.replace( /(?:^|\s)hidden(?!\S)/g , '' );
  }
}

//Update Gold on all divs.

function updateGold() {
  for (var i = 0; i < findGold.length; i++) {
    findGold[i].innerHTML = gold;
  }
}


function saveGame(){
  var save = {
    name: name,
    age: age,
    currentMonth: currentMonth,
    currentDay: currentDay,
    year: year,
    gold: gold
  }

  localStorage.setItem("save",JSON.stringify(save));
}


function jobClick(job){
  gold += jobs[job].payment;

  updateGold();

  stress.value += jobs[job].stress;
  document.getElementById('stressVal').innerHTML = stress.value;

  switch (job) {
    case "housework":
        cooking.value += 0.5;
        cleaning.value += 0.5;
        temperament.value += 0.5;
        sensitivity.value -= 2;

        scheduleAnimation("jobs", "housework");
        addIconToCalendar("jobs", "housework");
        break;
    case "babysitter":
        sensitivity.value += 1;
        charisma.value -= 1;

        scheduleAnimation("jobs", "babysitter");
        addIconToCalendar("jobs", "babysitter");
        break;
    case "inn":
        cleaning.value += 0.5;
        combatSkill.value -= 1;

        scheduleAnimation("jobs", "inn");
        addIconToCalendar("jobs", "inn");
        break;
    case "farm":
        constitution.value += 1;
        strength.value += 1;
        refinement.value -= 1;

        scheduleAnimation("jobs", "farm");
        addIconToCalendar("jobs", "farm");
        break;
    case "church":
        faith.value += 2;
        morality.value += 1;
        sin.value -= 2;

        scheduleAnimation("jobs", "church");
        addIconToCalendar("jobs", "church");
        break;
    case "restaurant":
        cooking.value += 0.5;
        combatSkill.value -= 0.5;

        scheduleAnimation("jobs", "restaurant");
        addIconToCalendar("jobs", "restaurant");
        break;
    case "lumberjack":
        strength.value += 2;
        refinement.value -= 2;

        scheduleAnimation("jobs", "lumberjack");
        addIconToCalendar("jobs", "lumberjack");
        break;
    case "salon":
        sensitivity.value += 1;
        strength.value -= 1;

        scheduleAnimation("jobs", "salon");
        addIconToCalendar("jobs", "salon");
        break;
    case "masonry":
        constitution.value += 2;
        charisma.value -= 2;

        scheduleAnimation("jobs", "masonry");
        addIconToCalendar("jobs", "masonry");
        break;
    case "hunter":
        constitution.value += 1;
        combatSkill.value += 0.5;
        refinement.value -= 1;
        sin.value += 0.5;

        scheduleAnimation("jobs", "hunter");
        addIconToCalendar("jobs", "hunter");
        break;
    case "graveyard":
        sensitivity.value += 1;
        magicalDefense.value += 0.5;
        charisma.value -= 1;

        scheduleAnimation("jobs", "graveyard");
        addIconToCalendar("jobs", "graveyard");
        break;
    case "tutor":
        morality.value += 1;
        charisma.value -= 1;

        scheduleAnimation("jobs", "tutor");
        addIconToCalendar("jobs", "tutor");
        break;
    case "bar":
        cooking.value += 0.5;
        conversation.value += 0.5;
        intelligence.value -= 2;

        scheduleAnimation("jobs", "bar");
        addIconToCalendar("jobs", "bar");
        break;
    case "sleazyBar":
        charisma.value += 2;
        faith.value -= 3;
        morality.value -= 3;
        temperament.value -= 0.5;
        sin.value += 2;

        scheduleAnimation("jobs", "sleazy-bar");
        addIconToCalendar("jobs", "sleazy-bar");
        break;
    case "cabaret":
        charisma.value =+ 3;
        refinement.value -= 2;
        intelligence.value -= 1;
        temperament.value -= 0.5;
        sin.value += 1;

        scheduleAnimation("jobs", "cabaret");
        addIconToCalendar("jobs", "cabaret");
  }

  currentDay += 1;
  checkBirthday();
  checkEndOfMonth();
  highlightCurrentDay();
  calculateReputations();
  updateAttributes();


  stressCheck(stress.value, constitution.value, morality.value, faith.value);

};

function lessonClick(topic){

  if (gold >= lessons[topic].price){
    gold -= lessons[topic].price;
    lessons[topic].classesTaken += 1;

    updateGold();

    scheduleAnimation("lessons", topic);
    addIconToCalendar("lessons", topic);

    switch (topic) {
      case "dance":
          constitution.value += 1;
          if (lessons[topic].level === "master"){
            charisma.value += 1.5;
            art.value += 2.5;
          }
          else if (lessons[topic].level === "expert"){
            charisma.value += 1;
            art.value += 1.5;
          }
          else if (lessons[topic].level === "adept"){
            charisma.value += 0.5;
            art.value += 1;
          }
          else {
            charisma.value += 0.5;
            art.value += 0.5;
          }

          break;
      case "fencing":
          combatSkill.value += 0.5;
          if (lessons[topic].level === "master"){
            combatAttack.value += 2;
          }
          else if (lessons[topic].level === "expert"){
            combatAttack.value += 2;
          }
          else if (lessons[topic].level === "adept"){
            combatAttack.value += 1.5;
          }
          else {
            combatAttack.value += 1;
          }

          break;
      case "fighting":

          if (lessons[topic].level === "master"){
            combatSkill.value += 3;
            combatDefense.value += 0.5;
          }
          else if (lessons[topic].level === "expert"){
            combatSkill.value += 2;
            combatDefense.value += 0.5;
          }
          else if (lessons[topic].level === "adept"){
            combatSkill.value += 1.5;
            combatDefense.value += 0.5;
          }
          else {
            combatSkill.value += 1;
          }

          break;
      case "magic":

          if (lessons[topic].level === "master"){
            magicalSkill.value += 3;
            magicalAttack.value += 2.5;
          }
          else if (lessons[topic].level === "expert"){
            magicalSkill.value += 2;
            magicalAttack.value += 2;
          }
          else if (lessons[topic].level === "adept"){
            magicalSkill.value += 1.5;
            magicalAttack.value += 1.5;
          }
          else {
            magicalSkill.value += 1;
            magicalAttack.value += 1;
          }

          break;
      case "painting":
          sensitivity.value += 0.5;

          if (lessons[topic].level === "master"){
            art.value += 3;
          }
          else if (lessons[topic].level === "expert"){
            art.value += 2;
          }
          else if (lessons[topic].level === "adept"){
            art.value += 1.5;
          }
          else {
            art.value += 1;
          }

          break;
      case "poetry":

          refinement.value += 0.5;
          art.value += 0.5;

          if (lessons[topic].level === "master"){
            sensitivity.value += 3.5;
            intelligence.value += 2;
          }
          else if (lessons[topic].level === "expert"){
            sensitivity.value += 2;
            intelligence.value += 1.5;
          }
          else if (lessons[topic].level === "adept"){
            sensitivity.value += 1.5;
            intelligence.value += 1;
          }
          else {
            sensitivity.value += 1;
            intelligence.value += 0.5;
          }

          break;

      case "protocol":

          if (lessons[topic].level === "master"){
            decorum.value += 2.5;
            refinement.value += 2.5;
          }
          else if (lessons[topic].level === "expert"){
            decorum.value += 2;
            refinement.value += 2;
          }
          else if (lessons[topic].level === "adept"){
            decorum.value += 1.5;
            refinement.value += 1.5;
          }
          else {
            decorum.value += 1;
            refinement.value += 1;
          }

          break;
      case "science":

          if (lessons[topic].level === "master"){
            intelligence.value += 8;
            faith.value -= 2;
            magicalDefense.value -= 0.5;
          }
          else if (lessons[topic].level === "expert"){
            intelligence.value += 6;
            faith.value -= 1;
            magicalDefense.value -= 0.5;
          }
          else if (lessons[topic].level === "adept"){
            intelligence.value += 4;
            faith.value -= 0.5;
            magicalDefense.value -= 0.5;
          }
          else {
            intelligence.value += 2;
          }

          break;
      case "strategy":

          combatSkill.value += 0.5;
          sensitivity.value -= 0.5;

          if (lessons[topic].level === "master"){
            intelligence.value += 4.5;
          }
          else if (lessons[topic].level === "expert"){
            intelligence.value += 3.5;
          }
          else if (lessons[topic].level === "adept"){
            intelligence.value += 2.5;
          }
          else {
            intelligence.value += 1.5;
          }

          break;
      case "theology":

          magicalDefense.value += 0.5;

          if (lessons[topic].level === "master"){
            intelligence.value += 2;
            faith.value += 3;
          }
          else if (lessons[topic].level === "expert"){
            intelligence.value += 1.5;
            faith.value += 2.5;
          }
          else if (lessons[topic].level === "adept"){
            intelligence.value += 1;
            faith.value += 2;
          }
          else {
            intelligence.value += 1;
            faith.value += 1.5;
          }

    }

    currentDay += 1;
    checkBirthday();
    checkEndOfMonth();
    highlightCurrentDay();
    calculateReputations();
    updateAttributes();
    stressCheck(stress.value, constitution.value, morality.value, faith.value);
    checkLessonLevel(topic);
  }
  else {
    console.log("No money!");
    fadeIn(notifications);
    notifications.innerHTML = "<p>You have no money!</p>";
    setTimeout(clearNotification, 2000);
  }

};

function clearNotification(){
  fadeOut(notifications);
}

function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

function fadeIn(el, display){
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

function createCalendar(){
  var getCalendar = document.getElementById('calendar');

  var currentDate = new Date(year, currentMonth, currentDay);

  var firstDay = new Date(year, currentMonth, 1);
  var startingDay = firstDay.getDay();
  var monthLenght = calDaysInMonths[currentMonth];
  var monthName = calMonthLabels[currentMonth];

  var html = '<table class="calendar">';
  html += '<thead><tr><th colspan="7">';
  html += year + "&nbsp;" + monthName;
  html += '</th></tr>';
  html += '<tr>';

  for (var i = 0; i <= 6; i++){
    if (i === 0){
      html += '<th><span style="color:red;">' + calDaysLabels[i] + '</span></th>';
    }
    else {
      html += '<th>' + calDaysLabels[i] + '</th>';
    }
  }

  html += '</tr></thead>';
  html += '<tbody><tr>';

  var day = 1;
  for (var i = 0; i < 9; i++){
    for (var j = 0; j <= 6; j++){

      if (day <= monthLenght && (i > 0 || j >= startingDay )){
        html += '<td id="day' + day + '">';
        html += day;
        day++;
        html += '</td>';
      } else {
        html += '<td></td>';
      }
    }
    if (day > monthLenght){
      break;
    } else {
      html += '</tr><tr>';
    }
  }
  html += '</tr></tbody></table>';

  getCalendar.innerHTML = html;
}

function checkEndOfMonth(){
    var currentDate = new Date(year, currentMonth, currentDay);
    var monthLenght = calDaysInMonths[currentMonth];

    if (currentDay > monthLenght){

      currentDay = 1;
      gold -= 30;
      updateGold();
      if (currentMonth === 11){
        currentMonth = 0;
        year += 1;
      } else {
        currentMonth += 1;
      }
      createCalendar();

      if (bloodType === "A" || bloodType === "AB"){
        stress.value += 2;
        updateAttributes();
      } else if (bloodType === "B"){
        stress.value -= 2;
        updateAttributes();
      }
    }

}

function checkBirthday(){
  if (currentDay === birthdayDay && currentMonth === birthMonth - 1){
    age += 1;
    document.getElementById("age").innerHTML = age;
    princessImg.src = "assets/img/princess/" + age + "/normal-princess.png";

    switch (age){
      case 11:
        addJob("lumberjack");
        addJob("salon");
        break;
      case 12:
        addJob("masonry");
        addJob("hunter");
        break;
      case 13:
        addJob("graveyard");
        break;
      case 14:
        addJob("bar");
        addJob("tutor");
        break;
      case 15:
        addJob("sleazyBar");
        break;
      case 16:
        addJob("cabaret");
    }
  }
}

function addJob(job){
    var jobsDiv = document.getElementById('jobs');

    var html = '<div id="' + job + '" class="button" onclick="jobClick('
    html += "' + job + '";
    html += ')">';
    html += '<img src="assets/img/jobs/' + job + '.png" />';
    html += '<span>' + job.charAt(0).toUpperCase() + job.slice(1) + '</span>';
    html += '</div>';

    jobsDiv.innerHTML += html;

}

function highlightCurrentDay(){
  var currentDayId = document.getElementById('day' + currentDay);
  var previousDayId = document.getElementById('day' + (currentDay - 1));
  currentDayId.style.color = "#FF0000";
  if ((currentDay - 1) !== 0){
      previousDayId.removeAttribute("style");
  }
}

function addIconToCalendar(type, icon){
  var currentDayId = document.getElementById('day' + currentDay);
  currentDayId.innerHTML = "<img src='assets/img/" + type + "/" + icon + ".png' />";
}

function scheduleAnimation(type, value){
  var animationContainer = document.getElementById("scenarioContainer");

  fadeIn(animationContainer, "inline-block");
  document.getElementById('scenario').style.backgroundImage = "url('assets/img/" + type + "/scenario/" + value + ".png')";
  document.getElementById('animSprite').style.backgroundImage = "url('assets/img/" + type + "/sprites/" + value + "/good-animation-01.png')";
  document.getElementById("animSprite").className += "spriteAnimation-" + value;

  setTimeout(clearAnimation, 3000);
}

function clearAnimation(){
  var animationContainer = document.getElementById("scenarioContainer");

  fadeOut(animationContainer);
  document.getElementById('scenario').removeAttribute("style");
  document.getElementById('animSprite').removeAttribute("style");
  document.getElementById("animSprite").className = "";
  //document.getElementById("jobScenarioContainer").className = document.getElementById("princess").className.replace( /(?:^|\s)talk-box(?!\S)/g , '' );
}

function updateAttributes(){
  document.getElementById('constitutionVal').innerHTML = constitution.value;
  document.getElementById('strengthVal').innerHTML = strength.value;
  document.getElementById('intelligenceVal').innerHTML = intelligence.value;
  document.getElementById('refinementVal').innerHTML = refinement.value;
  document.getElementById('charismaVal').innerHTML = charisma.value;
  document.getElementById('moralityVal').innerHTML = morality.value;
  document.getElementById('faithVal').innerHTML = faith.value;
  document.getElementById('sinVal').innerHTML = sin.value;
  document.getElementById('sensitivityVal').innerHTML = sensitivity.value;
  document.getElementById('stressVal').innerHTML = stress.value;

  document.getElementById('combatSkillVal').innerHTML = combatSkill.value;
  document.getElementById('combatAttackVal').innerHTML = combatAttack.value;
  document.getElementById('combatDefenseVal').innerHTML = combatDefense.value;
  document.getElementById('magicalSkillVal').innerHTML = magicalSkill.value;
  document.getElementById('magicalAttackVal').innerHTML = magicalAttack.value;
  document.getElementById('magicalDefenseVal').innerHTML = magicalDefense.value;

  document.getElementById('decorumVal').innerHTML = decorum.value;
  document.getElementById('artVal').innerHTML = art.value;
  document.getElementById('conversationVal').innerHTML = constitution.value;
  document.getElementById('cookingVal').innerHTML = cooking.value;
  document.getElementById('cleaningVal').innerHTML = cleaning.value;
  document.getElementById('temperamentVal').innerHTML = temperament.value;

  document.getElementById('fightingReputationVal').innerHTML = fightingReputation.value;
  document.getElementById('magicReputationVal').innerHTML = magicReputation.value;
  document.getElementById('socialReputationVal').innerHTML = socialReputation.value;
  document.getElementById('houseworkReputationVal').innerHTML = houseworkReputation.value;
}

function isSick(){
  if (stress.value > constitution.value){
    return true;
  }
    return false;
}

function isBedridden(){
  if(isSick() && stress.value - constitution.value >= 90){
    return true;
  }
    return false;
}

function isDeliquent(){
  var deliquencyDeterminant;

  if (morality.value > faith.value){
    deliquencyDeterminant = morality.value;
  } else {
    deliquencyDeterminant = faith.value;
  }

  if (stress.value > deliquencyDeterminant) {
    return true;
  }

  return false;

}

function calculateReputations(){
  fightingReputation.value = combatSkill.value + combatAttack.value + combatDefense.value;
  magicReputation.value = magicalSkill.value + magicalAttack.value + magicalDefense.value;
  socialReputation.value = decorum.value + conversation.value + art.value;
  houseworkReputation.value = cooking.value + cleaning.value + temperament.value;
}

function checkLessonLevel(topic){
    if(lessons[topic].level === "novice"){
      if(lessons[topic].classesTaken >= 60){
        lessons[topic].level = "adept";
        lessonPriceUpdate(topic,"adept");
        console.log("now she is adept!");
        lessons[topic].classesTaken = 0;
      }
    }
    else if(lessons[topic].level === "adept"){
      if(lessons[topic].classesTaken >= 50){
        lessons[topic].level = "expert";
        lessonPriceUpdate(topic,"expert");
        console.log("now she is expert!");
        lessons[topic].classesTaken = 0;
      }
    }
    else if (lessons[topic].level === "expert"){
      if(lessons[topic].classesTaken >= 50){
        lessons[topic].level = "master";
        lessonPriceUpdate(topic,"master");
        console.log("now she is master!");
        lessons[topic].classesTaken = 0;
      }
    }

}

function lessonPriceUpdate(topic,level){
  if(level = "adept"){
    switch (topic) {
      case "dance":
        lessons[topic].price = 70;
        break;
      case "fencing":
        lessons[topic].price = 70;
        break;
      case "fighting":
        lessons[topic].price = 40;
        break;
      case "magic":
        lessons[topic].price = 70;
        break;
      case "painting":
        lessons[topic].price = 50;
        break;
      case "poetry":
        lessons[topic].price = 60;
        break;
      case "protocol":
        lessons[topic].price = 50;
        break;
      case "science":
        lessons[topic].price = 40;
        break;
      case "strategy":
        lessons[topic].price = 70;
        break;
      case "theology":
        lessons[topic].price = 60;
        break;
    }
  }

  else if (level = "expert"){
    switch (topic) {
      case "dance":
        lessons[topic].price = 90;
        break;
      case "fencing":
        lessons[topic].price = 130;
        break;
      case "fighting":
        lessons[topic].price = 50;
        break;
      case "magic":
        lessons[topic].price = 80;
        break;
      case "painting":
        lessons[topic].price = 60;
        break;
      case "poetry":
        lessons[topic].price = 80;
        break;
      case "protocol":
        lessons[topic].price = 60;
        break;
      case "science":
        lessons[topic].price = 50;
        break;
      case "strategy":
        lessons[topic].price = 90;
        break;
      case "theology":
        lessons[topic].price = 80;
        break;

    }
  }

  else if (level = "master"){
    switch (topic) {
      case "dance":
        lessons[topic].price = 110;
        break;
      case "fencing":
        lessons[topic].price = 190;
        break;
      case "fighting":
        lessons[topic].price = 60;
        break;
      case "magic":
        lessons[topic].price = 90;
        break;
      case "painting":
        lessons[topic].price = 80;
        break;
      case "poetry":
        lessons[topic].price = 100;
        break;
      case "protocol":
        lessons[topic].price = 70;
        break;
      case "science":
        lessons[topic].price = 60;
        break;
      case "strategy":
        lessons[topic].price = 110;
        break;
      case "theology":
        lessons[topic].price = 100;
        break;

    }
  }
document.getElementById(topic + "Cost").innerHTML = lessons[topic].price + " G";
}

function stressCheck(){

  if (isDeliquent()){
    document.getElementById("deliquent").src = "assets/img/deliquent-icon.png";
    princessImg.src = "assets/img/princess/" + age + "/deliquent-princess.png";
  } else {
    document.getElementById("deliquent").src = "assets/img/empty-icon.png";
  }

  if (isSick()){
    document.getElementById("sick").src = "assets/img/sick-icon.png";
    princessImg.src = "assets/img/princess/" + age + "/sick-princess.png";
  } else {
    document.getElementById("sick").src = "assets/img/empty-icon.png";
  }

  if (isBedridden()){
    document.getElementById('room').style.backgroundImage = "url('assets/img/princess/bedridden-princess.png')";
    princessImg.src = "";
  } else {
    document.getElementById('room').style.backgroundImage = "url('assets/img/room.png')";

  }

  if (!isSick() && !isBedridden() && !isDeliquent()){
    princessImg.src = "assets/img/princess/" + age + "/normal-princess.png";
  }
}

function reduceStress(activity){
  switch (activity) {
    case "freeTime":
      stress.value -= 5;

      scheduleAnimation("jobs", "housework");
      addIconToCalendar("rest", "freeTime");
      break;
    case "vacation":
      gold -= 100;
      updateGold();
      stress.value -= 50;

      scheduleAnimation("jobs", "housework");
      addIconToCalendar("rest", "vacation");
  }

  currentDay += 1;
  checkBirthday();
  checkEndOfMonth();
  highlightCurrentDay();
  document.getElementById('stressVal').innerHTML = stress.value;

  stressCheck(stress.value, constitution.value, morality.value, faith.value);
}
