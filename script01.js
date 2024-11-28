//камень ножницы бумага

let userChoice;
let comuterChoice;
let isWinner = false;

userChoice = prompt("Выбери: 'камень', 'ножницы' или 'бумага'");
userChoice = userChoice.toLowerCase();

let randomNum = Math.floor(Math.random() * 3);
if (randomNum === 0) {
    comuterChoice = "камень";
} else if (randomNum === 1) {
    comuterChoice = "ножницы";
} else {
    comuterChoice = "бумага";
}

if (
    userChoice === "камень" ||
    userChoice === "ножницы" ||
    userChoice === "бумага"
) { 
    alert(`Компьютер выбрал: ${comuterChoice}`);
    if (userChoice === comuterChoice) {
    alert ("Ничья, играем дальше")
}  else if  (
        (comuterChoice === 'камень' && userChoice === 'ножницы') ||
            (comuterChoice === 'ножницы' && userChoice === 'бумага') ||
            (comuterChoice === 'бумага' && userChoice === 'камень')
) {

}
else {
  alert("Введите корректное значение: 'камень', 'ножницы' или 'бумага'");
}
