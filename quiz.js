const questions = 20

function random(max) {
    return Math.floor((Math.random() * max) + 1)
}

function makeQuiz(set) {
    const elements = getRandomElements(2, set)
    console.log(elements)
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
    return internal(amount, [], lst.length - 1, lst)
}