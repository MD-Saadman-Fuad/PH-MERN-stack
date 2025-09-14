const getData1 = new Promise((resolve, reject) => {
    const num = Math.random() * 10;
    console.log('Generated number:', num); 
    if (num > 5) {
        resolve(`Data fetched successfully {num: ${num}}`);
    } else {
        reject(`Error fetching data, {err: 'Number is too low'}`);
    }
})
const getData2 = new Promise((resolve, reject) => {
    const num = Math.random() * 10;
    console.log('Generated number:', num); 
    if (num > 5) {
        resolve(`Data fetched successfully {num: ${num}}`);
    } else {
        reject(`Error fetching data, {err: 'Number is too low'}`);
    }
})
const getData3 = new Promise((resolve, reject) => {
    const num = Math.random() * 10;
    console.log('Generated number:', num); 
    if (num > 5) {
        resolve(`Data fetched successfully {num: ${num}}`);
    } else {
        reject(`Error fetching data, {err: 'Number is too low'}`);
    }
})

// getData.then(data => console.log(data))
//        .catch(err => console.log(err))

Promise.all([getData1, getData2, getData3])
.then(data => console.log(data))
.catch(err => console.log(err))