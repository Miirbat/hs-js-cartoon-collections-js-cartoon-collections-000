function dwarfRollCall(dwarves) {
  var newArray = [];
  for (var i = 0; i < dwarves.length; i++) {
    newArray.push(`${i+1}. ${dwarves[i]}`);
  }
  return `${newArray.join(' ')} `;
}


function summonCaptainPlanet(planeteerCalls){
  for (var i = 0; i < planeteerCalls.length; i++) {
    planeteerCalls[i] = `${planeteerCalls[i]}.toUppercase()!`;
  }
  return planeteerCalls;
}


function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
      if (words[i].length > 4) {
        return true;
      }
  }
  return false;
}

function findTheCheese(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 'cheddar' || array[i] === 'gouda' || array[i] === 'camembert') {
      return array[i] 
    } 
}
  return "no cheese!";
}