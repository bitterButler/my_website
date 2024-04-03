
var element = document.getElementById("demo"); 
element.addEventListener("click", myFunction);


function buttonAnimate(){
  var clickedButton = document.querySelector(".animateBTN");
    clickedButton.className = "btn btn-success";
    setTimeout(function(){clickedButton.className ="btn btn-warning"}, 200);
}

function myFunction() {
  // generating a random number, and with this i want to switch the images to that which has the number. 1 -> img1, 2-> img2, etc.
  var randNumberPlayer1 = Math.floor(Math.random()*6)+1;
  var randNumberPlayer2 = Math.floor(Math.random()*6)+1;
  switch (randNumberPlayer1){
    case 1: document.querySelector(".img1").setAttribute("src", "./img/dice1.png"); break;
    case 2: document.querySelector(".img1").setAttribute("src", "./img/dice2.png"); break;
    case 3: document.querySelector(".img1").setAttribute("src", "./img/dice3.png"); break;
    case 4: document.querySelector(".img1").setAttribute("src", "./img/dice4.png"); break;
    case 5: document.querySelector(".img1").setAttribute("src", "./img/dice5.png"); break;
    case 6: document.querySelector(".img1").setAttribute("src", "./img/dice6.png"); break;
  }
  var element2 =  document.querySelector(".img2");
  switch (randNumberPlayer2){
    case 1: element2.setAttribute("src", "./img/dice1.png"); break;
    case 2: element2.setAttribute("src", "./img/dice2.png"); break;
    case 3: element2.setAttribute("src", "./img/dice3.png"); break;
    case 4: element2.setAttribute("src", "./img/dice4.png"); break;
    case 5: element2.setAttribute("src", "./img/dice5.png"); break;
    case 6: element2.setAttribute("src", "./img/dice6.png"); break;
  }
  if (randNumberPlayer1 > randNumberPlayer2){
    document.querySelector("h2").innerHTML = "PLYR_1 WON!";
    document.querySelector("h2").style.color = "darkorange";
  }
  else if (randNumberPlayer2 > randNumberPlayer1){
    document.querySelector("h2").innerHTML = "PLYR_2 WON!";
    document.querySelector("h2").style.color = "lightgreen";
  }
  else {
    document.querySelector("h2").innerHTML = "IT'S DRAW!";
    document.querySelector("h2").style.color = "#83aff0";
  }
}