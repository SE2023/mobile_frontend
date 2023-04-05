"use strict";
const common_vendor = require("../../common/vendor.js");
const config = require("../../config.js");
const AvatarImage = () => "../../components/avatar-image/index.js";
const Card = () => "../../components/card/index.js";
const urlPrefix = config.Config.urlPrefix;
const orderNavbar = [
  { id: "all", name: "To Be Paid", iconpath: "/static/icon/tobepaid.svg", url: "../order/index" },
  { id: "payment", name: "Paid", iconpath: "/static/icon/paid.svg", url: "../order/index" },
  { id: "delivery", name: "Cancelled", iconpath: "/static/icon/cancelled.svg", url: "../order/index" }
];
const itemList = [
  { id: "all", name: "Personal Info", icon: "qpdingdan", url: "./personal-info/index" },
  { id: "payment", name: "Wallet", icon: "daifukuan", url: "./wallet/index" },
  { id: "delivery", name: "Bookings", icon: "daifahuo", url: "../order/index" },
  { id: "received", name: "Settings", icon: "daishouhuo", url: "./settings/index" }
];
const _sfc_main = {
  components: {
    AvatarImage,
    Card
  },
  data() {
    return {
      text: "nihao",
      userInfo: {
        username: null,
        email: null
      },
      orderNavbar,
      itemList,
      isLogin: false
    };
  },
  methods: {
    // 获取当前用户信息
    async getUserInfo() {
      common_vendor.index.request({
        url: urlPrefix + "/user",
        method: "GET",
        header: {
          "Authorization": common_vendor.index.getStorageSync("token")
        }
      }).then((res) => {
        if (res.data.code === 0) {
          console.log("username: ", res.data.result.username);
          console.log("email: ", res.data.result.email);
          this.isLogin = true;
          this.userInfo.username = res.data.result.username;
          this.userInfo.email = res.data.result.email;
        } else {
          common_vendor.index.showToast({
            title: "Get info failed",
            duration: 2e3
          });
        }
      });
    },
    handleService(url) {
      common_vendor.index.navigateTo({
        url
      });
    },
    // 跳转到登录页
    handleLogin() {
      !this.isLogin && common_vendor.index.navigateTo({
        url: "/pages/login/index"
      });
    },
    logout() {
      console.log("logout");
      common_vendor.index.setStorageSync("token", null);
      this.isLogin = false;
    }
  },
  mounted() {
    console.log("token", common_vendor.index.getStorageSync("token"));
    if (common_vendor.index.getStorageSync("token") !== null) {
      console.log("asdfsdfsad");
      this.getUserInfo();
    }
  }
};
if (!Array) {
  const _component_avatar_image = common_vendor.resolveComponent("avatar-image");
  const _component_Card = common_vendor.resolveComponent("Card");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_component_avatar_image + _component_Card + _easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isLogin
  }, $data.isLogin ? common_vendor.e({
    b: common_vendor.p({
      url: $data.userInfo.avatar_url,
      width: 100
    }),
    c: !$data.isLogin
  }, !$data.isLogin ? {} : {}, {
    d: $data.isLogin
  }, $data.isLogin ? {
    e: common_vendor.t($data.userInfo.username),
    f: common_vendor.t($data.userInfo.email)
  } : {}) : {
    g: common_vendor.p({
      width: 100
    }),
    h: common_vendor.o((...args) => $options.handleLogin && $options.handleLogin(...args))
  }, {
    i: _ctx.platform == "H5" ? "260rpx" : "320rpx",
    j: _ctx.platform == "H5" ? "0" : "80rpx",
    k: common_vendor.p({
      DataList: $data.orderNavbar,
      name: "Order",
      extra: "more >"
    }),
    l: common_vendor.f($data.itemList, (item, index, i0) => {
      return {
        a: "7c2ebfa5-4-" + i0 + "," + ("7c2ebfa5-3-" + i0),
        b: common_vendor.p({
          title: item.name
        }),
        c: index,
        d: common_vendor.o(($event) => $options.handleService(item.url), index),
        e: "7c2ebfa5-3-" + i0
      };
    }),
    m: common_vendor.p({
      title: "Logout"
    }),
    n: common_vendor.o($options.logout)
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7c2ebfa5"], ["__file", "/Users/prosperous/Desktop/SE/mobile_frontend/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
