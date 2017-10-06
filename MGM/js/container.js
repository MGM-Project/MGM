const containerFunc = function(){
    const asyncOps = asyncCardOpsFunc();

    return {
        //to return as few things as possible that'd then'be called by the main.js
        asyncOps: asyncOps
    }
}