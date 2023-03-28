"use strict";
const common_vendor = require("../../common/vendor.js");
const OrderItem = () => "../order-item/index.js";
const Time = () => "../time/index.js";
const _sfc_main = {
  name: "TopNavBar",
  props: {
    barNameList: Array,
    barContentList: Array,
    width: {
      type: String
      // default:"33.33%"
    }
  },
  components: {
    OrderItem,
    Time
  },
  data() {
    return {
      tabIndex: 0
    };
  },
  methods: {
    // scroll-view 点击 tab 时 改变下标
    ontabtap(e) {
      let index = e.target.dataset.current || e.currentTarget.dataset.current;
      this.switchTab(index);
    },
    switchTab(index) {
      if (this.tabIndex == index) {
        return;
      }
      this.tabIndex = index;
    },
    // swiper滑动时改变下标
    tabChange(e) {
      let index = e.target.current || e.detail.current;
      this.switchTab(index);
    },
    // scroll-view 点击 tab 时 改变下标
    ontabtap(e) {
      let index = e.target.dataset.current || e.currentTarget.dataset.current;
      this.switchTab(index);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.barNameList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.n($data.tabIndex == index ? "active_text" : ""),
        c: item.id,
        d: index,
        e: common_vendor.o((...args) => $options.ontabtap && $options.ontabtap(...args), item.id)
      };
    }),
    b: $props.width,
    c: common_vendor.f($props.barContentList, (item, index, i0) => {
      return {
        a: item.id
      };
    }),
    d: $data.tabIndex,
    e: common_vendor.o((...args) => $options.tabChange && $options.tabChange(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/prosperous/Desktop/SE/mobile_frontend/components/top-navbar/index.vue"]]);
wx.createComponent(Component);
