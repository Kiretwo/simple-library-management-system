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
    return `"${this.#title}" by ${this.#author} ISBN: ${this.#isbn}`
  }
  
  borrowBook() {
    this.#available = false;
    return `You have borrowed the book ${getInfo()}`;
  }
  
  returnBook() {
    this.#available = true;
    return `You have returned the book ${getInfo()}`;
  }

  isAvailable() {
    return this.#available;
  }
}

class EBook extends Book {
  // Additonal Properties
  #fileSize;

  // Constructor
  constructor(title, author, isbn, fileSize) {
    super(title, author, isbn);
    this.#fileSize = fileSize;
  }

  // Methods
  getInfo() {
    return `${super.getInfo()} File Size (MB): ${this.#fileSize}`;
  }
}

class PrintedBook extends Book {
  // Additional Properties
  #numPages;

  // Constructor
  constructor(title, author, isbn, numPages) {
    super(title, author, isbn);
    this.#numPages = numPages;
  }

  // Methods
  getInfo() {
    return `${super.getInfo()} Pages: ${this.#numPages}`;
  }
}

class LibraryMember {
  // Properties
  #name;
  #memberId;
  #borrowedBooks;

  // Constructor
  constructor(name, memberId) {
    this.#name = name;
    this.#memberId = memberId;
    this.#borrowedBooks = []; // Initialize the array to store borrowed books
  }

  // Methods
  borrowBook(book) {
    if (book.isAvailable()) {
      
    }
  }
}


