$(document).ready(function () {



   var score = 0;
   var targetNumber = Math.floor(Math.random() * 100) + 1;
   var bluegem = 10;
   var yellowgem = 7;
   var redgem = 5;
   var greengem = 3;
   $(".scoreboard").text(score);
   $(".targetscore").text(targetNumber);



   $(".btn").on("click", function () {


      var myId = $(this).attr("id");
      if (myId === "bluegem") {
         score += bluegem;
         console.log("bluegem Clicked");

      }
      else if (myId === "yellowButton") {
         score += yellowgem;
         console.log("yellowButton clicked");
      }

      else if (myId === "ruby") {
         score += redgem;
         console.log("ruby clicked");
      }
      else if (myId === "greenie") {
         score += greengem
         console.log("greenie clicked");
      }
      if (score === targetNumber) {
         alert("You Win!");
         score = 0;
         targetNumber = Math.floor(Math.random() * 100) + 1;

      } else if (score > targetNumber) {
         alert("You lose!");
         score = 0;
         targetNumber = Math.floor(Math.random() * 100) + 1;
       
      }
      $(".scoreboard").text(score);
      $(".targetscore").text(targetNumber);
   });
   
});

