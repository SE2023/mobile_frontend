"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "Banner",
  props: {
    itemList: Array
  }
  // data() {
  //         return {
  // imgHeights: [], // 图片的高度
  //             background: ['color1', 'color2', 'color3'],
  //             indicatorDots: true,
  //             autoplay: true,
  //             interval: 2000,
  //             duration: 500
  //         }
  //     },
  //  methods: {
  // _imagesHeight({ detail }) {
  //   const app = this;
  //   // 获取图片真实宽度
  //   const { width, height } = detail;
  //   // 宽高比
  //   const ratio = width / height;
  //   // 计算的高度值
  //   const viewHeight = app.windowWidth / ratio;
  //   // 把每一张图片的高度记录到数组里
  //   app.imgHeights.push(viewHeight);
  // },
  //          changeIndicatorDots(e) {
  //              this.indicatorDots = !this.indicatorDots
  //          },
  //          changeAutoplay(e) {
  //              this.autoplay = !this.autoplay
  //          },
  //          intervalChange(e) {
  //              this.interval = e.target.value
  //          },
  //          durationChange(e) {
  //              this.duration = e.target.value
  //          }
  //  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.itemList, (item, k0, i0) => {
      return {
        a: item.url,
        b: item.id
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4971621b"], ["__file", "/Users/prosperous/Desktop/SE/mobile_frontend/components/banner/index.vue"]]);
wx.createComponent(Component);
