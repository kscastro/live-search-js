const fastify = require("fastify")({
  logger: true,
});

const PORT = process.env.PORT || 3333;

fastify.register(require("./routes"));
fastify.register(require("fastify-cors"), {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
});


fastify.listen(PORT, "127.0.0.1", (err) => {
  if (err) throw err;
});

module.exports = fastify;
