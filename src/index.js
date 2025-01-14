function displayquote(response) {
  new Typewriter(".quote", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1.5,
  });
}
function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-input");
  let apikey = "8bcecf2b930c0252ec9aa584f9do621t";
  let prompt = `User instruction:Generate a quote on ${searchInput.value}`;
  let context =
    "You are an expert in writing quotes. Make sure to give a concise and clear quote. Do not include title. Sign the quote with the author in a <strong> provided by SheCodes AI";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;
  axios.get(apiURL).then(displayquote);
  let quote = document.querySelector(".quote");
  quote.classList.remove("hidden");
  quote.innerHTML = `<span class="generate-quote">⏳Generating quote on ${searchInput.value}</span>`;
}
let search = document.querySelector("#form");
search.addEventListener("submit", handleSearch);