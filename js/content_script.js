window.addEventListener('load', () => {
  const searchText = document.getElementById("tree-finder-field");
  searchText.addEventListener('input', () => {
    if (searchText.value !== "") {
      chrome.runtime.sendMessage({
        "action": "setQuery",
        "query": searchText.value
      });
    }
  });
});

