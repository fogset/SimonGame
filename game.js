var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);
$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  return randomNumber;
}
