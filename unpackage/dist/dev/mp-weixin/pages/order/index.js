"use strict";
const common_vendor = require("../../common/vendor.js");
const config = require("../../config.js");
if (!Math) {
  TopNavBar();
}
const TopNavBar = () => "../../components/top-navbar/index.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.onMounted(() => {
      request_orders();
    });
    const urlPrefix = config.Config.urlPrefix;
    const barNameList = [
      {
        name: "To be Paid",
        id: "0"
      },
      {
        name: "Paid",
        id: "1"
      },
      {
        name: "Cancelled",
        id: "2"
      }
    ];
    let orders = [];
    const reqContentList = common_vendor.reactive([]);
    const request_orders = function() {
      common_vendor.index.request({
        url: urlPrefix + "/order/token/",
        methods: "GET",
        header: {
          "Authorization": common_vendor.index.getStorageSync("token")
        }
      }).then((res) => {
        orders = res.data.result;
        reqContentList.push({
          content: orders.filter((order) => {
            return order.status === "unpaid";
          }),
          mft_components: "OrderItem"
        });
        reqContentList.push({
          content: orders.filter((order) => {
            return order.status === "paid";
          }),
          mft_components: "OrderItem"
        });
        reqContentList.push({
          content: orders.filter((order) => {
            return order.status === "cancelled";
          }),
          mft_components: "OrderItem"
        });
        console.log(reqContentList);
      });
    };
    const width = "33.3%";
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          width,
          barNameList,
          barContentList: reqContentList
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/prosperous/Desktop/SE/mobile_frontend/pages/order/index.vue"]]);
wx.createPage(MiniProgramPage);
