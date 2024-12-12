
const prop = "name"

const car = {
    year: 2015,
    mark: "BMW",
    model: "X5",
    engine: {
        capacity: 2.5,
        fuel: "diesel",
    },
    ["car_" + prop]: "beshka"
}

const human = {
    gender: "female",
    ["human_" + prop]: "Anna",
    age: 25,
    friends: ["Bob", "Alex", "Marina"]
}

//----конструктор объекта------

class Student {
    constructor(name, age, isStudent) { ///похоже на функцию, которая принимает параметры
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    
}
}

//---теперь используем этот конструктор для создания объекта

const student = new Student("Bob", 32, true) /// здесь аргументы

console.log(student.name);
student.course = "Front-end"//создание нового свойства
student.course = "Back-end"///изменение свойства
delete student.course  ///удаление свойства

for (let key in student) {   ///перебор ключей объеката циклом for in
    console.log(`${key}: ${student[key]}`);
    
}

//дайте имя вашему виртуальному питомцу
let name = "Strider"
//состояние питомца
let happiness = 50
let hunger = 50

//функция приветствия
function sayHi () {
    console.log('Meow!');
    
}

//функция для проверки состояния питомца

function checkStatus() {
    console.log(`Счастье: ${happiness}, Голод: ${hunger}`);
    
}

//функция для кормления питомца
function feedPet (foodQuantity) {
    hunger = hunger - foodQuantity

    if (hunger < 0) {
        hunger = 0
    }
    console.log("Питомец покормлен!");
    
}

//упакуем все это в объект
const pet = {
    name: "Strider",
    happiness: 50,
    hunger: 50,
    sayHi: function  () {   ////можно написать сокращенно sayHI() итд
        console.log('Meow!');
    },
    checkStatus() {
        console.log(`Счастье: ${this.happiness}, Голод: ${this.hunger}`);
        
    },
    feedPet(foodQuantity) {
        this.hunger = this.hunger - foodQuantity
    
        if (this.hunger < 0) {
            this.hunger = 0
        }
        console.log("Питомец покормлен!");
        
    },
    playWithPet() {
        this.happiness = this.happiness + 20       
    },
}

pet.checkStatus();
pet.feedPet(50);
pet.checkStatus();
pet.playWithPet();
pet.checkStatus();


class Pet {
    constructor(type, name, happiness, hunger) {
        this.type = type;
        this.name = name;
        this.happiness = happiness;
        this.hunger = hunger;
    }
    sayHi () { 
        console.log('Meow!');
    };
    checkStatus() {
        console.log(`${this.name}: Счастье: ${this.happiness}, Голод: ${this.hunger}`);
        
    };
    feedPet(foodQuantity) {
        this.hunger = this.hunger - foodQuantity
    
        if (this.hunger < 0) {
            this.hunger = 0
        }
        console.log(`${this.name} покормлен!`);
        
    };
    playWithPet() {
        this.happiness = this.happiness + 20       
    };
}

const myNewPet = new Pet("rat", "Larisa",100, 100)
myNewPet.checkStatus()

const petMarina = new Pet("rabbit", "Valera", 100, 88)
petMarina.checkStatus()
petMarina.feedPet(80)
petMarina.checkStatus()


const keys = Object.keys(pet) ///найдет все имена ключей в укаа\занном объекте
const values = Object.values(pet) //найдет все значения ключей указанного объекта


///рест оператор(...)
