const addNumberToLS = () => {
    const number = Math.ceil(Math.random() * 100);
    console.log(number);
    localStorage.setItem('number', number);
}


const setObjectTOLS = () => {
    const user = {
        name: 'John',
        age: 30
    };
    localStorage.setItem('user', JSON.stringify(user));

}

const getNumberFromLS = () => {
    const number = localStorage.getItem('number');
    console.log('from saved local storage', number);
}

const getObjectFromLS = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('from saved local storage', user);
    console.log(user.name);
    console.log(user.age);
}