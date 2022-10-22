import TronlinkConfig from './../../state/Tronlink.config.json';

function callService(testArg :string) {
  console.log(TronlinkConfig.featureName, testArg);
  return true;
}

export {callService}