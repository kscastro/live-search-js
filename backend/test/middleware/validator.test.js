const { checkQueryStrings } = require("../../src/middleware/validator");

describe("Validator", () => {
  describe("checkQueryStrings", () => {
    it("should return fail for query string not provided", () => {
      const mockReq = { query: {} };
      const mockReply = {
        status: () => ({
          send: () => "fail"
        }),
      };
      expect(checkQueryStrings(mockReq, mockReply, () => "success")).toBe("fail");
    });
  });
});
