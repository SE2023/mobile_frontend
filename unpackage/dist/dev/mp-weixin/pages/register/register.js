"use strict";
const common_vendor = require("../../common/vendor.js");
const config = require("../../config.js");
const urlPrefix = config.Config.urlPrefix;
const _sfc_main = {
  data() {
    return {
      formData: {
        username: "",
        email: "",
        confirmCode: "",
        password: "",
        confirmedPassword: ""
      },
      getCaptchaText: "Captcha",
      countNumber: 60,
      captchaDisabled: false,
      rules: {
        username: {
          rules: [
            {
              required: true,
              errorMessage: "Please input your username"
            }
          ]
        },
        email: {
          rules: [
            {
              required: true,
              errorMessage: "Please input your email"
            },
            {
              format: "email",
              errorMessage: "The email is invalid"
            }
          ]
        },
        confirmCode: {
          rules: [
            {
              required: true,
              errorMessage: "Please input the captcha"
            },
            {
              length: 6,
              errorMessage: "The length should be 4"
            }
          ]
        },
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
        },
        confirmedPassword: {
          rules: [
            {
              required: true,
              errorMessage: "Please input your password"
            }
            // {
            // 	validateFunction: function(rule, value, data, callback) {
            // 		if (value !== this.formData.password) {
            // 			callback('The 2 passwords does not match');
            // 		}
            // 		return true;
            // 	}
            // }
          ]
        }
      }
    };
  },
  methods: {
    submitData() {
      console.log("sadf");
      this.$refs.form.validate().then((res) => {
        console.log("valid form data: ", res);
        common_vendor.index.request({
          url: urlPrefix + "/Consumer",
          method: "POST",
          data: this.formData
        }).then((res2) => {
          console.log("res.data.code: ", res2);
          if (res2.data.code === 0) {
            common_vendor.index.showModal({
              title: "Registered successfully!",
              confirmText: "Confirm",
              cancelText: "Cancel",
              success: function(res3) {
                if (res3.confirm) {
                  common_vendor.index.navigateTo({
                    url: "/pages/login/index"
                  });
                }
              }
            });
          } else {
            common_vendor.index.showModal({
              title: "Failed",
              confirmText: "Confirm",
              cancelText: "Cancel"
            });
          }
        }).catch((error) => {
          console.log("error: ", error);
        });
      }).catch((err) => {
        console.log("Invalid form data:", err);
      });
    },
    getCaptcha() {
      this.countNumber = 60;
      setInterval(() => {
        if (this.countNumber !== 0) {
          this.countNumber--;
          this.getCaptchaText = this.countNumber + "s";
          this.captchaDisabled = true;
        } else {
          this.getCaptchaText = "Captcha";
          this.captchaDisabled = false;
        }
      }, 1e3);
      common_vendor.index.request({
        url: urlPrefix + "/Consumer/" + this.formData.email,
        method: "POST"
      }).then((res) => {
        console.log(res);
      }).catch((e) => {
        console.log(e);
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_col2 = common_vendor.resolveComponent("uni-col");
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_uni_col2 + _easycom_uni_row2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_col = () => "../../uni_modules/uni-row/components/uni-col/uni-col.js";
const _easycom_uni_row = () => "../../uni_modules/uni-row/components/uni-row/uni-row.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_uni_col + _easycom_uni_row + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => _ctx.binddata("username", $data.formData.username)),
    b: common_vendor.o(($event) => $data.formData.username = $event),
    c: common_vendor.p({
      modelValue: $data.formData.username
    }),
    d: common_vendor.p({
      label: "Username",
      name: "username"
    }),
    e: common_vendor.o(($event) => _ctx.binddata("email", $data.formData.email)),
    f: common_vendor.o(($event) => $data.formData.email = $event),
    g: common_vendor.p({
      modelValue: $data.formData.email
    }),
    h: common_vendor.p({
      span: 18
    }),
    i: common_vendor.t($data.getCaptchaText),
    j: common_vendor.o((...args) => $options.getCaptcha && $options.getCaptcha(...args)),
    k: $data.captchaDisabled,
    l: common_vendor.p({
      span: 5,
      offset: 1
    }),
    m: common_vendor.p({
      label: "Email",
      name: "email"
    }),
    n: common_vendor.o(($event) => _ctx.binddata("confirmCode", $data.formData.confirmCode)),
    o: common_vendor.o(($event) => $data.formData.confirmCode = $event),
    p: common_vendor.p({
      modelValue: $data.formData.confirmCode
    }),
    q: common_vendor.p({
      label: "Captcha",
      name: "confirmCode"
    }),
    r: common_vendor.o(($event) => _ctx.binddata("password", $data.formData.password)),
    s: common_vendor.o(($event) => $data.formData.password = $event),
    t: common_vendor.p({
      type: "password",
      modelValue: $data.formData.password
    }),
    v: common_vendor.p({
      label: "Password",
      name: "password"
    }),
    w: common_vendor.o(($event) => _ctx.binddata("confirmedPassword", $data.formData.confirmedPassword)),
    x: common_vendor.o(($event) => $data.formData.confirmedPassword = $event),
    y: common_vendor.p({
      type: "password",
      modelValue: $data.formData.confirmedPassword
    }),
    z: common_vendor.p({
      label: "ConfirmedPassword",
      name: "confirmedPassword"
    }),
    A: common_vendor.sr("form", "d7c630ea-0"),
    B: common_vendor.p({
      modelValue: $data.formData,
      rules: $data.rules,
      labelPosition: "top"
    }),
    C: common_vendor.o((...args) => $options.submitData && $options.submitData(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/prosperous/Desktop/SE/mobile_frontend/pages/register/register.vue"]]);
wx.createPage(MiniProgramPage);
