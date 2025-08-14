function  resultReport( marks ) {
    if(Array.isArray(marks)===false){
        return 'Invalid';
    }
    
    let result = { finalScore: 0 , pass: 0, fail: 0 };

    if (marks.length === 0){
        return result;
    }

    const passMark = 40;
    let passed = 0;
    let failed = 0;
    let totalScore = 0;
    let avgScore = 0;

    for (let i of marks){
        if (i >= passMark){
            passed +=1;
        }else{
            failed+=1;
        }

        totalScore += i;

    }

    avgScore = totalScore / marks.length;
    avgScore = Math.round(avgScore);

    result.finalScore = avgScore;
    result.pass = passed;
    result.fail = failed;

    return result;

}


console.log(resultReport([]));
console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
console.log(resultReport([99, 87, 67, 12 ,87]));
console.log(resultReport([99]));
console.log(resultReport(100));