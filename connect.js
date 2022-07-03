// See https://dashplatform.readme.io/docs/tutorial-connecting-to-testnet
const Dash = require('dash');

const dapi = new Dash.Client();

async function connect() {
  return await dapi.getDAPIClient().core.getBestBlockHash();
}

connect()
  .then((d) => console.log('Connected. Best block hash:\n', d))
  .catch((e) => console.error('Something went wrong:\n', e))
  .finally(() => dapi.disconnect());