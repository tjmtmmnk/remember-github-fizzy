let query = undefined;

chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
  if (info.status === 'complete') {
    if (RegExp(/https:\/\/github\.com.*\/find/).test(tab.url)) {
      if (query !== undefined) {
        chrome.tabs.executeScript({
          code: `document.getElementById("tree-finder-field").value="${query}"`
        });
      }
    }
  }
});

chrome.runtime.onMessage.addListener(msg => {
  if (msg.action === 'setQuery') {
    query = msg.query;
  }
});