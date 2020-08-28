const serverMock = require("../../src/index");

describe("Server", () => {
  afterAll(async () => {
    serverMock.close();
  });
    describe("index", () => {
      it("should respond 200", async (done) => {
        const response = await serverMock.inject({
          method: "GET",
          url: "/?q=neymar",
        });
        expect(response.statusCode).toBe(200);
        done();
      });
    });
});
