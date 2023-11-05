class OrderTracker {
  static #instance = null;
  static #orders = [];

  static create() {
    if (this.#instance === null) {
      this.#instance = new OrderTracker();
    }
    return this.#instance;
  }

  static add(item) {
    this.#orders.push(item);
  }

  static get() {
    return this.#orders;
  }
}

console.log("Завдання 1 ====================================");

const tracker = OrderTracker.create();

OrderTracker.add("Телеффон");
OrderTracker.add("Ноутбук");

const orders = OrderTracker.get();

console.log(orders);

