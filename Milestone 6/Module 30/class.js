const player = {
    name: 'Messi',
    club: 'PSG',
    age: 34
};

class Player {
    constructor(name, club, age){
        this.name = name;
        this.club = club;
        this.age = age;
    }
    goal(){
        console.log('GOAL!!!');
    }
    getName(){
        return 'Borsa'
    }
}


const player1 = new Player('Ronaldo', 'Al Nassr', 39);
player1.goal();
player1.getName();
console.log(player1); // Player {}