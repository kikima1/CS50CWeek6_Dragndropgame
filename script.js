
("use strict")
$('#miraccord').accordion();

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

$("#dialog").dialog({
  autoOpen: false
});
$("#try_again").hide();

$("#score").text("Current score = " + score + " points");

showQuestion();


function showQuestion() {
  // set the counter and score
  
  $("#counter").text("Question # " + (turn +1));


  $('#question').text(q_a_data[turn].question);
  
  
  $('#answers').empty();
  
  
 for ( let index in q_a_data[turn].answers ) {
   
  $('#answer_place').droppable({
    drop: function(event,ui){
      //console.log(ui.draggable.data('choice'));
      var userchoice = ui.draggable.data('choice');
      
     checkAnswer(userchoice) 
      
    }
  });
  //var button = document.createElement("button");
 //button.innerHTML = q_a_data[turn].answers[index];
   
 var button = $("<span>");
   button.data('choice',index);
 button.text( q_a_data[turn].answers[index] ); 
 $('#answers').append( button );
 
  button.draggable();
  
  }
  
}


function checkAnswer(choice) {
    
    if ( choice == q_a_data[turn].correct_choice ) {
     $("#try_again").show();
      $("#try_again").text("Correct answer!");
      $("#try_again").hide();
    
     
    $("#score").text("Current score = " + (score += 1) + " points");
    
      nextQuestion();
       
    } else {
      
      
      $("#try_again").show();
      $("#try_again").text("Not Right...Try Again!");
      

      
      
    }
    
}


function nextQuestion() {
  turn++;
  
  if ( turn < q_a_data.length ) {
    
    showQuestion();
  
  }
  else {
    $("body").css("background-color","orange");
    $("#try_again").hide(225);
    $('#answers').text("PIANO!");
    $('#answers').css({"border":"4px dotted black","background-color":"white","margin":"30px auto", "max-width": "80px","padding":"4px 8px"});
    $('#dialog').dialog("open");
    $('#answer_place').text("The answer is:");
    $("#score").text("Winning score = " + score + " points!!")
  
  $("#knowledge").empty();

  
};
  
}



