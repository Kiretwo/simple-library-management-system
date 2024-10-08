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
    return `"${this.#title}" by ${this.#author} (ISBN:${this.#isbn})`;
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
    return `${super.getInfo()}, File Size: ${this.#fileSize}MB`;
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
  getMemberId() {
    return this.#memberId;
  }

  borrowBook(book) {
    if (book.isAvailable()) {
      this.#borrowedBooks.push(book); // Add the book to the array
      book.borrowBook(); // Runs the function and marks book as borrowed
      return `Book borrowed successfully: ${book.getInfo()}`;
    } else {
      return `Sorry, this book is currently unavailable`;
    }
  }

  returnBook(book) {
    const bookIndex = this.#borrowedBooks.indexOf(book);
    if (bookIndex > -1) {
      this.#borrowedBooks.splice(bookIndex, 1); // Removes the book from the array
      book.returnBook(); // Runs the function and marks book as returned
      return `Book returned successfully: ${book.getInfo()}`;
    } else {
      return `This book has not been borrowed: ${book.getInfo()}`;
    }
  }

  getBorrowedBooks() {
    if (this.#borrowedBooks.length === 0) {
      return `No books borrowed`;
    } else {
      return this.#borrowedBooks.map(book => book.getInfo()); // Returns detailed info about each borrowed book
    }
  }
}

class Library {
  // Properties
  #books;
  #members;

  // Constructor
  constructor() {
    this.#books = [];
    this.#members = [];
  }

  // Methods
  addBook(book) {
    this.#books.push(book); // Adds book to library
  }

  addMember(member) {
    this.#members.push(member); // Adds a member to the library
  }

  findBookByTitle(title) {
    return this.#books.find(book => book.getInfo().includes(title));
  }

  findMemberById(memberId) {
    return this.#members.find(member => member.getMemberId() === memberId)
  }

  borrowBook(memberId, title) {
    const member = this.findMemberById(memberId);
    const book = this.findBookByTitle(title);

    if (member && book) {
        return member.borrowBook(book);
    } else if (!member) {
        return `Member with ID ${memberId} not found.`;
    } else if (!book) {
        return `Book with title "${title}" not found.`;
    }
}

returnBook(memberId, title) {
    const member = this.findMemberById(memberId);
    const book = this.findBookByTitle(title);

    if (member && book) {
        return member.returnBook(book);
    } else if (!member) {
        return `Member with ID ${memberId} not found.`;
    } else if (!book) {
        return `Book with title "${title}" not found.`;
    }
}

getAvailableBooks() {
    return this.#books.filter(book => book.isAvailable()).map(book => book.getInfo());
}
}

// Testing
const printedBook1 = new PrintedBook("Javascript for Dummies", "John Wick", 1203415910456, 468);
const eBook1 = new EBook("Wtf is a Kilometer?", "George Washington", 1937583295845, 10);
console.log(printedBook1.getInfo());
console.log(printedBook1.isAvailable());

const member1 = new LibraryMember("Alice", 1);
console.log(member1.borrowBook(printedBook1));
console.log(member1.returnBook(printedBook1));
console.log(member1.getBorrowedBooks());

const member2 = new LibraryMember("Bob", 2);
console.log(member2.borrowBook(printedBook1));
console.log(member2.borrowBook(eBook1));
console.log(member2.getBorrowedBooks());
console.log(member2.returnBook(printedBook1));
console.log(member2.getBorrowedBooks());

const library = new Library();
library.addBook(printedBook1);
library.addBook(eBook1);
library.addMember(member1);
console.log(library);
console.log(library.findBookByTitle("Wtf"));
console.log(library.findMemberById(1));
