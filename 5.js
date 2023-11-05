class Writer {
  #content = "";
  #versions = [];

  set content(newContent) {
    this.#store();
    this.#content = newContent;
  }

  get content() {
    return this.#content;
  }

  #store() {
    this.#versions.push(Version.create(this.#content));
  }

  restore() {
    const version = Version.restore();
    if (version) {
      this.#content = version.content;
    }
  }
}

class Version {
  static #versions = [];

  constructor(content) {
    this.content = content;
  }

  static create(content) {
    const version = new Version(content);
    this.#versions.push(version);
    return version;
  }

  static restore() {
    return this.#versions.pop();
  }
}

console.log("Завдання 5 ====================================");

const writer = new Writer();

writer.content = "Це початковий текст.";
writer.content = "Редагований текст.";
writer.content = "Оновлений текст.";

console.log(writer.content);

writer.restore();
console.log(writer.content);

writer.restore();
console.log(writer.content);

