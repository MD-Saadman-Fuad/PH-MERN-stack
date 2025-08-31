console.log("Home. js Connected")
const validPin = 1234;
document.getElementById('add-money-btn').addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Add Money button clicked");
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const addAmount = parseInt(document.getElementById('add-amount').value);
    const pinNumber = document.getElementById('pin-number').value;

    console.log("Selected Bank:", bank);
    console.log("Account Number:", accountNumber);
    console.log("Amount to Add:", addAmount);
    console.log("Pin Number:", pinNumber);

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
    const currentBalance = parseInt(document.getElementById('available-balance').innerText);
    console.log("Current Balance:", currentBalance);

    const totalNewBalance = currentBalance + addAmount;
    console.log("New Balance:", totalNewBalance);

    document.getElementById('available-balance').innerText = totalNewBalance;
});