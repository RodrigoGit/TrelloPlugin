(function(){
  chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
    if (changeInfo.status == 'complete' && tab.url.indexOf("https://trello.com/b/yDDw4UPk/fifteen") > -1) {
        chrome.tabs.executeScript(tab.id, {file: '/js/trello.js'});
    }
  });
})();