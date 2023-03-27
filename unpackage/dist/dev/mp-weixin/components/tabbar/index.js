"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "Tabbar",
  props: {
    tabBars: Array,
    tabIndex: String
  },
  data() {
    return {};
  },
  methods: {
    tarTap(item) {
      this.$emit("TarTap", item);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.tabBars, (tab, index, i0) => {
      return {
        a: common_vendor.t(tab.name),
        b: $props.tabIndex == tab.id ? 1 : "",
        c: common_vendor.o(($event) => $options.tarTap(tab), tab.id),
        d: tab.id
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/prosperous/Desktop/SE/mobile_frontend/components/tabbar/index.vue"]]);
wx.createComponent(Component);
