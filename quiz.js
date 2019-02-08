var questions = 21
var count = 0
var correct = ""
var firstQuestion = true //bug that registers first question as wrong, remove this when fixed
var questionCount = 0

alternatives = "<input type=\"radio\" name=\"opt\" id=\"a\"><label id=\"lbla\" for=\"a\">option 1</label><br>"
             + "<input type=\"radio\" name=\"opt\" id=\"b\"><label id=\"lblb\" for=\"b\">option 2</label><br>"
             + "<input type=\"radio\" name=\"opt\" id=\"c\"><label id=\"lblc\" for=\"c\">option 3</label><br>"
             + "<input type=\"radio\" name=\"opt\" id=\"d\"><label id=\"lbld\" for=\"d\">option 4</label><br>"

function random(max) {
    return Math.floor((Math.random() * max) + 1)
}

function makeQuiz(set, title) {
    document.getElementById('header1').innerHTML = title
    questions = (title === "Alle") ? 81 : 21
    document.getElementById('header2').innerHTML = "Det finnes " + set.length + " spørsmål i denne kategorien. Du vil få maksimalt " + (questions-1) + " spørsmål"
    //add possibility to choose amount of question, show available amount
    elements = getRandomElements(questions, set)
    document.getElementById('options').innerHTML = ""
    document.getElementById('button').innerHTML = "<button id=\"btn\">Start quiz</button>"
    document.getElementById('btn').addEventListener('click', function sq() {
        this.removeEventListener('click', sq)
        button.addEventListener('click', function() {checkAnswer()})
        startQuiz()
        })
    console.log(elements)
    console.log(title)
}

function getRandomElements(amount, lst) {
    function internal(howMany, aquired, max) {
        if (howMany === 0) {
            return aquired
        } else {
            maxEl = lst[max]
            const randEl = random(max)
            const newEl = lst[randEl]
            aquired.push(newEl)
            lst[randEl] = maxEl
            lst[max] = newEl
            return internal(howMany - 1, aquired, max - 1, lst)
        }
    }
    if (lst.length <= amount) {
        return internal(lst.length, [], lst.length - 1, lst)
    } else {
        return internal(amount, [], lst.length - 1, lst)
    }
}

function startQuiz(status) {
    console.log("startQuiz: " + elements)
    document.getElementById('options').innerHTML = alternatives
    if (elements.length === 0) {
        endQuiz()
    } else {
        const current = elements.pop()
        document.getElementById('header2').innerHTML = questionCount + ". " + current.question
        questionCount++
        makeOptionDiv(current.answers)
        correct = current.correctAnswer
        document.getElementById('btn').innerHTML = "Neste"
    }
}

function makeOptionDiv(answers) {
    Object.keys(answers).forEach(function(key) {
        document.getElementById("lbl"+key).innerHTML = answers[key]
    })
}

function checkAnswer() {
    response = document.getElementById('response')
    if (document.getElementById(correct).checked) {
        count++
        response.innerHTML = "Status forrige spørsmål: Riktig"
        response.style.color = "green"
        startQuiz()
    } else {
        if (firstQuestion) {
            firstQuestion = false
        } else {
            response.innerHTML = "Status forrige spørsmål: Ikke rett"
            response.style.color = "black"
        }
        startQuiz()
    }
}

function endQuiz() {
    document.getElementById('options').innerHTML = "Dersom du ønsker å ta en ny test, kan du laste inn siden på nytt."
    document.getElementById('button').innerHTML = ""
    document.getElementById('header2').innerHTML = "Du fikk " + count + " riktige svar av " + (questions-1) + " spørsmål. "
                                                 + "For å bestå må du ha minst " + (questions-1)*0.8 + " riktige svar."
}