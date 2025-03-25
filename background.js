chrome.action.onClicked.addListener((tab) => {
  const currentUrl = tab.url;
  const isLocalReccy = currentUrl.includes("local.bighatbio.me:3000");
  const isProdReccy = currentUrl.includes("reccy.bighatbio.com");
  if (!isLocalReccy && !isProdReccy) {
    return;
  }
  const modifiedUrl = isLocalReccy
      ? currentUrl.replace("local.bighatbio.me:3000", "reccy.bighatbio.com")
      : currentUrl.replace("reccy.bighatbio.com", "local.bighatbio.me:3000");
  // Navigate the current tab to the new URL
  chrome.tabs.update(tab.id, { url: modifiedUrl });
});
