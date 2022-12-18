//tanyaaa

function attack(damage){
    return damage -2;
}

function damageCalculation(numberOfAttacks, damagePerAttack){
    let calculation = attack(damagePerAttack) * numberOfAttacks;
    // console.log(attack(10));
    let minus2 = attack(damagePerAttack)
    // console.log(minus2, numberOfAttacks);
    return calculation;
}

  
  // TEST CASE
  console.log(damageCalculation(9, 25)); // 207
  
  console.log(damageCalculation(10, 4)); // 20
  
  console.log(damageCalculation(5, 20)); // 90