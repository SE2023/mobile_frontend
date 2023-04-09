"use strict";
const common_vendor = require("../../../common/vendor.js");
const Banner = () => "../../../components/banner/index.js";
const Book = () => "../../../components/book/index.js";
const Comment = () => "../../../components/comments/index.js";
const itemList = [
  { id: 0, url: "/static/swiper/swiper4.jpg" },
  { id: 1, url: "/static/swiper/swiper4.jpg" },
  { id: 2, url: "/static/swiper/swiper4.jpg" }
];
const UserList = [
  { user: "XJY", date: "2023-3-24", comment: "That's great!", avatar_url: "/static/icon/avatar1.jpg" },
  { user: "CPC", date: "2023-3-25", comment: "Many guys exercise there!", avatar_url: "/static/icon/avatar3.jpg" },
  { user: "LPY", date: "2023-3-25", comment: "I have a nice day there!", avatar_url: "/static/icon/avatar2.jpg" }
];
const _sfc_main = {
  components: {
    Banner,
    Book,
    Comment
  },
  data() {
    return {
      itemList,
      UserList,
      rateValue: 4.5
    };
  },
  method: {
    toTargetItem() {
      console.log("ok");
      common_vendor.index.navigateTo({
        url: "./facilities/index"
      });
    }
  }
};
if (!Array) {
  const _component_Banner = common_vendor.resolveComponent("Banner");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _component_Book = common_vendor.resolveComponent("Book");
  const _component_Comment = common_vendor.resolveComponent("Comment");
  (_component_Banner + _easycom_uni_rate2 + _easycom_uni_section2 + _component_Book + _component_Comment)();
}
const _easycom_uni_rate = () => "../../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_rate + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      itemList: $data.itemList
    }),
    b: common_vendor.o(_ctx.onChange),
    c: common_vendor.o(($event) => $data.rateValue = $event),
    d: common_vendor.p({
      ["active-color"]: "red",
      modelValue: $data.rateValue
    }),
    e: common_vendor.p({
      title: "Swimming Pool",
      type: "line",
      padding: true
    }),
    f: common_vendor.p({
      title: "Activites",
      type: "line",
      padding: true
    }),
    g: common_vendor.p({
      UserList: $data.UserList
    }),
    h: common_vendor.p({
      title: "Comments",
      type: "line",
      padding: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/prosperous/Desktop/SE/mobile_frontend/pages/facilities/details/index.vue"]]);
wx.createPage(MiniProgramPage);
