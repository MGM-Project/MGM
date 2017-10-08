const containerFunc = function () {
  const asyncOps = asyncCardOpsFunc();
  const gameLogic = gameLogicFunc;
  const uiHandler = uiHandlerFunc(gameLogic, asyncOps);

  return {
    // to return as few things as possible that'd then'be called by the main.js
    uiHandler
  };
};
