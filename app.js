
let bands = [document.querySelector('#band-1'),
document.querySelector('#band-2'),
document.querySelector('#band-3'),
document.querySelector('#band-4')]

let first = document.querySelector("#firstDigit")
let second = document.querySelector("#secondDigit")
let power = document.querySelector("#power")
let tolrance = document.querySelector("#tolrance")


let digits = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "gray", "white", "gold", "silver"]

let multiplier = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet"]//, "gold", "silver"] multiplier of gold and silver need to be addec
let toler = ["brown", "red", "green", "blue", "violet", "gray", "gold", "silver"]//, "gold", "silver"] multiplier of gold and silver need to be addec
let tolerNumber = [1, 2, 0.5, 0.25, 0.1, 0.05, 5, 10]//, "gold", "silver"] multiplier of gold and silver need to be addec

function changeColor(Color, bandNumber) {
    bands[bandNumber - 1].style.backgroundColor = Color;
    console.log(Color)

    if (bandNumber === 1) {
        first.innerHTML = digits.indexOf(Color) + 1

    }
    else if (bandNumber === 2) {

        second.innerHTML = digits.indexOf(Color) + 1
    }

    else if (bandNumber === 3) {

        power.innerHTML = multiplier.indexOf(Color)
    }

    else {
        tolrance.innerHTML = tolerNumber[toler.indexOf(Color)]

    }
    // console.log(digits.indexOf)



}



