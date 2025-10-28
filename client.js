const { Client } = require('@elastic/elasticsearch');
require('dotenv').config()

const client = new Client({
  node: process.env.HOST_ELASTICSEARCH,
  auth: {
      apiKey: process.env.API_KEY_ELASTICSEARCH
  }
});

// const client = new Client({
//   node: "https://localhost:9200",
//   auth: {
//        username: "elastic",
//        password: "minhasenha"
//   }
// });

module.exports = client