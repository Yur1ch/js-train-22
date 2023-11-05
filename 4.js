class Drink {
  constructor() {
    this.name = "Чай";
    this.price = 10;
  }

  prepare() {
    console.log(`Приготування ${this.name}`);
  }
}

class HoneyDecorator {
  constructor(drink, amount) {
    this.drink = drink;
    this.amount = amount;
  }

  get name() {
    return `${this.drink.name} з ${this.amount} г меду`;
  }

  get price() {
    return this.drink.price + 0.5 * this.amount;
  }

  prepare() {
    console.log(`Приготування ${this.name}`);
  }
}

console.log("Завдання 4 ====================================");

const tea = new Drink();
console.log(tea.name);
console.log(tea.price);
tea.prepare();

const honeyTea = new HoneyDecorator(tea, 2);
console.log(honeyTea.name);
console.log(honeyTea.price);

honeyTea.prepare();

