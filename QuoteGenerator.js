let btn = document.querySelector(".new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

// ? Storing different types of quotes in an array
const quotes = [
  {
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    person: "Kevin Kruse",
  },
  {
    quote: "Whatever the mind of man can conceive and believe, it can achieve.",
    person: "Napoleon Hill",
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    person: "Albert Einstein",
  },
  {
    quote: "Life isn’t about getting and having, it’s about giving and being.",
    person: "Kevin Kruse",
  },

  {
    quote: "If you want to lift yourself up, lift up someone else.",
    person: "Booker T. Washington",
  },

  {
    quote: "We must balance conspicuous consumption with conscious capitalism.",
    person: "Kevin Kruse",
  },
  {
    quote: "Life is what happens to you while you’re busy making other plans.",
    person: "John Lennon",
  },
  {
    quote: "We become what we think about.",
    person: "Earl Nightingale",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerHTML = quotes[random].person;
});
