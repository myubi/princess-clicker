var gold = 0;
var age = 10;
var name;
var birthday;
var birthmonth;
var birthyear = 1200;
var bloodType;
var starSign;
var gameStart = false;

//attributes

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


var lessons = {
  "dance": {
    "price": 50,
    "level": "novice"
  },
  "fencing": {
    "price": 40,
    "level": "novice"
  },
  "fighting": {
    "price": 30,
    "level": "novice"
  },
  "magic": {
    "price": 60,
    "level": "novice"
  },
  "painting": {
    "price": 40,
    "level": "novice"
  },
  "poetry": {
    "price": 40,
    "level": "novice"
  },
  "protocol": {
    "price": 40,
    "level": "novice"
  },
  "science": {
    "price": 30,
    "level": "novice"
  },
  "strategy": {
    "price": 50,
    "level": "novice"
  },
  "theology": {
    "price": 40,
    "level": "novice"
  }
};

function jobClick(num){
  gold += num;

  for (var i = 0; i < findGold.length; i++) {
    findGold[i].innerHTML = gold;
  }
  if (gold === 500 && gameStart === false){
    document.getElementById("beggining").className += "hidden";
    document.getElementById("questions").className = document.getElementById("questions").className.replace( /(?:^|\s)hidden(?!\S)/g , '' );
    gameStart = true;
  }
};

function lessonClick(topic){

  console.log(lessons[topic].price);

  if (gold > lessons[topic].price){
    gold -= lessons[topic].price;
    for (var i = 0; i < findGold.length; i++) {
      findGold[i].innerHTML = gold;
    }

    switch (topic) {
      case "dance":
          constitution.value += 1;
          charisma.value += 0.5;
          document.getElementById('constitutionVal').innerHTML = constitution.value;
          document.getElementById('charismaVal').innerHTML = charisma.value;
          break;
      case "fencing":
          break;
      case "fighting":
          break;
      case "magic":
          break;
      case "painting":
          sensitivity.value += 0.5;
          document.getElementById('sensitivityVal').innerHTML = sensitivity.value;
          break;
      case "poetry":
          intelligence.value += 0.5;
          refinement.value += 0.5;
          sensitivity.value += 1;
          document.getElementById('intelligenceVal').innerHTML = intelligence.value;
          document.getElementById('refinementVal').innerHTML = refinement.value;
          document.getElementById('sensitivityVal').innerHTML = sensitivity.value;
          break;
      case "protocol":
          refinement.value += 1;
          document.getElementById('refinementVal').innerHTML = refinement.value;
          break;
      case "science":
          intelligence.value += 2.5;
          document.getElementById('intelligenceVal').innerHTML = intelligence.value;
          break;
      case "strategy":
          intelligence.value += 1.5;
          document.getElementById('intelligenceVal').innerHTML = intelligence.value;
          break;
      case "theology":
          intelligence.value += 1;
          faith.value += 1.5;
          document.getElementById('intelligenceVal').innerHTML = intelligence.value;
          document.getElementById('faithVal').innerHTML = faith.value;
    }
  }

};

function startGame(event){

    event.preventDefault();

   name = document.forms["initialSetup"]["name"].value;
   var birthdayValue;

   if(document.forms["initialSetup"]["birthday"].value < 10){
     birthdayValue = 0 + "" + document.forms["initialSetup"]["birthday"].value;
   }
   else {
     birthdayValue = document.forms["initialSetup"]["birthday"].value;
   }

   birthday = document.forms["initialSetup"]["birthmonth"].value + "" + birthdayValue;
   bloodType = document.forms["initialSetup"]["bloodType"].value;

   document.getElementById("name").innerHTML = name;
   document.getElementById("birthday").innerHTML = birthday;

   defineStarSign(birthday);

   document.getElementById("starSign").innerHTML = starSign;

   initialAttibutesStats(starSign);

  document.getElementById("questions").className += "hidden";

  document.getElementById("princess").className = document.getElementById("princess").className.replace( /(?:^|\s)hidden(?!\S)/g , '' );
  document.getElementById("attributes").className = document.getElementById("attributes").className.replace( /(?:^|\s)hidden(?!\S)/g , '' );
  document.getElementById("jobsandlessons").className = document.getElementById("jobsandlessons").className.replace( /(?:^|\s)hidden(?!\S)/g , '' );


};

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
        cooking.value = 10;
        cleaning.value = 10;
        temperament.value = 4;

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

        combatSkill.value = 38;
        combatAttack.value = 5;
        combatDefense.value = 0;
        magicalSkill.value = 8;
        magicalAttack.value = 14;
        magicalDefense.value = 10;

        decorum.value = 10;
        art.value = 15;
        conversation.value = 10;
        cooking.value = 10;
        cleaning.value = 10;
        temperament.value = 4;

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

        combatSkill.value = 38;
        combatAttack.value = 5;
        combatDefense.value = 0;
        magicalSkill.value = 8;
        magicalAttack.value = 14;
        magicalDefense.value = 10;

        decorum.value = 10;
        art.value = 15;
        conversation.value = 10;
        cooking.value = 10;
        cleaning.value = 10;
        temperament.value = 4;

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

        combatSkill.value = 38;
        combatAttack.value = 5;
        combatDefense.value = 0;
        magicalSkill.value = 8;
        magicalAttack.value = 14;
        magicalDefense.value = 10;

        decorum.value = 10;
        art.value = 15;
        conversation.value = 10;
        cooking.value = 10;
        cleaning.value = 10;
        temperament.value = 4;

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

        combatSkill.value = 38;
        combatAttack.value = 5;
        combatDefense.value = 0;
        magicalSkill.value = 8;
        magicalAttack.value = 14;
        magicalDefense.value = 10;

        decorum.value = 10;
        art.value = 15;
        conversation.value = 10;
        cooking.value = 10;
        cleaning.value = 10;
        temperament.value = 4;

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

        combatSkill.value = 38;
        combatAttack.value = 5;
        combatDefense.value = 0;
        magicalSkill.value = 8;
        magicalAttack.value = 14;
        magicalDefense.value = 10;

        decorum.value = 10;
        art.value = 15;
        conversation.value = 10;
        cooking.value = 10;
        cleaning.value = 10;
        temperament.value = 4;

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

        combatSkill.value = 38;
        combatAttack.value = 5;
        combatDefense.value = 0;
        magicalSkill.value = 8;
        magicalAttack.value = 14;
        magicalDefense.value = 10;

        decorum.value = 10;
        art.value = 15;
        conversation.value = 10;
        cooking.value = 10;
        cleaning.value = 10;
        temperament.value = 4;

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

        combatSkill.value = 38;
        combatAttack.value = 5;
        combatDefense.value = 0;
        magicalSkill.value = 8;
        magicalAttack.value = 14;
        magicalDefense.value = 10;

        decorum.value = 10;
        art.value = 15;
        conversation.value = 10;
        cooking.value = 10;
        cleaning.value = 10;
        temperament.value = 4;

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

        combatSkill.value = 38;
        combatAttack.value = 5;
        combatDefense.value = 0;
        magicalSkill.value = 8;
        magicalAttack.value = 14;
        magicalDefense.value = 10;

        decorum.value = 10;
        art.value = 15;
        conversation.value = 10;
        cooking.value = 10;
        cleaning.value = 10;
        temperament.value = 4;

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

        combatSkill.value = 38;
        combatAttack.value = 5;
        combatDefense.value = 0;
        magicalSkill.value = 8;
        magicalAttack.value = 14;
        magicalDefense.value = 10;

        decorum.value = 10;
        art.value = 15;
        conversation.value = 10;
        cooking.value = 10;
        cleaning.value = 10;
        temperament.value = 4;

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
  }
}
