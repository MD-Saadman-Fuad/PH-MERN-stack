class animal {
    #price;
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.#price = 500;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    getPrice(){
        return this.#price;
    }
}

class Dog extends animal {
    constructor(name, age, breed){
        super(name, age);
        this.breed = breed;
    }
    
    bark(){
        console.log(`Woof Woof ${this.name}`);
    }
    breedInfo(){
        console.log(`${this.name} is a ${this.breed}`);
    }
}

class Cat extends animal {
    constructor(name, age, color){
        super(name, age);
        this.color = color;
    }
   
    meow(){
        console.log(`Meow Meow ${this.name}`);
    }
}

const dog1 = new Dog('Tommy', 3, 'Golden Retriever');
dog1.eat();
dog1.bark();
dog1.breedInfo();
console.log(dog1);

const cat1 = new Cat('Kitty', 2, 'black');
cat1.eat();
cat1.meow();
console.log(cat1);


// encapsulation
// console.log(dog1.#price); // undefined
cat1.getPrice();
console.log(cat1.getPrice());