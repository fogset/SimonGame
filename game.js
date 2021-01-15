var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var level = 0;
var gameStarted = false;
var currentClickingButton = 0;


$(".btn").click(function() {
  currentButton = this;
  var userChosenColour = this.id;
  playSound(userChosenColour);
  animatePress(currentButton);
  console.log("gamePattern: " + gamePattern + " ||   userChosenColour: " + userChosenColour);
  checkAnswer(userChosenColour);

});

function checkAnswer(userChosenColour) {
  if (gameStarted === true) {
    userClickedPattern.push(userChosenColour);
    if (userChosenColour == gamePattern[currentClickingButton]) {
      currentClickingButton++;
      if (currentClickingButton === level) {
        nextSequence();
        currentClickingButton = 0;
      }
    } else {
      alert("user clicked not right");
    }
  }
}


$(document).on('keypress', function() {
  if (gameStarted === false) {
    nextSequence();
    gameStarted = true;
  }
});

function nextSequence() {
  level++;
  var randomNumber = Math.floor(Math.random() * 4);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $('h1').text("Level " + level);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

}

function playSound(name) {
  var currentPlayingSound = new Audio("sounds/" + name + ".mp3");
  currentPlayingSound.play();
}

function animatePress(currentButton) {
  $(currentButton).addClass("pressed");
  setTimeout(function() {
    $(currentButton).removeClass("pressed");
  }, 200);
}
