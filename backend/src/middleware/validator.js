const checkQueryStrings = (req, reply, callback) => {
  const data = {
    message: "Query string q is required",
  };
  return req.query.q 
    ? callback(req, reply) 
    : reply.status(400).send(data);
};

module.exports = { checkQueryStrings }
