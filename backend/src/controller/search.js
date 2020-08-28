const fastify = require("../index");
const data = require("../../exemplo.json");
const {
  findHighlightByQuery,
  filterSuggestionsByQuery,
} = require("../utils/index");

exports.index = async (req, reply) => {
  const query = req.query.q;
  const highlight = findHighlightByQuery(data.hightlights, query);
  if (!highlight) {
    reply.status(404)
  }
  const suggestions = filterSuggestionsByQuery(data.suggestions, query);
  const result = Object.assign(highlight, { suggestions });
  reply.send(result);
};
