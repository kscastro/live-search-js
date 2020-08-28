const { findHighlightByQuery, filterSuggestionsByQuery, normalize } = require("../../src/utils/index");
const mocks = require("./mocks");

describe("Utils", () => {
  describe("findHighlightByQuery", () => {
    it("should return undefined for no match", () => {
      expect(findHighlightByQuery(mocks.highlights, "")).toBeUndefined();
    });
    it("should return highlight by query", () => {
      expect(findHighlightByQuery(mocks.highlights, "eleições")).toMatchObject(
        mocks.highlights[1]
      );
    });
  });
  describe("filterSuggestionsByQuery", () => {
    it("should check if it contains suggestions by query", () => {
      expect(filterSuggestionsByQuery(mocks.suggestions, "neymar")).toContain("gol do neymar");
    })   
  });
  describe("normalize", () => {
    it("should returns the Unicode Normalization Form of a given string ", () => {
      expect(normalize("eleições")).toBe("eleicoes");
    })
    it("should not modify Unicode Normalization Form of a given string ", () => {
      expect(normalize("eleicoes")).toBe("eleicoes");
    })    
  });
});
