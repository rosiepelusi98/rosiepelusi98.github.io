//Nav Menu
function navFunc(sectionName) {
    //console.log(sectionName);
    var navTarget = document.getElementById(sectionName);

    if(navTarget == null) {
        alert("Oops this button hasn't been linked up yet.");

    } else {
        navTarget.scrollIntoView();
    }
      
}

//Expand/collapse mobile nav menu
function expandNavMenu() {
    var isButtonHidden = document.getElementsByClassName("navButton");
    var isButtonShown = document.getElementsByClassName("navButtonDisplay");

    //console.log(isButtonHidden);
    //console.log(isButtonShown);


    if(isButtonShown.length == 0) {
        while(isButtonHidden.length > 0){

            for (let i = 0; i < isButtonHidden.length; i++) {
                const hiddenButtons = isButtonHidden[i];
        
                hiddenButtons.className = "navButtonDisplay";
                //console.log("showing");
            }
        }

    } else {
        while(isButtonShown.length > 0) {

            for (let i = 0; i < isButtonShown.length; i++) {
                const shownButtons = isButtonShown[i];
                
                shownButtons.className = "navButton";
                //console.log("hiding");
            }
        }
    }
}

//Interctive quiz
//Setup quiz and clear form
function startQuiz() {
    var quizStart = document.getElementById("quizStart");
    var quizQs = document.getElementById("quizFormContainer");
    var resetFrom = document.getElementById("quizForm");

    resetFrom.reset();
    quizStart.hidden = true;
    quizQs.hidden = false;
}


function submitAns() {
    //quizForm vars
    var quizQs = document.getElementById("quizFormContainer");
    var quizEnd = document.getElementById("quizEnd");

    //marking logic vars
    var scoreDisplay = document.getElementById("scoreTotal");
    let q1Ans = document.getElementById("q1Ans1"); 
    let q2Ans = document.getElementById("q2Ans2");
    let q3Ans = document.getElementById("q3Ans3");
    const ansArr = [q1Ans, q2Ans, q3Ans];
    var finalScore = 0;

    //console.log(ansArr);

    //marking logic
    for (let i = 0; i < ansArr.length; i++) {
        const currentAns = ansArr[i];
        //console.log(currentAns);
        if (currentAns.checked) {
            //console.log(finalScore);
            finalScore++;
        }
    }

    scoreDisplay.innerHTML = "You scored " + finalScore + "/3";

    quizQs.hidden = true;
    quizEnd.hidden = false;
    
}

//Restart quiz and set tabbing focus to quiz start
function restartQuiz() {
    var quizStart = document.getElementById("quizStart");
    var quizEnd = document.getElementById("quizEnd");
    var startButton = document.getElementById("quizStartButton");

    quizEnd.hidden = true;
    quizStart.hidden = false;
    startButton.focus();
}




