"use strict";
const common_vendor = require("../../../common/vendor.js");
const itemList = [
  { id: "security", name: "Account Security", url: "" },
  { id: "language", name: "Language", url: "" },
  { id: "textsize", name: "Text Size", url: "" },
  { id: "information", name: "Information", url: "" },
  { id: "helpfeedback", name: "Help & Feedback", url: "" }
];
const _sfc_main = {
  data() {
    return {
      itemList
    };
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.itemList, (item, index, i0) => {
      return {
        a: "1730659e-1-" + i0 + "," + ("1730659e-0-" + i0),
        b: common_vendor.p({
          title: item.name
        }),
        c: index,
        d: common_vendor.o(($event) => _ctx.handleService(item.url), index),
        e: "1730659e-0-" + i0
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/prosperous/Desktop/SE/mobile_frontend/pages/mine/settings/index.vue"]]);
wx.createPage(MiniProgramPage);
