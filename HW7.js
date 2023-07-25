function Creature (name, size, hp, dob) {
    this.name = name;
    this.size = size;
    this.hp = hp;
    this.dob = dob;
}

Creature.prototype.introduceMyself = function () {
console.log("Hello, my name is " + this.name);
}

Creature.prototype.describeMyself = function () {
console.log(`I'm ${this.size > 5 ? "big" : "small"} and have ${this.hp} HP`);
}

function Human (hunger, name, size, hp, dob, luck) {
        Creature.call(this, name, size, hp, dob)
        this.hunger = hunger;
        this.luck = luck;
}

Human.prototype = Object.create(Creature.prototype);

Human.prototype.showHunger = function () {
    console.log(`I'm ${this.hunger > 5 ? "hungry" : "full"}`);
}

function Animal (species, name, size, hp, dob, smell) {
    Creature.call(this, name, size, hp, dob)
    this.species = species;
    this.smell = smell;
}

Animal.prototype = Object.create(Creature.prototype);

Animal.prototype.introduceSpecies = function () {
    console.log("I'm a(an)" + this.species);
}

function Fox (tailSize, name, size, hp, dob) {
    Animal.call(this, "Fox", name, size, hp, dob)
    this.tailSize = tailSize;
}

Fox.prototype = Object.create(Animal.prototype);

Fox.prototype.introduceFox = function () {
    console.log(`I have a ${this.tailSize > 5 ? "long" : "short"} tail`);
}

function Frog (jumpHeight, name, size, hp, dob) {
    Animal.call(this, "Frog", name, size, hp, dob)
    this.jumpHeight = jumpHeight;
}

Frog.prototype = Object.create(Animal.prototype);

Frog.prototype.jump = function () {
    console.log(`I can jump ${this.jumpHeight} meters high`);
}