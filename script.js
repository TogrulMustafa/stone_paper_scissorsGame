const list = ['paper.jpg','scissors.jpg','stone.jpg'];
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const stone = document.getElementById('stone');
const computerResult = document.getElementById('computerResult');
const generalResult = document.getElementById('generalResult');

paper.onclick = doChoose
scissors.onclick = doChoose
stone.onclick = doChoose

function doChoose() {
    const compChoose = randomChoose()
    const myChoose = this.dataset.id
    if ((compChoose == 0) && (myChoose == 0)) {
        result = 'Hec-hece!'
    }
    else if ((compChoose == 1) && (myChoose == 1)) {
        result = 'Hec-hece!'
    }
    else if ((compChoose == 2) && (myChoose == 2)) {
        result = 'Hec-hece!'
    }
    else if ((compChoose == 1) && (myChoose == 0)) {
        result = 'Uduzdunuz!Qayci kagizi kesir!'
    }
    else if ((compChoose == 0) && (myChoose == 1)) {
        result = 'Uddunuz!Qayci kagizi kesir!'
    }
    else if ((compChoose == 2) && (myChoose == 0)) {
        result = 'Uddunuz!Kagiz dasi ortur!'
    }
    else if ((compChoose == 0) && (myChoose == 2)) {
        result = 'Uduzdunuz!Kagiz dasi ortur!'
    }
    else if ((compChoose == 2) && (myChoose == 1)) {
        result = 'Uduzdunuz!Das qaycini ezir!'
    }
    else {
        result = 'Uddunuz!Das qaycini ezir!'
    }
    generalResult.innerHTML = result

}

function randomChoose() {
    const randomNumber = Math.round(Math.random()*2)
    computerResult.src = `img/${list[randomNumber]}`

    return randomNumber

}