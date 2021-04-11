var timer_secE1 = document.getElementById('countdown');
var timerboxE1 = document.getElementById('timerbox');
var startbtn = document.getElementById('start');

var timer;
var timeleft;
var score = 0
var message = 'Time-Out! Please click start button to start again good-luck!';
var words = message.split(' ');
var start_btn = document.querySelector(".start_btn button");
var info_box
var exit_btn
var continue_btn
var pageContent = document.querySelector(".page-content");

// Timer function
function startTimer(val) {
    // set timer value based on the number of questions
    timeLeft = val;
    timer_secE1.textContent = timeLeft + ' seconds'
    // timer interval countdown
    timer = setInterval(function() {
        timeLeft--
        if(timeLeft > 1) {
            timer_secE1.textContent = timeLeft + ' seconds'
        } else if(timeLeft === 1) {
            timer_secE1.textContent = timeLeft + ' second'
        } else if( timeLeft <= 0 ) {
            // Once timeLeft gets to 0, set timer_secEl to an empty string
            timer_secE1.textContent = 0
            clearInterval(timer)
            // Call the displayMessage() function
            displayMessage();
        }
        return timeLeft
    }, 1000); 
}


// Displays the message one word at a time
function displayMessage() {
    var wordCount = 0;
      // Uses the setInterval() method to call a function to be executed every 300 milliseconds
    var msgInterval = setInterval(function() {
      if (words[wordCount] === undefined) {
        clearInterval(msgInterval);
      } else {
        pageContent.innerHTML = `
        <div class="ques_text">
            ${words[wordCount]}
        </div>`
        wordCount++;
      }
    }, 300);
}
  
//If start Quiz Button Clicked
start_btn.onclick = ()=> {
    clearInterval(timer)
    var timeperquestion = 10;
    // build html
    pageContent.innerHTML = `
    <div class="info_box">
             <div class="info_title">
                <span>Some Rules of this Quiz</span>
      
            </div>
            <div class="info_list">
                <div class="info">1. You will have only <span>${timeperquestion} seconds</span> per each question.</div>
                <div class="info">2. Once you select your answer, you can't reselect.</div>
                <div class="info">3. You can't select any option once time goes off.</div>
                <div class="info">4. You will lose time when you select a wrong answer.</div>
                <div class="info">5. You'll get points on the basis of your correct answers.</div>
            </div>
            <div class="buttons">
                <button class="quit">Exit Quiz</button>
                <button class="restart continue">Continue</button>
            </div>
        </div>
        `
        info_box = document.querySelector(".info_box");
        info_box.style.display = "block"
        // add listener to continue button and add listener
        continue_btn = document.querySelector(".continue ");
        continue_btn.addEventListener("click", function(){
            // start timer
            
            startTimer(questions.length * timeperquestion)
            // start quiz at first question
            run(0)});
        // add listener to exit button and add listener
        exit_btn = document.querySelector(".buttons .quit");
        exit_btn.onclick = ()=> {
            start_btn.style.display = "block"
            info_box.style.display = "none"
    }
}
//If continue Button Clicked
function run( start ) {
    var questionNum = start
    
    var question = questions[questionNum].question
    pageContent.innerHTML = `
    <div class="page_contain">
        <div class="ques_text">
        ${question}
        </div>
        <div class="option_list">
            <div class="option">
                <span>${questions[questionNum].options[0]}</span>
            </div>
            <div class="option">
                <span>${questions[questionNum].options[1]}</span>
            </div>
            <div class="option">
                <span>${questions[questionNum].options[2]}</span>
            </div>
            <div class="option">
                <span>${questions[questionNum].options[3]}</span>
            </div>
        </div>
        <footer>
                <div class="total_que">
                    <span>
                        <p>Question ${questionNum+1}</p>of<p>${questions.length}</p>
                    </span>
                </div>
        </footer>
    </div>`
    // add listeners for click
    var spans = document.querySelectorAll('.option')
        .forEach(el => 
        el.addEventListener("click", function(event){
            // correct answer
            var answer = questions[questionNum].answer
            // clicked answer
            var selectedAnswer
            if( event.target.nodeName == 'SPAN' ) {
                selectedAnswer = event.target.textContent  
            } else if (event.target.nodeName == 'DIV') {
                selectedAnswer = event.target.children[0].textContent  
            }
                // if answer correct
            if( answer === selectedAnswer) {
                // add score if correct
                score = score + 1
            } else {
                // take away time if wrong
                timeLeft = timeLeft - 10
            }
            // check if last question
            if(questionNum < questions.length - 1) {
                // if not, run next question
                run(questionNum+1)
            } else {
                // end game
                clearInterval(timer)
                pageContent.innerHTML =`
                <div class="ques_text">
                <p>Final Score ${score} / ${questions.length}</p>                
                </div>
                `
            }
        })
    )
}











