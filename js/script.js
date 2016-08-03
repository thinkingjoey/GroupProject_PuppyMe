var $homeStart = $('#homeStart');
var $dogPictures = $('#dogPictures');
var $dogInfo = $('#dogInfo');
var $noButton = $('#noButton');
var $yesButton = $('#yesButton');
var $imageBox = $('#imageBox');
var currentImage = -1;
var images = ["url(http://images.agoramedia.com/everydayhealth/gcms/allergies-best-worst-dog-breeds-02-pg-full.jpg)",
"url(http://shortyawards.imgix.net/entries/8th/screen-shot-2016-01-19-at-10034-a.png?auto=format&fit=crop&h=400&q=65&w=400&s=87ec73a9de4e8cd6f93d1ec4d8eaff5d)"];

//start button... homeStart to dogpicture
$('#startButton').on('click', function(e){
  $dogPictures.removeClass("hide");
  $homeStart.hide();
})

//clicking noButton
$noButton.on('click', function(e){
  console.log('clicked');
  console.log(currentImage);
  currentImage ++;
  nextImg();
})

//clicking yesButton
$yesButton.on('click', function(e){
  $dogPictures.hide();
  $dogInfo.removeClass("hide");
})

function nextImg() {
  $imageBox.css(
    'background-image', images[currentImage]
  );
}

$('#quizButton').on('click', function(e){
  $('#dogQuiz').removeClass("hide");
  $dogInfo.hide();
})

var everything = [
  //Q1
  {
    picture: "http://az616578.vo.msecnd.net/files/2016/06/17/636017344804814168-1934845513_PUG.jpg",
    question: "How frequently does your new Pug need to be fed?",
    A: "once a day",
    B: "every other day",
    C: "5 times a day",
    D: "2 times a day",
    correct: "D"
  },
  //Q2
  {
    picture: "https://upload.wikimedia.org/wikipedia/commons/4/47/Gadget_the_pug_expressive_eyes.jpg",
    question: "Do pugs shed?",
    A: "Pugs Shed",
    B: "Pugs do not shed",
    C: "Pugs are hairless",
    D: "Pugs have scales like  fish",
    correct: "A"
  },
  //Q3
  {
    picture: "https://i.ytimg.com/vi/hYsYuRBxRSQ/maxresdefault.jpg",
    question: " How big can you expect your Pug to get?",
    A: "As big as a horse",
    B: "As big as a donkey",
    C: "As big as a pug",
    D: "No bigger than a mouse",
    correct: "C"
  }
];



$('#gameOver').click(function(){
  location.reload();
});

//hover color change
$("#a,#b,#c,#d").hover(function() {
  $(this).css("background-color", "#97FFBA");
}, function() {
  $(this).css("background-color", "white");
});

//chnage questions & choices
var i = 0;
var score=i;
function draw() {
  if (i < everything.length) {
    $('#questionBox').text("Question: " + everything[i].question);
    $('#a').text("A: " + everything[i].A);
    $('#b').text("B: " + everything[i].B);
    $('#c').text("C: " + everything[i].C);
    $('#d').text("D: " + everything[i].D);
    $('.picture').css("background-image", "url(" + everything[i].picture + ")");
    $('#a,#b,#c,#d').show();
  }
}
draw();

//correct click, then move to next question, level up

$('#a, #b, #c, #d').click(function(e) {
  var correct = everything[i].correct;
  var clickedAnswer = $(this).text()[0];
  if (correct == clickedAnswer) {
    $('#level' + i).css("background-color", "#1DB24E");
    $('#level' +(i-1)).css("background-color", "#97FFBA");
    i++;
    score++;
    draw();
  }
  //wrong click, alert game over
    else {
    $('#gameOver').show();
    $('#prize').text("Game over. " + "You are at " + $('#level' + (i - 1)).text());
  }
});


$('#gameOver').click(function(){
  location.reload();
});



//restart button
$('#restart').click(function(e) {
  location.reload();
});
