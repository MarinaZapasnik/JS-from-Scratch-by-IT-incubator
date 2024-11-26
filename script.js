
let energy = 10;

const INITIAL_ENERGY = 10;
const MIN_ENERGY = 0;
const LOW_ENERGY_THRESHOLD = 3;

// console.log ("Текущий уровень заряда: " + energy);

// console.log(`Текущий уровень заряда: ${energy}`);

while (energy >= MIN_ENERGY) {
    console.log(`Текущий уровень заряда: ${energy}`);

    if (energy === 0) {
        console.log("Робот грустит...Нужно подзарядить");
    } else if (energy <= LOW_ENERGY_THRESHOLD) {
        console.log("Робот начинает чувствовать усталость");
    } else {
        console.log("Робот счастлив и бодрствует");
    }

    energy --;
}
