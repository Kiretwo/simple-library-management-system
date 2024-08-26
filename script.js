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
    return `"${this.#title}" by ${this.#author} (ISBN:${this.#isbn})`
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
    return `${super.getInfo()}, File Size (MB): ${this.#fileSize}`;
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
    return `${super.getInfo()}, Pages: ${this.#numPages}`;
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
      this.#borrowedBooks.push(book); // Add the book to the array
      book.borrowBook(); // Runs the function and marks book as borrowed
      return `Book borrowed successfully: ${book.getInfo()}`;
    } else {
      return `Sorry, this book is currently unavailable`;
    }
  }
}


// Testing
const printedBook1 = new PrintedBook("Javascript for Dummies", "John Wick", 1203415910456, 468);
console.log(printedBook1.getInfo());
console.log(printedBook1.isAvailable());

const member1 = new LibraryMember("Alice", 1);
console.log(member1.borrowBook(printedBook1));

const member2 = new LibraryMember("Bob", 2);
console.log(member2.borrowBook(printedBook1));
