const searchInput = document.getElementById("search");
const results = document.getElementById("results");

window.onload = function () {
  searchInput.addEventListener("input", function (e) {
    fetchResult(searchInput.value);
  });
};

const fetchResult = function (search_value) {
  fetch("http://localhost:3333?q=" + search_value)
    .then((res) => res.json())
    .then((data) => showResult(data))
    .catch((erro) => console.error(erro));
};

function showResult(data) {
  results.innerHTML = "";

  //create box results
  const divBox = document.createElement("div");
  divBox.classList.add("box-results");

  //create box results
  const divBoxArrow = document.createElement("div");
  divBoxArrow.classList.add("box-results-arrow");

  //create highlight
  const divHightlight = document.createElement("div");
  divHightlight.classList.add("highlight");

  //create highlight link
  const highlightLink = document.createElement("a");
  highlightLink.href = data.url;

  //crate hightlight image
  const hightlightImg = document.createElement("img");
  hightlightImg.classList.add("highlight-img");
  hightlightImg.src = data.logo;

  const hightlightTitle = document.createElement("h1");
  hightlightTitle.innerText = data.title;
  hightlightTitle.classList.add("highlight-title");

  highlightLink.appendChild(hightlightImg);
  highlightLink.appendChild(hightlightTitle);
  divHightlight.appendChild(highlightLink);

  //create suggestions title
  const suggestionsTitle = document.createElement("p");
  suggestionsTitle.innerText = "Sugestões de busca";
  suggestionsTitle.classList.add("suggestions-title");

  //create list suggestions
  const ulSuggestions = document.createElement("ul");
  ulSuggestions.classList.add("suggestions");
  ulSuggestions.tabIndex = 0;

  if (data.suggestions === undefined) {
    return;
  }

  data.suggestions.forEach((element) => {
    const liSuggestions = document.createElement("li");

    //create suggestions link
    const suggestionsLink = document.createElement("a");
    suggestionsLink.href = "http://g1.globo.com/busca/?q=" + element;

    //create suggestions text
    const suggestionsText = document.createElement("p");
    suggestionsText.innerText = element;
    suggestionsText.classList.add("suggestions-text");

    suggestionsLink.appendChild(suggestionsText);
    liSuggestions.appendChild(suggestionsLink);
    ulSuggestions.appendChild(liSuggestions);
  });

  //create footer search
  const divSearch = document.createElement("div");
  divSearch.classList.add("search-globo");
  const searchLink = document.createElement("a");
  searchLink.href = "http://g1.globo.com/busca/?q=" + searchInput.value;

  const searchText = document.createElement("p");
  searchText.innerHTML =
    'buscar <b class="name"> ' +
    "'" +
    searchInput.value +
    "'" +
    "</b>  Globo.com";
  searchText.classList.add("search-text");

  searchLink.appendChild(searchText);
  divSearch.appendChild(searchLink);

  //create footer search
  const divSearchWeb = document.createElement("div");
  divSearchWeb.classList.add("search-web");
  const searchLinkWeb = document.createElement("a");
  searchLinkWeb.href = "https://www.google.com/search?q=" + searchInput.value;

  const searchTextWeb = document.createElement("p");
  searchTextWeb.innerHTML =
    'buscar <b class="name"> ' + "'" + searchInput.value + "'" + "</b>  na Web";
  searchTextWeb.classList.add("search-text");

  searchLinkWeb.appendChild(searchTextWeb);
  divSearchWeb.appendChild(searchLinkWeb);

  divBox.appendChild(divBoxArrow);
  divBox.appendChild(divHightlight);
  divBox.appendChild(suggestionsTitle);
  divBox.appendChild(ulSuggestions);
  divBox.appendChild(divSearch);
  divBox.appendChild(divSearchWeb);

  results.appendChild(divBox);
}
