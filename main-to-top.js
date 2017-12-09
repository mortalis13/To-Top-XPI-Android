
browser.browserAction.onClicked.addListener(tab => toTop(tab));

function toTop(tab) {
  var toTopScript = "window.scrollTo(0, 0)";
  browser.tabs.executeScript(tab.id, {code: toTopScript});
}
