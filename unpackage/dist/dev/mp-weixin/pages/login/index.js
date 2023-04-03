"use strict";
const common_vendor = require("../../common/vendor.js");
const config = require("../../config.js");
const urlPrefix = config.Config.urlPrefix;
const _sfc_main = {
  data() {
    return {
      formData: {
        username: "",
        password: ""
      },
      rules: {
        // 对name字段进行必填验证
        username: {
          rules: [{
            required: true,
            errorMessage: "Please input your username"
          }]
        },
        // 对password字段进行必填验证
        password: {
          rules: [
            {
              required: true,
              errorMessage: "Please input your password"
            },
            {
              minLength: 6,
              maxLength: 20,
              errorMessage: "The length of your password is between {minLength} and {maxLength}."
            }
          ]
        }
      }
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate().then((res) => {
        console.log("formData", this.formData);
        common_vendor.index.request({
          url: urlPrefix + "/login",
          header: {
            "content-type": "application/json;charset:utf-8"
          },
          method: "POST",
          data: this.formData,
          success(res2) {
            console.log(res2.data.result.token);
            if (res2.data.code === 0) {
              common_vendor.index.showModal({
                title: "Login Successfully!",
                confirmText: "Confirm",
                showCancel: false,
                success: function(modalRes) {
                  common_vendor.index.setStorageSync("token", res2.data.result.token);
                  if (modalRes.confirm) {
                    common_vendor.index.reLaunch({
                      url: "/pages/mine/mine"
                    });
                  }
                }
              });
            } else {
              common_vendor.index.showModal({
                title: res2.data.message,
                confirmText: "Confirm",
                showCancel: false
              });
            }
          }
        });
      }).catch((err) => {
        console.log("Invalid form data：", err);
      });
    },
    toRigisterPage() {
      common_vendor.index.navigateTo({
        url: "/pages/register/register"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => _ctx.binddata("username", $data.formData.username)),
    b: common_vendor.o(($event) => $data.formData.username = $event),
    c: common_vendor.p({
      type: "text",
      modelValue: $data.formData.username
    }),
    d: common_vendor.p({
      label: "Username",
      name: "username"
    }),
    e: common_vendor.o(($event) => _ctx.binddata("password", $data.formData.password)),
    f: common_vendor.o(($event) => $data.formData.password = $event),
    g: common_vendor.p({
      type: "password",
      modelValue: $data.formData.password
    }),
    h: common_vendor.p({
      label: "Password",
      name: "password"
    }),
    i: common_vendor.sr("form", "2d0de3b0-0"),
    j: common_vendor.p({
      modelValue: $data.formData,
      rules: $data.rules,
      labelPosition: "top"
    }),
    k: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    l: common_vendor.o((...args) => $options.toRigisterPage && $options.toRigisterPage(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/prosperous/Desktop/SE/mobile_frontend/pages/login/index.vue"]]);
wx.createPage(MiniProgramPage);
