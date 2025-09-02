console.log("Home. js Connected")
const validPin = 1234;
const transactionHistory = [];

// function too get  input values

function getInputValues (id){
    return document.getElementById(id).value;
}
function getInputValuesNumber (id){
    return parseInt(document.getElementById(id).value);
}

// Function to get innerText

function getInnerText(id){
    return parseInt(document.getElementById(id).innerText);
}

// function to set inner text

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

// toggle handleing
function handleToggle (id){
    const forms = document.getElementsByClassName('form');

    for(let form of forms){
        form.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}

// Toggle form btn

function toggleBtn(id){
    const formBtns = document.getElementsByClassName("form-btn");

    for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
        btn.classList.add("border-gray-300");
    }
    document.getElementById(id).classList.remove("border-gray-300");
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// add money functionality
document.getElementById('add-money-btn').addEventListener('click', function(event) {
    event.preventDefault();
    // console.log("Add Money button clicked");
    const bank = getInputValues('bank');
    const accountNumber = getInputValues('account-number');
    const addAmount = getInputValuesNumber('add-amount');
    const pinNumber = getInputValues('pin-number');

    // console.log("Selected Bank:", bank);
    // console.log("Account Number:", accountNumber);
    // console.log("Amount to Add:", addAmount);
    // console.log("Pin Number:", pinNumber);

    if(accountNumber.length !== 11) {
        alert("Please enter a valid 11-digit account number.");
        return;
    }
    if(pinNumber != validPin) {
        alert("Invalid PIN. Please try again.");
        return;
    }
    if(isNaN(addAmount) || addAmount <= 0) {
        alert("Please enter a valid amount to add.");
        return;
    }

    const currentBalance = getInnerText('available-balance');
    // console.log("Current Balance:", currentBalance);

    const totalNewBalance = currentBalance + addAmount;
    console.log("New Balance:", totalNewBalance);

    setInnerText('available-balance', totalNewBalance);

    const data = {
        name: "Add Money",
        date: new Date().toLocaleString(),
    }
    transactionHistory.push(data);


    console.log(transactionHistory);
});


//Cashout Feature

document.getElementById('withdraw-money-btn').addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Withdraw Money button clicked");
    // const bank = document.getElementById('bank').value;
    const accountNumber = getInputValues('agent-number-cashout');
    const addAmount = getInputValuesNumber('cashout-amount');
    const pinNumber = getInputValues('pin-number-cashout');

    // console.log("Selected Bank:", bank);
    // console.log("Account Number:", accountNumber);
    // console.log("Amount to Add:", addAmount);
    // console.log("Pin Number:", pinNumber);

    if(accountNumber.length !== 11) {
        alert("Please enter a valid 11-digit account number.");
        return;
    }
    if(pinNumber != validPin) {
        alert("Invalid PIN. Please try again.");
        return;
    }
    if(isNaN(addAmount) || addAmount <= 0) {
        alert("Please enter a valid amount to add.");
        return;
    }

    const currentBalance = getInnerText('available-balance');
    // console.log("Current Balance:", currentBalance);
    if (currentBalance < addAmount) {
        alert("Insufficient balance.");
        return;
    }
    const totalNewBalance = currentBalance - addAmount;
    // console.log("New Balance:", totalNewBalance);

    setInnerText('available-balance', totalNewBalance);
    const data = {
        name: "Cash Out Money",
        date: new Date().toLocaleString(),
    }
    transactionHistory.push(data);
});
// transfer money
document.getElementById('transfer-money-btn').addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Transfer Money button clicked");
    // const bank = document.getElementById('bank').value;
    const accountNumber = getInputValues('transfer-number');
    const subAmount = getInputValuesNumber('transfer-amount');
    const pinNumber = getInputValues('transfer-pin-number');

    // console.log("Selected Bank:", bank);
    // console.log("Account Number:", accountNumber);
    // console.log("Amount to Add:", addAmount);
    // console.log("Pin Number:", pinNumber);

    if(accountNumber.length !== 11) {
        alert("Please enter a valid 11-digit account number.");
        return;
    }
    if(pinNumber != validPin) {
        alert("Invalid PIN. Please try again.");
        return;
    }
    if(isNaN(subAmount) || subAmount <= 0) {
        alert("Please enter a valid amount to add.");
        return;
    }

    const currentBalance = getInnerText('available-balance');
    // console.log("Current Balance:", currentBalance);

    const totalNewBalance = currentBalance - subAmount;
    // console.log("New Balance:", totalNewBalance);

    setInnerText('available-balance', totalNewBalance);
    const data = {
        name: "Transfer Money",
        date: new Date().toLocaleString(),
    }
    transactionHistory.push(data);
});

// pay bill
document.getElementById('pay-bill-btn').addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Pay Bill button clicked");
    // const bank = document.getElementById('bank').value;
    const accountNumber = getInputValues('biller-account-number');
    const subAmount = getInputValuesNumber('pay-amount');
    const pinNumber = getInputValues('pay-bill-pin-number');

    // console.log("Selected Bank:", bank);
    // console.log("Account Number:", accountNumber);
    // console.log("Amount to Add:", addAmount);
    // console.log("Pin Number:", pinNumber);

    if(accountNumber.length !== 11) {
        alert("Please enter a valid 11-digit account number.");
        return;
    }
    if(pinNumber != validPin) {
        alert("Invalid PIN. Please try again.");
        return;
    }
    if(isNaN(subAmount) || subAmount <= 0) {
        alert("Please enter a valid amount to add.");
        return;
    }

    const currentBalance = getInnerText('available-balance');
    // console.log("Current Balance:", currentBalance);

    const totalNewBalance = currentBalance - subAmount;
    // console.log("New Balance:", totalNewBalance);

    setInnerText('available-balance', totalNewBalance);
    const data = {
        name: "Bill Pay",
        date: new Date().toLocaleString(),
    }
    transactionHistory.push(data);
});

// transactions 

document.getElementById('transaction-button').addEventListener('click', function() {
    console.log("Transaction button clicked");
    console.log(transactionHistory);
    const transactionContainer = document.getElementById('transaction-container');
    transactionContainer.innerText = '';

    for(const data of transactionHistory){
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-5">
              <div class="flex items-center">
                <div class="p-3 rounded-full bg-[#f4f5f7]">
                  <img src="assets/purse1.png" class="mx-auto" alt="" />
                </div>
                <div class="ml-3">
                  <h1>${data.name}</h1>
                  <h4>${data.date}</h4>
                </div>
              </div>
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        
        `
        transactionContainer.appendChild(div);
    }
    // Display transaction history
    // displayTransactionHistory();
});

// toggleing feature
document.getElementById('add-money-button').addEventListener('click', function() {
    // document.getElementById('add-money-parent').style.display = 'block';
    // document.getElementById('cash-out-parent').style.display = 'none';
    // document.getElementById('transfer-parent').style.display = 'none';

    handleToggle('add-money-parent');
    toggleBtn('add-money-button');
});

document.getElementById('cash-out-button').addEventListener('click', function() {
    // document.getElementById('cash-out-parent').style.display = 'block';
    // document.getElementById('add-money-parent').style.display = 'none';
    // document.getElementById('transfer-parent').style.display = 'none';
    handleToggle('cash-out-parent');
    toggleBtn('cash-out-button');
});



// Transfer

document.getElementById('transfer-money-button').addEventListener('click', function() {
    // document.getElementById('cash-out-parent').style.display = 'none';
    // document.getElementById('add-money-parent').style.display = 'none';
    // document.getElementById('transfer-parent').style.display = 'block';
    handleToggle('transfer-parent');
    toggleBtn('transfer-money-button');
});

document.getElementById('pay-bill-button').addEventListener('click', function() {
    // document.getElementById('cash-out-parent').style.display = 'none';
    // document.getElementById('add-money-parent').style.display = 'none';
    // document.getElementById('transfer-parent').style.display = 'block';
    
    handleToggle('pay-bill-parent');
    toggleBtn('pay-bill-button');
});
document.getElementById('get-bonus-button').addEventListener('click', function() {
    // document.getElementById('cash-out-parent').style.display = 'none';
    // document.getElementById('add-money-parent').style.display = 'none';
    // document.getElementById('transfer-parent').style.display = 'block';
    handleToggle('get-bonus-parent');
    toggleBtn('get-bonus-button');
});
document.getElementById('transaction-button').addEventListener('click', function() {
    // document.getElementById('cash-out-parent').style.display = 'none';
    // document.getElementById('add-money-parent').style.display = 'none';
    // document.getElementById('transfer-parent').style.display = 'block';
    handleToggle('transaction-parent');
    toggleBtn('transaction-button');
});