chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "cm2",
        title: "Open in WordReference",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(function(clickData) {
    console.log('>>> ', clickData);
    let archive = "https://www.wordreference.com/enfr/" + clickData.selectionText;
    chrome.tabs.create({ url: archive});
});
