var timer_secE1 = document.getElementById('countdown');
var timerboxE1 = document.getElementById('timerbox');
var startbtn = document.getElementById('start');


// var message =
//   'Time-Out! Please click start button to start again Good-luck!';
// var words = message.split(' ');

// Timer that counts down from 75
function countdown() {
    var timeLeft = 75;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
            // Set the `textContent` of `timer_secEl` to show the remaining seconds
            timer_secE1.textContent = timeLeft + ' seconds ';
            // Decrement `timeLeft` by 1
            timeLeft--;
        }else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timer_secE1.textContent = timeLeft + ' second ';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timer_secEl` to an empty string
            timer_secE1.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
           // Call the `displayMessage()` function
           displayMessage();
        }
    }, 1000);
}


// Displays the message one word at a time
function displayMessage() {
    var wordCount = 0;
  
    // Uses the `setInterval()` method to call a function to be executed every 300 milliseconds
    var msgInterval = setInterval(function() {
      if (words[wordCount] === undefined) {
        clearInterval(msgInterval);
      } else {
        mainEl.textContent = words[wordCount];
        wordCount++;
      }
    }, 300);
}
  
// startbtn.onclick = countdown;
startbtn.addEventListener("click", countdown());

//getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = document.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".continue ");
const quiz_box = document.querySelector(".quiz_box");
const questionEl = document.querySelector("#questionbox");

//If start Quiz Button Clicked
start_btn.onclick = ()=> {
    // info_box.classList.add("activeInfo");//show the info box
    // start_btn.style.display = "none"
    info_box.style.display = "block"
    console.log(questions)
}

//If Exit Button Clicked
exit_btn.onclick = ()=> {
    // info_box.classList.remove("activeInfo");//hide the info box
    start_btn.style.display = "block"
    info_box.style.display = "none"
}
const question = "What does HTML stand for?"

//If continue Button Clicked
continue_btn.onclick = ()=> {
    info_box.style.display = "none"
    quiz_box.style.display = "block"
    questionEl.innerHTML = `<div class="ques_text">
   ${question}
</div>
<div class="option_list">
    <div class="option">
        <span>Hyper Text Preprocessor</span>
        <div class="icon tick"><i class="fas fa-check"></i></div>
    </div>
    <div class="option">
        <span>Hyper Text Markup Language</span>
        <div class="icon cross"><i class="fas fa-times"></i></div>
    </div>
    <div class="option">
        <span>Hyper Text Multiple Language</span>
    </div>
    <div class="option">
        <span>Hyper Tool Multi Language</span>
    </div>
</div>`
    // info_box.classList.remove("activeInfo");//hide the info box
    // quiz_box.classList.add("activeQuiz");//show the quiz box
//     showQuestions(0);
//    queCounter(1);
    console.log("hello");  
}




