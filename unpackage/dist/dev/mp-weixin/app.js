"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/facilities/index.js";
  "./pages/facilities/details/index.js";
  "./pages/facilities/timetable/index.js";
  "./pages/others/others.js";
  "./pages/mine/mine.js";
  "./pages/login/index.js";
  "./pages/mine/personal-info/index.js";
  "./pages/mine/wallet/index.js";
  "./pages/order/index.js";
  "./pages/mine/settings/index.js";
  "./pages/facilities/find/index.js";
  "./pages/register/register.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/prosperous/Desktop/SE/mobile_frontend/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
