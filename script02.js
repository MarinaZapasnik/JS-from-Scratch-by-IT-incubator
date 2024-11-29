//морской бой

//позиция корабля

const lacation1 = 3
const lacation2 = 4
const lacation3 = 5

let hits = 0 // счетчик попаданий

let isSunk = false     //потоплен или нет
let guess              //выстрел

while (isSunk === false) {
    guess = +prompt ('Fire! Enter a number 0-6')
    if (guess === lacation1 || guess === lacation2 || guess === lacation3) {
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