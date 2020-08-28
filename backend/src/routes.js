const search = require("./controller/search");
const health = require("./controller/health");
const validator = require("./middleware/validator");

module.exports = (fastify, _ , next) => {
  fastify.get("/", (req, reply) => validator.checkQueryStrings(req, reply, search.index))
  fastify.get("/health", health.index), next();
};
