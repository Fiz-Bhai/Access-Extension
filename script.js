// Redirect JS Start

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    const redirectRules = [
      {
        urlPattern: /^https?:\/\/(www\.)?tomtom\.com\/?.*$/i,
        redirectTo: "https://your-redirect-url1.com"
      },
      {
        urlPattern: /^https?:\/\/(www\.)?example2\.com\/?.*$/i,
        redirectTo: "https://your-redirect-url2.com"
      },
      {
        urlPattern: /^https?:\/\/(www\.)?app\.example3\.com\/?.*$/i,
        redirectTo: "https://your-redirect-url3.com"
      }
    ];

    for (const rule of redirectRules) {
      if (rule.urlPattern.test(changeInfo.url)) {
        chrome.tabs.update(tabId, { url: rule.redirectTo });
        return;
      }
    }
  }
});

// Redirect JS End