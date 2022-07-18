const requireAPIKey = (query) => {
  console.log(query);
  if (!query.api_key) {
    throw new Error("API key is missing");
  }
};
module.exports = requireAPIKey;
