class Book {
  // Properties
  #title;
  #author;
  #isbn;
  #available; 
  
  // Constructor
  constructor(title, author, isbn) {
    this.#title = title;
    this.#author = author;
    this.#isbn = isbn;
    this.#available = true; 
  }
  
  // Methods
  getInfo() {
    return `Title: ${this.#title} Author: ${this.#author} ISBN: ${this.#isbn}`
  }
  
  borrowBook() {
    this.#available = false;
  }
  
  returnBook() {
    this.#available = true;
  }

  isAvailable() {
    return this.#available;
  }
}

class Ebook extends Book {
  // Properties
  #fileSize;

  // Constructor
  constructor(title, author, isbn, fileSize) {
    super(title, author, isbn);
    this.#fileSize = fileSize;
  }

  // Methods
  getInfo() {
    return `${super.getInfo()} File Size (MB): ${this.#fileSize}`
  }
}
