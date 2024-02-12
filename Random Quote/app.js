const quoteText = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote() {
  const api_url = "https://api.quotable.io/random";
  const response = await fetch(api_url);
  var data = await response.json();
  quoteText.innerHTML = data.content;
  author.innerHTML = data.author;
}

getQuote();

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quoteText.innerHTML +
      "---- by " +
      author.innerHTML,
    "Tweet Window",
    "width=600",
    "height=300"
  );
}
