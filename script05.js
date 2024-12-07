const scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

    
    function printScore (array) {
        let output;
        for (let i = 0; i < array.length; i ++) {
            output = `Bubble solution #${i} score: ${array[i]}`;
            console.log(output);
        }
        
    }

    function getHighScore (array) {
        let highScore = -Infinity;
        for (let i = 0; i < array.length; i ++) {
            if (highScore < array[i]) {
                highScore = array[i]
            }
        }
        return highScore
    }

    function getMinScore (array) {
        let minScore = Infinity; 
        for (let i = 0; i < array.length; i ++) {
            if (minScore > array[i]) {
                minScore = array[i]
            }
        }
        return minScore
    }

    function getBestScores(array, value) {
            let bestSolutions = [];
            for (let i = 0; i < array.length; i ++) {
                if (array[i] === value) {
                    bestSolutions.push(array[i]);
                }
            
        }
        return bestSolutions
    }


    const highScore = getHighScore(scores);
    const minScore =  getMinScore(scores)

    console.log(`Bubbles tests: ${scores.length}`);
    printScore(scores);

    console.log(`Highest bubble score: ${highScore}`);
    console.log(`Minimal bubble score: ${minScore}`);
    

    
    console.log(`Solutions with highest score: ${getBestScores(scores, highScore)}`);
    console.log(`Solutions with minimal score: ${getBestScores(scores, minScore)}`);