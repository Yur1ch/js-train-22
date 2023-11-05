class Participant {
  constructor(alias, communicator) {
    this.alias = alias;
    this.communicator = communicator;
  }

  dispatchMessage(text) {
    const message = this.prepareMessage(text);
    this.communicator.transmit(message);
  }

  prepareMessage(text) {
    return `[${this.alias}]: ${text}`;
  }
}

class SMSCommunicator {
  static transmit(message) {
    console.log(`Відправлено SMS: ${message}`);
  }
}

class EmailCommunicator {
  static transmit(message) {
    console.log(`Відправлено Email: ${message}`);
  }
}

console.log("Завдання 7 ====================================");

const max = new Participant("Max", SMSCommunicator);
const linda = new Participant("Linda", EmailCommunicator);

max.dispatchMessage("Hello!");
linda.dispatchMessage("Hello!");

