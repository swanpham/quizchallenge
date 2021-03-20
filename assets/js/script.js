

//getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = info_box.querySelector("quiz_box");

//If start Quiz Button Clicked
start_btn.onclick = ()=> {
    info_box.classList.add("activeInfo");//show the info box
}

//If Exit Button Clicked
exit_btn.onclick = ()=> {
    info_box.classList.remove("activeInfo");//hide the info box
}
//If continue Button Clicked
continue_btn.onclick = ()=> {
    info_box.classList.remove("activeInfo");//hide the info box
    quiz_box.classList.remove("activeQuiz");//show the quiz box
}