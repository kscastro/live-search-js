const serverMock = require("../../src/index");

describe("Health Check", () => {
  afterAll(async () => {
    serverMock.close();
  });
    describe("index", () => {
      it("should respond 200 in health check", async (done) => {
        const response = await serverMock.inject({
          method: "GET",
          url: "/health",
        });
        expect(response.statusCode).toBe(200);
        done();
      });
    });
});