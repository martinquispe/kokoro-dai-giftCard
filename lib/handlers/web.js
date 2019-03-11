/*--------------------------------------------------------------**
** Dependencies - Controllers                                   **
**--------------------------------------------------------------*/
const pageCtrl = require('../controllers/page');

/*--------------------------------------------------------------**
** Define the web handlers                                      **
**--------------------------------------------------------------*/
const webHandlers = {};

/*--------------------------------------------------------------**
** Handler for getting the index page                           **
**--------------------------------------------------------------*/
webHandlers.index = function(data, callback){    
  pageCtrl.getContent('index', data.method, callback);  
}

/*--------------------------------------------------------------**
** Handler for creating a new account                           **
**--------------------------------------------------------------*/
webHandlers.accountCreate = function(data,callback){ 
  pageCtrl.getContent('accountCreate', data.method, callback);  
};

/*--------------------------------------------------------------**
** Showing the account created page                             **
**--------------------------------------------------------------*/
webHandlers.accountCreated = function(data,callback){    
  pageCtrl.getContent('accountCreated', data.method, callback);  
};

/*--------------------------------------------------------------**
** Handler for creating a new session                           **
**--------------------------------------------------------------*/
webHandlers.sessionCreate = function(data,callback){    
  pageCtrl.getContent('sessionCreate', data.method, callback);
};

/*--------------------------------------------------------------**
** Handler for editing an account                               **
**--------------------------------------------------------------*/
webHandlers.accountEdit = function(data,callback){        
  pageCtrl.getContent('accountEdit', data.method, callback);
};

/*--------------------------------------------------------------**
** Handler for deleting a new session                           **
**--------------------------------------------------------------*/
webHandlers.sessionDeleted = function(data,callback){    
  pageCtrl.getContent('sessionDeleted', data.method, callback);  
};

/*--------------------------------------------------------------**
** Handler for deleting an account                              **
**--------------------------------------------------------------*/
webHandlers.accountDeleted = function(data,callback){  
  pageCtrl.getContent('accountDeleted', data.method, callback);  
};

/*--------------------------------------------------------------**
** Handler for creating a new check                             **
**--------------------------------------------------------------*/
webHandlers.rulesCreate = function(data,callback){
  pageCtrl.getContent('rulesCreate', data.method, callback);  
};

/*--------------------------------------------------------------**
** Handler for viewing all user's checks                        **
**--------------------------------------------------------------*/
webHandlers.rulesList = function(data,callback){  
  pageCtrl.getContent('rulesList', data.method, callback);  
};

/*--------------------------------------------------------------**
** Handler for editing an user's check                          **
**--------------------------------------------------------------*/
webHandlers.rulesEdit = function(data,callback){    
  pageCtrl.getContent('rulesEdit', data.method, callback);  
};

/*--------------------------------------------------------------**
** Handler for editing an user's check                          **
**--------------------------------------------------------------*/
webHandlers.giftList = function(data,callback){    
  pageCtrl.getContent('giftList', data.method, callback);  
};
/*--------------------------------------------------------------**
** Handler for getting the favicon as a public resource         **
**--------------------------------------------------------------*/
webHandlers.favicon = function(data, callback){
  // Reject any request that isn't a GET
  if(data.method == 'get'){
    // Read in the favicon's data
    pageCtrl.getFavicon(callback);    
  } else
    callback(405);
}

/*--------------------------------------------------------------**
** Handler for getting resources from the public directory      **
**--------------------------------------------------------------*/
webHandlers.public = function(data, callback){
  // Reject any request that isn't a GET
  if(data.method == 'get'){
    // Get the filename being requested
    let trimmedAssetName = data.path.replace('public/','').trim();
    pageCtrl.getPublicAsset(trimmedAssetName, callback);
  } else
    callback(405);
}

// Export the handlers for the webapp
module.exports = webHandlers;