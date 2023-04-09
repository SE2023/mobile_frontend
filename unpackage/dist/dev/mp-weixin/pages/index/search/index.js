"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  props: {
    itemIndex: String,
    itemStyle: Object,
    params: Object
  },
  /**
   * 组件的方法列表
   * 更新属性和数据的方法与更新页面数据的方法类似
   */
  methods: {
    /**
     * 跳转到搜索页面
     */
    onTargetSearch() {
      this.$navTo("pages/search/index");
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(_ctx.search),
    b: common_vendor.p({
      radius: "100",
      placeholder: "search",
      clearButton: "none",
      cancelButton: "none"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-205fdbfe"], ["__file", "/Users/prosperous/Desktop/SE/mobile_frontend/pages/index/search/index.vue"]]);
wx.createComponent(Component);
