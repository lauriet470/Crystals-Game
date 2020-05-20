<script>


var score = 0;
var targetNumber = 100
var numberOptions = [10, 5, 3, 7];

$(".scoreboard").text(score);
$(".targetscore").text(targetNumber);




$(".btn").on("click", function(){
       
       
var myId=$(this).attr("id");
   if(myId==="bluegem"){
score += numberOptions[10];
console.log("bluegem Clicked");

}
else if (myId==="yellowButton"){
score += numberOptions[3];
console.log("yellowButton Clicked");

}
else if(myId==="greenie"){
score += numberOptions[5];
console.log("greenie clicked");
}
else if(myId=="ruby"){
score += numberOptions[7];
console.log("ruby clicked");
}
if(score === targetNumber){
alert("You Win!");

score=0;
targetNumber=mathRandom(max);
}
$(".scoreboard").text(score);
$(".targetscore").text(targetNumber);
});
</script>
