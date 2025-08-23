const mainContainer  = document.getElementById('main-container')
console.log(mainContainer);

const placeSection  = document.createElement('section');

const h1 = document.createElement('h1');

h1.innerText = 'Places i want to visit';
placeSection.appendChild(h1)

const ul = document.createElement('ul');



const li1 = document.createElement('li');
const li2 = document.createElement('li');

li1.innerText = 'Jete chain Bandarban';
li2.innerText = 'Jete chain Shundarban';

ul.appendChild(li1);
ul.appendChild(li2);
placeSection.appendChild(ul)



mainContainer.append(placeSection)



////////////////

const booksSection = document.createElement('section');

booksSection.innerHTML = `
<h1>Books I want</h1>
<ul>
    <li>Physaics</li>
    <li>Math</li>
</ul>
`;

mainContainer.appendChild(booksSection)