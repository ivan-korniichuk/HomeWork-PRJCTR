class Creature {
    #dob;
    constructor(name, size, hp, dob) {
        this.name = name;
        this.size = size;
        this.hp = hp;
        this.#dob = dob;
    }

    introduceMyself = () => console.log("Hello, my name is " + this.name);
    describeMyself = () => console.log(`I'm ${this.size > 5 ? "big" : "small"} and have ${this.hp} HP`);
}

class Human extends Creature {
    #luck;
    constructor (hunger, name, size, hp, dob, luck) {
        super(name, size, hp, dob);
        this.hunger = hunger;
        this.#luck = luck;
    }
    showHunger = () => console.log(`I'm ${this.hunger > 5 ? "hungry" : "full"}`);
}

class Animal extends Creature {
    #species;
    constructor (species, name, size, hp, dob, smell) {
        super(name, size, hp, dob);
        this.#species = species;
        this.smell = smell;
    }
    introduceSpecies = () => console.log("I'm a(an)" + this.#species);
}

class Fox extends Animal{
    #tailSize;
    constructor (tailSize, name, size, hp, dob) {
        super("Fox", name, size, hp, dob);
        this.#tailSize = tailSize;
    }
    introduceFox = () => console.log(`I have a ${this.#tailSize > 5 ? "long" : "short"} tail`);
}

class Frog extends Animal{
    #jumpHeight;
    constructor (jumpHeight, name, size, hp, dob) {
        super("Frog", name, size, hp, dob);
        this.#jumpHeight = jumpHeight;
    }
    jump = () => console.log(`I can jump ${this.#jumpHeight} meters high`);
}
