class Book {
  constructor({ title, author, coverColor }) {
    this.title = title;
    this.author = author;
    this.coverColor = coverColor;
  }

  describe() {
    return `Книга: '${this.title}', автор: '${this.author}', колір обкладинки: '${this.coverColor}'`;
  }
}

class AudioBook {
  constructor({ title, author, audioLength }) {
    this.title = title;
    this.author = author;
    this.audioLength = audioLength;
  }

  describe() {
    return `Аудіокнига: '${this.title}', автор: '${this.author}', тривалість: '${this.audioLength}'`;
  }
}

class ProductFactory {
  static TYPE = {
    BOOK: "book",
    AUDIOBOOK: "audiobook",
  };

  static createProduct(type, options) {
    switch (type) {
      case this.TYPE.BOOK:
        return new Book(options);
      case this.TYPE.AUDIOBOOK:
        return new AudioBook(options);
      default:
        throw new Error(`Такого типу продукту не існує: ${type}`);
    }
  }
}

console.log("Завдання 2 ====================================");

const factoryBook = ProductFactory.createProduct(ProductFactory.TYPE.BOOK, {
  title: "Назва книги",
  author: "Автор книги",
  coverColor: "Синій",
});

console.log(factoryBook.describe());

const factoryAudiobook = ProductFactory.createProduct(
  ProductFactory.TYPE.AUDIOBOOK,
  {
    title: "Назва аудіокниги",
    author: "Автор аудіокниги",
    audioLength: "5 годин",
  }
);

console.log(factoryAudiobook.describe());

try {
  const factoryUnknown = ProductFactory.createProduct("comics", {});
} catch (error) {
  console.error(error.message);
}

