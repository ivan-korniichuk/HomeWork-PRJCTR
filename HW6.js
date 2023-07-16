class Creature {
    #dob;
    constructor(name, size, hp, dob) {
        this.name = name;
        this.size = size;
        this.hp = hp;
        this.#dob = dob;
    }

    introduceMyself = () => console.log("Hello, my name is" + this.name);
    describeMyself = () => console.log(`I'm ${this.size > 5 ? "big" : "small"} and have ${this.hp} HP`);
}

class Human extends Creature {
    constructor (hunger, name, size, hp, dob) {
        super(name, size, hp, dob);
        this.hunger = hunger;
    }
    showHunger = () => console.log(`I'm ${this.hunger > 5 ? "hungry" : "full"}`);
}

class Citizen extends Human {
    constructor (nationality, hunger, name, size, hp, dob) {
        super(hunger, name, size, hp, dob);
        this.nationality = nationality;
    }
    introduceCitizenship = () => console.log("I'm" + this.nationality);
}

class Animal extends Creature {
    #species;
    constructor (species, hunger, name, size, hp, dob) {
        super(hunger, name, size, hp, dob);
        this.#species = species;
    }
    introduceSpecies = () => console.log("I'm a(an)" + this.#species);
}

class Fox extends Animal{
    constructor (tailSize, hunger, name, size, hp, dob) {
        super("Fox", hunger, name, size, hp, dob);
        this.tailSize = tailSize;
    }
    introduceFox = () => console.log(`I have a ${this.tailSize > 5 ? "long" : "short"} tail`);
}

class Frog extends Animal{
    constructor (hunger, name, size, hp, dob) {
        super("Frog", hunger, name, size, hp, dob);
        this.jumpHeight = 5;
    }
    jump = () => console.log(`I can jump ${this.jumpHeight} meters high`);
}
