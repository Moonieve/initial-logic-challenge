//jornada do hero
let hero = "Patroclus";

let XP = 8000;  
let nivel = " ";

if (XP < 1000) {
  nivel = "iron";
} 
else if (XP >= 1001 && XP <= 2000) {
  nivel = "bronze";
} 
else if (XP >= 2001 && XP <= 5000) {
  nivel = "silver";
}
else if (XP >= 7001 && XP <= 8000) {
  nivel = "platinum";
}
else if (XP >= 8001 && XP <= 9000) {
  nivel = "arising";
}
else if (XP >= 9001 && XP <= 10000) {
  nivel = "immortal";
}
else if (XP >= 10001) {
  nivel = "radiant";
}

console.log("The hero of name " + hero + " is on the level " + nivel);


