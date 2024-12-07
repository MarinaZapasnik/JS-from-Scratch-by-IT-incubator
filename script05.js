const scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

    let i = 0;
    let output;
    let highScore = -Infinity;
    let minScore = Infinity; 

    while (i < scores.length) {
        output = `Bubble solution #${i} score: ${scores[i]}`;
        console.log(output);
        i ++
    }

    console.log(`Bubbles tests: ${scores.length}`);

    for (let i = 0; i < scores.length; i ++) {
        output = `Bubble solution #${i} score: ${scores[i]}`;
        console.log(output);
        if (highScore < scores[i]) {
            highScore = scores[i]
        }
        if (minScore > scores[i]) {
            minScore = scores[i]
        }
    }
    
    console.log(`Bubbles tests: ${scores.length}`);
    console.log(`Highest bubble score: ${highScore}`);

    const bestSolutions = [];
    const minSolutions = [];

    for (let i = 0; i < scores.length; i ++) {
        if (scores[i] === highScore) {
            bestSolutions.push(scores[i]);
        }
        if (scores[i] === minScore) {
            minSolutions.push(scores[i]);
        }
    }

    
    console.log(`Solutions with highest score: ${bestSolutions}`);
    console.log(`Solutions with minimal score: ${minSolutions}`);

    

    

    