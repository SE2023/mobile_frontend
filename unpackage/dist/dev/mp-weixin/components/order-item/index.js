"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  props: ["content"],
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.content, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.time),
            c: common_vendor.t(item.status),
            d: item.status != "cancelled"
          }, item.status != "cancelled" ? {} : {}, {
            e: item
          });
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/prosperous/Desktop/SE/mobile_frontend/components/order-item/index.vue"]]);
wx.createComponent(Component);
