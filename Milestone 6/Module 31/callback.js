

//

function pakhiBhai (call, patri){
    console.log('Callmeback parameter', call);
    if (patri){
        // console.log(call);
        call(patri);
    }else{
        console.log('no patri no call');
    }
}

function callSomeone(person){
    console.log('calling', person);
}

pakhiBhai(callSomeone, 'Sakib');