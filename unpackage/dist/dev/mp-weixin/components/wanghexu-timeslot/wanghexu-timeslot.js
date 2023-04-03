"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "time_slot",
  props: {
    title: {
      type: String,
      default: () => {
        return "Choose the time";
      }
    }
  },
  data() {
    return {
      timeMaskShow: false,
      //遮罩
      isShow: false,
      //显示
      typeList: ["Start Time", "Finish Time"],
      typeIndex: 0,
      //下标
      startvalue: [14, 0],
      //默认下标，14时 00分
      endvalue: [15, 0],
      //默认下标，15时 00分
      indicatorStyle: "height: 50px;",
      // timeList:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
      timeHour: [],
      timeMin: []
      //分钟可选项
    };
  },
  mounted() {
    let timeHour = [];
    let timeMin = [];
    for (let i = 0; i < 24; i++) {
      timeHour.push(this.formatNumber(i));
    }
    for (let i = 0; i < 60; i++) {
      timeMin.push(this.formatNumber(i));
    }
    this.timeHour = timeHour;
    this.timeMin = timeMin;
  },
  methods: {
    //看看是不是有两位数
    formatNumber(n) {
      n = n.toString();
      return n[1] ? n : "0" + n;
    },
    //开始选择
    bindstartChange(e) {
      console.log(e);
      this.startvalue = e.detail.value;
    },
    //结束选择
    bindendChange(e) {
      console.log(e);
      this.endvalue = e.detail.value;
    },
    /**
     * 关闭弹窗
     */
    close() {
      this.timeMaskShow = false;
      this.$nextTick(() => {
        setTimeout(() => {
          this.isShow = false;
          this.$emit("close");
        }, 300);
      });
    },
    /**
     * 确认按钮
     */
    confirm() {
      if (this.typeIndex == 0) {
        this.endvalue = [this.startvalue[0] + 1, 0];
        this.typeIndex = 1;
      } else {
        if (this.startvalue[0] < this.endvalue[0] || this.startvalue[0] == this.endvalue[0] && this.startvalue[1] < this.endvalue[1]) {
          var obj = {
            start: {
              hour: this.timeHour[this.startvalue[0]],
              min: this.timeMin[this.startvalue[1]]
            },
            end: {
              hour: this.timeHour[this.endvalue[0]],
              min: this.timeMin[this.endvalue[1]]
            }
          };
          this.$emit("confirm", obj);
          this.close();
        } else {
          common_vendor.index.showToast({
            icon: "error",
            title: "The finish time must ended after start time"
          });
        }
      }
    },
    /**
     * 打开日历弹窗
     */
    open() {
      this.typeIndex = 0;
      this.isShow = true;
      this.$nextTick(() => {
        setTimeout(() => {
          this.timeMaskShow = true;
        }, 50);
      });
    },
    //栏目选择
    handleType(index) {
      if (index != this.typeIndex) {
        if (index == 1) {
          this.endvalue = [this.startvalue[0] + 1, 0];
        }
        this.typeIndex = index;
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isShow
  }, $data.isShow ? {
    b: $data.timeMaskShow ? 1 : ""
  } : {}, {
    c: $data.isShow
  }, $data.isShow ? {
    d: common_vendor.o((...args) => $options.close && $options.close(...args)),
    e: common_vendor.t($props.title),
    f: common_vendor.o((...args) => $options.confirm && $options.confirm(...args)),
    g: common_vendor.f($data.typeList, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: $data.typeIndex == index ? 1 : "",
        c: index,
        d: common_vendor.o(($event) => $options.handleType(index), index)
      };
    }),
    h: common_vendor.f($data.timeHour, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    i: common_vendor.f($data.timeMin, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    j: $data.startvalue,
    k: $data.indicatorStyle,
    l: common_vendor.o((...args) => $options.bindstartChange && $options.bindstartChange(...args)),
    m: common_vendor.f($data.timeHour, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    n: common_vendor.f($data.timeMin, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index
      };
    }),
    o: $data.endvalue,
    p: $data.indicatorStyle,
    q: common_vendor.o((...args) => $options.bindendChange && $options.bindendChange(...args)),
    r: $data.typeIndex,
    s: $data.timeMaskShow ? 1 : ""
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d011683a"], ["__file", "/Users/prosperous/Desktop/SE/mobile_frontend/components/wanghexu-timeslot/wanghexu-timeslot.vue"]]);
wx.createComponent(Component);
