// Initial quotes array
const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Don’t let yesterday take up too much of today.", category: "Inspiration" },
  { text: "Your time is limited, don't waste it living someone else's life.", category: "Life" }
];

// Function to show a random quote
function showRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  
  if (quotes.length === 0) {
    quoteDisplay.innerHTML = "<em>No quotes available. Please add one!</em>";
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteDisplay.innerHTML = `
    <p>"${quote.text}"</p>
    <small>Category: <strong>${quote.category}</strong></small>
  `;
}

// Function to create/initialize the Add Quote form (placeholder enhancements)
function createAddQuoteForm() {
  const quoteInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  quoteInput.addEventListener("focus", () => {
    if (quoteInput.value === "") quoteInput.placeholder = "Enter a new quote";
  });

  categoryInput.addEventListener("focus", () => {
    if (categoryInput.value === "") categoryInput.placeholder = "Enter quote category";
  });
}

// Function to add a new quote
function addQuote() {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const newQuoteText = textInput.value.trim();
  const newQuoteCategory = categoryInput.value.trim();

  if (newQuoteText && newQuoteCategory) {
    // Add to the quotes array
    const newQuote = {
      text: newQuoteText,
      category: newQuoteCategory
    };
    quotes.push(newQuote);

    // Clear form
    textInput.value = "";
    categoryInput.value = "";

    // Update DOM with the new quote using createElement and appendChild
    const newQuoteElement = document.createElement("div");
    newQuoteElement.innerHTML = `
      <p>"${newQuote.text}"</p>
      <small>Category: <strong>${newQuote.category}</strong></small>
    `;
    newQuoteElement.style.marginTop = "1em";
    newQuoteElement.style.backgroundColor = "#f0f0f0";
    newQuoteElement.style.padding = "10px";
    newQuoteElement.style.border = "1px solid #ccc";

    document.getElementById("quoteDisplay").appendChild(newQuoteElement);

    alert("Quote added successfully!");
  } else {
    alert("Please fill out both fields.");
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("newQuote").addEventListener("click", showRandomQuote);
  createAddQuoteForm(); // required per spec
});
