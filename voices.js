var i = 0;
var numberOfButtons = document.querySelectorAll(".buttonka").length;
while (i < numberOfButtons){ //could be a for loop, cuz we now the end length. (0-6 or 1-7)
  //grab all elements that has "buttonka", then we add through a loop an eventlistener for all the buttons. the looking for a "click", we 
  document.querySelectorAll(".buttonka")[i].addEventListener("click", clickClickedDown);
  i++;
}
//whole doc listens for an event(keydown), wich value-key got PRESSED, and that pressed down key's value (1-7) will be played.
document.addEventListener("keydown", keyPressed); 
Counter();

function makeSound(key){
  switch(key){ //buttonInnerHTML gives me the content/text, in my case 1-2-3-... numbers.
    case "1": 
      var sound1 = new Audio("sounds/tole-tole-kawaii.mp3"); 
      sound1.play();
      break;
    case "2": 
      var sound2 = new Audio("sounds/sukunas-ryoiki-tenkai.mp3"); 
      sound2.play();
      break;
    case "3":
      var sound3 = new Audio("sounds/kaguya-suki.mp3"); 
      sound3.play(); 
      break;
    case "4": 
      var sound4 = new Audio("sounds/strongpunch.mp3"); 
      sound4.play();
      break;
    case "5": 
      var sound5 = new Audio("sounds/tmpdbnm_5a3.mp3"); 
      sound5.play();
      break;
    case "6": 
      var sound6 = new Audio("sounds/anime-wow-sound-effect.mp3"); 
      sound6.play();
      break;
    case "7": 
      var sound4 = new Audio("sounds/yamede-kudasai.mp3"); 
      sound4.play();
      break;
  }
}
var count = 1;
function Counter(event){
  
  document.addEventListener("click", function(){
    document.querySelector("h6").innerHTML = "Clicks or Presses: " + count;
    count++;})
  
    document.addEventListener("keydown", function(){
    document.querySelector("h6").innerHTML = "Clicks or Presses: " + count;
    count++;})
}


// event object cointains a lot of infos: {eventType: "keypress", key: "x", durationOfKeyPress: 2, etc} but we only need the .key!
//listens and executes after PRESS
function keyPressed(event){ 
  makeSound(event.key); //listened the event(or key that gets pressed), wich has a value from 1-7 (key ="1" forexample). This will be played.
  animateButton(event.key);
}

//listens and executes after CLICK
function clickClickedDown(buttonInnerHTML){ //after click, we get the value thats inside the innerHTML/content. --> which is 1-7
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  animateButton(buttonInnerHTML);
}

//button gets a little animations after clicked/pressed, to see that it was clicked/pressed.
function animateButton(currentKey){
  var activeButt = document.querySelector("[id='" + currentKey + "']"); //from here we have the exact button we want to modify.
  activeButt.classList.add("pressed"); //pressed is a css selector too.
  setTimeout(function(){activeButt.classList.remove("pressed")}, 200); //anonymous function
}