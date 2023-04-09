"use strict";
const common_vendor = require("../../common/vendor.js");
const timeSlot = () => "../wanghexu-timeslot/wanghexu-timeslot.js";
const _sfc_main = {
  name: "Time",
  components: {
    timeSlot
  },
  data() {
    return {
      time: "",
      single: "",
      datetimesingle: "",
      range: [Date.now(), "2026-08-08"],
      datetimerange: [],
      start: Date.now() - 1e9,
      end: Date.now() + 1e9
    };
  },
  onLoad() {
  },
  watch: {
    datetimesingle(newval) {
      console.log("Choose one:", this.datetimesingle);
    },
    range(newval) {
      console.log("Choose period:", this.range);
    },
    datetimerange(newval) {
      console.log("Choose period:", this.datetimerange);
    }
  },
  mounted() {
    setTimeout(() => {
      this.datetimesingle = Date.now();
      this.single = "";
      this.datetimerange = ["2022-10-12 0:01:10", "2026-08-08 23:59:59"];
    }, 3e3);
  },
  methods: {
    //点击吊起弹窗
    openTime() {
      this.$refs.timeslot.open();
    },
    //确认
    confirmTime(e) {
      console.log(e);
      this.time = e.start.hour + ":" + e.start.min + "~" + e.end.hour + ":" + e.end.min;
    },
    change(e) {
      this.single = e;
      console.log("Event change:", this.single = e);
    },
    changeLog(e) {
      console.log("Event change:", e);
    },
    maskClick(e) {
      console.log("Event maskClick:", e);
    }
  }
};
if (!Array) {
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  _easycom_uni_datetime_picker2();
}
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
if (!Math) {
  _easycom_uni_datetime_picker();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.maskClick),
    b: common_vendor.o(($event) => $data.single = $event),
    c: common_vendor.p({
      type: "date",
      ["clear-icon"]: false,
      modelValue: $data.single
    }),
    d: common_vendor.o((...args) => $options.openTime && $options.openTime(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/prosperous/Desktop/SE/mobile_frontend/components/time/index.vue"]]);
wx.createComponent(Component);
