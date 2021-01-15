var gamePattern = [];
var userClickedPattern  = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);


$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

$( ".btn" ).click(function() {
  currentButton = this;
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(currentButton);

});

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  return randomNumber;
}

function playSound(name) {
  var currentPlayingSound = new Audio("sounds/" + name + ".mp3");
  currentPlayingSound.play();
}

function animatePress(currentButton){
  $(currentButton).addClass("pressed");
  setTimeout(function(){
            $(currentButton).removeClass("pressed");
    }, 200);
}
