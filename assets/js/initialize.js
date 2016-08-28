var gold = 0;
var age = 10;
var name;
var birthday;
var birthMonth;
var birthdayDay;
var year = 1210;
var month;
var bloodType;
var starSign;
var princessImg = document.getElementById('princessImg');

var calDaysLabels = ['sun','mon','tue','wed','thu','fri','sat'];
var calMonthLabels = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var calDaysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var currentDay;
var currentMonth;

var notifications = document.getElementById('notifications');

var findGold = document.getElementsByClassName("gold");

var starSigns =  [
  ["Aries", 321, 419],
  ["Taurus", 420,520],
  ["Gemini", 521,621],
  ["Cancer", 622,722],
  ["Leo", 723,822],
  ["Virgo", 823,922],
  ["Libra", 923,1022],
  ["Scorpio", 1023,1121],
  ["Sagittarius", 1122,1221],
  ["Capricorn", 1222,119],
  ["Aquarius", 120,218],
  ["Pisces", 219, 320]

];

//attributes

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
  "fightingReputation": 0,
  "magicalSkill": 0,
  "magicalAttack": 0,
  "magicalDefense": 0,
  "magicReputation": 0,
  "decorum": 0,
  "art": 0,
  "conversation": 0,
  "cooking": 0,
  "cleaning": 0,
  "temperament": 0,
  "socialReputation": 0,
  "houseworkReputation": 0
};

var initJobs = {
  "housework": 0,
  "babysitter": 4,
  "farm": 10,
  "church": 1,
  "inn": 8,
  "restaurant": 8
};

var initLessons = {
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

//var attributesDiv = document.getElementById('attributes');
var attrSet1Div = document.getElementById('attrSet1');
var attrSet2Div = document.getElementById('attrSet2');
var attrSet3Div = document.getElementById('attrSet3');
var count = 0;

for (var attribute in attributes){

    var attributeDiv = document.createElement('div');

    if (count < 10){
        attrSet1Div.appendChild(attributeDiv);
    } else if(count < 18){
        attrSet2Div.appendChild(attributeDiv);
    } else {
        attrSet3Div.appendChild(attributeDiv);
    }

  var spanTitle = document.createElement('span');
  spanTitle.className = 'attrName';
  uppercaseTittle = attribute.replace(/([A-Z])/g, ' $1').trim();
  spanTitle.innerHTML = uppercaseTittle.charAt(0).toUpperCase() + uppercaseTittle.slice(1);;
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
  count += 1;

}



var jobsDiv = document.getElementById('jobs');

for (var job in initJobs){
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
  jobPrice.innerHTML = initJobs[job] + " G";
  jobDiv.appendChild(jobPrice);
}

var lessonsDiv = document.getElementById('lessons');

for (var lesson in initLessons){
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
  lessonPrice.innerHTML = initLessons[lesson] + " G";
  lessonDiv.appendChild(lessonPrice);
}

var constitution = document.getElementById('constitution');
var strength = document.getElementById('strength');
var intelligence = document.getElementById('intelligence');
var refinement = document.getElementById('refinement');
var charisma = document.getElementById('charisma');
var morality = document.getElementById('morality');
var faith = document.getElementById('faith');
var sin = document.getElementById('sin');
var sensitivity = document.getElementById('sensitivity');
var stress = document.getElementById('stress');

var combatSkill = document.getElementById('combatSkill');
var combatAttack = document.getElementById('combatAttack');
var combatDefense = document.getElementById('combatDefense');
var magicalSkill = document.getElementById('magicalSkill');
var magicalAttack = document.getElementById('magicalAttack');
var magicalDefense = document.getElementById('magicalDefense');

var decorum = document.getElementById('decorum');
var art = document.getElementById('art');
var conversation = document.getElementById('conversation');
var cooking = document.getElementById('cooking');
var cleaning = document.getElementById('cleaning');
var temperament =  document.getElementById('temperament');

var fightingReputation = document.getElementById('fightingReputation');
var magicReputation = document.getElementById('magicReputation');
var socialReputation = document.getElementById('socialReputation');
var houseworkReputation =  document.getElementById('houseworkReputation');

function defineStarSign(day){
  for (var i = 0; i < starSigns.length; i++){
    if (day > starSigns[i][1] && day < starSigns[i][2]){
      starSign = starSigns[i][0];
    }
  }
  if (starSign === undefined){
    starSign = "Capricorn";
  }
};

//Initial attributes based on Star Sign

function initialAttibutesStats(val){

  switch (val) {
    case "Aries":
        constitution.value = 45;
        strength.value = 45;
        intelligence.value = 13;
        refinement.value = 10;
        charisma.value = 7;
        morality.value = 14;
        faith.value = 21;
        sin.value = 0;
        sensitivity.value = 6;
        stress.value = 0;

        combatSkill.value = 38;
        combatAttack.value = 5;
        combatDefense.value = 0;
        magicalSkill.value = 8;
        magicalAttack.value = 14;
        magicalDefense.value = 10;

        decorum.value = 10;
        art.value = 15;
        conversation.value = 10;
        cooking.value = 18;
        cleaning.value = 18;
        temperament.value = 4;
        break;
    case "Taurus":
        constitution.value = 33;
        strength.value = 28;
        intelligence.value = 23;
        refinement.value = 25;
        charisma.value = 24;
        morality.value = 32;
        faith.value = 20;
        sin.value = 0;
        sensitivity.value = 19;
        stress.value = 0;

        combatSkill.value = 10;
        combatAttack.value = 3;
        combatDefense.value = 0;
        magicalSkill.value = 17;
        magicalAttack.value = 18;
        magicalDefense.value = 25;

        decorum.value = 21;
        art.value = 20;
        conversation.value = 8;
        cooking.value = 19;
        cleaning.value = 16;
        temperament.value = 23;
        break;
    case "Gemini":
        constitution.value = 19;
        strength.value = 18;
        intelligence.value = 36;
        refinement.value = 14;
        charisma.value = 14;
        morality.value = 7;
        faith.value = 10;
        sin.value = 0;
        sensitivity.value = 35;
        stress.value = 0;

        combatSkill.value = 14;
        combatAttack.value = 2;
        combatDefense.value = 0;
        magicalSkill.value = 18;
        magicalAttack.value = 19;
        magicalDefense.value = 15;

        decorum.value = 10;
        art.value = 25;
        conversation.value = 30;
        cooking.value = 8;
        cleaning.value = 10;
        temperament.value = 11;
        break;
    case "Cancer":
        constitution.value = 18;
        strength.value = 18;
        intelligence.value = 24;
        refinement.value = 29;
        charisma.value = 33;
        morality.value = 25;
        faith.value = 30;
        sin.value = 0;
        sensitivity.value = 33;
        stress.value = 0;

        combatSkill.value = 15;
        combatAttack.value = 2;
        combatDefense.value = 0;
        magicalSkill.value = 24;
        magicalAttack.value = 28;
        magicalDefense.value = 23;

        decorum.value = 17;
        art.value = 20;
        conversation.value = 20;
        cooking.value = 17;
        cleaning.value = 20;
        temperament.value = 17;
        break;
    case "Leo":
        constitution.value = 50;
        strength.value = 50;
        intelligence.value = 7;
        refinement.value = 42;
        charisma.value = 18;
        morality.value = 23;
        faith.value = 10;
        sin.value = 0;
        sensitivity.value = 9;
        stress.value = 0;

        combatSkill.value = 32;
        combatAttack.value = 5;
        combatDefense.value = 0;
        magicalSkill.value = 2;
        magicalAttack.value = 6;
        magicalDefense.value = 8;

        decorum.value = 15;
        art.value = 8;
        conversation.value = 15;
        cooking.value = 7;
        cleaning.value = 9;
        temperament.value = 2;
        break;
    case "Virgo":
        constitution.value = 14;
        strength.value = 5;
        intelligence.value = 28;
        refinement.value = 45;
        charisma.value = 30;
        morality.value = 32;
        faith.value = 35;
        sin.value = 0;
        sensitivity.value = 31;
        stress.value = 0;

        combatSkill.value = 7;
        combatAttack.value = 1;
        combatDefense.value = 0;
        magicalSkill.value = 15;
        magicalAttack.value = 18;
        magicalDefense.value = 32;

        decorum.value = 25;
        art.value = 18;
        conversation.value = 15;
        cooking.value = 29;
        cleaning.value = 30;
        temperament.value = 30;
        break;
    case "Libra":
        constitution.value = 25;
        strength.value = 22;
        intelligence.value = 30;
        refinement.value = 24;
        charisma.value = 20;
        morality.value = 20;
        faith.value = 21;
        sin.value = 0;
        sensitivity.value = 26;
        stress.value = 0;

        combatSkill.value = 14;
        combatAttack.value = 2;
        combatDefense.value = 0;
        magicalSkill.value = 13;
        magicalAttack.value = 14;
        magicalDefense.value = 15;

        decorum.value = 18;
        art.value = 18;
        conversation.value = 28;
        cooking.value = 16;
        cleaning.value = 15;
        temperament.value = 15;
        break;
    case "Scorpio":
        constitution.value = 28;
        strength.value = 20;
        intelligence.value = 22;
        refinement.value = 9;
        charisma.value = 42;
        morality.value = 10;
        faith.value = 27;
        sin.value = 0;
        sensitivity.value = 39;
        stress.value = 0;

        combatSkill.value = 10;
        combatAttack.value = 2;
        combatDefense.value = 0;
        magicalSkill.value = 30;
        magicalAttack.value = 30;
        magicalDefense.value = 20;

        decorum.value = 14;
        art.value = 21;
        conversation.value = 4;
        cooking.value = 12;
        cleaning.value = 11;
        temperament.value = 8;
        break;
    case "Sagittarius":
        constitution.value = 38;
        strength.value = 35;
        intelligence.value = 24;
        refinement.value = 23;
        charisma.value = 11;
        morality.value = 10;
        faith.value = 12;
        sin.value = 0;
        sensitivity.value = 20;
        stress.value = 0;

        combatSkill.value = 19;
        combatAttack.value = 4;
        combatDefense.value = 0;
        magicalSkill.value = 19;
        magicalAttack.value = 12;
        magicalDefense.value = 12;

        decorum.value = 8;
        art.value = 16;
        conversation.value = 13;
        cooking.value = 21;
        cleaning.value = 13;
        temperament.value = 10;
        break;
    case "Capricorn":
        constitution.value = 25;
        strength.value = 20;
        intelligence.value = 17;
        refinement.value = 15;
        charisma.value = 10;
        morality.value = 38;
        faith.value = 20;
        sin.value = 0;
        sensitivity.value = 13;
        stress.value = 0;

        combatSkill.value = 15;
        combatAttack.value = 2;
        combatDefense.value = 0;
        magicalSkill.value = 15;
        magicalAttack.value = 8;
        magicalDefense.value = 5;

        decorum.value = 20;
        art.value = 10;
        conversation.value = 11;
        cooking.value = 19;
        cleaning.value = 19;
        temperament.value = 28;
        break;
    case "Aquarius":
        constitution.value = 17;
        strength.value = 18;
        intelligence.value = 42;
        refinement.value = 12;
        charisma.value = 10;
        morality.value = 13;
        faith.value = 8;
        sin.value = 0;
        sensitivity.value = 28;
        stress.value = 0;

        combatSkill.value = 15;
        combatAttack.value = 2;
        combatDefense.value = 0;
        magicalSkill.value = 15;
        magicalAttack.value = 12;
        magicalDefense.value = 23;

        decorum.value = 11;
        art.value = 22;
        conversation.value = 22;
        cooking.value = 15;
        cleaning.value = 23;
        temperament.value = 6;
        break;
    case "Pisces":
        constitution.value = 16;
        strength.value = 15;
        intelligence.value = 15;
        refinement.value = 32;
        charisma.value = 31;
        morality.value = 24;
        faith.value = 30;
        sin.value = 0;
        sensitivity.value = 45;
        stress.value = 0;

        combatSkill.value = 12;
        combatAttack.value = 2;
        combatDefense.value = 0;
        magicalSkill.value = 18;
        magicalAttack.value = 20;
        magicalDefense.value = 18;

        decorum.value = 24;
        art.value = 20;
        conversation.value = 15;
        cooking.value = 16;
        cleaning.value = 14;
        temperament.value = 18;
  }

  updateAttributes();
}

function startGame(event){

    event.preventDefault();

   name = document.forms["initialSetup"]["name"].value;
   birthMonth = Number(document.forms["initialSetup"]["birthmonth"].value);
   birthdayDay = Number(document.forms["initialSetup"]["birthday"].value);

   princessImg.src = "assets/img/princess/10/normal-princess.png";

   currentDay = birthdayDay;
   currentMonth = birthMonth - 1;
   var birthdayValue;

   if(birthdayDay < 10){
     birthdayValue = 0 + "" + birthdayDay;
   }
   else {
     birthdayValue = birthdayDay;
   }

   birthday = birthMonth + "" + birthdayValue;
   bloodType = document.forms["initialSetup"]["bloodType"].value;

   document.getElementById("name").innerHTML = name;
   document.getElementById("birthday").innerHTML =  birthdayValue + " / " + birthMonth;

   defineStarSign(birthday);

   document.getElementById("starSign").innerHTML = starSign;

   initialAttibutesStats(starSign);

   calculateReputations();
   updateAttributes();

   createCalendar();
   highlightCurrentDay();

  document.getElementById("questions").className += "hidden";

  document.getElementById("princess").className = document.getElementById("princess").className.replace( /(?:^|\s)hidden(?!\S)/g , '' );
  document.getElementById("attributes").className = document.getElementById("attributes").className.replace( /(?:^|\s)hidden(?!\S)/g , '' );
  document.getElementById("jobsandlessons").className = document.getElementById("jobsandlessons").className.replace( /(?:^|\s)hidden(?!\S)/g , '' );


};
