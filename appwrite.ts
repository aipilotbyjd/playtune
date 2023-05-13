const { Client } = require("node-appwrite");

const client = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT) // Your API Endpoint
  .setProject(process.env.APPWRITE_PROJECT) // Your project ID
  .setKey(process.env.APPWRITE_API_KEY); // Your secret API key

module.exports = client;
