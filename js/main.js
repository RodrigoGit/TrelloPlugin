document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn_trello_with_code').addEventListener('click', fifteenWithCode);
}, false);

var fifteenWithCode = function() {
  const url = "https://trello.com/b/yDDw4UPk/fifteen";
  chrome.tabs.create({url: url });
};