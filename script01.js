//камень ножницы бумага

let userChoice;
let comuterChoice;
let isWinner = false;

while (!isWinner) {  

userChoice = prompt("Выбери: 'камень', 'ножницы' или 'бумага'");
userChoice = userChoice.toLowerCase();

let randomNum = Math.floor(Math.random() * 3);

// if (randomNum === 0) {
//     comuterChoice = "камень";
// } else if (randomNum === 1) {
//     comuterChoice = "ножницы";
// } else {
//     comuterChoice = "бумага";
// }

switch(randomNum) {
    case 0:
        comuterChoice = "камень"
        break
    case 1: 
        comuterChoice = "ножницы"
        break
    case 2:
        comuterChoice = "бумага"
        break

}

if (userChoice === "камень" ||
    userChoice === "ножницы" ||
    userChoice === "бумага")
    { 
        alert(`Компьютер выбрал: ${comuterChoice}`);
    if (userChoice === comuterChoice) {
        alert ("Ничья, играем дальше")
    }  else {  
        let isUserWinner =
            (userChoice === 'камень' && comuterChoice === 'ножницы') ||
            (userChoice === 'бумага' && comuterChoice === 'камень') ||
            (userChoice === 'ножницы' && comuterChoice === 'бумага')
            
            const message = isUserWinner? "Ты выиграл!" : "Компьютер выиграл!" 
            alert (message)
            }
        
    } else {
            alert("Введите корректное значение: 'камень', 'ножницы' или 'бумага'");
        }
    }
