const myScores = [82, 75, 91, 85, 93, 88, 99];

function calculateAverage(scores) {
    let sum = 0;
    let count = scores.length;
    for (let i = 0; i < count; i++) {
        sum = sum + scores[i];
    }
    return Math.round(sum / count);
}

function reduceAverage(scores) {
    return Math.round(
        scores.reduce((sum, item) => {
        return sum + item;
        }, 0) / scores.length
    );
}

function classifyScores(scores) {
    const classifiedScores = [];

    for (let i = 0; i < scores.length; i++) {
        let grade; // Переменная для хранения оценки
        const score = scores[i];

        if (score >= 90) {
        grade = "A";
        } else if (score >= 80) {
        grade = "B";
        } else if (score >= 70) {
        grade = "C";
        } else if (score >= 50) {
        grade = "D";
        } else {
        grade = "F";
        }

        classifiedScores.push(grade);
    }

    return classifiedScores;
}

function mapScores(scores) {
    
    return scores.map(score => {
        if (score >= 90) {
        return "A";
        } else if (score >= 80) {
        return "B";
        } else if (score >= 70) {
        return "C";
        } else if (score >= 50) {
        return "D";
        } else {
        return "F";
        }
    })
    
}

function quickMapScores(scores) {
    return scores.map(score => 
        score >= 90 ? "A" :
        score >= 80 ? "B" :
        score >= 70 ? "C" :
        score >= 50 ? "D" :
        "F"
    );
}


let average = calculateAverage(myScores);
let redAverage = reduceAverage(myScores);

console.log(`Средний балл студента: ${average}`);
console.log(`Средний балл студента: ${redAverage}`);

const classifiedScores = classifyScores(myScores);
const mapedScores = classifyScores(myScores);
const quickMapedScores = quickMapScores(myScores);

console.log(`Classified scores: ${classifiedScores}`)
console.log(`Classified scores: ${mapedScores}`)
console.log(`Classified scores: ${quickMapedScores}`)



//------------EXERCISES-----------------

//-------------1-------------------


function reverseArray(array) {
    let reverseArray = [];
    for (let i = array.length - 1; i >= 0; i --) {
        reverseArray.push(array[i])
    }    
    return reverseArray
}

function unshiftReverseArray(array) {
    let reverseArray = [];
    for (let i = 0; i< array.length; i ++) {
        reverseArray.unshift(array[i])
    }    
    return reverseArray
}

function simpleReverseArrayWithMethod(array) {
    let newArray = [ ...array]
    return newArray.reverse()
}

console.log(`Reverse array from ${myScores} is ${reverseArray(myScores)}`);
console.log(`Reverse array from ${myScores} is ${unshiftReverseArray(myScores)}`);
console.log(`Reverse array from ${myScores} is ${simpleReverseArrayWithMethod(myScores)}`);

//--------------------------2-------------------------

function removeElement (array, element) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== element) {
            newArray.push(array[i])
        }
        
    }
    return newArray
}

function removeElementWithMethod (array, element) {
    let newArray = [ ...array ]
    for (let i = 0; i< array.length; i ++){
        if (newArray[i] === element) {
            
            newArray.splice(i, 1)
        }
    }
    return newArray
}

function removeElementWithFilter(array, element) {
    return array.filter(item => item !== element)
    
 }

let deletedElement = 85;
console.log(`New array without element ${deletedElement} in array ${myScores} is ${removeElement(myScores, deletedElement)}`);
console.log(`New array without element ${deletedElement} in array ${myScores} is ${removeElementWithMethod(myScores, deletedElement)}`);
console.log(`New array without element ${deletedElement} in array ${myScores} is ${removeElementWithFilter(myScores, deletedElement)}`);
console.log(myScores);


