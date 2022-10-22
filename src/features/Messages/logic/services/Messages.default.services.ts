import MessagesConfig from './../../state/Messages.config.json';

function defaultService(testArg :string) {
  console.log(MessagesConfig.featureName, testArg);
  return true;
}

export {defaultService}