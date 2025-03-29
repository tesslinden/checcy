chrome.action.onClicked.addListener((tab) => {
   const localReccyURL = "http://local.bighatbio.me:3000";
   const prodReccyURL = "https://reccy.bighatbio.com";
   const currentUrl = tab.url;
   const isLocalReccy = currentUrl.includes(localReccyURL);
   const isProdReccy = currentUrl.includes(prodReccyURL);
   if (!isLocalReccy && !isProdReccy) {
       return;
   }
   const modifiedUrl = isLocalReccy
       ? currentUrl.replace(localReccyURL, prodReccyURL)
       : currentUrl.replace(prodReccyURL, localReccyURL);

   // Navigate the current tab to the new URL
   // chrome.tabs.update(tab.id, { url: modifiedUrl });

   // Open modified URL in a new tab next to the current tab
   chrome.tabs.create({
       windowId: tab.windowId, // Ensure it's in the same window
      url: modifiedUrl,
      index: tab.index + 1  // Position next to the current tab
  });

});
