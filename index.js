
// need to add functionality to each button of every player for clicking
var elementList = document.querySelectorAll(".volleyball");
console.log(elementList);
var size = elementList.length;
for (var i=0;i<size;i++){
  elementList[i].addEventListener("click",function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  })
}

function makeSound(name){

  switch (name){
    case "Casey Patterson":
      // since Casey says a lot of weird things, i want to play a different saying everytime somebody clicks on his face
      // so it'll be like a random Sayings

      // for right now, i'm going to use the sounds that i took from the drum kit starting files course
      // logic is as follows:
      // 7 audio files
      // going to generate a random number between 0 and 6
      // then going to store all the audio files into a vector of size 7
      // select the audio name like crash.mp3 or snare.mp3 or tom-1.mp3
      // append that to a filename called sounds/xxxxx where xxxx is the randomly selected audio filename
      // then play that audio file

      // just realized post writing the code that i'll need separate folders for each player's heckles or burns or roasts

      // right now, i'm going to have to manually make the array of sounds since most of the solutions online require me to use npm
      var caseySoundBank = ["casey-chesticles.mp3","casey-dontpullonme.mp3","casey-freeicecream.mp3","casey-omgwow.mp3","casey-whatareyoudoing2.mp3"];
      caseySound = getRandomSound(5,caseySoundBank);
      var test = new Audio("caseysounds/"+caseySound);
      test.play();
      break;

    case "Trevor Crabb":
      var crabbSoundBank = ["crabb-suck.mp3","crabb-nobody.mp3","crabb-ooo.mp3","crabb-suckonthat.mp3","crabb-toomuchheat.mp3","crabb-choke.mp3"];
      crabbSound = getRandomSound(6,crabbSoundBank);
      var crabb = new Audio("crabbsounds/"+crabbSound);
      crabb.play();
      break;

    case "Nick Lucena":
      var lucenaSoundBank = ["lucena-cussing.mp3","lucena-messedup.mp3"];
      lucenaSound = getRandomSound(2,lucenaSoundBank);
      var lucena = new Audio("lucenasounds/"+lucenaSound);
      lucena.play();
      break;

    default:
      var alwaysPlay = new Audio("crabbsounds/crabb-toomuchheat.mp3");
      alwaysPlay.play();
  }
}

function getRandomSound(max,listOfSounds){
  var selectionNumber = Math.floor(Math.random()*max);
  var selectedSound = listOfSounds[selectionNumber];
  return selectedSound;
}
