const findHighlightByQuery = (highlights, query) =>
  highlights.find((hightlight) =>
    hightlight.queries.find((value) => normalize(value) === normalize(query))
  );

const filterSuggestionsByQuery = (suggestions, query) =>
  suggestions.filter(
    (value) => normalize(value).indexOf(normalize(query)) > -1
  );
  
const normalize = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

module.exports = { findHighlightByQuery, normalize, filterSuggestionsByQuery };
