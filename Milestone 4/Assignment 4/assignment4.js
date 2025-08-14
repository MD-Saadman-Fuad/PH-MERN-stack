function totalFine( fare ){
    if (typeof fare !== "number" || fare <= 0){
        return "Invalid";
    }

    return fare + (fare*(20/100))+30;
}



function onlyCharacter( str ){
    if(typeof str !== 'string'){
        return 'Invalid';
    }

    return str.split(" ").join("").toUpperCase();
}



function bestTeam(player1, player2){
    if(typeof player1 !== 'object' || typeof player2!== 'object'){
        return 'Invalid';
    }

    let p1 = player1.foul + player1.cardY + player1.cardR;
    let p2 = player2.foul + player2.cardY + player2.cardR;

    if(p1 < p2){
        return player1.name;
    }else if(p1 > p2){
        return player2.name;
    }else{
        return "Tie";
    }
}



function  isSame(arr1 , arr2 ) {
    if (Array.isArray(arr1) !== true || Array.isArray(arr2) !== true){
        return "Invalid";
    }
    if(arr1.length !== arr2.length){
        return false;
    }

    for (let i = 0; i < arr1.length; i++){
        if (arr1[i]!==arr2[i]){
            return false;
        }
    }
    return true;
}



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