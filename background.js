chrome.action.onClicked.addListener((tab) => {
  // 1. Extract the current URL
  const currentUrl = tab.url;

  // 2. Replace "foo" with "bar"
  const modifiedUrl = currentUrl.replace(/reccy/g, "test");

  // 3. Navigate the current tab to the new URL
  chrome.tabs.update(tab.id, { url: modifiedUrl });
});
