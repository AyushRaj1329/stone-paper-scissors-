let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const msgcontainer=document.querySelector(".msg-container")

const us=document.querySelector("#user-score");
const cs=document.querySelector("#computer-score");



const generateCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const i = Math.floor(Math.random() * 3);
    return option[i];
}

const draw = () => {
    console.log("match is draw");
    msg.innerText='Match Draw... Play Again';
    msgcontainer.style.backgroundColor="white"
    msgcontainer.style.color="black"
}

const compWin = () => {
    console.log("computer wins -_-");
    msg.innerText='Computer Wins -_-';
    compScore++;
    cs.innerText=compScore;
    msgcontainer.style.backgroundColor="red"
}

const userWin = () => {
    console.log("user wins ^_^ ");
    msg.innerText='User Wins ^_^';
    userScore++;
    us.innerText=userScore;
    msgcontainer.style.backgroundColor="green"
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const computerChoice = generateCompChoice();
    console.log("comp choice = ", computerChoice);

    if (userChoice === computerChoice) {
        draw();
    }
    if (userChoice == "rock" && computerChoice == "scissor") {
        userWin();
    }
    if (userChoice == "scissor" && computerChoice == "paper") {
        userWin();
    }
    if (userChoice == "paper" && computerChoice == "rock") {
        userWin();
    }

    if (userChoice == "paper" && computerChoice == "scissor") {
        compWin();
    }
    if (userChoice == "rock" && computerChoice == "paper") {
        compWin();
    }
    if (userChoice == "scissor" && computerChoice == "rock") {
        compWin();
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice is picked",userChoice);
        playGame(userChoice);
    })
})