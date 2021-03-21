

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


let que_count = 0;
let que_numb = 1;

const next_btn = quiz_box.querySelector(".next_btn");

// If Next Button Clicked
next_btn.onclick = ()=>{
    if(que_count < questions.lenght -1) {
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(1);
    }else {
        console.log("questions completed");
    }
}

// Getting questions and options from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    // let que_tag = '<span>'+ questions[index].numb + "." + question +'<span>';
    let option_tag = '<div class="option">' + questions[index].options[0] +'<span></span></div>'
                     + '<div class="option">' + questions[index].options[1] +'<span></span></div>'
                     + '<div class="option">' + questions[index].options[2] +'<span></span></div>'
                     + '<div class="option">' + questions[index].options[3] +'<span></span></div>';                
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.lenght; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = 
    console.log(userAns);
    
}

