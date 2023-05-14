import { Client, Account, Users } from "node-appwrite";

interface IEnv {
  APPWRITE_ENDPOINT: string;
  APPWRITE_PROJECT: string;
  APPWRITE_API_KEY: string;
}

declare var process: {
  env: IEnv;
};

const client = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT) // Your API Endpoint
  .setProject(process.env.APPWRITE_PROJECT) // Your project ID
  .setKey(process.env.APPWRITE_API_KEY); // Your secret API key

const account = new Account(client);
const users = new Users(client);

module.exports = {
  client,
  account,
  users,
};
