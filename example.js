const { windowManager } = require("./dist/index");

windowManager.on("window-activated", window => {
  console.log(window.getTitle());
});