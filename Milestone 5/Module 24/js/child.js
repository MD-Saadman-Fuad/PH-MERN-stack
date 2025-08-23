const newchild  = document.createElement('li')
newchild.innerText= 'New Born baby';
console.log(newchild.innerText)

const playerList = document.getElementById('player-list');
console.log(playerList);
playerList.appendChild(newchild);
console.log(playerList);