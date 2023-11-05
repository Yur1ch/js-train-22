class AuthProcessor {
  setNextProcessor(processor) {
    this.nextProcessor = processor;
    return processor;
  }

  validate(username, passkey) {
    if (this.nextProcessor) {
      return this.nextProcessor.validate(username, passkey);
    }
    return false;
  }
}

class TwoStepProcessor extends AuthProcessor {
  isValidTwoStepCode() {
    return true;
  }

  validate(username, passkey) {
    if (
      username === "john" &&
      passkey === "password" &&
      this.isValidTwoStepCode()
    ) {
      console.log("Вхід дозволено з двофакторною аутентифікацією");
      return true;
    } else {
      return super.validate(username, passkey);
    }
  }
}

class RoleProcessor extends AuthProcessor {
  validate(username, passkey) {
    if (username === "guest") {
      console.log("Вхід дозволено з роллю гостя");
      return true;
    } else {
      return super.validate(username, passkey);
    }
  }
}

class CredentialsProcessor extends AuthProcessor {
  validate(username, passkey) {
    if (username === "admin" && passkey === "admin123") {
      console.log("Вхід дозволено за обліковими даними");
      return true;
    } else {
      return super.validate(username, passkey);
    }
  }
}

class ProcessorBuilder {
  constructor() {
    this.firstProcessor = null;
    this.lastProcessor = null;
  }

  add(processor) {
    if (!this.firstProcessor) {
      this.firstProcessor = processor;
      this.lastProcessor = processor;
    } else {
      this.lastProcessor.setNextProcessor(processor);
      this.lastProcessor = processor;
    }
    return this;
  }

  create() {
    return this.firstProcessor;
  }
}

console.log("Завдання 6 ====================================");

const processorBuilder = new ProcessorBuilder();

const processor = processorBuilder
  .add(new CredentialsProcessor())
  .add(new TwoStepProcessor())
  .add(new RoleProcessor())
  .create();

processor.validate("admin", "admin123");
processor.validate("john", "password");
processor.validate("guest", "guest123");
processor.validate("user", "password");

