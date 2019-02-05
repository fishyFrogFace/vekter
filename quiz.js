const questions = 20

function random(max) {
    return Math.floor((Math.random() * max) + 1)
}

function makeQuiz(set, title) {
    document.getElementById('header1').innerHTML = title
    document.getElementById('header2').innerHTML = "Det finnes " + set.length + " spørsmål i denne kategorien. Du vil få maksimalt 20 spørsmål"
    //add possibility to choose amount of question, show available amount
    const elements = getRandomElements(questions, set)
    document.getElementById('options').innerHTML = "<button id=\"btn\">Start quiz</button>"
    document.getElementById('btn').addEventListener('click', function() {startQuiz(elements)})
    console.log(elements)
    console.log(title)
}

function getRandomElements(amount, lst) {
    function internal(count, aquired, max) {
        if (count === 0) {
            return aquired
        } else {
            maxEl = lst[max]
            const randEl = random(max)
            const newEl = lst[randEl]
            aquired.push(newEl)
            lst[randEl] = maxEl
            lst[max] = newEl
            return internal(count - 1, aquired, max - 1, lst)
        }
    }
    if (lst.length < amount) {
        return internal(lst.length, [], lst.length - 1, lst)
    } else {
        return internal(amount, [], lst.length - 1, lst)
    }
}

function startQuiz(elements) {
    function internal(correct) {
        if (elements.length === 0) {
            endQuiz(correct)
        } else {
            current = elements.pop()
            document.getElementById('header2').innerHTML = current.question
            makeOptionDiv(current.answers)
            document.getElementById('btn').innerHTML = "Neste"
            //change caller function or introduce global counter
        }
    }
    internal(0)
}

function makeOptionDiv(answers) {
    Object.keys(answers).forEach(function(key) {
        console.log(key)
        console.log(answers[key])
    })
}

