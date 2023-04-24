"use strict";
const common_vendor = require("../../common/vendor.js");
const AvatarImage = () => "../avatar-image/index.js";
const _sfc_main = {
  name: "Comment",
  components: {
    AvatarImage
  },
  props: {
    UserList: Array
  },
  data() {
    return {
      rateValue: [5, 4, 4.5]
    };
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
  const _component_avatar_image = common_vendor.resolveComponent("avatar-image");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  (_component_avatar_image + _easycom_uni_rate2)();
}
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
if (!Math) {
  _easycom_uni_rate();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.UserList, (item, index, i0) => {
      return {
        a: "2df97852-0-" + i0,
        b: common_vendor.p({
          url: item.avatar_url,
          width: 65
        }),
        c: common_vendor.t(item.user),
        d: common_vendor.t(item.date),
        e: "2df97852-1-" + i0,
        f: common_vendor.o(($event) => $data.rateValue[index] = $event, index),
        g: common_vendor.p({
          ["active-color"]: "red",
          modelValue: $data.rateValue[index]
        }),
        h: common_vendor.t(item.comment),
        i: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/prosperous/Desktop/SE/mobile_frontend/components/comments/index.vue"]]);
wx.createComponent(Component);
