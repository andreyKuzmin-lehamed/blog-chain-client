import TronlinkConfig from './../../state/Tronlink.config.json';

function connectService(testArg :string) {
  console.log(TronlinkConfig.featureName, testArg);
  return true;
}

export {connectService}