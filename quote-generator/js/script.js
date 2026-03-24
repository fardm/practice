const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const shareBtn = document.getElementById('share');
const newQuoteBtn = document.getElementById('new-quote');



// Show New Quote
function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    // text
    quoteText.textContent = quote.text;

    // author
    if (!quote.author) {
        authorText.textContent = 'ناشناخته';
    } else {
        authorText.textContent = quote.author;
    }
}


// Get From API
let apiQuotes = [];
async function getQuotes() {
    const apiUrl = 'https://obsidian-sync.storage.c2.liara.space/test/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json()
        newQuote();
    } catch (error) {


    }
}

newQuoteBtn.addEventListener('click', newQuote);

getQuotes()
