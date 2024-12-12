
const prop = "name"
const car = {
    year: 2015,
    mark: "BMW",
    fuel: "diesel",
    model: "X5",
    engine: 2.5,
    [prop]: "beshka"
}

const human = {
    gender: "female",
    [prop]: "Anna",
    age: 25,
}

//----конструктор объекта------

class Student {
    constructor(name, age, isStudent) { ///похоже на функцию, которая принимает параметры
        this.name = name,
        this.age = age,
        this.isStudent = isStudent,
    }
}

//---теперь используем этот конструктор для создания объекта

const student = new Student("Bob", 32, true) /// здесь аргументы

