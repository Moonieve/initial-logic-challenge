//project 01.
let hero = "Patroclus";

let XP = 8000;  
let level = " ";

if (XP <= 1000) {
  level = "iron";
} 
else if (XP >= 1001 && XP <= 2000) {
  level = "bronze";
} 
else if (XP >= 2001 && XP <= 5000) {
  level = "silver";
}
else if (XP >= 7001 && XP <= 8000) {
  level = "platinum";
}
else if (XP >= 8001 && XP <= 9000) {
  level = "arising";
}
else if (XP >= 9001 && XP <= 10000) {
  level = "immortal";
}
else if (XP >= 10001) {
  level = "radiant";
}

console.log("The hero of name " + hero + " is on the level " + level);





//project 02. I got obsessed about to do it in a different way.

let mana = 10000;  
let King = "Patroclus";

let levels = [
  { minMana: 0, maxMana: 1000, level: "Iron" },
  { minMana: 1001, maxMana: 2000, level: "Bronze" },
  { minMana: 2001, maxMana: 5000, level: "Silver" },
  { minMana: 5001, maxMana: 7000, level: "Gold" },
  { minMana: 7001, maxMana: 8000, level: "Platinum" },
  { minMana: 8001, maxMana: 9000, level: "Arising" },
  { minMana: 9001, maxMana: 10000, level: "Immortal" },
  { minMana: 10001, maxMana: Infinity, level: "Radiant" }
];

function getKingLevel(mana) {
  for (let i = 0; i < levels.length; i++) {
    if (mana >= levels[i].minMana && mana <= levels[i].maxMana) {
      return levels[i].level;
    }
  }
  return "Unknown";  
}

let kingLevel = getKingLevel(mana);

console.log(`The hero ${King} is on the level ${kingLevel}`);



