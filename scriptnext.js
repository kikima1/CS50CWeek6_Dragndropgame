
("use strict")

const q_a_data = [
  {
    question: "What is her favorite color?",
    answers: ["blue","green", "yellow","doesn't have one"],
    correct_choice: 3
  },
  {
    question: "Which instrument is she best at?",
    answers: [ "fiddle", "guitar", "piano", "mandolin" ],
    correct_choice: 0
  },
  {
    question: "What is her favorite instrument to play?",
    answers: [ "fiddle", "guitar", "piano", "mandolin" ],
    correct_choice: 2
  }
  
];



var turn = 0;
var score = 0;

//document.getElementById("score").innerHTML = "Current score = " + score + " points";
$("#score").text("Current score = " + score + " points");

showQuestion();


function showQuestion() {
  // set the counter and score
  //document.getElementById("counter").innerHTML = "Question # " + (turn +1) ;
  $("#counter").text("Question # " + (turn +1));


 
 // document.getElementById("question").innerHTML = q_a_data[turn].question;
  $('#question').text(q_a_data[turn].question);
  
  //document.getElementById("answers").innerHTML = "";
  $('#answers').empty();
  
 for ( let index in q_a_data[turn].answers ) {
  
  //var button = document.createElement("button");
 //button.innerHTML = q_a_data[turn].answers[index];
 var button = $("<button>");
 button.text( q_a_data[turn].answers[index] ); 
 $('#answers').append( button );
  //var parent = document.getElementById("answers");
  //var parent = $("#answers");
  //parent.appendChild(button);

  //button.addEventListener(
  //  "click", 
  button.click(
    function() {

        checkAnswer(index);
    }
  );
  }
}


function checkAnswer(choice) {
    
    if ( choice == q_a_data[turn].correct_choice ) {
      
      document.getElementById("try_again").innerHTML = "";
      document.getElementById("right").innerHTML = "Correct answer!";
      document.getElementById("score").innerHTML = "Current score = " + (score += 1) + " points";

     
      nextQuestion();
      
    } else {
      
      
      document.getElementById("try_again").innerHTML = "Try Again!";
      document.getElementById("right").innerHTML = "";
      //nextQuestion();
    }
    
}


function nextQuestion() {
  turn++;
  if ( turn < q_a_data.length ) {
    showQuestion();
  
  }
  else {
    

switch(score){
    
case 0:
  document.getElementById("knowledge").innerHTML = "You may not know her very well!";
  break;
case 1:
  document.getElementById("knowledge").innerHTML = "Good guess!";
  break;
case 2:
  document.getElementById("knowledge").innerHTML = "Hey, not bad, but still room to improve";
  break;
case 3:
  document.getElementById("knowledge").innerHTML = "Woohoo! Well done!";
  
  
  
  break;
};

}
} 



