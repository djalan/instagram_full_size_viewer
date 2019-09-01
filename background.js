var baseURL;


function changeURL(tab) {
  var url = new URL(tab.url);
  if (url.host.includes("instagram.com")) {
      var host = url.host;
      var pathname = url.pathname;
      if ((host == "www.instagram.com") && ((pathname.substring(0,3)) == "/p/")) {
        baseURL = tab.url;
        var newURL = baseURL + "media/?size=l";
        browser.tabs.update({url: newURL});
      } else {
        browser.tabs.update({url: baseURL});
      }
  }

}


browser.browserAction.onClicked.addListener(changeURL);
