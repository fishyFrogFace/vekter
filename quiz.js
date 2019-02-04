const questions = 20

function random(max) {
    return Math.floor((Math.random() * max) + 1)
}

function makeQuiz(set, title) {
    const elements = getRandomElements(questions, set)
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