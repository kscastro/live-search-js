exports.index = async (req, reply) => {
  const healthcheck = {
    statusCode: 200,
    status: "OK",
  };
  try {
    reply.send(healthcheck);
  } catch (e) {
    healthcheck.message = e;
    reply.status(503).send();
  }
};
