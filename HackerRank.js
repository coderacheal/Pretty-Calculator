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