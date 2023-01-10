function generateQuestion() {
    let h8Question = [
        {
            question: "What is JS?",
            answer: "javascript"
        },
        {
            question: "What is p stands for in HTML?",
            answer: "paragraph"
        },
        {
            question: "How to call id in CSS",
            answer: "#"
        }
    ]

    let randomIdx = Math.floor(Math.random() * h8Question.length);
    let randomQuestion = h8Question[randomIdx]
    // console.log(randomQuestion);

    // console.log(randomQuestion);

    let questionElement = document.getElementById("question");
    questionElement.innerHTML = randomQuestion.question

    return randomQuestion
}

// console.log(generateQuestion());
let generatedQuestion = generateQuestion();
let counter = 0

//check answer button
let checkAnswerButton = document.getElementById("btnAnswer")
checkAnswerButton.addEventListener("click", function () {
    let answerTextBox = document.getElementById("answer");
    if (!answerTextBox.value) {
        alert("input harus diisi")
    } else {
        counter++;
        let userAnswer = "";
        if (answerTextBox.value === generatedQuestion.answer) {
            userAnswer = "True";
            document.getElementById("img-true").style.display = "inline"
            // let message = `${counter} - good job!`
        }
        else {
            userAnswer = "Wrong";
            document.getElementById("img-true").style.display = "none";
        }
        let message = `${counter} - ${userAnswer}`

        let list = document.getElementById("list");
        let newMessage = document.createElement("li");
        newMessage.innerText = message;
        list.appendChild(newMessage);
    }
});

let anotherQuestionButton = document.getElementById("btnAnotherQuestion")
anotherQuestionButton.addEventListener("click", function() {
    generatedQuestion = generateQuestion()
});