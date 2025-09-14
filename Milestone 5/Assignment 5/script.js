

console.log('connected')
// cards heart button click will increase count by 1 Done
const heartButtons = document.getElementsByClassName('heart-btn');
for (let i = 0; i < heartButtons.length; i++) {
    heartButtons[i].addEventListener('click', function() {
        const totalHeartElement = document.getElementById('total-heart');
        totalHeartElement.innerText = parseInt(totalHeartElement.innerText) + 1;
    });
}

// Call Button Functionality Done

const callButtons = document.getElementsByClassName('call-btn');
const callNumbers = document.getElementsByClassName('call-number');
const serviceNames = document.getElementsByClassName('service-name');


let availableCoins = parseInt(document.getElementById('available-coin').innerText);
for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener('click', function() {
        const callHistory = document.getElementById('call-history');
        const phoneNumber = callNumbers[i].innerText;
        if(availableCoins < 20) {
            alert("Insufficient coins to make a call.");
            return;
        }
        alert(`${serviceNames[i].innerText}\nCalling ${phoneNumber}`);
        availableCoins -= 20;
        document.getElementById('available-coin').innerText = availableCoins;

        const div = document.createElement('div');
        div.innerHTML = `
            <div class="history-card flex items-center justify-between p-4 bg-gray-100 rounded-lg mb-4">
                <div>
                    <h3 class="font-bold text-lg" id="service-name-called">${serviceNames[i].innerText}</h3>
                    <p class="text-gray-500 service-name" id="service-number-called">${phoneNumber}</p>

                </div>
                <div class="items-top text-right">
                    <p class="text-gray-500 call-time" id="call-time-called">${new Date().toLocaleTimeString()}</p>
                </div>
            </div>  
        `;
        if (callHistory.firstChild) {
            callHistory.insertBefore(div, callHistory.firstChild);
        } else {
            callHistory.appendChild(div);
        }
    });
}


// Copy Button Functionality
const copyButtons = document.getElementsByClassName('copy-btn');
let copyCount = parseInt(document.getElementById('copy-count').innerText);
for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener('click', function() {
        const card = copyButtons[i].closest('.card');
        const hotlineNumberElem = card.querySelector('.call-number');

        const hotlineNumber = hotlineNumberElem ? hotlineNumberElem.innerText : '';


        navigator.clipboard.writeText(hotlineNumber).then(function() {
            alert('Hotline number copied: ' + hotlineNumber);
            copyCount++;
            document.getElementById('copy-count').innerText = copyCount;
        }, function() {
            alert('Failed to copy hotline number.');
        });
    });
}


// Clear Call History Functionality
const clearBtn = document.getElementById('clear-call-history');
const callHistory = document.getElementById('call-history');

clearBtn.addEventListener('click', function() {
    callHistory.innerHTML = '';
});
