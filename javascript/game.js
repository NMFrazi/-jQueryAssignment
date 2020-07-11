var randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19); 
$('#randomNumber').html(randomNumber); 
 
 
 var green = Math.floor(Math.random() * 12) + 1; 
 var blue = Math.floor(Math.random() * 12) + 1; 
 var red = Math.floor(Math.random() * 12) + 1; 
 var yellow = Math.floor(Math.random() * 12) + 1; 
 var wins = 0; 
 var losses = 0; 
 var totalScore = 0; 

 $("#totalScore").text(totalScore); 
 
 function reset(){ 
     totalScore = 0; 
     $("#totalScore").text(" "); 
   randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19); 
     $('#randomNumber').html(randomNumber); 
     blue = Math.floor(Math.random() * 12) + 1; 
     yellow = Math.floor(Math.random() * 12) + 1; 
    green = Math.floor(Math.random() * 12) + 1; 
     red = Math.floor(Math.random() * 12) + 1; 
 } 
 
 function gamePlay(){ 
     if(totalScore === randomNumber){ 
         alert("You won!"); 
         wins++; 
         $("#winsCounter").text(wins); 
         reset(); 
     }else if(totalScore >= randomNumber){ 
         alert("You lose! Your final score was " + totalScore); 
         losses++; 
         $("#lossesCounter").text(losses); 
         reset(); 
     } 
 } 
 
 $("#yellowGem").on("click", function(){ 
     totalScore = totalScore + ruby; 
     $("#totalScore").text(totalScore); 
     gamePlay(); 
 }) 
 
 
 $("#greenGem").on("click", function(){ 
     totalScore = totalScore + citrine; 
     $("#totalScore").text(totalScore); 
     gamePlay(); 
 }) 
 
 
 $("#blueGem").on("click", function(){ 
     totalScore = totalScore + amethyst; 
     $("#totalScore").text(totalScore); 
     gamePlay(); 
 }) 
 
 
59 $("#redGem").on("click", function(){ 
60     totalScore = totalScore + carnelian; 
61     $("#totalScore").text(totalScore); 
62     gamePlay(); 
63 }) 
