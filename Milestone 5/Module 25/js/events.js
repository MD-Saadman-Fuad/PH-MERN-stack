console.log('File Connected');
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

const makeBlueBtn = document.getElementById('make-blue-btn');
// console.log(makeBlueBtn)
makeBlueBtn.onclick = function makeblue() {
    document.body.style.backgroundColor = 'blue';
}

const makePurpleBtn = document.getElementById('make-purple-btn');
        makePurpleBtn.onclick= makePurple;

        function makePurple(){
            document.body.style.backgroundColor = 'purple';
        }


document.getElementById('make-green-btn').addEventListener('click', function makeGreen(){
            document.body.style.backgroundColor = 'green'
        })
        document.getElementById('make-gold-btn').addEventListener('click', function (){
            document.body.style.backgroundColor = 'gold'
        })