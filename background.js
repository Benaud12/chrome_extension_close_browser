chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
  if (request.shutdown === "THIS") {
    var currentTabID = sender.tab.id;
    chrome.tabs.remove(currentTabID, function(){});
  };
  if (request.shutdown === "ALL") {
    var currentWindowID = sender.tab.windowId;
    chrome.tabs.getAllInWindow(currentWindowID, function(tabArray){
      var tabIdArray = tabArray.map(function(tab){ return tab.id });
      chrome.tabs.remove(tabIdArray, function(){})
    });
  };
});

