console.log("connected");


const handleAddToStorage = () => {
    const input = document.getElementById("inputfield");
    const inputemail = document.getElementById("inputemail");
    const inputValue = input.value;
    const emailValue = inputemail.value;
//     console.log(inputValue);
//     localStorage.setItem(emailValue, inputValue);
//     input.value = "";
//     inputemail.value = "";
// }

const data = {inputValue, emailValue};
localStorage.setItem(emailValue, JSON.stringify(data));
input.value = "";
inputemail.value = "";

}

const storeItem = localStorage.getItem("s@gmail.com");
console.log(JSON.parse(storeItem));

const handleClearStorage = () => {
    localStorage.clear();
}