var user = prompt ("Would you like to play?", "yes");
var user = prompt ("Enter Your Name", "Morgan");

var userHealth = 40;
var enemyHealth = 10;
var playing = true;
var wins = 0;

while (playing === true) {
  userHealth -= Math.floor((Math.random()*2)+1);
  enemyHealth -= Math.floor((Math.random()* 2)+1);
  console.log("Morgan's health is " + userHealth);
  console.log("Grant's health is " + enemyHealth);

if (userHealth <= 0 || enemyHealth <= 0) {
  console.log("The game is over");
  playing=false; 
}  
}
