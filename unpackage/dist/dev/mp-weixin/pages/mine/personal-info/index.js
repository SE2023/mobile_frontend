"use strict";
const common_vendor = require("../../../common/vendor.js");
const config = require("../../../config.js");
const AvatarImage = () => "../../../components/avatar-image/index.js";
const urlPrefix = config.Config.urlPrefix;
const _sfc_main = {
  components: {
    AvatarImage
  },
  data() {
    return {
      userInfo: {
        username: "Username",
        email: "Email"
      }
    };
  },
  methods: {
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
          this.userInfo.username = res.data.result.username;
          this.userInfo.email = res.data.result.email;
        } else {
          common_vendor.index.showToast({
            title: "Get info failed",
            duration: 2e3
          });
        }
      });
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
  const _easycom_uni_col2 = common_vendor.resolveComponent("uni-col");
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  (_component_avatar_image + _easycom_uni_col2 + _easycom_uni_row2)();
}
const _easycom_uni_col = () => "../../../uni_modules/uni-row/components/uni-col/uni-col.js";
const _easycom_uni_row = () => "../../../uni_modules/uni-row/components/uni-row/uni-row.js";
if (!Math) {
  (_easycom_uni_col + _easycom_uni_row)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      url: $data.userInfo.avatar_url,
      width: 250
    }),
    b: common_vendor.p({
      span: 10
    }),
    c: common_vendor.t($data.userInfo.username),
    d: common_vendor.p({
      span: 14
    }),
    e: common_vendor.p({
      span: 10
    }),
    f: common_vendor.t($data.userInfo.email),
    g: common_vendor.p({
      span: 14
    }),
    h: common_vendor.p({
      span: 10
    }),
    i: common_vendor.p({
      span: 14
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/prosperous/Desktop/SE/mobile_frontend/pages/mine/personal-info/index.vue"]]);
wx.createPage(MiniProgramPage);
