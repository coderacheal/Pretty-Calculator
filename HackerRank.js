// Sock Manager

function sockMerchant(n, ar) {
    // Write your code here
    const sorted = ar.sort((a, b) => a - b);
    let thePairs = 0;
    
    for (let i = 0; i < n; i++){
        if (sorted[i] === sorted[i + 1]){
            thePairs++;
            i++;
        }
    }
    return thePairs;
}


// counting valleys

function countingValleys(steps, path) {
    // Write your code here
    let mountain = 0;
    let valley = 0;
    
    for(let i = 0; i < steps; i++){
        if (path[i] == 'D') {
            mountain--;
        }
        else {
            if (mountain == -1) {
                valley++;
            }
            mountain++;
        }
    }
    return valley;

}

// Grading students

function gradingStudents(grades) {
    // Write your code here
    for (let i = 0; i < grades.length; i++){
        if ((grades[i] >= 38) && ((grades[i] % 5 == 3) || (grades[i] % 5 == 4))) {
            grades[i] = grades[i] + (5 - (grades[i] % 5))
            }
    }
    return grades
    
}

function gradingStudents(grades) {
    let best = 0;
    let worst = 0;
    let bestScore = scores[0];
    let worstScore = scores[0];
    const lengthOfData = scores.length;
    for(let i = 1; i < scores.length; i++) {
        if (scores[i] > bestScore) {
            bestScore = scores[i];
            best++;
            continue;
        }
        if (scores[i] < worstScore) {
            worstScore = scores[i]
            worst++;
            continue;
        }
    }
    return [best, worst]

}


function findDigits(n) {
    // Write your code here
    let cnt = 0;
    let str =n.toString();
    let arr = str.split('');
    for( let i = 0; i < arr.length; i++){
        if(n % Number(arr[i]) ===0){
            cnt++;
        }
    }
        return cnt;
}


function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let appleArr = new Array(apples.length).fill(0);
    let orangeArr = new Array(oranges.length).fill(0);
    for (let i = 0; i < apples.length; i++) {
        appleArr[i] = apples[i] + a;

    }
    for (let i = 0; i < oranges.length; i++) {
        orangeArr[i] = oranges[i] + b;

    }
    let appleCount = 0;
    let orangeCount = 0;
    for (let i = 0; i < appleArr.length; i++) {
        if (appleArr[i] >= s && appleArr[i] <= t) {
            appleCount++
        } else {
            appleCount = appleCount
        }
    }
    for (let i = 0; i < orangeArr.length; i++) {
        if (orangeArr[i] >= s && orangeArr[i] <= t) {
            orangeCount++;
        } else {
            orangeCount = orangeCount
        }

    }
    console.log(appleCount);
    console.log(orangeCount);
}
