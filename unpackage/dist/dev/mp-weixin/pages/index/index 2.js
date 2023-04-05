"use strict";
const common_vendor = require("../../common/vendor.js");
const config = require("../../config.js");
const Search = () => "./search/index.js";
const Banner = () => "../../components/banner/index.js";
const Card = () => "../../components/card/index.js";
const Tabbar = () => "../../components/tabbar/index.js";
const TopNavBar = () => "../../components/top-navbar/index.js";
const Swimming = () => "../../components/tabbar-component/swimming.js";
const Fitness = () => "../../components/tabbar-component/fitness.js";
const Squash = () => "../../components/tabbar-component/Squash.js";
const Sports = () => "../../components/tabbar-component/Sports.js";
const Book = () => "../../components/book/index.js";
const Time = () => "../../components/time/index.js";
const urlPrefix = config.Config.urlPrefix;
getApp();
const width = "25%";
const itemList = [
  { id: 0, url: "/static/swiper/swiper1.jpg" },
  { id: 1, url: "/static/swiper/swiper2.jpg" },
  { id: 2, url: "/static/swiper/swiper3.jpg" }
];
const orderNavbar = [
  { id: "all", name: "Swimming Pool", iconpath: "/static/icon/swim.png", url: "../facilities/details/index" },
  { id: "payment", name: "Fitness Room", iconpath: "/static/icon/squash.png" },
  { id: "delivery", name: "Squash Courts", iconpath: "/static/icon/fitness.png" },
  { id: "delivery", name: "Sports Hall", iconpath: "/static/icon/sports.png" }
];
const barNameList = [
  { name: "Swim", id: "0" },
  { name: "Fitness", id: "1" },
  { name: "Squash", id: "2" },
  { name: "Sports", id: "3" }
];
const barContentList = [
  {
    id: "01",
    title: "To be Paid",
    status: "unused",
    time: "2023-4-1",
    mft_components: "Time"
  },
  {
    id: "02",
    title: "Paid",
    status: "1",
    time: "2023-4-2",
    mft_components: "Time"
  },
  {
    id: "03",
    title: "Cancelled",
    status: "2",
    time: "2023-4-3",
    mft_components: "Time"
  },
  {
    id: "04",
    title: "Cancelled",
    status: "2",
    time: "2023-4-3",
    mft_components: "Time"
  }
];
const _sfc_main = {
  components: {
    Search,
    Banner,
    Card,
    Tabbar,
    Swimming,
    Fitness,
    Squash,
    Sports,
    TopNavBar,
    Book,
    Time
  },
  data() {
    return {
      // 页面参数
      options: {},
      // 页面属性
      page: {},
      // 页面元素
      items: [],
      orderNavbar,
      itemList,
      width,
      barNameList,
      barContentList,
      tabIndex: "ChooseTime",
      tabBars: [
        {
          name: "Swimming",
          id: "Swimming"
        },
        {
          name: "Fitness",
          id: "Fitness"
        },
        {
          name: "Squash",
          id: "Squash"
        },
        {
          name: "Sports",
          id: "Sports"
        }
      ],
      currentTabComponent: "Swimming"
    };
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
  },
  mounted() {
    common_vendor.index.request({
      url: urlPrefix + "/user/staffs",
      method: "GET"
    }).then((res) => {
      console.log("result", res.data.result);
    });
  },
  methods: {
    TarData(item) {
      this.tabIndex = item.id;
      this.currentTabComponent = item.id;
    }
  }
};
if (!Array) {
  const _component_Search = common_vendor.resolveComponent("Search");
  const _component_Banner = common_vendor.resolveComponent("Banner");
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  const _component_Card = common_vendor.resolveComponent("Card");
  const _component_TopNavBar = common_vendor.resolveComponent("TopNavBar");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _component_Book = common_vendor.resolveComponent("Book");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_component_Search + _component_Banner + _easycom_uni_notice_bar2 + _component_Card + _component_TopNavBar + _easycom_uni_datetime_picker2 + _component_Book + _easycom_uni_section2)();
}
const _easycom_uni_notice_bar = () => "../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_notice_bar + _easycom_uni_datetime_picker + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      itemList: $data.itemList
    }),
    b: common_vendor.p({
      ["show-icon"]: true,
      scrollable: true,
      text: "Sports Center is pretty great!"
    }),
    c: common_vendor.p({
      DataList: $data.orderNavbar,
      name: "",
      extra: ""
    }),
    d: common_vendor.p({
      width: $data.width,
      height: _ctx.height,
      barNameList: $data.barNameList
    }),
    e: common_vendor.p({
      type: "datetime"
    }),
    f: common_vendor.p({
      title: "Recommend For You",
      padding: true,
      titleFontSize: "30rpx",
      titleColor: "#F25E5E"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/prosperous/Desktop/SE/mobile_frontend/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
