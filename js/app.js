$(document).ready(function(){
  
  /*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);

  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
    $(".overlay").fadeOut(1000);
  });

  function generateRandomNumber() {
    return parseInt(Math.random() * 100);
  }

  function guessFeedback(n) {
    difference = Math.abs(gameNumber - n);
    if (difference >= 50) {
      return "Ice Cold";
    } else if (difference < 50 && difference >= 30)  {
      return "Cold";
    } else if (difference < 30 && difference >= 20) {
      return "Warm";
    } else if (difference < 20 && difference >= 10) {
      return "Warm";
    } else if (difference < 10 && difference >= 1) {
      return "Very Hot";
    } else {
      return "Winner";
    }
  }

  $("#guessButton").keydown(function(e) {
    if (e.which == 13 && $(this).val().length >= 1) {
      submitGuess();
    }
  })
  .on("click", function(e) {
    if ($(this).val().length >=1) {
      submitGuess();
      e.preventDefault();
    }
  });

  var gameNumber = generateRandomNumber();
  console.log(gameNumber);

  function submitGuess() {
    var userGuess = parseInt($("#userGuess").val());
    if (isNaN(userGuess)) {
      $("#userGuess").val("");
      $("#feedback").html("That is not a number");
    } else {
      $("#userGuess").val("");
      $("#feedback").html(guessFeedback(userGuess));
      addCount = +$("#count").html() + 1;
      $("#count").html(addCount);
      $("#guessList").append("<li>" + userGuess + "</li>");
      if (userGuess == gameNumber) {
        $("#guessList").html("");
        $("input").attr("disabled", "disabled");
      }
    }
  }

});
