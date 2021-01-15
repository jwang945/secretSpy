//NAME
var name = prompt("What is your name?");
var name_Spy = false;
if(name[0] === name[name.indexOf(' ')+1]){ //crude checkeer for example, ignores edge cases, assumes input of "John Johnson"
  name_Spy = true;
}
//console.log("name_Spy is: " + name_Spy);

//AGE
var age = prompt("What is your age?");
var age_Spy = false;
if(age > 20 && age < 30){
  age_Spy = true;
}
//console.log("age_Spy is: " + age_Spy);

//HEIGHT
var height = prompt("What is your height in cm?");
var height_Spy = false;
if(height >= 170){
  height_Spy = true;
}
//console.log("height_Spy is: " + height_Spy);
//PET Name
var petName = prompt("What is your pet's name?");
var petName_Spy = false;
if (petName[petName.length-1] === "y"){
  petName_Spy = true;
}
//console.log("petName_Spy is: " + petName_Spy);

if(name_Spy && age_Spy && height_Spy && petName_Spy){
  console.log("Agent Recognized: Command Module Engaged.")
}
