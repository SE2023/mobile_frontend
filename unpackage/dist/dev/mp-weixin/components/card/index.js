"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "Card",
  props: {
    DataList: Array,
    name: String,
    extra: String
  },
  methods: {
    // 跳转到详情页
    toTargetItem(item) {
      common_vendor.index.navigateTo({
        url: item.url
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  _easycom_uni_card2();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  _easycom_uni_card();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.DataList, (item, index, i0) => {
      return {
        a: item.iconpath,
        b: common_vendor.t(item.name),
        c: index,
        d: common_vendor.o(($event) => $options.toTargetItem(item), index)
      };
    }),
    b: common_vendor.p({
      ["is-shadow"]: true,
      extra: $props.extra,
      title: $props.name
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-99c72c33"], ["__file", "/Users/prosperous/Desktop/SE/mobile_frontend/components/card/index.vue"]]);
wx.createComponent(Component);
