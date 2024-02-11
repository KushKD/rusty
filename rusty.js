const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructuring
const books = getBooks();
books;

const book = getBook(3);
// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
genres;

//Destruction with Arrays
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, thirdGenre] = genres;
primaryGenre;
secondaryGenre;
thirdGenre;
console.log(primaryGenre, secondaryGenre, thirdGenre);

//Rest  Operator  ==> ...others always in the end
const [primaryGenreRest, secondaryGenreRest, ...restGenre] = genres;
restGenre;

//Spred Operator Arrays
const newGenres = ["epic Fantacy", ...genres];
newGenres;

//Spread Operators Objects

//Adding a new Property
//Overritting an existing Property
const updatedBook = { ...book, moviePublicationDate: "2001-12-2", pages: 1210 };
updatedBook;

//Template Literal Concatination of String and Java Variables
const summary = `${title}, a ${pages}-- pages long is a book was written by ${author} and published in ${getYear(
  publicationDate
)} `;
summary;

//Ternary Operator
// First PArt  is condition
// ? true
//: false

const pagesRange = pages > 100 ? "Over a Thousand" : "Less than One Thousand";
pagesRange;

//Arrow Functions ES6

(str) => str.split("-")[0];

//We can pass any numeber of arguments
(str, a, b, c) => str.split("-")[0];

//Old way of writting functions
function getYear(str) {
  return str.split("-")[0];
}

//Short Circuiting  AND Operator Short Circuts whenever the first operand is true

console.log(true && "Some String");
console.log(false && "Some String");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy: 0, '', null, undifiend
console.log("jonas" && "some string");
console.log(0 && "some string");

// || operator
//when the value is false then the operand will go the first operator i.e. no short circuting
console.log(true || "some String");
console.log(false || "some String");

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || "Not Translated";
spanishTranslation;

//Optional Chaining Operator  ? , ??
function getTotalReviewCount(book) {
  const goodRead = book?.reviews?.goodreads?.reviewsCount;
  const liabraryThing = book?.reviews?.librarything?.reviewsCount ?? 0;

  return goodRead + liabraryThing;
}

console.log(getTotalReviewCount(book));

books.map((book) => {
  console.log(book.title);
});

//The array Filter Methord :returns a new array based on the original one
const longBooks = books.filter((book) => book.pages > 500);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

adventureBooks;

longBooks;

//The array  Reduce Methord :returns a new array based on original one
// Reduce the array to one value

// acc ==current value of the final value that we want to boil
// acc == accumilator
//initial value of the accumilator is Zero
const starterValue = 0;
const pagesAllBooks = books.reduce(
  (acc, book) => acc + book.pages,
  starterValue
);
pagesAllBooks;

//Array Sort MEthord  --- mutaable,  original array is sorted use slice
// a nad b are current value and next value
const x1 = [3, 7, 9, 1, 6];
const sorted = x1.slice().sort((a, b) => a - b); //sorting in assending   b-a is decending
sorted;
x1;

//Immutable not changing the underlaying dta structure
// add elements
//delete element
//update elements without changingthe original array
//always create new objects

//Add
const newBook = {
  id: 6,
  titel: "Sex and the City",
  author: "KD",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

//Delete A Book from array: filter
const booksDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksDelete;

//Update the Book : map
const booksAfterUpdate = booksDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);
booksAfterUpdate;

//Async and Promise
//Fetch daa from rowsers

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => console.log(data));

console.log("jonas");

//Async Await

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
  return data;
}

const todos = getTodos();
console.log(todos);

console.log("Jonas");
