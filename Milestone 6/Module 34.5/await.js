async function loadData() {
    console.log('one');
    console.log('two');

    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(data => console.log(data));

    const rest = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await rest.json();
    // console.log(users);

    console.log('three');
    console.log('four');
}

loadData();


const loadData2 = async () => {
    console.log('1');
    console.log('2');
    try {
        const res = await fetch('https://jsonplaceholder.typicod.com/users');
        const data = await res.json();
        console.log(data[1]);
    } catch (error) {
        console.error('error');
    }
    console.log('3');
    console.log('4');
}

loadData2();