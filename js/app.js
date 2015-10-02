$(document).ready(function(){
  
  /*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);

  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
    $(".overlay").fadeOut(1000);
  });

  function newGame() {

    function guessFeedback(n) {
      difference = Math.abs(winningNumber - n);
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

    function submitGuess() {
      var userGuess = parseInt($("#userGuess").val());
      if (isNaN(userGuess)) {
        $("#feedback").html("That is not a number");
      } else {
        $("#feedback").html(guessFeedback(userGuess));
        addCount = +$("#count").html() + 1;
        $("#count").html(addCount);
        $("#guessList").append("<li>" + userGuess + "</li>");
        if (userGuess == winningNumber) {
          $("input").prop("disabled", true);
        }
      }
      $("#userGuess").val("");
    }

  }

  $("a.new").on("click", function() {
    $("input").prop("disabled", false);
    $("#feedback").html("Make your Guess!");
    $("#count").html("0");
    $("#guessList").html("");
    winningNumber = generateRandomNumber();
  });

  function generateRandomNumber() {
    var n =  parseInt(Math.random() * 100);
    console.log(n);
    return n;
  }

  var winningNumber = generateRandomNumber();
  newGame();

});
