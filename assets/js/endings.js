function endGame(){
  if(refinement.value >= 800 && fightingReputation.value >= 420 && magicReputation.value >= 420 && socialReputation.value >= 420 && houseworkReputation.value >= 420){
    console.log("Rulling Queen");
  }

  if (refinement.value >= 800 && fightingReputation.value >= 378 && magicReputation.value >= 378 && socialReputation.value >= 365 && houseworkReputation.value >= 350){
    console.log("Grand Poobah");
  }

  if (refinement.value >= 799 && fightingReputation.value >= 421 && magicReputation.value >= 410 && socialReputation.value >= 400 && houseworkReputation.value >= 390){
    console.log("Prime Minister");
  }

  if (intelligence.value >= 300 && morality.value >= 400 && faith.value >= 500 && fightingReputation.value >= 419 && magicReputation.value >= 410 && socialReputation.value >= 400 && houseworkReputation.value >= 390){
    console.log("Archbishop");
  }

}
