//морской бой

//позиция корабля

const randomLoc = Math.floor(Math.random() * 5) //от 0 до 4

const location1 = randomLoc
const location2 = location1 + 1
const location3 = location2 + 1

let hits = 0 // счетчик попаданий
let guesses = 0 //счетчик выстрелов

let isSunk = false     //потоплен или нет
let guess              //выстрел

while (isSunk === false) {
    guess = +prompt ('Fire! Enter a number 0-6')
    if (guess < 0 || guess > 6) { 
        alert ('Please? enter a valid cell number 0-6!')
    } else {
        guess = guess + 1//увеличиваем счетчик выстрелов
    
    if (guess === location1 || guess === location2 || guess === location3) {
        alert ('Hit')
        hits = hits + 1
        if(hits === 3) {
            isSunk = true
            alert('You sank my ship!')
        }
    } else {
        alert ('Miss!')
        
    }
}
}

const stats = "You have " + hits + " hits out of " + guesses + " shots."
alert (stats)