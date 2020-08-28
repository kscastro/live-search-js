const path = require('path')
const fastify = require("fastify")({
    logger: true,
  });

fastify
  .register(require('fastify-static'), { root: path.join(__dirname, '.') })
  .listen(process.env.PORT || 3334, err => {
    if (err) throw err
  })