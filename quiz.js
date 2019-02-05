const questions = 20
var count = 0
var correct = ""

alternatives = "<input type=\"radio\" name=\"opt\" id=\"a\"><label id=\"lbla\" for=\"a\">option 1</label><br>"
             + "<input type=\"radio\" name=\"opt\" id=\"b\"><label id=\"lblb\" for=\"b\">option 2</label><br>"
             + "<input type=\"radio\" name=\"opt\" id=\"c\"><label id=\"lblc\" for=\"c\">option 3</label><br>"
             + "<input type=\"radio\" name=\"opt\" id=\"d\"><label id=\"lbld\" for=\"d\">option 4</label><br>"

function random(max) {
    return Math.floor((Math.random() * max) + 1)
}

function makeQuiz(set, title) {
    document.getElementById('header1').innerHTML = title
    document.getElementById('header2').innerHTML = "Det finnes " + set.length + " spørsmål i denne kategorien. Du vil få maksimalt 20 spørsmål"
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

function startQuiz() {
    console.log("startQuiz: " + elements)
    document.getElementById('options').innerHTML = alternatives
    if (elements.length === 0) {
        endQuiz()
    } else {
        const current = elements.pop()
        document.getElementById('header2').innerHTML = current.question
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
    console.log(correct)
    if (document.getElementById(correct).checked) {
        count++
        console.log("this is correct")
        startQuiz()
    } else {
        console.log("this is wrong")
        startQuiz()
    }
}

function endQuiz() {
    console.log(count)
}