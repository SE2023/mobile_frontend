"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  props: {
    url: {
      type: String,
      default: ""
    },
    width: {
      type: Number,
      default: 90
    },
    borderWidth: {
      type: Number,
      default: 0
    },
    borderColor: {
      type: String,
      default: "#000000"
    }
  },
  data() {
    return {};
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: `${$props.width}rpx`,
    b: `${$props.width}rpx`,
    c: `${$props.borderWidth}rpx`,
    d: $props.borderColor,
    e: $props.url ? $props.url : "/static/default-avatar.png"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-28a89d63"], ["__file", "/Users/prosperous/Desktop/SE/mobile_frontend/components/avatar-image/index.vue"]]);
wx.createComponent(Component);
