if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const ON_LOAD = "onLoad";
  const ON_REACH_BOTTOM = "onReachBottom";
  const ON_PULL_DOWN_REFRESH = "onPullDownRefresh";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const onReachBottom = /* @__PURE__ */ createHook(ON_REACH_BOTTOM);
  const onPullDownRefresh = /* @__PURE__ */ createHook(ON_PULL_DOWN_REFRESH);
  const icons = {
    "id": "2852637",
    "name": "uniui\u56FE\u6807\u5E93",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$V = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return unescape(`%u${code.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$N(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
      class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, null, 6);
  }
  const __easycom_0$b = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["render", _sfc_render$N], ["__scopeId", "data-v-d31e1c47"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const _sfc_main$U = {
    name: "UniNoticeBar",
    emits: ["click", "getmore", "close"],
    props: {
      text: {
        type: String,
        default: ""
      },
      moreText: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: "#FFF9EA"
      },
      speed: {
        type: Number,
        default: 100
      },
      color: {
        type: String,
        default: "#FF9A43"
      },
      fontSize: {
        type: Number,
        default: 14
      },
      moreColor: {
        type: String,
        default: "#FF9A43"
      },
      single: {
        type: [Boolean, String],
        default: false
      },
      scrollable: {
        type: [Boolean, String],
        default: false
      },
      showIcon: {
        type: [Boolean, String],
        default: false
      },
      showGetMore: {
        type: [Boolean, String],
        default: false
      },
      showClose: {
        type: [Boolean, String],
        default: false
      }
    },
    data() {
      const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      const elIdBox = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      return {
        textWidth: 0,
        boxWidth: 0,
        wrapWidth: "",
        webviewHide: false,
        elId,
        elIdBox,
        show: true,
        animationDuration: "none",
        animationPlayState: "paused",
        animationDelay: "0s"
      };
    },
    computed: {
      isShowGetMore() {
        return this.showGetMore === true || this.showGetMore === "true";
      },
      isShowClose() {
        return (this.showClose === true || this.showClose === "true") && (this.showGetMore === false || this.showGetMore === "false");
      }
    },
    mounted() {
      var pages = getCurrentPages();
      var page = pages[pages.length - 1];
      var currentWebview = page.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
      this.$nextTick(() => {
        this.initSize();
      });
    },
    methods: {
      initSize() {
        if (this.scrollable) {
          let query = [];
          let textQuery = new Promise((resolve, reject) => {
            uni.createSelectorQuery().in(this).select(`#${this.elId}`).boundingClientRect().exec((ret) => {
              this.textWidth = ret[0].width;
              resolve();
            });
          });
          let boxQuery = new Promise((resolve, reject) => {
            uni.createSelectorQuery().in(this).select(`#${this.elIdBox}`).boundingClientRect().exec((ret) => {
              this.boxWidth = ret[0].width;
              resolve();
            });
          });
          query.push(textQuery);
          query.push(boxQuery);
          Promise.all(query).then(() => {
            this.animationDuration = `${this.textWidth / this.speed}s`;
            this.animationDelay = `-${this.boxWidth / this.speed}s`;
            setTimeout(() => {
              this.animationPlayState = "running";
            }, 1e3);
          });
        }
      },
      loopAnimation() {
      },
      clickMore() {
        this.$emit("getmore");
      },
      close() {
        this.show = false;
        this.$emit("close");
      },
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$b);
    return $data.show ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: "uni-noticebar",
      style: vue.normalizeStyle({ backgroundColor: $props.backgroundColor }),
      onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      $props.showIcon === true || $props.showIcon === "true" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
        key: 0,
        class: "uni-noticebar-icon",
        type: "sound",
        color: $props.color,
        size: $props.fontSize * 1.5
      }, null, 8, ["color", "size"])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", {
        ref: "textBox",
        class: vue.normalizeClass(["uni-noticebar__content-wrapper", {
          "uni-noticebar__content-wrapper--scrollable": $props.scrollable,
          "uni-noticebar__content-wrapper--single": !$props.scrollable && ($props.single || $props.moreText)
        }]),
        style: vue.normalizeStyle({ height: $props.scrollable ? $props.fontSize * 1.5 + "px" : "auto" })
      }, [
        vue.createElementVNode("view", {
          id: $data.elIdBox,
          class: vue.normalizeClass(["uni-noticebar__content", {
            "uni-noticebar__content--scrollable": $props.scrollable,
            "uni-noticebar__content--single": !$props.scrollable && ($props.single || $props.moreText)
          }])
        }, [
          vue.createElementVNode("text", {
            id: $data.elId,
            ref: "animationEle",
            class: vue.normalizeClass(["uni-noticebar__content-text", {
              "uni-noticebar__content-text--scrollable": $props.scrollable,
              "uni-noticebar__content-text--single": !$props.scrollable && ($props.single || $props.showGetMore)
            }]),
            style: vue.normalizeStyle({
              color: $props.color,
              fontSize: $props.fontSize + "px",
              lineHeight: $props.fontSize * 1.5 + "px",
              width: $data.wrapWidth + "px",
              "animationDuration": $data.animationDuration,
              "-webkit-animationDuration": $data.animationDuration,
              animationPlayState: $data.webviewHide ? "paused" : $data.animationPlayState,
              "-webkit-animationPlayState": $data.webviewHide ? "paused" : $data.animationPlayState,
              animationDelay: $data.animationDelay,
              "-webkit-animationDelay": $data.animationDelay
            })
          }, vue.toDisplayString($props.text), 15, ["id"])
        ], 10, ["id"])
      ], 6),
      $options.isShowGetMore ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-noticebar__more uni-cursor-point",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.clickMore && $options.clickMore(...args))
      }, [
        $props.moreText.length > 0 ? (vue.openBlock(), vue.createElementBlock("text", {
          key: 0,
          style: vue.normalizeStyle({ color: $props.moreColor, fontSize: $props.fontSize + "px" })
        }, vue.toDisplayString($props.moreText), 5)) : (vue.openBlock(), vue.createBlock(_component_uni_icons, {
          key: 1,
          type: "right",
          color: $props.moreColor,
          size: $props.fontSize * 1.1
        }, null, 8, ["color", "size"]))
      ])) : vue.createCommentVNode("v-if", true),
      $options.isShowClose ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: "uni-noticebar-close uni-cursor-point"
      }, [
        vue.createVNode(_component_uni_icons, {
          type: "closeempty",
          color: $props.color,
          size: $props.fontSize * 1.1,
          onClick: $options.close
        }, null, 8, ["color", "size", "onClick"])
      ])) : vue.createCommentVNode("v-if", true)
    ], 4)) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0$a = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["render", _sfc_render$M], ["__scopeId", "data-v-c3453ea3"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.vue"]]);
  const _sfc_main$T = {
    name: "UniSection",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        required: true,
        default: ""
      },
      titleFontSize: {
        type: String,
        default: "14px"
      },
      titleColor: {
        type: String,
        default: "#333"
      },
      subTitle: {
        type: String,
        default: ""
      },
      subTitleFontSize: {
        type: String,
        default: "12px"
      },
      subTitleColor: {
        type: String,
        default: "#999"
      },
      padding: {
        type: [Boolean, String],
        default: false
      }
    },
    computed: {
      _padding() {
        if (typeof this.padding === "string") {
          return this.padding;
        }
        return this.padding ? "10px" : "";
      }
    },
    watch: {
      title(newVal) {
        if (uni.report && newVal !== "") {
          uni.report("title", newVal);
        }
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$L(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-section" }, [
      vue.createElementVNode("view", {
        class: "uni-section-header",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      }, [
        $props.type ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: vue.normalizeClass(["uni-section-header__decoration", $props.type])
        }, null, 2)) : vue.renderSlot(_ctx.$slots, "decoration", { key: 1 }, void 0, true),
        vue.createElementVNode("view", { class: "uni-section-header__content" }, [
          vue.createElementVNode("text", {
            style: vue.normalizeStyle({ "font-size": $props.titleFontSize, "color": $props.titleColor }),
            class: vue.normalizeClass(["uni-section__content-title", { "distraction": !$props.subTitle }])
          }, vue.toDisplayString($props.title), 7),
          $props.subTitle ? (vue.openBlock(), vue.createElementBlock("text", {
            key: 0,
            style: vue.normalizeStyle({ "font-size": $props.subTitleFontSize, "color": $props.subTitleColor }),
            class: "uni-section-header__content-sub"
          }, vue.toDisplayString($props.subTitle), 5)) : vue.createCommentVNode("v-if", true)
        ]),
        vue.createElementVNode("view", { class: "uni-section-header__slot-right" }, [
          vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
        ])
      ]),
      vue.createElementVNode("view", {
        class: "uni-section-content",
        style: vue.normalizeStyle({ padding: $options._padding })
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 4)
    ]);
  }
  const __easycom_0$9 = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["render", _sfc_render$L], ["__scopeId", "data-v-637fd36b"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/uni_modules/uni-section/components/uni-section/uni-section.vue"]]);
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    const lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en$1 = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  const zhHans$1 = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9"
  };
  const zhHant$1 = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "\u8ACB\u8F38\u5165\u641C\u7D22\u5167\u5BB9"
  };
  const messages = {
    en: en$1,
    "zh-Hans": zhHans$1,
    "zh-Hant": zhHant$1
  };
  const {
    t: t$2
  } = initVueI18n(messages);
  const _sfc_main$S = {
    name: "UniSearchBar",
    emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: 5
      },
      clearButton: {
        type: String,
        default: "auto"
      },
      cancelButton: {
        type: String,
        default: "auto"
      },
      cancelText: {
        type: String,
        default: "\u53D6\u6D88"
      },
      bgColor: {
        type: String,
        default: "#F8F8F8"
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      focus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        showSync: false,
        searchVal: ""
      };
    },
    computed: {
      cancelTextI18n() {
        return this.cancelText || t$2("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t$2("uni-search-bar.placeholder");
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal) {
          this.searchVal = newVal;
          if (newVal) {
            this.show = true;
          }
        }
      },
      focus: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            if (this.readonly)
              return;
            this.show = true;
            this.$nextTick(() => {
              this.showSync = true;
            });
          }
        }
      },
      searchVal(newVal, oldVal) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
      }
    },
    methods: {
      searchClick() {
        if (this.readonly)
          return;
        if (this.show) {
          return;
        }
        this.show = true;
        this.$nextTick(() => {
          this.showSync = true;
        });
      },
      clear() {
        this.$emit("clear", {
          value: this.searchVal
        });
        this.searchVal = "";
      },
      cancel() {
        if (this.readonly)
          return;
        this.$emit("cancel", {
          value: this.searchVal
        });
        this.searchVal = "";
        this.show = false;
        this.showSync = false;
        plus.key.hideSoftKeybord();
      },
      confirm() {
        plus.key.hideSoftKeybord();
        this.$emit("confirm", {
          value: this.searchVal
        });
      },
      blur() {
        plus.key.hideSoftKeybord();
        this.$emit("blur", {
          value: this.searchVal
        });
      },
      emitFocus(e) {
        this.$emit("focus", e.detail);
      }
    }
  };
  function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$b);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-searchbar" }, [
      vue.createElementVNode("view", {
        style: vue.normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
        class: "uni-searchbar__box",
        onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
      }, [
        vue.createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
          vue.renderSlot(_ctx.$slots, "searchIcon", {}, () => [
            vue.createVNode(_component_uni_icons, {
              color: "#c0c4cc",
              size: "18",
              type: "search"
            })
          ], true)
        ]),
        $data.show || $data.searchVal ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
          key: 0,
          focus: $data.showSync,
          disabled: $props.readonly,
          placeholder: $options.placeholderText,
          maxlength: $props.maxlength,
          class: "uni-searchbar__box-search-input",
          "confirm-type": "search",
          type: "text",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event),
          onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
          onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
          onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
        }, null, 40, ["focus", "disabled", "placeholder", "maxlength"])), [
          [vue.vModelText, $data.searchVal]
        ]) : (vue.openBlock(), vue.createElementBlock("text", {
          key: 1,
          class: "uni-searchbar__text-placeholder"
        }, vue.toDisplayString($props.placeholder), 1)),
        $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "uni-searchbar__box-icon-clear",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
        }, [
          vue.renderSlot(_ctx.$slots, "clearIcon", {}, () => [
            vue.createVNode(_component_uni_icons, {
              color: "#c0c4cc",
              size: "20",
              type: "clear"
            })
          ], true)
        ])) : vue.createCommentVNode("v-if", true)
      ], 4),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 0,
        onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
        class: "uni-searchbar__cancel"
      }, vue.toDisplayString($options.cancelTextI18n), 1)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$8 = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["render", _sfc_render$K], ["__scopeId", "data-v-f07ef577"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  const _sfc_main$R = {
    props: {
      itemIndex: String,
      itemStyle: Object,
      params: Object
    },
    methods: {
      onTargetSearch() {
        this.$navTo("pages/search/index");
      }
    }
  };
  function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$8);
    return vue.openBlock(), vue.createElementBlock("view", { class: "diy-search" }, [
      vue.createCommentVNode(" \u641C\u7D22\u6846 "),
      vue.createVNode(_component_uni_search_bar, {
        class: "uni-mt-10",
        radius: "100",
        placeholder: "search",
        clearButton: "none",
        cancelButton: "none",
        onConfirm: _ctx.search
      }, null, 8, ["onConfirm"]),
      vue.createCommentVNode(' <view class="inner"  @click="onTargetSearch">\n      <view class="search-input">\n        <text class="search-icon iconfont icon-search"></text>\n        <text>search</text>\n      </view>\n    </view> ')
    ]);
  }
  const Search = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["render", _sfc_render$J], ["__scopeId", "data-v-205fdbfe"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/pages/index/search/index.vue"]]);
  const _sfc_main$Q = {
    name: "Banner",
    props: {
      itemList: Array
    }
  };
  function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-margin-wrap" }, [
      vue.createElementVNode("swiper", {
        class: "swiper",
        circular: "",
        "indicator-dots": "true",
        autoplay: "true",
        interval: "2000",
        duration: "500",
        "indicator-active-color": "#C67171"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.itemList, (item) => {
          return vue.openBlock(), vue.createElementBlock("swiper-item", {
            key: item.id
          }, [
            vue.createElementVNode("view", { class: "swiper-item" }, [
              vue.createElementVNode("image", {
                src: item.url
              }, null, 8, ["src"])
            ])
          ]);
        }), 128))
      ])
    ]);
  }
  const Banner = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["render", _sfc_render$I], ["__scopeId", "data-v-4971621b"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/components/banner/index.vue"]]);
  const _sfc_main$P = {
    name: "UniCard",
    emits: ["click"],
    props: {
      title: {
        type: String,
        default: ""
      },
      subTitle: {
        type: String,
        default: ""
      },
      padding: {
        type: String,
        default: "10px"
      },
      margin: {
        type: String,
        default: "15px"
      },
      spacing: {
        type: String,
        default: "0 10px"
      },
      extra: {
        type: String,
        default: ""
      },
      cover: {
        type: String,
        default: ""
      },
      thumbnail: {
        type: String,
        default: ""
      },
      isFull: {
        type: Boolean,
        default: false
      },
      isShadow: {
        type: Boolean,
        default: true
      },
      shadow: {
        type: String,
        default: "0px 0px 3px 1px rgba(0, 0, 0, 0.08)"
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onClick(type) {
        this.$emit("click", type);
      }
    }
  };
  function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
      style: vue.normalizeStyle({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" })
    }, [
      vue.createCommentVNode(" \u5C01\u9762 "),
      vue.renderSlot(_ctx.$slots, "cover", {}, () => [
        $props.cover ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-card__cover"
        }, [
          vue.createElementVNode("image", {
            class: "uni-card__cover-image",
            mode: "widthFix",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
            src: $props.cover
          }, null, 8, ["src"])
        ])) : vue.createCommentVNode("v-if", true)
      ], true),
      vue.renderSlot(_ctx.$slots, "title", {}, () => [
        $props.title || $props.extra ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-card__header"
        }, [
          vue.createCommentVNode(" \u5361\u7247\u6807\u9898 "),
          vue.createElementVNode("view", {
            class: "uni-card__header-box",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
          }, [
            $props.thumbnail ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "uni-card__header-avatar"
            }, [
              vue.createElementVNode("image", {
                class: "uni-card__header-avatar-image",
                src: $props.thumbnail,
                mode: "aspectFit"
              }, null, 8, ["src"])
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "uni-card__header-content" }, [
              vue.createElementVNode("text", { class: "uni-card__header-content-title uni-ellipsis" }, vue.toDisplayString($props.title), 1),
              $props.title && $props.subTitle ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 0,
                class: "uni-card__header-content-subtitle uni-ellipsis"
              }, vue.toDisplayString($props.subTitle), 1)) : vue.createCommentVNode("v-if", true)
            ])
          ]),
          vue.createElementVNode("view", {
            class: "uni-card__header-extra",
            onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
          }, [
            vue.createElementVNode("text", { class: "uni-card__header-extra-text" }, vue.toDisplayString($props.extra), 1)
          ])
        ])) : vue.createCommentVNode("v-if", true)
      ], true),
      vue.createCommentVNode(" \u5361\u7247\u5185\u5BB9 "),
      vue.createElementVNode("view", {
        class: "uni-card__content",
        style: vue.normalizeStyle({ padding: $props.padding }),
        onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 4),
      vue.createElementVNode("view", {
        class: "uni-card__actions",
        onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
      }, [
        vue.renderSlot(_ctx.$slots, "actions", {}, void 0, true)
      ])
    ], 6);
  }
  const __easycom_0$7 = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["render", _sfc_render$H], ["__scopeId", "data-v-ae4bee67"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/uni_modules/uni-card/components/uni-card/uni-card.vue"]]);
  const _sfc_main$O = {
    name: "Card",
    props: {
      DataList: Array,
      name: String,
      extra: String
    },
    methods: {
      toTargetItem(item) {
        uni.navigateTo({
          url: item.url
        });
      }
    }
  };
  function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_card = resolveEasycom(vue.resolveDynamicComponent("uni-card"), __easycom_0$7);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_uni_card, {
        class: "card",
        "is-shadow": true,
        extra: $props.extra,
        title: $props.name
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "order-navbar" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.DataList, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "order-navbar-item",
                key: index,
                onClick: ($event) => $options.toTargetItem(item)
              }, [
                vue.createElementVNode("view", { class: "img" }, [
                  vue.createElementVNode("image", {
                    class: "icons-pay",
                    src: item.iconpath
                  }, null, 8, ["src"])
                ]),
                vue.createElementVNode("view", { class: "item-name" }, vue.toDisplayString(item.name), 1)
              ], 8, ["onClick"]);
            }), 128))
          ])
        ]),
        _: 1
      }, 8, ["extra", "title"])
    ]);
  }
  const Card = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$G], ["__scopeId", "data-v-99c72c33"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/components/card/index.vue"]]);
  const _sfc_main$N = {
    name: "Tabbar",
    props: {
      tabBars: Array,
      tabIndex: String
    },
    data() {
      return {};
    },
    methods: {
      tarTap(item) {
        this.$emit("TarTap", item);
      }
    }
  };
  function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createCommentVNode(" \u9876\u90E8\u9009\u9879\u5361 "),
      vue.createElementVNode("view", { class: "tabs" }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.tabBars, (tab, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "uni-tab-item",
            key: tab.id
          }, [
            vue.createElementVNode("text", {
              class: vue.normalizeClass(["uni-tab-item-title", { tabActive: $props.tabIndex == tab.id }]),
              onClick: ($event) => $options.tarTap(tab)
            }, [
              vue.createTextVNode(vue.toDisplayString(tab.name) + " ", 1),
              vue.createElementVNode("span", { class: "tab-item-title-line" })
            ], 10, ["onClick"])
          ]);
        }), 128))
      ])
    ], 2112);
  }
  const Tabbar = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$F], ["__scopeId", "data-v-0e399a7b"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/components/tabbar/index.vue"]]);
  const _sfc_main$M = {
    __name: "index",
    props: ["content"],
    setup(__props) {
      const props = __props;
      formatAppLog("log", "at components/order-item/index.vue:25", "content", props.content);
      return (_ctx, _cache) => {
        return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.content, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: "order-item",
            key: item
          }, [
            vue.createElementVNode("view", { class: "text" }, [
              vue.createElementVNode("view", { class: "title" }, vue.toDisplayString(item.name), 1),
              vue.createElementVNode("view", { class: "time" }, vue.toDisplayString(item.time), 1),
              vue.createElementVNode("view", { class: "status" }, vue.toDisplayString(item.status), 1)
            ]),
            item.status != "cancelled" ? (vue.openBlock(), vue.createElementBlock("button", {
              key: 0,
              class: "cancelBtn"
            }, " Cancel ")) : vue.createCommentVNode("v-if", true)
          ]);
        }), 128);
      };
    }
  };
  const OrderItem = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-507e1e2a"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/components/order-item/index.vue"]]);
  class Calendar {
    constructor({
      date,
      selected,
      startDate,
      endDate,
      range
    } = {}) {
      this.date = this.getDate(new Date());
      this.selected = selected || [];
      this.startDate = startDate;
      this.endDate = endDate;
      this.range = range;
      this.cleanMultipleStatus();
      this.weeks = {};
      this.lastHover = false;
    }
    setDate(date) {
      this.selectDate = this.getDate(date);
      this._getWeek(this.selectDate.fullDate);
    }
    cleanMultipleStatus() {
      this.multipleStatus = {
        before: "",
        after: "",
        data: []
      };
    }
    resetSatrtDate(startDate) {
      this.startDate = startDate;
    }
    resetEndDate(endDate) {
      this.endDate = endDate;
    }
    getDate(date, AddDayCount = 0, str = "day") {
      if (!date) {
        date = new Date();
      }
      if (typeof date !== "object") {
        date = date.replace(/-/g, "/");
      }
      const dd = new Date(date);
      switch (str) {
        case "day":
          dd.setDate(dd.getDate() + AddDayCount);
          break;
        case "month":
          if (dd.getDate() === 31 && AddDayCount > 0) {
            dd.setDate(dd.getDate() + AddDayCount);
          } else {
            const preMonth = dd.getMonth();
            dd.setMonth(preMonth + AddDayCount);
            const nextMonth = dd.getMonth();
            if (AddDayCount < 0 && preMonth !== 0 && nextMonth - preMonth > AddDayCount) {
              dd.setMonth(nextMonth + (nextMonth - preMonth + AddDayCount));
            }
            if (AddDayCount > 0 && nextMonth - preMonth > AddDayCount) {
              dd.setMonth(nextMonth - (nextMonth - preMonth - AddDayCount));
            }
          }
          break;
        case "year":
          dd.setFullYear(dd.getFullYear() + AddDayCount);
          break;
      }
      const y = dd.getFullYear();
      const m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
      const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
      return {
        fullDate: y + "-" + m + "-" + d,
        year: y,
        month: m,
        date: d,
        day: dd.getDay()
      };
    }
    _getLastMonthDays(firstDay, full) {
      let dateArr = [];
      for (let i = firstDay; i > 0; i--) {
        const beforeDate = new Date(full.year, full.month - 1, -i + 1).getDate();
        dateArr.push({
          date: beforeDate,
          month: full.month - 1,
          disable: true
        });
      }
      return dateArr;
    }
    _currentMonthDys(dateData, full) {
      let dateArr = [];
      let fullDate = this.date.fullDate;
      for (let i = 1; i <= dateData; i++) {
        let nowDate = full.year + "-" + (full.month < 10 ? full.month : full.month) + "-" + (i < 10 ? "0" + i : i);
        let isDay = fullDate === nowDate;
        let info = this.selected && this.selected.find((item) => {
          if (this.dateEqual(nowDate, item.date)) {
            return item;
          }
        });
        let disableBefore = true;
        let disableAfter = true;
        if (this.startDate) {
          disableBefore = this.dateCompare(this.startDate, nowDate);
        }
        if (this.endDate) {
          disableAfter = this.dateCompare(nowDate, this.endDate);
        }
        let multiples = this.multipleStatus.data;
        let checked = false;
        let multiplesStatus = -1;
        if (this.range) {
          if (multiples) {
            multiplesStatus = multiples.findIndex((item) => {
              return this.dateEqual(item, nowDate);
            });
          }
          if (multiplesStatus !== -1) {
            checked = true;
          }
        }
        let data = {
          fullDate: nowDate,
          year: full.year,
          date: i,
          multiple: this.range ? checked : false,
          beforeMultiple: this.isLogicBefore(nowDate, this.multipleStatus.before, this.multipleStatus.after),
          afterMultiple: this.isLogicAfter(nowDate, this.multipleStatus.before, this.multipleStatus.after),
          month: full.month,
          disable: !(disableBefore && disableAfter),
          isDay,
          userChecked: false
        };
        if (info) {
          data.extraInfo = info;
        }
        dateArr.push(data);
      }
      return dateArr;
    }
    _getNextMonthDays(surplus, full) {
      let dateArr = [];
      for (let i = 1; i < surplus + 1; i++) {
        dateArr.push({
          date: i,
          month: Number(full.month) + 1,
          disable: true
        });
      }
      return dateArr;
    }
    getInfo(date) {
      if (!date) {
        date = new Date();
      }
      const dateInfo = this.canlender.find((item) => item.fullDate === this.getDate(date).fullDate);
      return dateInfo;
    }
    dateCompare(startDate, endDate) {
      startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
      endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
      if (startDate <= endDate) {
        return true;
      } else {
        return false;
      }
    }
    dateEqual(before, after) {
      before = new Date(before.replace("-", "/").replace("-", "/"));
      after = new Date(after.replace("-", "/").replace("-", "/"));
      if (before.getTime() - after.getTime() === 0) {
        return true;
      } else {
        return false;
      }
    }
    isLogicBefore(currentDay, before, after) {
      let logicBefore = before;
      if (before && after) {
        logicBefore = this.dateCompare(before, after) ? before : after;
      }
      return this.dateEqual(logicBefore, currentDay);
    }
    isLogicAfter(currentDay, before, after) {
      let logicAfter = after;
      if (before && after) {
        logicAfter = this.dateCompare(before, after) ? after : before;
      }
      return this.dateEqual(logicAfter, currentDay);
    }
    geDateAll(begin, end) {
      var arr = [];
      var ab = begin.split("-");
      var ae = end.split("-");
      var db = new Date();
      db.setFullYear(ab[0], ab[1] - 1, ab[2]);
      var de = new Date();
      de.setFullYear(ae[0], ae[1] - 1, ae[2]);
      var unixDb = db.getTime() - 24 * 60 * 60 * 1e3;
      var unixDe = de.getTime() - 24 * 60 * 60 * 1e3;
      for (var k = unixDb; k <= unixDe; ) {
        k = k + 24 * 60 * 60 * 1e3;
        arr.push(this.getDate(new Date(parseInt(k))).fullDate);
      }
      return arr;
    }
    setMultiple(fullDate) {
      let {
        before,
        after
      } = this.multipleStatus;
      if (!this.range)
        return;
      if (before && after) {
        if (!this.lastHover) {
          this.lastHover = true;
          return;
        }
        this.multipleStatus.before = fullDate;
        this.multipleStatus.after = "";
        this.multipleStatus.data = [];
        this.multipleStatus.fulldate = "";
        this.lastHover = false;
      } else {
        if (!before) {
          this.multipleStatus.before = fullDate;
          this.lastHover = false;
        } else {
          this.multipleStatus.after = fullDate;
          if (this.dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
          } else {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
          }
          this.lastHover = true;
        }
      }
      this._getWeek(fullDate);
    }
    setHoverMultiple(fullDate) {
      let {
        before,
        after
      } = this.multipleStatus;
      if (!this.range)
        return;
      if (this.lastHover)
        return;
      if (!before) {
        this.multipleStatus.before = fullDate;
      } else {
        this.multipleStatus.after = fullDate;
        if (this.dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
        } else {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
        }
      }
      this._getWeek(fullDate);
    }
    setDefaultMultiple(before, after) {
      this.multipleStatus.before = before;
      this.multipleStatus.after = after;
      if (before && after) {
        if (this.dateCompare(before, after)) {
          this.multipleStatus.data = this.geDateAll(before, after);
          this._getWeek(after);
        } else {
          this.multipleStatus.data = this.geDateAll(after, before);
          this._getWeek(before);
        }
      }
    }
    _getWeek(dateData) {
      const {
        fullDate,
        year,
        month,
        date,
        day
      } = this.getDate(dateData);
      let firstDay = new Date(year, month - 1, 1).getDay();
      let currentDay = new Date(year, month, 0).getDate();
      let dates = {
        lastMonthDays: this._getLastMonthDays(firstDay, this.getDate(dateData)),
        currentMonthDys: this._currentMonthDys(currentDay, this.getDate(dateData)),
        nextMonthDays: [],
        weeks: []
      };
      let canlender = [];
      const surplus = 42 - (dates.lastMonthDays.length + dates.currentMonthDys.length);
      dates.nextMonthDays = this._getNextMonthDays(surplus, this.getDate(dateData));
      canlender = canlender.concat(dates.lastMonthDays, dates.currentMonthDys, dates.nextMonthDays);
      let weeks = {};
      for (let i = 0; i < canlender.length; i++) {
        if (i % 7 === 0) {
          weeks[parseInt(i / 7)] = new Array(7);
        }
        weeks[parseInt(i / 7)][i % 7] = canlender[i];
      }
      this.canlender = canlender;
      this.weeks = weeks;
    }
  }
  const _sfc_main$L = {
    props: {
      weeks: {
        type: Object,
        default() {
          return {};
        }
      },
      calendar: {
        type: Object,
        default: () => {
          return {};
        }
      },
      selected: {
        type: Array,
        default: () => {
          return [];
        }
      },
      lunar: {
        type: Boolean,
        default: false
      },
      checkHover: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      choiceDate(weeks) {
        this.$emit("change", weeks);
      },
      handleMousemove(weeks) {
        this.$emit("handleMouse", weeks);
      }
    }
  };
  function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-calendar-item__weeks-box", {
        "uni-calendar-item--disable": $props.weeks.disable,
        "uni-calendar-item--before-checked-x": $props.weeks.beforeMultiple,
        "uni-calendar-item--multiple": $props.weeks.multiple,
        "uni-calendar-item--after-checked-x": $props.weeks.afterMultiple
      }]),
      onClick: _cache[0] || (_cache[0] = ($event) => $options.choiceDate($props.weeks)),
      onMouseenter: _cache[1] || (_cache[1] = ($event) => $options.handleMousemove($props.weeks))
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-calendar-item__weeks-box-item", {
          "uni-calendar-item--checked": $props.calendar.fullDate === $props.weeks.fullDate && ($props.calendar.userChecked || !$props.checkHover),
          "uni-calendar-item--checked-range-text": $props.checkHover,
          "uni-calendar-item--before-checked": $props.weeks.beforeMultiple,
          "uni-calendar-item--multiple": $props.weeks.multiple,
          "uni-calendar-item--after-checked": $props.weeks.afterMultiple,
          "uni-calendar-item--disable": $props.weeks.disable
        }])
      }, [
        $props.selected && $props.weeks.extraInfo ? (vue.openBlock(), vue.createElementBlock("text", {
          key: 0,
          class: "uni-calendar-item__weeks-box-circle"
        })) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("text", { class: "uni-calendar-item__weeks-box-text uni-calendar-item__weeks-box-text-disable uni-calendar-item--checked-text" }, vue.toDisplayString($props.weeks.date), 1)
      ], 2),
      vue.createElementVNode("view", {
        class: vue.normalizeClass({ "uni-calendar-item--isDay": $props.weeks.isDay })
      }, null, 2)
    ], 34);
  }
  const calendarItem = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$E], ["__scopeId", "data-v-3c762a01"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/uni_modules/uni-datetime-picker/components/uni-datetime-picker/calendar-item.vue"]]);
  const en = {
    "uni-datetime-picker.selectDate": "select date",
    "uni-datetime-picker.selectTime": "select time",
    "uni-datetime-picker.selectDateTime": "select datetime",
    "uni-datetime-picker.startDate": "start date",
    "uni-datetime-picker.endDate": "end date",
    "uni-datetime-picker.startTime": "start time",
    "uni-datetime-picker.endTime": "end time",
    "uni-datetime-picker.ok": "ok",
    "uni-datetime-picker.clear": "clear",
    "uni-datetime-picker.cancel": "cancel",
    "uni-datetime-picker.year": "-",
    "uni-datetime-picker.month": "",
    "uni-calender.MON": "MON",
    "uni-calender.TUE": "TUE",
    "uni-calender.WED": "WED",
    "uni-calender.THU": "THU",
    "uni-calender.FRI": "FRI",
    "uni-calender.SAT": "SAT",
    "uni-calender.SUN": "SUN",
    "uni-calender.confirm": "confirm"
  };
  const zhHans = {
    "uni-datetime-picker.selectDate": "\u9009\u62E9\u65E5\u671F",
    "uni-datetime-picker.selectTime": "\u9009\u62E9\u65F6\u95F4",
    "uni-datetime-picker.selectDateTime": "\u9009\u62E9\u65E5\u671F\u65F6\u95F4",
    "uni-datetime-picker.startDate": "\u5F00\u59CB\u65E5\u671F",
    "uni-datetime-picker.endDate": "\u7ED3\u675F\u65E5\u671F",
    "uni-datetime-picker.startTime": "\u5F00\u59CB\u65F6\u95F4",
    "uni-datetime-picker.endTime": "\u7ED3\u675F\u65F6\u95F4",
    "uni-datetime-picker.ok": "\u786E\u5B9A",
    "uni-datetime-picker.clear": "\u6E05\u9664",
    "uni-datetime-picker.cancel": "\u53D6\u6D88",
    "uni-datetime-picker.year": "\u5E74",
    "uni-datetime-picker.month": "\u6708",
    "uni-calender.SUN": "\u65E5",
    "uni-calender.MON": "\u4E00",
    "uni-calender.TUE": "\u4E8C",
    "uni-calender.WED": "\u4E09",
    "uni-calender.THU": "\u56DB",
    "uni-calender.FRI": "\u4E94",
    "uni-calender.SAT": "\u516D",
    "uni-calender.confirm": "\u786E\u8BA4"
  };
  const zhHant = {
    "uni-datetime-picker.selectDate": "\u9078\u64C7\u65E5\u671F",
    "uni-datetime-picker.selectTime": "\u9078\u64C7\u6642\u9593",
    "uni-datetime-picker.selectDateTime": "\u9078\u64C7\u65E5\u671F\u6642\u9593",
    "uni-datetime-picker.startDate": "\u958B\u59CB\u65E5\u671F",
    "uni-datetime-picker.endDate": "\u7D50\u675F\u65E5\u671F",
    "uni-datetime-picker.startTime": "\u958B\u59CB\u65F6\u95F4",
    "uni-datetime-picker.endTime": "\u7D50\u675F\u65F6\u95F4",
    "uni-datetime-picker.ok": "\u78BA\u5B9A",
    "uni-datetime-picker.clear": "\u6E05\u9664",
    "uni-datetime-picker.cancel": "\u53D6\u6D88",
    "uni-datetime-picker.year": "\u5E74",
    "uni-datetime-picker.month": "\u6708",
    "uni-calender.SUN": "\u65E5",
    "uni-calender.MON": "\u4E00",
    "uni-calender.TUE": "\u4E8C",
    "uni-calender.WED": "\u4E09",
    "uni-calender.THU": "\u56DB",
    "uni-calender.FRI": "\u4E94",
    "uni-calender.SAT": "\u516D",
    "uni-calender.confirm": "\u78BA\u8A8D"
  };
  const i18nMessages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const { t: t$1 } = initVueI18n(i18nMessages);
  const _sfc_main$K = {
    name: "UniDatetimePicker",
    data() {
      return {
        indicatorStyle: `height: 50px;`,
        visible: false,
        fixNvueBug: {},
        dateShow: true,
        timeShow: true,
        title: "\u65E5\u671F\u548C\u65F6\u95F4",
        time: "",
        year: 1920,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        startYear: 1920,
        startMonth: 1,
        startDay: 1,
        startHour: 0,
        startMinute: 0,
        startSecond: 0,
        endYear: 2120,
        endMonth: 12,
        endDay: 31,
        endHour: 23,
        endMinute: 59,
        endSecond: 59
      };
    },
    props: {
      type: {
        type: String,
        default: "datetime"
      },
      value: {
        type: [String, Number],
        default: ""
      },
      modelValue: {
        type: [String, Number],
        default: ""
      },
      start: {
        type: [Number, String],
        default: ""
      },
      end: {
        type: [Number, String],
        default: ""
      },
      returnType: {
        type: String,
        default: "string"
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: [Boolean, String],
        default: true
      },
      hideSecond: {
        type: [Boolean, String],
        default: false
      }
    },
    watch: {
      modelValue: {
        handler(newVal) {
          if (newVal) {
            this.parseValue(this.fixIosDateFormat(newVal));
            this.initTime(false);
          } else {
            this.time = "";
            this.parseValue(Date.now());
          }
        },
        immediate: true
      },
      type: {
        handler(newValue) {
          if (newValue === "date") {
            this.dateShow = true;
            this.timeShow = false;
            this.title = "\u65E5\u671F";
          } else if (newValue === "time") {
            this.dateShow = false;
            this.timeShow = true;
            this.title = "\u65F6\u95F4";
          } else {
            this.dateShow = true;
            this.timeShow = true;
            this.title = "\u65E5\u671F\u548C\u65F6\u95F4";
          }
        },
        immediate: true
      },
      start: {
        handler(newVal) {
          this.parseDatetimeRange(this.fixIosDateFormat(newVal), "start");
        },
        immediate: true
      },
      end: {
        handler(newVal) {
          this.parseDatetimeRange(this.fixIosDateFormat(newVal), "end");
        },
        immediate: true
      },
      months(newVal) {
        this.checkValue("month", this.month, newVal);
      },
      days(newVal) {
        this.checkValue("day", this.day, newVal);
      },
      hours(newVal) {
        this.checkValue("hour", this.hour, newVal);
      },
      minutes(newVal) {
        this.checkValue("minute", this.minute, newVal);
      },
      seconds(newVal) {
        this.checkValue("second", this.second, newVal);
      }
    },
    computed: {
      years() {
        return this.getCurrentRange("year");
      },
      months() {
        return this.getCurrentRange("month");
      },
      days() {
        return this.getCurrentRange("day");
      },
      hours() {
        return this.getCurrentRange("hour");
      },
      minutes() {
        return this.getCurrentRange("minute");
      },
      seconds() {
        return this.getCurrentRange("second");
      },
      ymd() {
        return [this.year - this.minYear, this.month - this.minMonth, this.day - this.minDay];
      },
      hms() {
        return [this.hour - this.minHour, this.minute - this.minMinute, this.second - this.minSecond];
      },
      currentDateIsStart() {
        return this.year === this.startYear && this.month === this.startMonth && this.day === this.startDay;
      },
      currentDateIsEnd() {
        return this.year === this.endYear && this.month === this.endMonth && this.day === this.endDay;
      },
      minYear() {
        return this.startYear;
      },
      maxYear() {
        return this.endYear;
      },
      minMonth() {
        if (this.year === this.startYear) {
          return this.startMonth;
        } else {
          return 1;
        }
      },
      maxMonth() {
        if (this.year === this.endYear) {
          return this.endMonth;
        } else {
          return 12;
        }
      },
      minDay() {
        if (this.year === this.startYear && this.month === this.startMonth) {
          return this.startDay;
        } else {
          return 1;
        }
      },
      maxDay() {
        if (this.year === this.endYear && this.month === this.endMonth) {
          return this.endDay;
        } else {
          return this.daysInMonth(this.year, this.month);
        }
      },
      minHour() {
        if (this.type === "datetime") {
          if (this.currentDateIsStart) {
            return this.startHour;
          } else {
            return 0;
          }
        }
        if (this.type === "time") {
          return this.startHour;
        }
      },
      maxHour() {
        if (this.type === "datetime") {
          if (this.currentDateIsEnd) {
            return this.endHour;
          } else {
            return 23;
          }
        }
        if (this.type === "time") {
          return this.endHour;
        }
      },
      minMinute() {
        if (this.type === "datetime") {
          if (this.currentDateIsStart && this.hour === this.startHour) {
            return this.startMinute;
          } else {
            return 0;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.startHour) {
            return this.startMinute;
          } else {
            return 0;
          }
        }
      },
      maxMinute() {
        if (this.type === "datetime") {
          if (this.currentDateIsEnd && this.hour === this.endHour) {
            return this.endMinute;
          } else {
            return 59;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.endHour) {
            return this.endMinute;
          } else {
            return 59;
          }
        }
      },
      minSecond() {
        if (this.type === "datetime") {
          if (this.currentDateIsStart && this.hour === this.startHour && this.minute === this.startMinute) {
            return this.startSecond;
          } else {
            return 0;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.startHour && this.minute === this.startMinute) {
            return this.startSecond;
          } else {
            return 0;
          }
        }
      },
      maxSecond() {
        if (this.type === "datetime") {
          if (this.currentDateIsEnd && this.hour === this.endHour && this.minute === this.endMinute) {
            return this.endSecond;
          } else {
            return 59;
          }
        }
        if (this.type === "time") {
          if (this.hour === this.endHour && this.minute === this.endMinute) {
            return this.endSecond;
          } else {
            return 59;
          }
        }
      },
      selectTimeText() {
        return t$1("uni-datetime-picker.selectTime");
      },
      okText() {
        return t$1("uni-datetime-picker.ok");
      },
      clearText() {
        return t$1("uni-datetime-picker.clear");
      },
      cancelText() {
        return t$1("uni-datetime-picker.cancel");
      }
    },
    mounted() {
    },
    methods: {
      lessThanTen(item) {
        return item < 10 ? "0" + item : item;
      },
      parseTimeType(timeString) {
        if (timeString) {
          let timeArr = timeString.split(":");
          this.hour = Number(timeArr[0]);
          this.minute = Number(timeArr[1]);
          this.second = Number(timeArr[2]);
        }
      },
      initPickerValue(datetime) {
        let defaultValue = null;
        if (datetime) {
          defaultValue = this.compareValueWithStartAndEnd(datetime, this.start, this.end);
        } else {
          defaultValue = Date.now();
          defaultValue = this.compareValueWithStartAndEnd(defaultValue, this.start, this.end);
        }
        this.parseValue(defaultValue);
      },
      compareValueWithStartAndEnd(value, start, end) {
        let winner = null;
        value = this.superTimeStamp(value);
        start = this.superTimeStamp(start);
        end = this.superTimeStamp(end);
        if (start && end) {
          if (value < start) {
            winner = new Date(start);
          } else if (value > end) {
            winner = new Date(end);
          } else {
            winner = new Date(value);
          }
        } else if (start && !end) {
          winner = start <= value ? new Date(value) : new Date(start);
        } else if (!start && end) {
          winner = value <= end ? new Date(value) : new Date(end);
        } else {
          winner = new Date(value);
        }
        return winner;
      },
      superTimeStamp(value) {
        let dateBase = "";
        if (this.type === "time" && value && typeof value === "string") {
          const now = new Date();
          const year = now.getFullYear();
          const month = now.getMonth() + 1;
          const day = now.getDate();
          dateBase = year + "/" + month + "/" + day + " ";
        }
        if (Number(value)) {
          value = parseInt(value);
          dateBase = 0;
        }
        return this.createTimeStamp(dateBase + value);
      },
      parseValue(value) {
        if (!value) {
          return;
        }
        if (this.type === "time" && typeof value === "string") {
          this.parseTimeType(value);
        } else {
          let defaultDate = null;
          defaultDate = new Date(value);
          if (this.type !== "time") {
            this.year = defaultDate.getFullYear();
            this.month = defaultDate.getMonth() + 1;
            this.day = defaultDate.getDate();
          }
          if (this.type !== "date") {
            this.hour = defaultDate.getHours();
            this.minute = defaultDate.getMinutes();
            this.second = defaultDate.getSeconds();
          }
        }
        if (this.hideSecond) {
          this.second = 0;
        }
      },
      parseDatetimeRange(point, pointType) {
        if (!point) {
          if (pointType === "start") {
            this.startYear = 1920;
            this.startMonth = 1;
            this.startDay = 1;
            this.startHour = 0;
            this.startMinute = 0;
            this.startSecond = 0;
          }
          if (pointType === "end") {
            this.endYear = 2120;
            this.endMonth = 12;
            this.endDay = 31;
            this.endHour = 23;
            this.endMinute = 59;
            this.endSecond = 59;
          }
          return;
        }
        if (this.type === "time") {
          const pointArr = point.split(":");
          this[pointType + "Hour"] = Number(pointArr[0]);
          this[pointType + "Minute"] = Number(pointArr[1]);
          this[pointType + "Second"] = Number(pointArr[2]);
        } else {
          if (!point) {
            pointType === "start" ? this.startYear = this.year - 60 : this.endYear = this.year + 60;
            return;
          }
          if (Number(point)) {
            point = parseInt(point);
          }
          const hasTime = /[0-9]:[0-9]/;
          if (this.type === "datetime" && pointType === "end" && typeof point === "string" && !hasTime.test(
            point
          )) {
            point = point + " 23:59:59";
          }
          const pointDate = new Date(point);
          this[pointType + "Year"] = pointDate.getFullYear();
          this[pointType + "Month"] = pointDate.getMonth() + 1;
          this[pointType + "Day"] = pointDate.getDate();
          if (this.type === "datetime") {
            this[pointType + "Hour"] = pointDate.getHours();
            this[pointType + "Minute"] = pointDate.getMinutes();
            this[pointType + "Second"] = pointDate.getSeconds();
          }
        }
      },
      getCurrentRange(value) {
        const range = [];
        for (let i = this["min" + this.capitalize(value)]; i <= this["max" + this.capitalize(value)]; i++) {
          range.push(i);
        }
        return range;
      },
      capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      },
      checkValue(name2, value, values) {
        if (values.indexOf(value) === -1) {
          this[name2] = values[0];
        }
      },
      daysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
      },
      fixIosDateFormat(value) {
        if (typeof value === "string") {
          value = value.replace(/-/g, "/");
        }
        return value;
      },
      createTimeStamp(time) {
        if (!time)
          return;
        if (typeof time === "number") {
          return time;
        } else {
          time = time.replace(/-/g, "/");
          if (this.type === "date") {
            time = time + " 00:00:00";
          }
          return Date.parse(time);
        }
      },
      createDomSting() {
        const yymmdd = this.year + "-" + this.lessThanTen(this.month) + "-" + this.lessThanTen(this.day);
        let hhmmss = this.lessThanTen(this.hour) + ":" + this.lessThanTen(this.minute);
        if (!this.hideSecond) {
          hhmmss = hhmmss + ":" + this.lessThanTen(this.second);
        }
        if (this.type === "date") {
          return yymmdd;
        } else if (this.type === "time") {
          return hhmmss;
        } else {
          return yymmdd + " " + hhmmss;
        }
      },
      initTime(emit = true) {
        this.time = this.createDomSting();
        if (!emit)
          return;
        if (this.returnType === "timestamp" && this.type !== "time") {
          this.$emit("change", this.createTimeStamp(this.time));
          this.$emit("input", this.createTimeStamp(this.time));
          this.$emit("update:modelValue", this.createTimeStamp(this.time));
        } else {
          this.$emit("change", this.time);
          this.$emit("input", this.time);
          this.$emit("update:modelValue", this.time);
        }
      },
      bindDateChange(e) {
        const val = e.detail.value;
        this.year = this.years[val[0]];
        this.month = this.months[val[1]];
        this.day = this.days[val[2]];
      },
      bindTimeChange(e) {
        const val = e.detail.value;
        this.hour = this.hours[val[0]];
        this.minute = this.minutes[val[1]];
        this.second = this.seconds[val[2]];
      },
      initTimePicker() {
        if (this.disabled)
          return;
        const value = this.fixIosDateFormat(this.time);
        this.initPickerValue(value);
        this.visible = !this.visible;
      },
      tiggerTimePicker(e) {
        this.visible = !this.visible;
      },
      clearTime() {
        this.time = "";
        this.$emit("change", this.time);
        this.$emit("input", this.time);
        this.$emit("update:modelValue", this.time);
        this.tiggerTimePicker();
      },
      setTime() {
        this.initTime();
        this.tiggerTimePicker();
      }
    }
  };
  function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-datetime-picker" }, [
      vue.createElementVNode("view", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.initTimePicker && $options.initTimePicker(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["uni-datetime-picker-timebox-pointer", { "uni-datetime-picker-disabled": $props.disabled, "uni-datetime-picker-timebox": $props.border }])
          }, [
            vue.createElementVNode("text", { class: "uni-datetime-picker-text" }, vue.toDisplayString($data.time), 1),
            !$data.time ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "uni-datetime-picker-time"
            }, [
              vue.createElementVNode("text", { class: "uni-datetime-picker-text" }, vue.toDisplayString($options.selectTimeText), 1)
            ])) : vue.createCommentVNode("v-if", true)
          ], 2)
        ], true)
      ]),
      $data.visible ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        id: "mask",
        class: "uni-datetime-picker-mask",
        onClick: _cache[1] || (_cache[1] = (...args) => $options.tiggerTimePicker && $options.tiggerTimePicker(...args))
      })) : vue.createCommentVNode("v-if", true),
      $data.visible ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: vue.normalizeClass(["uni-datetime-picker-popup", [$data.dateShow && $data.timeShow ? "" : "fix-nvue-height"]]),
        style: vue.normalizeStyle($data.fixNvueBug)
      }, [
        vue.createElementVNode("view", { class: "uni-title" }, [
          vue.createElementVNode("text", { class: "uni-datetime-picker-text" }, vue.toDisplayString($options.selectTimeText), 1)
        ]),
        $data.dateShow ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-datetime-picker__container-box"
        }, [
          vue.createElementVNode("picker-view", {
            class: "uni-datetime-picker-view",
            "indicator-style": $data.indicatorStyle,
            value: $options.ymd,
            onChange: _cache[2] || (_cache[2] = (...args) => $options.bindDateChange && $options.bindDateChange(...args))
          }, [
            vue.createElementVNode("picker-view-column", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.years, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "uni-datetime-picker-item",
                  key: index
                }, [
                  vue.createElementVNode("text", { class: "uni-datetime-picker-item" }, vue.toDisplayString($options.lessThanTen(item)), 1)
                ]);
              }), 128))
            ]),
            vue.createElementVNode("picker-view-column", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.months, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "uni-datetime-picker-item",
                  key: index
                }, [
                  vue.createElementVNode("text", { class: "uni-datetime-picker-item" }, vue.toDisplayString($options.lessThanTen(item)), 1)
                ]);
              }), 128))
            ]),
            vue.createElementVNode("picker-view-column", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.days, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "uni-datetime-picker-item",
                  key: index
                }, [
                  vue.createElementVNode("text", { class: "uni-datetime-picker-item" }, vue.toDisplayString($options.lessThanTen(item)), 1)
                ]);
              }), 128))
            ])
          ], 40, ["indicator-style", "value"]),
          vue.createCommentVNode(" \u517C\u5BB9 nvue \u4E0D\u652F\u6301\u4F2A\u7C7B "),
          vue.createElementVNode("text", { class: "uni-datetime-picker-sign sign-left" }, "-"),
          vue.createElementVNode("text", { class: "uni-datetime-picker-sign sign-right" }, "-")
        ])) : vue.createCommentVNode("v-if", true),
        $data.timeShow ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "uni-datetime-picker__container-box"
        }, [
          vue.createElementVNode("picker-view", {
            class: vue.normalizeClass(["uni-datetime-picker-view", [$props.hideSecond ? "time-hide-second" : ""]]),
            "indicator-style": $data.indicatorStyle,
            value: $options.hms,
            onChange: _cache[3] || (_cache[3] = (...args) => $options.bindTimeChange && $options.bindTimeChange(...args))
          }, [
            vue.createElementVNode("picker-view-column", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.hours, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "uni-datetime-picker-item",
                  key: index
                }, [
                  vue.createElementVNode("text", { class: "uni-datetime-picker-item" }, vue.toDisplayString($options.lessThanTen(item)), 1)
                ]);
              }), 128))
            ]),
            vue.createElementVNode("picker-view-column", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.minutes, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "uni-datetime-picker-item",
                  key: index
                }, [
                  vue.createElementVNode("text", { class: "uni-datetime-picker-item" }, vue.toDisplayString($options.lessThanTen(item)), 1)
                ]);
              }), 128))
            ]),
            !$props.hideSecond ? (vue.openBlock(), vue.createElementBlock("picker-view-column", { key: 0 }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.seconds, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "uni-datetime-picker-item",
                  key: index
                }, [
                  vue.createElementVNode("text", { class: "uni-datetime-picker-item" }, vue.toDisplayString($options.lessThanTen(item)), 1)
                ]);
              }), 128))
            ])) : vue.createCommentVNode("v-if", true)
          ], 42, ["indicator-style", "value"]),
          vue.createCommentVNode(" \u517C\u5BB9 nvue \u4E0D\u652F\u6301\u4F2A\u7C7B "),
          vue.createElementVNode("text", {
            class: vue.normalizeClass(["uni-datetime-picker-sign", [$props.hideSecond ? "sign-center" : "sign-left"]])
          }, ":", 2),
          !$props.hideSecond ? (vue.openBlock(), vue.createElementBlock("text", {
            key: 0,
            class: "uni-datetime-picker-sign sign-right"
          }, ":")) : vue.createCommentVNode("v-if", true)
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "uni-datetime-picker-btn" }, [
          vue.createElementVNode("view", {
            onClick: _cache[4] || (_cache[4] = (...args) => $options.clearTime && $options.clearTime(...args))
          }, [
            vue.createElementVNode("text", { class: "uni-datetime-picker-btn-text" }, vue.toDisplayString($options.clearText), 1)
          ]),
          vue.createElementVNode("view", { class: "uni-datetime-picker-btn-group" }, [
            vue.createElementVNode("view", {
              class: "uni-datetime-picker-cancel",
              onClick: _cache[5] || (_cache[5] = (...args) => $options.tiggerTimePicker && $options.tiggerTimePicker(...args))
            }, [
              vue.createElementVNode("text", { class: "uni-datetime-picker-btn-text" }, vue.toDisplayString($options.cancelText), 1)
            ]),
            vue.createElementVNode("view", {
              onClick: _cache[6] || (_cache[6] = (...args) => $options.setTime && $options.setTime(...args))
            }, [
              vue.createElementVNode("text", { class: "uni-datetime-picker-btn-text" }, vue.toDisplayString($options.okText), 1)
            ])
          ])
        ])
      ], 6)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const timePicker = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$D], ["__scopeId", "data-v-1d532b70"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/uni_modules/uni-datetime-picker/components/uni-datetime-picker/time-picker.vue"]]);
  const { t } = initVueI18n(i18nMessages);
  const _sfc_main$J = {
    components: {
      calendarItem,
      timePicker
    },
    props: {
      date: {
        type: String,
        default: ""
      },
      defTime: {
        type: [String, Object],
        default: ""
      },
      selectableTimes: {
        type: [Object],
        default() {
          return {};
        }
      },
      selected: {
        type: Array,
        default() {
          return [];
        }
      },
      lunar: {
        type: Boolean,
        default: false
      },
      startDate: {
        type: String,
        default: ""
      },
      endDate: {
        type: String,
        default: ""
      },
      startPlaceholder: {
        type: String,
        default: ""
      },
      endPlaceholder: {
        type: String,
        default: ""
      },
      range: {
        type: Boolean,
        default: false
      },
      typeHasTime: {
        type: Boolean,
        default: false
      },
      insert: {
        type: Boolean,
        default: true
      },
      showMonth: {
        type: Boolean,
        default: true
      },
      clearDate: {
        type: Boolean,
        default: true
      },
      left: {
        type: Boolean,
        default: true
      },
      right: {
        type: Boolean,
        default: true
      },
      checkHover: {
        type: Boolean,
        default: true
      },
      hideSecond: {
        type: [Boolean],
        default: false
      },
      pleStatus: {
        type: Object,
        default() {
          return {
            before: "",
            after: "",
            data: [],
            fulldate: ""
          };
        }
      }
    },
    data() {
      return {
        show: false,
        weeks: [],
        calendar: {},
        nowDate: "",
        aniMaskShow: false,
        firstEnter: true,
        time: "",
        timeRange: {
          startTime: "",
          endTime: ""
        },
        tempSingleDate: "",
        tempRange: {
          before: "",
          after: ""
        }
      };
    },
    watch: {
      date: {
        immediate: true,
        handler(newVal) {
          if (!this.range) {
            this.tempSingleDate = newVal;
            setTimeout(() => {
              this.init(newVal);
            }, 100);
          }
        }
      },
      defTime: {
        immediate: true,
        handler(newVal) {
          if (!this.range) {
            this.time = newVal;
          } else {
            this.timeRange.startTime = newVal.start;
            this.timeRange.endTime = newVal.end;
          }
        }
      },
      startDate(val) {
        if (!this.cale) {
          return;
        }
        this.cale.resetSatrtDate(val);
        this.cale.setDate(this.nowDate.fullDate);
        this.weeks = this.cale.weeks;
      },
      endDate(val) {
        if (!this.cale) {
          return;
        }
        this.cale.resetEndDate(val);
        this.cale.setDate(this.nowDate.fullDate);
        this.weeks = this.cale.weeks;
      },
      selected(newVal) {
        if (!this.cale) {
          return;
        }
        this.cale.setSelectInfo(this.nowDate.fullDate, newVal);
        this.weeks = this.cale.weeks;
      },
      pleStatus: {
        immediate: true,
        handler(newVal) {
          const {
            before,
            after,
            fulldate,
            which
          } = newVal;
          this.tempRange.before = before;
          this.tempRange.after = after;
          setTimeout(() => {
            if (fulldate) {
              this.cale.setHoverMultiple(fulldate);
              if (before && after) {
                this.cale.lastHover = true;
                if (this.rangeWithinMonth(after, before))
                  return;
                this.setDate(before);
              } else {
                this.cale.setMultiple(fulldate);
                this.setDate(this.nowDate.fullDate);
                this.calendar.fullDate = "";
                this.cale.lastHover = false;
              }
            } else {
              if (!this.cale) {
                return;
              }
              this.cale.setDefaultMultiple(before, after);
              if (which === "left") {
                this.setDate(before);
                this.weeks = this.cale.weeks;
              } else {
                this.setDate(after);
                this.weeks = this.cale.weeks;
              }
              this.cale.lastHover = true;
            }
          }, 16);
        }
      }
    },
    computed: {
      reactStartTime() {
        const activeDate = this.range ? this.tempRange.before : this.calendar.fullDate;
        const res = activeDate === this.startDate ? this.selectableTimes.start : "";
        return res;
      },
      reactEndTime() {
        const activeDate = this.range ? this.tempRange.after : this.calendar.fullDate;
        const res = activeDate === this.endDate ? this.selectableTimes.end : "";
        return res;
      },
      selectDateText() {
        return t("uni-datetime-picker.selectDate");
      },
      startDateText() {
        return this.startPlaceholder || t("uni-datetime-picker.startDate");
      },
      endDateText() {
        return this.endPlaceholder || t("uni-datetime-picker.endDate");
      },
      okText() {
        return t("uni-datetime-picker.ok");
      },
      yearText() {
        return t("uni-datetime-picker.year");
      },
      monthText() {
        return t("uni-datetime-picker.month");
      },
      MONText() {
        return t("uni-calender.MON");
      },
      TUEText() {
        return t("uni-calender.TUE");
      },
      WEDText() {
        return t("uni-calender.WED");
      },
      THUText() {
        return t("uni-calender.THU");
      },
      FRIText() {
        return t("uni-calender.FRI");
      },
      SATText() {
        return t("uni-calender.SAT");
      },
      SUNText() {
        return t("uni-calender.SUN");
      },
      confirmText() {
        return t("uni-calender.confirm");
      }
    },
    created() {
      this.cale = new Calendar({
        selected: this.selected,
        startDate: this.startDate,
        endDate: this.endDate,
        range: this.range
      });
      this.init(this.date);
    },
    methods: {
      leaveCale() {
        this.firstEnter = true;
      },
      handleMouse(weeks) {
        if (weeks.disable)
          return;
        if (this.cale.lastHover)
          return;
        let {
          before,
          after
        } = this.cale.multipleStatus;
        if (!before)
          return;
        this.calendar = weeks;
        this.cale.setHoverMultiple(this.calendar.fullDate);
        this.weeks = this.cale.weeks;
        if (this.firstEnter) {
          this.$emit("firstEnterCale", this.cale.multipleStatus);
          this.firstEnter = false;
        }
      },
      rangeWithinMonth(A, B) {
        const [yearA, monthA] = A.split("-");
        const [yearB, monthB] = B.split("-");
        return yearA === yearB && monthA === monthB;
      },
      clean() {
        this.close();
      },
      maskClick() {
        this.$emit("maskClose");
      },
      clearCalender() {
        if (this.range) {
          this.timeRange.startTime = "";
          this.timeRange.endTime = "";
          this.tempRange.before = "";
          this.tempRange.after = "";
          this.cale.multipleStatus.before = "";
          this.cale.multipleStatus.after = "";
          this.cale.multipleStatus.data = [];
          this.cale.lastHover = false;
        } else {
          this.time = "";
          this.tempSingleDate = "";
        }
        this.calendar.fullDate = "";
        this.setDate();
      },
      bindDateChange(e) {
        const value = e.detail.value + "-1";
        this.init(value);
      },
      init(date) {
        this.cale.setDate(date);
        this.weeks = this.cale.weeks;
        this.nowDate = this.calendar = this.cale.getInfo(date);
      },
      open() {
        if (this.clearDate && !this.insert) {
          this.cale.cleanMultipleStatus();
          this.init(this.date);
        }
        this.show = true;
        this.$nextTick(() => {
          setTimeout(() => {
            this.aniMaskShow = true;
          }, 50);
        });
      },
      close() {
        this.aniMaskShow = false;
        this.$nextTick(() => {
          setTimeout(() => {
            this.show = false;
            this.$emit("close");
          }, 300);
        });
      },
      confirm() {
        this.setEmit("confirm");
        this.close();
      },
      change() {
        if (!this.insert)
          return;
        this.setEmit("change");
      },
      monthSwitch() {
        let {
          year,
          month
        } = this.nowDate;
        this.$emit("monthSwitch", {
          year,
          month: Number(month)
        });
      },
      setEmit(name2) {
        let {
          year,
          month,
          date,
          fullDate,
          lunar,
          extraInfo
        } = this.calendar;
        this.$emit(name2, {
          range: this.cale.multipleStatus,
          year,
          month,
          date,
          time: this.time,
          timeRange: this.timeRange,
          fulldate: fullDate,
          lunar,
          extraInfo: extraInfo || {}
        });
      },
      choiceDate(weeks) {
        if (weeks.disable)
          return;
        this.calendar = weeks;
        this.calendar.userChecked = true;
        this.cale.setMultiple(this.calendar.fullDate, true);
        this.weeks = this.cale.weeks;
        this.tempSingleDate = this.calendar.fullDate;
        const beforeDate = new Date(this.cale.multipleStatus.before).getTime();
        const afterDate = new Date(this.cale.multipleStatus.after).getTime();
        if (beforeDate > afterDate && afterDate) {
          this.tempRange.before = this.cale.multipleStatus.after;
          this.tempRange.after = this.cale.multipleStatus.before;
        } else {
          this.tempRange.before = this.cale.multipleStatus.before;
          this.tempRange.after = this.cale.multipleStatus.after;
        }
        this.change();
      },
      backtoday() {
        let date = this.cale.getDate(new Date()).fullDate;
        this.init(date);
        this.change();
      },
      dateCompare(startDate, endDate) {
        startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
        endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
        if (startDate <= endDate) {
          return true;
        } else {
          return false;
        }
      },
      pre() {
        const preDate = this.cale.getDate(this.nowDate.fullDate, -1, "month").fullDate;
        this.setDate(preDate);
        this.monthSwitch();
      },
      next() {
        const nextDate = this.cale.getDate(this.nowDate.fullDate, 1, "month").fullDate;
        this.setDate(nextDate);
        this.monthSwitch();
      },
      setDate(date) {
        this.cale.setDate(date);
        this.weeks = this.cale.weeks;
        this.nowDate = this.cale.getInfo(date);
      }
    }
  };
  function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_calendar_item = vue.resolveComponent("calendar-item");
    const _component_time_picker = vue.resolveComponent("time-picker");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$b);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-calendar",
      onMouseleave: _cache[9] || (_cache[9] = (...args) => $options.leaveCale && $options.leaveCale(...args))
    }, [
      !$props.insert && $data.show ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["uni-calendar__mask", { "uni-calendar--mask-show": $data.aniMaskShow }]),
        onClick: _cache[0] || (_cache[0] = ($event) => {
          $options.clean();
          $options.maskClick();
        })
      }, null, 2)) : vue.createCommentVNode("v-if", true),
      $props.insert || $data.show ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: vue.normalizeClass(["uni-calendar__content", { "uni-calendar--fixed": !$props.insert, "uni-calendar--ani-show": $data.aniMaskShow, "uni-calendar__content-mobile": $data.aniMaskShow }])
      }, [
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["uni-calendar__header", { "uni-calendar__header-mobile": !$props.insert }])
        }, [
          $props.left ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-calendar__header-btn-box",
            onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.pre && $options.pre(...args), ["stop"]))
          }, [
            vue.createElementVNode("view", { class: "uni-calendar__header-btn uni-calendar--left" })
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("picker", {
            mode: "date",
            value: $props.date,
            fields: "month",
            onChange: _cache[2] || (_cache[2] = (...args) => $options.bindDateChange && $options.bindDateChange(...args))
          }, [
            vue.createElementVNode("text", { class: "uni-calendar__header-text" }, vue.toDisplayString(($data.nowDate.year || "") + $options.yearText + ($data.nowDate.month || "") + $options.monthText), 1)
          ], 40, ["value"]),
          $props.right ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "uni-calendar__header-btn-box",
            onClick: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.next && $options.next(...args), ["stop"]))
          }, [
            vue.createElementVNode("view", { class: "uni-calendar__header-btn uni-calendar--right" })
          ])) : vue.createCommentVNode("v-if", true),
          !$props.insert ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "dialog-close",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.clean && $options.clean(...args))
          }, [
            vue.createElementVNode("view", {
              class: "dialog-close-plus",
              "data-id": "close"
            }),
            vue.createElementVNode("view", {
              class: "dialog-close-plus dialog-close-rotate",
              "data-id": "close"
            })
          ])) : vue.createCommentVNode("v-if", true)
        ], 2),
        vue.createElementVNode("view", { class: "uni-calendar__box" }, [
          $props.showMonth ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-calendar__box-bg"
          }, [
            vue.createElementVNode("text", { class: "uni-calendar__box-bg-text" }, vue.toDisplayString($data.nowDate.month), 1)
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", {
            class: "uni-calendar__weeks",
            style: { "padding-bottom": "7px" }
          }, [
            vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
              vue.createElementVNode("text", { class: "uni-calendar__weeks-day-text" }, vue.toDisplayString($options.SUNText), 1)
            ]),
            vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
              vue.createElementVNode("text", { class: "uni-calendar__weeks-day-text" }, vue.toDisplayString($options.MONText), 1)
            ]),
            vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
              vue.createElementVNode("text", { class: "uni-calendar__weeks-day-text" }, vue.toDisplayString($options.TUEText), 1)
            ]),
            vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
              vue.createElementVNode("text", { class: "uni-calendar__weeks-day-text" }, vue.toDisplayString($options.WEDText), 1)
            ]),
            vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
              vue.createElementVNode("text", { class: "uni-calendar__weeks-day-text" }, vue.toDisplayString($options.THUText), 1)
            ]),
            vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
              vue.createElementVNode("text", { class: "uni-calendar__weeks-day-text" }, vue.toDisplayString($options.FRIText), 1)
            ]),
            vue.createElementVNode("view", { class: "uni-calendar__weeks-day" }, [
              vue.createElementVNode("text", { class: "uni-calendar__weeks-day-text" }, vue.toDisplayString($options.SATText), 1)
            ])
          ]),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.weeks, (item, weekIndex) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "uni-calendar__weeks",
              key: weekIndex
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item, (weeks, weeksIndex) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "uni-calendar__weeks-item",
                  key: weeksIndex
                }, [
                  vue.createVNode(_component_calendar_item, {
                    class: "uni-calendar-item--hook",
                    weeks,
                    calendar: $data.calendar,
                    selected: $props.selected,
                    lunar: $props.lunar,
                    checkHover: $props.range,
                    onChange: $options.choiceDate,
                    onHandleMouse: $options.handleMouse
                  }, null, 8, ["weeks", "calendar", "selected", "lunar", "checkHover", "onChange", "onHandleMouse"])
                ]);
              }), 128))
            ]);
          }), 128))
        ]),
        !$props.insert && !$props.range && $props.typeHasTime ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-date-changed uni-calendar--fixed-top",
          style: { "padding": "0 80px" }
        }, [
          vue.createElementVNode("view", { class: "uni-date-changed--time-date" }, vue.toDisplayString($data.tempSingleDate ? $data.tempSingleDate : $options.selectDateText), 1),
          vue.createVNode(_component_time_picker, {
            type: "time",
            start: $options.reactStartTime,
            end: $options.reactEndTime,
            modelValue: $data.time,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.time = $event),
            disabled: !$data.tempSingleDate,
            border: false,
            "hide-second": $props.hideSecond,
            class: "time-picker-style"
          }, null, 8, ["start", "end", "modelValue", "disabled", "hide-second"])
        ])) : vue.createCommentVNode("v-if", true),
        !$props.insert && $props.range && $props.typeHasTime ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "uni-date-changed uni-calendar--fixed-top"
        }, [
          vue.createElementVNode("view", { class: "uni-date-changed--time-start" }, [
            vue.createElementVNode("view", { class: "uni-date-changed--time-date" }, vue.toDisplayString($data.tempRange.before ? $data.tempRange.before : $options.startDateText), 1),
            vue.createVNode(_component_time_picker, {
              type: "time",
              start: $options.reactStartTime,
              modelValue: $data.timeRange.startTime,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.timeRange.startTime = $event),
              border: false,
              "hide-second": $props.hideSecond,
              disabled: !$data.tempRange.before,
              class: "time-picker-style"
            }, null, 8, ["start", "modelValue", "hide-second", "disabled"])
          ]),
          vue.createElementVNode("view", { style: { "line-height": "50px" } }, [
            vue.createVNode(_component_uni_icons, {
              type: "arrowthinright",
              color: "#999"
            })
          ]),
          vue.createElementVNode("view", { class: "uni-date-changed--time-end" }, [
            vue.createElementVNode("view", { class: "uni-date-changed--time-date" }, vue.toDisplayString($data.tempRange.after ? $data.tempRange.after : $options.endDateText), 1),
            vue.createVNode(_component_time_picker, {
              type: "time",
              end: $options.reactEndTime,
              modelValue: $data.timeRange.endTime,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.timeRange.endTime = $event),
              border: false,
              "hide-second": $props.hideSecond,
              disabled: !$data.tempRange.after,
              class: "time-picker-style"
            }, null, 8, ["end", "modelValue", "hide-second", "disabled"])
          ])
        ])) : vue.createCommentVNode("v-if", true),
        !$props.insert ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "uni-date-changed uni-date-btn--ok"
        }, [
          vue.createElementVNode("view", {
            class: "uni-datetime-picker--btn",
            onClick: _cache[8] || (_cache[8] = (...args) => $options.confirm && $options.confirm(...args))
          }, vue.toDisplayString($options.confirmText), 1)
        ])) : vue.createCommentVNode("v-if", true)
      ], 2)) : vue.createCommentVNode("v-if", true)
    ], 32);
  }
  const calendar = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$C], ["__scopeId", "data-v-1d379219"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/uni_modules/uni-datetime-picker/components/uni-datetime-picker/calendar.vue"]]);
  const _sfc_main$I = {
    name: "UniDatetimePicker",
    options: {
      virtualHost: true
    },
    components: {
      calendar,
      timePicker
    },
    data() {
      return {
        isRange: false,
        hasTime: false,
        displayValue: "",
        inputDate: "",
        calendarDate: "",
        pickerTime: "",
        caleRange: {
          startDate: "",
          startTime: "",
          endDate: "",
          endTime: ""
        },
        range: {
          startDate: "",
          endDate: ""
        },
        tempRange: {
          startDate: "",
          startTime: "",
          endDate: "",
          endTime: ""
        },
        startMultipleStatus: {
          before: "",
          after: "",
          data: [],
          fulldate: ""
        },
        endMultipleStatus: {
          before: "",
          after: "",
          data: [],
          fulldate: ""
        },
        pickerVisible: false,
        popover: null,
        isEmitValue: false,
        isPhone: false,
        isFirstShow: true,
        i18nT: () => {
        }
      };
    },
    props: {
      type: {
        type: String,
        default: "datetime"
      },
      value: {
        type: [String, Number, Array, Date],
        default: ""
      },
      modelValue: {
        type: [String, Number, Array, Date],
        default: ""
      },
      start: {
        type: [Number, String],
        default: ""
      },
      end: {
        type: [Number, String],
        default: ""
      },
      returnType: {
        type: String,
        default: "string"
      },
      placeholder: {
        type: String,
        default: ""
      },
      startPlaceholder: {
        type: String,
        default: ""
      },
      endPlaceholder: {
        type: String,
        default: ""
      },
      rangeSeparator: {
        type: String,
        default: "-"
      },
      border: {
        type: [Boolean],
        default: true
      },
      disabled: {
        type: [Boolean],
        default: false
      },
      clearIcon: {
        type: [Boolean],
        default: true
      },
      hideSecond: {
        type: [Boolean],
        default: false
      }
    },
    watch: {
      type: {
        immediate: true,
        handler(newVal) {
          this.hasTime = newVal.indexOf("time") !== -1;
          this.isRange = newVal.indexOf("range") !== -1;
        }
      },
      modelValue: {
        immediate: true,
        handler(newVal) {
          if (this.isEmitValue) {
            this.isEmitValue = false;
            return;
          }
          this.initPicker(newVal);
        }
      },
      start: {
        immediate: true,
        handler(newVal) {
          if (!newVal)
            return;
          const {
            defDate,
            defTime
          } = this.parseDate(newVal);
          this.caleRange.startDate = defDate;
          if (this.hasTime) {
            this.caleRange.startTime = defTime;
          }
        }
      },
      end: {
        immediate: true,
        handler(newVal) {
          if (!newVal)
            return;
          const {
            defDate,
            defTime
          } = this.parseDate(newVal);
          this.caleRange.endDate = defDate;
          if (this.hasTime) {
            this.caleRange.endTime = defTime;
          }
        }
      }
    },
    computed: {
      reactStartTime() {
        const activeDate = this.isRange ? this.tempRange.startDate : this.inputDate;
        const res = activeDate === this.caleRange.startDate ? this.caleRange.startTime : "";
        return res;
      },
      reactEndTime() {
        const activeDate = this.isRange ? this.tempRange.endDate : this.inputDate;
        const res = activeDate === this.caleRange.endDate ? this.caleRange.endTime : "";
        return res;
      },
      reactMobDefTime() {
        const times = {
          start: this.tempRange.startTime,
          end: this.tempRange.endTime
        };
        return this.isRange ? times : this.pickerTime;
      },
      mobSelectableTime() {
        return {
          start: this.caleRange.startTime,
          end: this.caleRange.endTime
        };
      },
      datePopupWidth() {
        return this.isRange ? 653 : 301;
      },
      singlePlaceholderText() {
        return this.placeholder || (this.type === "date" ? this.selectDateText : this.selectDateTimeText);
      },
      startPlaceholderText() {
        return this.startPlaceholder || this.startDateText;
      },
      endPlaceholderText() {
        return this.endPlaceholder || this.endDateText;
      },
      selectDateText() {
        return this.i18nT("uni-datetime-picker.selectDate");
      },
      selectDateTimeText() {
        return this.i18nT("uni-datetime-picker.selectDateTime");
      },
      selectTimeText() {
        return this.i18nT("uni-datetime-picker.selectTime");
      },
      startDateText() {
        return this.startPlaceholder || this.i18nT("uni-datetime-picker.startDate");
      },
      startTimeText() {
        return this.i18nT("uni-datetime-picker.startTime");
      },
      endDateText() {
        return this.endPlaceholder || this.i18nT("uni-datetime-picker.endDate");
      },
      endTimeText() {
        return this.i18nT("uni-datetime-picker.endTime");
      },
      okText() {
        return this.i18nT("uni-datetime-picker.ok");
      },
      clearText() {
        return this.i18nT("uni-datetime-picker.clear");
      },
      showClearIcon() {
        return this.clearIcon && !this.disabled && (this.displayValue || this.range.startDate && this.range.endDate);
      }
    },
    created() {
      this.initI18nT();
      this.platform();
    },
    methods: {
      initI18nT() {
        const vueI18n = initVueI18n(i18nMessages);
        this.i18nT = vueI18n.t;
      },
      initPicker(newVal) {
        if (!newVal || Array.isArray(newVal) && !newVal.length) {
          this.$nextTick(() => {
            this.clear(false);
          });
          return;
        }
        if (!Array.isArray(newVal) && !this.isRange) {
          const {
            defDate,
            defTime
          } = this.parseDate(newVal);
          this.displayValue = defDate;
          this.inputDate = defDate;
          this.calendarDate = defDate;
          if (this.hasTime) {
            this.displayValue = defDate + " " + defTime;
            this.pickerTime = defTime;
          }
        } else {
          const [before, after] = newVal;
          if (!before && !after)
            return;
          const defBefore = this.parseDate(before);
          const defAfter = this.parseDate(after);
          const startDate = defBefore.defDate;
          const endDate = defAfter.defDate;
          this.range.startDate = this.tempRange.startDate = startDate;
          this.range.endDate = this.tempRange.endDate = endDate;
          if (this.hasTime) {
            this.range.startDate = defBefore.defDate + " " + defBefore.defTime;
            this.range.endDate = defAfter.defDate + " " + defAfter.defTime;
            this.tempRange.startTime = defBefore.defTime;
            this.tempRange.endTime = defAfter.defTime;
          }
          const defaultRange = {
            before: defBefore.defDate,
            after: defAfter.defDate
          };
          this.startMultipleStatus = Object.assign({}, this.startMultipleStatus, defaultRange, {
            which: "right"
          });
          this.endMultipleStatus = Object.assign({}, this.endMultipleStatus, defaultRange, {
            which: "left"
          });
        }
      },
      updateLeftCale(e) {
        const left = this.$refs.left;
        left.cale.setHoverMultiple(e.after);
        left.setDate(this.$refs.left.nowDate.fullDate);
      },
      updateRightCale(e) {
        const right = this.$refs.right;
        right.cale.setHoverMultiple(e.after);
        right.setDate(this.$refs.right.nowDate.fullDate);
      },
      platform() {
        const { windowWidth } = uni.getSystemInfoSync();
        this.isPhone = windowWidth <= 500;
        this.windowWidth = windowWidth;
      },
      show() {
        if (this.disabled) {
          return;
        }
        this.platform();
        if (this.isPhone) {
          this.$refs.mobile.open();
          return;
        }
        this.popover = {
          top: "10px"
        };
        const dateEditor = uni.createSelectorQuery().in(this).select(".uni-date-editor");
        dateEditor.boundingClientRect((rect) => {
          if (this.windowWidth - rect.left < this.datePopupWidth) {
            this.popover.right = 0;
          }
        }).exec();
        setTimeout(() => {
          this.pickerVisible = !this.pickerVisible;
          if (!this.isPhone && this.isRange && this.isFirstShow) {
            this.isFirstShow = false;
            const {
              startDate,
              endDate
            } = this.range;
            if (startDate && endDate) {
              if (this.diffDate(startDate, endDate) < 30) {
                this.$refs.right.next();
              }
            } else {
              this.$refs.right.next();
              this.$refs.right.cale.lastHover = false;
            }
          }
        }, 50);
      },
      close() {
        setTimeout(() => {
          this.pickerVisible = false;
          this.$emit("maskClick", this.value);
          this.$refs.mobile && this.$refs.mobile.close();
        }, 20);
      },
      setEmit(value) {
        if (this.returnType === "timestamp" || this.returnType === "date") {
          if (!Array.isArray(value)) {
            if (!this.hasTime) {
              value = value + " 00:00:00";
            }
            value = this.createTimestamp(value);
            if (this.returnType === "date") {
              value = new Date(value);
            }
          } else {
            if (!this.hasTime) {
              value[0] = value[0] + " 00:00:00";
              value[1] = value[1] + " 00:00:00";
            }
            value[0] = this.createTimestamp(value[0]);
            value[1] = this.createTimestamp(value[1]);
            if (this.returnType === "date") {
              value[0] = new Date(value[0]);
              value[1] = new Date(value[1]);
            }
          }
        }
        this.$emit("change", value);
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
        this.isEmitValue = true;
      },
      createTimestamp(date) {
        date = this.fixIosDateFormat(date);
        return Date.parse(new Date(date));
      },
      singleChange(e) {
        this.calendarDate = this.inputDate = e.fulldate;
        if (this.hasTime)
          return;
        this.confirmSingleChange();
      },
      confirmSingleChange() {
        if (!this.inputDate) {
          this.pickerVisible = false;
          return;
        }
        if (!this.checkDate(this.inputDate)) {
          this.inputDate = this.getDate(Date.now());
        }
        let startLaterInputDate = false;
        let startDate, startTime;
        if (this.start) {
          let startString = this.start;
          if (typeof this.start === "number") {
            startString = this.getDateTime(this.start);
          }
          [startDate, startTime] = startString.split(" ");
          if (this.start && !this.dateCompare(startDate, this.inputDate)) {
            startLaterInputDate = true;
            this.inputDate = startDate;
          }
        }
        let endEarlierInputDate = false;
        let endDate, endTime;
        if (this.end) {
          let endString = this.end;
          if (typeof this.end === "number") {
            endString = this.getDateTime(this.end);
          }
          [endDate, endTime] = endString.split(" ");
          if (this.end && !this.dateCompare(this.inputDate, endDate)) {
            endEarlierInputDate = true;
            this.inputDate = endDate;
          }
        }
        if (this.hasTime) {
          if (startLaterInputDate) {
            this.pickerTime = startTime || this.getDefaultSecond();
          }
          if (endEarlierInputDate) {
            this.pickerTime = endTime || this.getDefaultSecond();
          }
          if (!this.pickerTime) {
            this.pickerTime = this.getTime(Date.now());
          }
          this.displayValue = `${this.inputDate} ${this.pickerTime}`;
        } else {
          this.displayValue = this.inputDate;
        }
        this.setEmit(this.displayValue);
        this.pickerVisible = false;
      },
      leftChange(e) {
        const {
          before,
          after
        } = e.range;
        this.rangeChange(before, after);
        const obj = {
          before: e.range.before,
          after: e.range.after,
          data: e.range.data,
          fulldate: e.fulldate
        };
        this.startMultipleStatus = Object.assign({}, this.startMultipleStatus, obj);
      },
      rightChange(e) {
        const {
          before,
          after
        } = e.range;
        this.rangeChange(before, after);
        const obj = {
          before: e.range.before,
          after: e.range.after,
          data: e.range.data,
          fulldate: e.fulldate
        };
        this.endMultipleStatus = Object.assign({}, this.endMultipleStatus, obj);
      },
      mobileChange(e) {
        if (this.isRange) {
          const { before, after } = e.range;
          if (!before || !after) {
            return;
          }
          this.handleStartAndEnd(before, after, true);
          if (this.hasTime) {
            const {
              startTime,
              endTime
            } = e.timeRange;
            this.tempRange.startTime = startTime;
            this.tempRange.endTime = endTime;
          }
          this.confirmRangeChange();
        } else {
          if (this.hasTime) {
            this.displayValue = e.fulldate + " " + e.time;
          } else {
            this.displayValue = e.fulldate;
          }
          this.setEmit(this.displayValue);
        }
        this.$refs.mobile.close();
      },
      rangeChange(before, after) {
        if (!(before && after))
          return;
        this.handleStartAndEnd(before, after, true);
        if (this.hasTime)
          return;
        this.confirmRangeChange();
      },
      confirmRangeChange() {
        if (!this.tempRange.startDate || !this.tempRange.endDate) {
          this.pickerVisible = false;
          return;
        }
        if (!this.checkDate(this.tempRange.startDate)) {
          this.tempRange.startDate = this.getDate(Date.now());
        }
        if (!this.checkDate(this.tempRange.endDate)) {
          this.tempRange.endDate = this.getDate(Date.now());
        }
        let start, end;
        let startDateLaterRangeStartDate = false;
        let startDateLaterRangeEndDate = false;
        let startDate, startTime;
        if (this.start) {
          let startString = this.start;
          if (typeof this.start === "number") {
            startString = this.getDateTime(this.start);
          }
          [startDate, startTime] = startString.split(" ");
          if (this.start && !this.dateCompare(this.start, this.tempRange.startDate)) {
            startDateLaterRangeStartDate = true;
            this.tempRange.startDate = startDate;
          }
          if (this.start && !this.dateCompare(this.start, this.tempRange.endDate)) {
            startDateLaterRangeEndDate = true;
            this.tempRange.endDate = startDate;
          }
        }
        let endDateEarlierRangeStartDate = false;
        let endDateEarlierRangeEndDate = false;
        let endDate, endTime;
        if (this.end) {
          let endString = this.end;
          if (typeof this.end === "number") {
            endString = this.getDateTime(this.end);
          }
          [endDate, endTime] = endString.split(" ");
          if (this.end && !this.dateCompare(this.tempRange.startDate, this.end)) {
            endDateEarlierRangeStartDate = true;
            this.tempRange.startDate = endDate;
          }
          if (this.end && !this.dateCompare(this.tempRange.endDate, this.end)) {
            endDateEarlierRangeEndDate = true;
            this.tempRange.endDate = endDate;
          }
        }
        if (!this.hasTime) {
          start = this.range.startDate = this.tempRange.startDate;
          end = this.range.endDate = this.tempRange.endDate;
        } else {
          if (startDateLaterRangeStartDate) {
            this.tempRange.startTime = startTime || this.getDefaultSecond();
          } else if (endDateEarlierRangeStartDate) {
            this.tempRange.startTime = endTime || this.getDefaultSecond();
          }
          if (!this.tempRange.startTime) {
            this.tempRange.startTime = this.getTime(Date.now());
          }
          if (startDateLaterRangeEndDate) {
            this.tempRange.endTime = startTime || this.getDefaultSecond();
          } else if (endDateEarlierRangeEndDate) {
            this.tempRange.endTime = endTime || this.getDefaultSecond();
          }
          if (!this.tempRange.endTime) {
            this.tempRange.endTime = this.getTime(Date.now());
          }
          start = this.range.startDate = `${this.tempRange.startDate} ${this.tempRange.startTime}`;
          end = this.range.endDate = `${this.tempRange.endDate} ${this.tempRange.endTime}`;
        }
        if (!this.dateCompare(start, end)) {
          [start, end] = [end, start];
        }
        this.range.startDate = start;
        this.range.endDate = end;
        const displayRange = [start, end];
        this.setEmit(displayRange);
        this.pickerVisible = false;
      },
      handleStartAndEnd(before, after, temp = false) {
        if (!(before && after))
          return;
        const type = temp ? "tempRange" : "range";
        const isStartEarlierEnd = this.dateCompare(before, after);
        this[type].startDate = isStartEarlierEnd ? before : after;
        this[type].endDate = isStartEarlierEnd ? after : before;
      },
      dateCompare(startDate, endDate) {
        startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
        endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
        return startDate <= endDate;
      },
      diffDate(startDate, endDate) {
        startDate = new Date(startDate.replace("-", "/").replace("-", "/"));
        endDate = new Date(endDate.replace("-", "/").replace("-", "/"));
        const diff = (endDate - startDate) / (24 * 60 * 60 * 1e3);
        return Math.abs(diff);
      },
      clear(needEmit = true) {
        if (!this.isRange) {
          this.displayValue = "";
          this.inputDate = "";
          this.pickerTime = "";
          if (this.isPhone) {
            this.$refs.mobile && this.$refs.mobile.clearCalender();
          } else {
            this.$refs.pcSingle && this.$refs.pcSingle.clearCalender();
          }
          if (needEmit) {
            this.$emit("change", "");
            this.$emit("input", "");
            this.$emit("update:modelValue", "");
          }
        } else {
          this.range.startDate = "";
          this.range.endDate = "";
          this.tempRange.startDate = "";
          this.tempRange.startTime = "";
          this.tempRange.endDate = "";
          this.tempRange.endTime = "";
          if (this.isPhone) {
            this.$refs.mobile && this.$refs.mobile.clearCalender();
          } else {
            this.$refs.left && this.$refs.left.clearCalender();
            this.$refs.right && this.$refs.right.clearCalender();
            this.$refs.right && this.$refs.right.next();
          }
          if (needEmit) {
            this.$emit("change", []);
            this.$emit("input", []);
            this.$emit("update:modelValue", []);
          }
        }
      },
      parseDate(date) {
        date = this.fixIosDateFormat(date);
        const defVal = new Date(date);
        const year = defVal.getFullYear();
        const month = defVal.getMonth() + 1;
        const day = defVal.getDate();
        const hour = defVal.getHours();
        const minute = defVal.getMinutes();
        const second = defVal.getSeconds();
        const defDate = year + "-" + this.lessTen(month) + "-" + this.lessTen(day);
        const defTime = this.lessTen(hour) + ":" + this.lessTen(minute) + (this.hideSecond ? "" : ":" + this.lessTen(second));
        return {
          defDate,
          defTime
        };
      },
      lessTen(item) {
        return item < 10 ? "0" + item : item;
      },
      fixIosDateFormat(value) {
        if (typeof value === "string") {
          value = value.replace(/-/g, "/");
        }
        return value;
      },
      checkDate(date) {
        const dateReg = /((19|20)\d{2})(-|\/)\d{1,2}(-|\/)\d{1,2}/g;
        return date.match(dateReg);
      },
      getDateTime(date) {
        return `${this.getDate(date)} ${this.getTime(date)}`;
      },
      getDate(date) {
        date = new Date(date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}-${this.addZero(month)}-${this.addZero(day)}`;
      },
      getTime(date) {
        date = new Date(date);
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        return this.hideSecond ? `${this.addZero(hour)}:${this.addZero(minute)}` : `${this.addZero(hour)}:${this.addZero(minute)}:${this.addZero(second)}`;
      },
      addZero(num) {
        if (num < 10) {
          num = `0${num}`;
        }
        return num;
      },
      getDefaultSecond() {
        return this.hideSecond ? "00:00" : "00:00:00";
      }
    }
  };
  function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$b);
    const _component_time_picker = vue.resolveComponent("time-picker");
    const _component_calendar = vue.resolveComponent("calendar");
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-date" }, [
      vue.createElementVNode("view", {
        class: "uni-date-editor",
        onClick: _cache[4] || (_cache[4] = (...args) => $options.show && $options.show(...args))
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["uni-date-editor--x", { "uni-date-editor--x__disabled": $props.disabled, "uni-date-x--border": $props.border }])
          }, [
            !$data.isRange ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "uni-date-x uni-date-single"
            }, [
              vue.createVNode(_component_uni_icons, {
                class: "icon-calendar",
                type: "calendar",
                color: "#c0c4cc",
                size: "22"
              }),
              vue.withDirectives(vue.createElementVNode("input", {
                class: "uni-date__x-input",
                type: "text",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.displayValue = $event),
                placeholder: $options.singlePlaceholderText,
                disabled: true
              }, null, 8, ["placeholder"]), [
                [vue.vModelText, $data.displayValue]
              ])
            ])) : (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "uni-date-x uni-date-range"
            }, [
              vue.createVNode(_component_uni_icons, {
                class: "icon-calendar",
                type: "calendar",
                color: "#c0c4cc",
                size: "22"
              }),
              vue.withDirectives(vue.createElementVNode("input", {
                class: "uni-date__x-input t-c",
                type: "text",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.range.startDate = $event),
                placeholder: $options.startPlaceholderText,
                disabled: true
              }, null, 8, ["placeholder"]), [
                [vue.vModelText, $data.range.startDate]
              ]),
              vue.createElementVNode("view", { class: "range-separator" }, vue.toDisplayString($props.rangeSeparator), 1),
              vue.withDirectives(vue.createElementVNode("input", {
                class: "uni-date__x-input t-c",
                type: "text",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.range.endDate = $event),
                placeholder: $options.endPlaceholderText,
                disabled: true
              }, null, 8, ["placeholder"]), [
                [vue.vModelText, $data.range.endDate]
              ])
            ])),
            $options.showClearIcon ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "uni-date__icon-clear",
              onClick: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.clear && $options.clear(...args), ["stop"]))
            }, [
              vue.createVNode(_component_uni_icons, {
                type: "clear",
                color: "#c0c4cc",
                size: "22"
              })
            ])) : vue.createCommentVNode("v-if", true)
          ], 2)
        ], true)
      ]),
      vue.withDirectives(vue.createElementVNode("view", {
        class: "uni-date-mask--pc",
        onClick: _cache[5] || (_cache[5] = (...args) => $options.close && $options.close(...args))
      }, null, 512), [
        [vue.vShow, $data.pickerVisible]
      ]),
      !$data.isPhone ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        ref: "datePicker",
        class: "uni-date-picker__container"
      }, [
        !$data.isRange ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-date-single--x",
          style: vue.normalizeStyle($data.popover)
        }, [
          vue.createElementVNode("view", { class: "uni-popper__arrow" }),
          $data.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-date-changed popup-x-header"
          }, [
            vue.withDirectives(vue.createElementVNode("input", {
              class: "uni-date__input t-c",
              type: "text",
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $data.inputDate = $event),
              placeholder: $options.selectDateText
            }, null, 8, ["placeholder"]), [
              [vue.vModelText, $data.inputDate]
            ]),
            vue.createVNode(_component_time_picker, {
              type: "time",
              modelValue: $data.pickerTime,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => $data.pickerTime = $event),
              border: false,
              disabled: !$data.inputDate,
              start: $options.reactStartTime,
              end: $options.reactEndTime,
              hideSecond: $props.hideSecond,
              style: { "width": "100%" }
            }, {
              default: vue.withCtx(() => [
                vue.withDirectives(vue.createElementVNode("input", {
                  class: "uni-date__input t-c",
                  type: "text",
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.pickerTime = $event),
                  placeholder: $options.selectTimeText,
                  disabled: !$data.inputDate
                }, null, 8, ["placeholder", "disabled"]), [
                  [vue.vModelText, $data.pickerTime]
                ])
              ]),
              _: 1
            }, 8, ["modelValue", "disabled", "start", "end", "hideSecond"])
          ])) : vue.createCommentVNode("v-if", true),
          vue.createVNode(_component_calendar, {
            ref: "pcSingle",
            showMonth: false,
            "start-date": $data.caleRange.startDate,
            "end-date": $data.caleRange.endDate,
            date: $data.calendarDate,
            onChange: $options.singleChange,
            style: { "padding": "0 8px" }
          }, null, 8, ["start-date", "end-date", "date", "onChange"]),
          $data.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "popup-x-footer"
          }, [
            vue.createElementVNode("text", {
              class: "confirm",
              onClick: _cache[9] || (_cache[9] = (...args) => $options.confirmSingleChange && $options.confirmSingleChange(...args))
            }, vue.toDisplayString($options.okText), 1)
          ])) : vue.createCommentVNode("v-if", true)
        ], 4)) : (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "uni-date-range--x",
          style: vue.normalizeStyle($data.popover)
        }, [
          vue.createElementVNode("view", { class: "uni-popper__arrow" }),
          $data.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "popup-x-header uni-date-changed"
          }, [
            vue.createElementVNode("view", { class: "popup-x-header--datetime" }, [
              vue.withDirectives(vue.createElementVNode("input", {
                class: "uni-date__input uni-date-range__input",
                type: "text",
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => $data.tempRange.startDate = $event),
                placeholder: $options.startDateText
              }, null, 8, ["placeholder"]), [
                [vue.vModelText, $data.tempRange.startDate]
              ]),
              vue.createVNode(_component_time_picker, {
                type: "time",
                modelValue: $data.tempRange.startTime,
                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => $data.tempRange.startTime = $event),
                start: $options.reactStartTime,
                border: false,
                disabled: !$data.tempRange.startDate,
                hideSecond: $props.hideSecond
              }, {
                default: vue.withCtx(() => [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "uni-date__input uni-date-range__input",
                    type: "text",
                    "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => $data.tempRange.startTime = $event),
                    placeholder: $options.startTimeText,
                    disabled: !$data.tempRange.startDate
                  }, null, 8, ["placeholder", "disabled"]), [
                    [vue.vModelText, $data.tempRange.startTime]
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "start", "disabled", "hideSecond"])
            ]),
            vue.createVNode(_component_uni_icons, {
              type: "arrowthinright",
              color: "#999",
              style: { "line-height": "40px" }
            }),
            vue.createElementVNode("view", { class: "popup-x-header--datetime" }, [
              vue.withDirectives(vue.createElementVNode("input", {
                class: "uni-date__input uni-date-range__input",
                type: "text",
                "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => $data.tempRange.endDate = $event),
                placeholder: $options.endDateText
              }, null, 8, ["placeholder"]), [
                [vue.vModelText, $data.tempRange.endDate]
              ]),
              vue.createVNode(_component_time_picker, {
                type: "time",
                modelValue: $data.tempRange.endTime,
                "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => $data.tempRange.endTime = $event),
                end: $options.reactEndTime,
                border: false,
                disabled: !$data.tempRange.endDate,
                hideSecond: $props.hideSecond
              }, {
                default: vue.withCtx(() => [
                  vue.withDirectives(vue.createElementVNode("input", {
                    class: "uni-date__input uni-date-range__input",
                    type: "text",
                    "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => $data.tempRange.endTime = $event),
                    placeholder: $options.endTimeText,
                    disabled: !$data.tempRange.endDate
                  }, null, 8, ["placeholder", "disabled"]), [
                    [vue.vModelText, $data.tempRange.endTime]
                  ])
                ]),
                _: 1
              }, 8, ["modelValue", "end", "disabled", "hideSecond"])
            ])
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "popup-x-body" }, [
            vue.createVNode(_component_calendar, {
              ref: "left",
              showMonth: false,
              "start-date": $data.caleRange.startDate,
              "end-date": $data.caleRange.endDate,
              range: true,
              onChange: $options.leftChange,
              pleStatus: $data.endMultipleStatus,
              onFirstEnterCale: $options.updateRightCale,
              style: { "padding": "0 8px" }
            }, null, 8, ["start-date", "end-date", "onChange", "pleStatus", "onFirstEnterCale"]),
            vue.createVNode(_component_calendar, {
              ref: "right",
              showMonth: false,
              "start-date": $data.caleRange.startDate,
              "end-date": $data.caleRange.endDate,
              range: true,
              onChange: $options.rightChange,
              pleStatus: $data.startMultipleStatus,
              onFirstEnterCale: $options.updateLeftCale,
              style: { "padding": "0 8px", "border-left": "1px solid #F1F1F1" }
            }, null, 8, ["start-date", "end-date", "onChange", "pleStatus", "onFirstEnterCale"])
          ]),
          $data.hasTime ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "popup-x-footer"
          }, [
            vue.createElementVNode("text", {
              class: "",
              onClick: _cache[16] || (_cache[16] = (...args) => $options.clear && $options.clear(...args))
            }, vue.toDisplayString($options.clearText), 1),
            vue.createElementVNode("text", {
              class: "confirm",
              onClick: _cache[17] || (_cache[17] = (...args) => $options.confirmRangeChange && $options.confirmRangeChange(...args))
            }, vue.toDisplayString($options.okText), 1)
          ])) : vue.createCommentVNode("v-if", true)
        ], 4))
      ], 512)), [
        [vue.vShow, $data.pickerVisible]
      ]) : vue.createCommentVNode("v-if", true),
      $data.isPhone ? (vue.openBlock(), vue.createBlock(_component_calendar, {
        key: 1,
        ref: "mobile",
        clearDate: false,
        date: $data.calendarDate,
        defTime: $options.reactMobDefTime,
        "start-date": $data.caleRange.startDate,
        "end-date": $data.caleRange.endDate,
        selectableTimes: $options.mobSelectableTime,
        startPlaceholder: $props.startPlaceholder,
        endPlaceholder: $props.endPlaceholder,
        pleStatus: $data.endMultipleStatus,
        showMonth: false,
        range: $data.isRange,
        typeHasTime: $data.hasTime,
        insert: false,
        hideSecond: $props.hideSecond,
        onConfirm: $options.mobileChange,
        onMaskClose: $options.close
      }, null, 8, ["date", "defTime", "start-date", "end-date", "selectableTimes", "startPlaceholder", "endPlaceholder", "pleStatus", "range", "typeHasTime", "hideSecond", "onConfirm", "onMaskClose"])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$6 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$B], ["__scopeId", "data-v-9802168a"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.vue"]]);
  const _sfc_main$H = {
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
        isShow: false,
        typeList: ["Start Time", "Finish Time"],
        typeIndex: 0,
        startvalue: [14, 0],
        endvalue: [15, 0],
        indicatorStyle: "height: 50px;",
        timeHour: [],
        timeMin: []
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
      formatNumber(n) {
        n = n.toString();
        return n[1] ? n : "0" + n;
      },
      bindstartChange(e) {
        formatAppLog("log", "at components/wanghexu-timeslot/wanghexu-timeslot.vue:96", e);
        this.startvalue = e.detail.value;
      },
      bindendChange(e) {
        formatAppLog("log", "at components/wanghexu-timeslot/wanghexu-timeslot.vue:101", e);
        this.endvalue = e.detail.value;
      },
      close() {
        this.timeMaskShow = false;
        this.$nextTick(() => {
          setTimeout(() => {
            this.isShow = false;
            this.$emit("close");
          }, 300);
        });
      },
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
            uni.showToast({
              icon: "error",
              title: "The finish time must ended after start time"
            });
          }
        }
      },
      open() {
        this.typeIndex = 0;
        this.isShow = true;
        this.$nextTick(() => {
          setTimeout(() => {
            this.timeMaskShow = true;
          }, 50);
        });
      },
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
  function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      $data.isShow ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["time_mask", { "uni-timer-mask-show": $data.timeMaskShow }])
      }, null, 2)) : vue.createCommentVNode("v-if", true),
      $data.isShow ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: vue.normalizeClass(["yx_time_slot", { "fadelogIn1": $data.timeMaskShow }])
      }, [
        vue.createElementVNode("view", { class: "time_top_box" }, [
          vue.createElementVNode("view", {
            class: "time_close",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.close && $options.close(...args))
          }, "Close"),
          vue.createElementVNode("view", { class: "time_text" }, vue.toDisplayString($props.title), 1),
          vue.createElementVNode("view", {
            class: "time_comfirm",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args))
          }, "Confirm")
        ]),
        vue.createElementVNode("view", { class: "typelist" }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.typeList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: vue.normalizeClass(["typeobj", { "typeobj_hover": $data.typeIndex == index }]),
              key: index,
              onClick: ($event) => $options.handleType(index)
            }, [
              vue.createElementVNode("view", { class: "text" }, vue.toDisplayString(item), 1),
              vue.createElementVNode("view", { class: "line" })
            ], 10, ["onClick"]);
          }), 128))
        ]),
        vue.createCommentVNode(" \u65F6\u95F4\u9009\u62E9 "),
        vue.createElementVNode("view", { class: "yx_timer_sel" }, [
          vue.createElementVNode("swiper", {
            class: "sel_swiper",
            current: $data.typeIndex
          }, [
            vue.createElementVNode("swiper-item", null, [
              vue.createElementVNode("view", null, [
                vue.createElementVNode("picker-view", {
                  value: $data.startvalue,
                  "indicator-style": $data.indicatorStyle,
                  onChange: _cache[2] || (_cache[2] = (...args) => $options.bindstartChange && $options.bindstartChange(...args)),
                  class: "sel_swiper-item"
                }, [
                  vue.createElementVNode("picker-view-column", null, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.timeHour, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: "item",
                        key: index
                      }, vue.toDisplayString(item), 1);
                    }), 128))
                  ]),
                  vue.createElementVNode("picker-view-column", null, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.timeMin, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: "item",
                        key: index
                      }, vue.toDisplayString(item), 1);
                    }), 128))
                  ])
                ], 40, ["value", "indicator-style"])
              ])
            ]),
            vue.createElementVNode("swiper-item", null, [
              vue.createElementVNode("view", null, [
                vue.createElementVNode("picker-view", {
                  value: $data.endvalue,
                  "indicator-style": $data.indicatorStyle,
                  onChange: _cache[3] || (_cache[3] = (...args) => $options.bindendChange && $options.bindendChange(...args)),
                  class: "sel_swiper-item"
                }, [
                  vue.createElementVNode("picker-view-column", null, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.timeHour, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: "item",
                        key: index
                      }, vue.toDisplayString(item), 1);
                    }), 128))
                  ]),
                  vue.createElementVNode("picker-view-column", null, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.timeMin, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: "item",
                        key: index
                      }, vue.toDisplayString(item), 1);
                    }), 128))
                  ])
                ], 40, ["value", "indicator-style"])
              ])
            ])
          ], 8, ["current"])
        ])
      ], 2)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const timeSlot = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$A], ["__scopeId", "data-v-d011683a"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/components/wanghexu-timeslot/wanghexu-timeslot.vue"]]);
  const _sfc_main$G = {
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
        formatAppLog("log", "at components/time/index.vue:35", "Choose one:", this.datetimesingle);
      },
      range(newval) {
        formatAppLog("log", "at components/time/index.vue:38", "Choose period:", this.range);
      },
      datetimerange(newval) {
        formatAppLog("log", "at components/time/index.vue:41", "Choose period:", this.datetimerange);
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
      openTime() {
        this.$refs.timeslot.open();
      },
      confirmTime(e) {
        formatAppLog("log", "at components/time/index.vue:58", e);
        this.time = e.start.hour + ":" + e.start.min + "~" + e.end.hour + ":" + e.end.min;
      },
      change(e) {
        this.single = e;
        formatAppLog("log", "at components/time/index.vue:63", "Event change:", this.single = e);
      },
      changeLog(e) {
        formatAppLog("log", "at components/time/index.vue:66", "Event change:", e);
      },
      maskClick(e) {
        formatAppLog("log", "at components/time/index.vue:69", "Event maskClick:", e);
      }
    }
  };
  function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_datetime_picker = resolveEasycom(vue.resolveDynamicComponent("uni-datetime-picker"), __easycom_0$6);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("view", { class: "example-body" }, [
        vue.createVNode(_component_uni_datetime_picker, {
          type: "date",
          "clear-icon": false,
          modelValue: $data.single,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.single = $event),
          onMaskClick: $options.maskClick
        }, null, 8, ["modelValue", "onMaskClick"])
      ]),
      vue.createElementVNode("view", { class: "choose-time" }, [
        vue.createElementVNode("button", {
          class: "time-btn",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.openTime && $options.openTime(...args))
        }, "choose specific time")
      ]),
      vue.createElementVNode("button", {
        type: "warn",
        size: "mini",
        class: "btn"
      }, "Find Suitable Places")
    ], 64);
  }
  const Time = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$z], ["__scopeId", "data-v-06b134d2"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/components/time/index.vue"]]);
  const _sfc_main$F = {
    name: "TopNavBar",
    props: {
      barNameList: Array,
      barContentList: Array,
      width: {
        type: String
      }
    },
    components: {
      OrderItem,
      Time
    },
    data() {
      return {
        tabIndex: 0
      };
    },
    methods: {
      ontabtap(e) {
        let index = e.target.dataset.current || e.currentTarget.dataset.current;
        this.switchTab(index);
      },
      switchTab(index) {
        if (this.tabIndex == index) {
          return;
        }
        this.tabIndex = index;
      },
      tabChange(e) {
        let index = e.target.current || e.detail.current;
        this.switchTab(index);
      },
      ontabtap(e) {
        let index = e.target.dataset.current || e.currentTarget.dataset.current;
        this.switchTab(index);
      }
    }
  };
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createCommentVNode(" tab name "),
      vue.createElementVNode("scroll-view", {
        id: "tab",
        "scroll-x": "true"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.barNameList, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            key: item.id,
            class: "tabName",
            "data-current": index,
            onClick: _cache[0] || (_cache[0] = (...args) => $options.ontabtap && $options.ontabtap(...args)),
            style: vue.normalizeStyle({ width: $props.width })
          }, [
            vue.createElementVNode("text", {
              class: vue.normalizeClass(["tabName_text", $data.tabIndex == index ? "active_text" : ""])
            }, vue.toDisplayString(item.name), 3)
          ], 12, ["data-current"]);
        }), 128))
      ]),
      vue.createCommentVNode(" tab content "),
      vue.createElementVNode("swiper", {
        class: "swiper-item",
        id: "tabContent",
        current: $data.tabIndex,
        onChange: _cache[1] || (_cache[1] = (...args) => $options.tabChange && $options.tabChange(...args))
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.barContentList, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("swiper-item", {
            key: item.id
          }, [
            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(item.mft_components), {
              content: item.content
            }, null, 8, ["content"]))
          ]);
        }), 128))
      ], 40, ["current"])
    ]);
  }
  const TopNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$y], ["__scopeId", "data-v-af1b11e8"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/components/top-navbar/index.vue"]]);
  const _sfc_main$E = {
    name: "Swimming",
    data() {
      return {};
    }
  };
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "timetable" }, " swimming ");
  }
  const Swimming = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$x], ["__scopeId", "data-v-bc4ef2c9"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/components/tabbar-component/swimming.vue"]]);
  const _sfc_main$D = {
    name: "Fitness",
    data() {
      return {};
    }
  };
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " fitness ");
  }
  const Fitness = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$w], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/components/tabbar-component/fitness.vue"]]);
  const _sfc_main$C = {
    name: "Squash",
    data() {
      return {};
    }
  };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "timetable" }, " squash ");
  }
  const Squash = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$v], ["__scopeId", "data-v-de316cc3"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/components/tabbar-component/Squash.vue"]]);
  const _sfc_main$B = {
    name: "Sports",
    data() {
      return {};
    }
  };
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " sports ");
  }
  const Sports = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$u], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/components/tabbar-component/Sports.vue"]]);
  const Config = {
    name: "BodyBuddy",
    urlPrefix: "http://localhost:8880",
    enabledSettingCache: true
  };
  const _sfc_main$A = {
    __name: "index",
    props: ["ActivityList"],
    setup(__props) {
      function toTargetItem(item) {
        uni.navigateTo({
          url: "/pages/facilities/choosetime/index"
        });
      }
      return (_ctx, _cache) => {
        const _component_uni_card = resolveEasycom(vue.resolveDynamicComponent("uni-card"), __easycom_0$7);
        return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.ActivityList, (activity) => {
          return vue.openBlock(), vue.createElementBlock("view", { key: activity }, [
            vue.createVNode(_component_uni_card, { class: "book-card" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("view", { style: { "font-size": "150%", "color": "black", "font-weight": "bold" } }, vue.toDisplayString(activity.name), 1),
                vue.createElementVNode("view", { style: { "color": "dimgrey", "font-size": "110%" } }, vue.toDisplayString(activity.price), 1),
                vue.createCommentVNode(' <view style="display: flex;padding-bottom:0.2rem;color:azure;font-weight: 800;font-size: 110%;">\r\n				<view style="flex: 1 1 500px">{{activity.date}}</view>\r\n				<view style="flex: 1 1 500px;text-align:right">{{activity.starttime}} - {{activity.endtime}}</view>\r\n			</view> '),
                vue.createCommentVNode(' 		<navigator url="../find/index">\r\n				<button type="warn">Book Now</button>\r\n			</navigator> '),
                vue.createElementVNode("button", {
                  id: "order_btn",
                  type: "warn",
                  onClick: ($event) => toTargetItem()
                }, " Book Now ", 8, ["onClick"])
              ]),
              _: 2
            }, 1024)
          ]);
        }), 128);
      };
    }
  };
  const Book = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-5e5f9d03"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/components/book/index.vue"]]);
  const urlPrefix$6 = Config.urlPrefix;
  getApp();
  const width = "25%";
  const itemList$2 = [
    { id: 0, url: "/static/swiper/swiper1.jpg" },
    { id: 1, url: "/static/swiper/swiper2.jpg" },
    { id: 2, url: "/static/swiper/swiper3.jpg" }
  ];
  const orderNavbar$1 = [
    { id: "0", name: "Swimming pool", iconpath: "/static/icon/swim.png", url: "../choosefacility/index" },
    { id: "1", name: "Fitness room", iconpath: "/static/icon/squash.png", url: "../choosefacility/index" },
    { id: "2", name: "Squash courts", iconpath: "/static/icon/fitness.png", url: "../choosefacility/index" },
    { id: "3", name: "Sports hall", iconpath: "/static/icon/sports.png", url: "../choosefacility/index" }
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
  const _sfc_main$z = {
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
        options: {},
        page: {},
        items: [],
        orderNavbar: orderNavbar$1,
        itemList: itemList$2,
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
    onLoad() {
    },
    mounted() {
      uni.request({
        url: urlPrefix$6 + "/user/staffs",
        method: "GET"
      }).then((res) => {
        formatAppLog("log", "at pages/index/index.vue:152", "result", res.data.result);
      });
    },
    methods: {
      TarData(item) {
        this.tabIndex = item.id;
        this.currentTabComponent = item.id;
      }
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Search = vue.resolveComponent("Search");
    const _component_Banner = vue.resolveComponent("Banner");
    const _component_uni_notice_bar = resolveEasycom(vue.resolveDynamicComponent("uni-notice-bar"), __easycom_0$a);
    const _component_Card = vue.resolveComponent("Card");
    const _component_Book = vue.resolveComponent("Book");
    const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_0$9);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page-items" }, [
      vue.createVNode(_component_Search),
      vue.createVNode(_component_Banner, { itemList: $data.itemList }, null, 8, ["itemList"]),
      vue.createVNode(_component_uni_notice_bar, {
        "show-icon": "",
        scrollable: "",
        text: "Sports Center is pretty great!"
      }),
      vue.createVNode(_component_Card, {
        DataList: $data.orderNavbar,
        name: "",
        extra: ""
      }, null, 8, ["DataList"]),
      vue.createCommentVNode(' <TopNavBar :width="width" :height="height" :barNameList="barNameList"></TopNavBar>\n		<view style="text-align: center; margin-top: -350rpx; margin-bottom: 25rpx;">\n			<uni-datetime-picker type="datetime" style="text-align: center;"></uni-datetime-picker>\n			<button type="warn" size="mini"	class="btn">Find Suitable Places</button>\n		</view> '),
      vue.createVNode(_component_uni_section, {
        title: "Recommend For You",
        padding: "",
        class: "decoration",
        titleFontSize: "30rpx",
        titleColor: "#F25E5E"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_Book),
          vue.createVNode(_component_Book)
        ]),
        _: 1
      })
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$t], ["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/pages/index/index.vue"]]);
  const _sfc_main$y = {};
  function _sfc_render$s(_ctx, _cache) {
    return null;
  }
  const PagesFacilitiesIndex = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$s], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/pages/facilities/index.vue"]]);
  const _sfc_main$x = {
    name: "UniRate",
    props: {
      isFill: {
        type: [Boolean, String],
        default: true
      },
      color: {
        type: String,
        default: "#ececec"
      },
      activeColor: {
        type: String,
        default: "#ffca3e"
      },
      disabledColor: {
        type: String,
        default: "#c0c0c0"
      },
      size: {
        type: [Number, String],
        default: 24
      },
      value: {
        type: [Number, String],
        default: 0
      },
      modelValue: {
        type: [Number, String],
        default: 0
      },
      max: {
        type: [Number, String],
        default: 5
      },
      margin: {
        type: [Number, String],
        default: 0
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      readonly: {
        type: [Boolean, String],
        default: false
      },
      allowHalf: {
        type: [Boolean, String],
        default: false
      },
      touchable: {
        type: [Boolean, String],
        default: true
      }
    },
    data() {
      return {
        valueSync: "",
        userMouseFristMove: true,
        userRated: false,
        userLastRate: 1
      };
    },
    watch: {
      value(newVal) {
        this.valueSync = Number(newVal);
      },
      modelValue(newVal) {
        this.valueSync = Number(newVal);
      }
    },
    computed: {
      stars() {
        const value = this.valueSync ? this.valueSync : 0;
        const starList = [];
        const floorValue = Math.floor(value);
        const ceilValue = Math.ceil(value);
        for (let i = 0; i < this.max; i++) {
          if (floorValue > i) {
            starList.push({
              activeWitch: "100%"
            });
          } else if (ceilValue - 1 === i) {
            starList.push({
              activeWitch: (value - floorValue) * 100 + "%"
            });
          } else {
            starList.push({
              activeWitch: "0"
            });
          }
        }
        return starList;
      },
      marginNumber() {
        return Number(this.margin);
      }
    },
    created() {
      this.valueSync = Number(this.value || this.modelValue);
      this._rateBoxLeft = 0;
      this._oldValue = null;
    },
    mounted() {
      setTimeout(() => {
        this._getSize();
      }, 100);
    },
    methods: {
      touchstart(e) {
        if (this.readonly || this.disabled)
          return;
        const {
          clientX,
          screenX
        } = e.changedTouches[0];
        this._getRateCount(clientX || screenX);
      },
      touchmove(e) {
        if (this.readonly || this.disabled || !this.touchable)
          return;
        const {
          clientX,
          screenX
        } = e.changedTouches[0];
        this._getRateCount(clientX || screenX);
      },
      mousedown(e) {
      },
      mousemove(e) {
      },
      mouseleave(e) {
      },
      _getRateCount(clientX) {
        this._getSize();
        const size = Number(this.size);
        if (isNaN(size)) {
          return new Error("size \u5C5E\u6027\u53EA\u80FD\u8BBE\u7F6E\u4E3A\u6570\u5B57");
        }
        const rateMoveRange = clientX - this._rateBoxLeft;
        let index = parseInt(rateMoveRange / (size + this.marginNumber));
        index = index < 0 ? 0 : index;
        index = index > this.max ? this.max : index;
        const range = parseInt(rateMoveRange - (size + this.marginNumber) * index);
        let value = 0;
        if (this._oldValue === index && !this.PC)
          return;
        this._oldValue = index;
        if (this.allowHalf) {
          if (range > size / 2) {
            value = index + 1;
          } else {
            value = index + 0.5;
          }
        } else {
          value = index + 1;
        }
        value = Math.max(0.5, Math.min(value, this.max));
        this.valueSync = value;
        this._onChange();
      },
      _onChange() {
        this.$emit("input", this.valueSync);
        this.$emit("update:modelValue", this.valueSync);
        this.$emit("change", {
          value: this.valueSync
        });
      },
      _getSize() {
        uni.createSelectorQuery().in(this).select(".uni-rate").boundingClientRect().exec((ret) => {
          if (ret) {
            this._rateBoxLeft = ret[0].left;
          }
        });
      }
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$b);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", {
        ref: "uni-rate",
        class: "uni-rate"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.stars, (star, index) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: vue.normalizeClass(["uni-rate__icon", { "uni-cursor-not-allowed": $props.disabled }]),
            style: vue.normalizeStyle({ "margin-right": $options.marginNumber + "px" }),
            key: index,
            onTouchstart: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.touchstart && $options.touchstart(...args), ["stop"])),
            onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.touchmove && $options.touchmove(...args), ["stop"])),
            onMousedown: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.mousedown && $options.mousedown(...args), ["stop"])),
            onMousemove: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.mousemove && $options.mousemove(...args), ["stop"])),
            onMouseleave: _cache[4] || (_cache[4] = (...args) => $options.mouseleave && $options.mouseleave(...args))
          }, [
            vue.createVNode(_component_uni_icons, {
              color: $props.color,
              size: $props.size,
              type: $props.isFill ? "star-filled" : "star"
            }, null, 8, ["color", "size", "type"]),
            vue.createElementVNode("view", {
              style: vue.normalizeStyle({ width: star.activeWitch }),
              class: "uni-rate__icon-on"
            }, [
              vue.createVNode(_component_uni_icons, {
                color: $props.disabled ? $props.disabledColor : $props.activeColor,
                size: $props.size,
                type: "star-filled"
              }, null, 8, ["color", "size"])
            ], 4)
          ], 38);
        }), 128))
      ], 512)
    ]);
  }
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$r], ["__scopeId", "data-v-5c8fbdf3"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/uni_modules/uni-rate/components/uni-rate/uni-rate.vue"]]);
  const _sfc_main$w = {
    __name: "index",
    props: ["item"],
    setup(__props) {
      const props = __props;
      formatAppLog("log", "at components/facility/index.vue:23", "item", props.item);
      let toTargetItem = function(item) {
        uni.navigateTo({
          url: item.url
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_rate = resolveEasycom(vue.resolveDynamicComponent("uni-rate"), __easycom_0$5);
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "facility",
          onClick: _cache[0] || (_cache[0] = ($event) => vue.unref(toTargetItem)(__props.item))
        }, [
          vue.createElementVNode("view", { class: "title" }, [
            vue.createTextVNode(vue.toDisplayString(__props.item.name) + " ", 1),
            vue.createVNode(_component_uni_rate, {
              class: "star",
              "active-color": "red"
            })
          ]),
          vue.createElementVNode("view", { class: "location" }, [
            vue.createTextVNode(" [Location:" + vue.toDisplayString(__props.item.location) + "] ", 1),
            vue.createElementVNode("view", { class: "price" }, " from \uFFE5" + vue.toDisplayString(__props.item.price) + "/hour ", 1)
          ])
        ]);
      };
    }
  };
  const ComponentsFacilityIndex = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/components/facility/index.vue"]]);
  const FacilityList = [
    { id: "0", name: "Swimming Pool 1", location: "BodyBuddy", price: 15, url: "../facilities/details/index" },
    { id: "1", name: "Swimming Pool 2", location: "BodyBuddy", price: 20, url: "../facilities/details/index" },
    { id: "2", name: "Swimming Pool 3", location: "BodyBuddy", price: 17, url: "../facilities/details/index" },
    { id: "3", name: "Swimming Pool 4", location: "BodyBuddy", price: 15, url: "../facilities/details/index" }
  ];
  const _sfc_main$v = {
    data() {
      return {
        FacilityList
      };
    },
    components: {
      Facility: ComponentsFacilityIndex
    },
    methods: {
      toTargetItem(item) {
        uni.navigateTo({
          url: item.url
        });
      }
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Facility = vue.resolveComponent("Facility");
    return vue.openBlock(), vue.createElementBlock("view", { class: "list" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.FacilityList, (item, index) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          key: item.id,
          class: "",
          onClick: ($event) => $options.toTargetItem(item)
        }, [
          vue.createVNode(_component_Facility, { item }, null, 8, ["item"])
        ], 8, ["onClick"]);
      }), 128))
    ]);
  }
  const PagesChoosefacilityIndex = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$q], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/pages/choosefacility/index.vue"]]);
  const _sfc_main$u = {
    props: {
      url: {
        type: String,
        default: ""
      },
      width: {
        type: Number,
        default: 90
      },
      borderWidth: {
        type: Number,
        default: 0
      },
      borderColor: {
        type: String,
        default: "#000000"
      }
    },
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "avatar-image" }, [
      vue.createElementVNode("image", {
        class: "image",
        style: vue.normalizeStyle({ width: `${$props.width}rpx`, height: `${$props.width}rpx`, borderWidth: `${$props.borderWidth}rpx`, borderColor: $props.borderColor }),
        src: $props.url ? $props.url : "/static/default-avatar.png"
      }, null, 12, ["src"])
    ]);
  }
  const AvatarImage = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$p], ["__scopeId", "data-v-28a89d63"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/components/avatar-image/index.vue"]]);
  const _sfc_main$t = {
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
      toTargetItem(item) {
        uni.navigateTo({
          url: item.url
        });
      }
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_avatar_image = vue.resolveComponent("avatar-image");
    const _component_uni_rate = resolveEasycom(vue.resolveDynamicComponent("uni-rate"), __easycom_0$5);
    return vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.UserList, (item, index) => {
      return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
        vue.createElementVNode("view", { class: "comment" }, [
          vue.createElementVNode("view", { class: "user-info" }, [
            vue.createElementVNode("view", { class: "user-avatar" }, [
              vue.createVNode(_component_avatar_image, {
                url: item.avatar_url,
                width: 65,
                style: { "margin-top": "5px" }
              }, null, 8, ["url"])
            ]),
            vue.createElementVNode("view", { class: "user-text" }, [
              vue.createElementVNode("view", { class: "user-name" }, vue.toDisplayString(item.user), 1),
              vue.createElementVNode("view", { class: "comment-date" }, vue.toDisplayString(item.date), 1)
            ]),
            vue.createVNode(_component_uni_rate, {
              class: "star",
              "active-color": "red",
              modelValue: $data.rateValue[index],
              "onUpdate:modelValue": ($event) => $data.rateValue[index] = $event
            }, null, 8, ["modelValue", "onUpdate:modelValue"])
          ]),
          vue.createElementVNode("view", { class: "comment-item" }, vue.toDisplayString(item.comment), 1)
        ])
      ]);
    }), 128);
  }
  const Comment = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$o], ["__scopeId", "data-v-82e8049d"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/components/comments/index.vue"]]);
  const _sfc_main$s = {
    __name: "index",
    setup(__props) {
      onLoad((options) => {
        formatAppLog("log", "at pages/facilities/details/index.vue:33", "page onLoad: ", options);
        name = options.id;
        formatAppLog("log", "at pages/facilities/details/index.vue:35", "facility is: ", options.id);
      });
      const itemList2 = [
        {
          id: 0,
          url: "/static/swiper/swiper4.jpg"
        },
        {
          id: 1,
          url: "/static/swiper/swiper4.jpg"
        },
        {
          id: 2,
          url: "/static/swiper/swiper4.jpg"
        }
      ];
      let ActivityList = vue.ref([{
        name: "lecture No.1",
        date: "2023-3-28",
        starttime: "14:00",
        endtime: "15:00",
        id: 1,
        price: "$10"
      }, {
        name: "lecture No.2",
        date: "2023-3-28",
        starttime: "15:00",
        endtime: "16:00",
        id: 2,
        price: "$20"
      }]);
      const UserList = [
        {
          user: "XJY",
          date: "2023-3-24",
          comment: "That's great!",
          avatar_url: "/static/icon/avatar1.jpg"
        },
        {
          user: "CPC",
          date: "2023-3-25",
          comment: "Many guys exercise there!",
          avatar_url: "/static/icon/avatar3.jpg"
        },
        {
          user: "LPY",
          date: "2023-3-25",
          comment: "I have a nice day there!",
          avatar_url: "/static/icon/avatar2.jpg"
        }
      ];
      return (_ctx, _cache) => {
        const _component_uni_rate = resolveEasycom(vue.resolveDynamicComponent("uni-rate"), __easycom_0$5);
        const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_0$9);
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(vue.unref(Banner), { itemList: itemList2 }),
          vue.createVNode(_component_uni_section, {
            title: "Swimming Pool",
            type: "line",
            padding: ""
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_rate, {
                "active-color": "red",
                modelValue: _ctx.rateValue,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.rateValue = $event),
                onChange: _ctx.onChange
              }, null, 8, ["modelValue", "onChange"])
            ]),
            _: 1
          }),
          vue.createElementVNode("view", { class: "detail" }, [
            vue.createElementVNode("view", null, "Opening Hours: 10:00-22:00"),
            vue.createElementVNode("view", null, "Coach: San Zhang"),
            vue.createElementVNode("view", null, "Contact: 18833000000")
          ]),
          vue.createVNode(_component_uni_section, {
            title: "Activites",
            type: "line"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(Book, { ActivityList: vue.unref(ActivityList) }, null, 8, ["ActivityList"])
            ]),
            _: 1
          }),
          vue.createVNode(_component_uni_section, {
            title: "Comments",
            type: "line",
            padding: ""
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(Comment, { UserList })
            ]),
            _: 1
          })
        ]);
      };
    }
  };
  const PagesFacilitiesDetailsIndex = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/pages/facilities/details/index.vue"]]);
  const ComponentClass$1 = "uni-col";
  const _sfc_main$r = {
    name: "uniCol",
    props: {
      span: {
        type: Number,
        default: 24
      },
      offset: {
        type: Number,
        default: -1
      },
      pull: {
        type: Number,
        default: -1
      },
      push: {
        type: Number,
        default: -1
      },
      xs: [Number, Object],
      sm: [Number, Object],
      md: [Number, Object],
      lg: [Number, Object],
      xl: [Number, Object]
    },
    data() {
      return {
        gutter: 0,
        sizeClass: "",
        parentWidth: 0,
        nvueWidth: 0,
        marginLeft: 0,
        right: 0,
        left: 0
      };
    },
    created() {
      let parent = this.$parent;
      while (parent && parent.$options.componentName !== "uniRow") {
        parent = parent.$parent;
      }
      this.updateGutter(parent.gutter);
      parent.$watch("gutter", (gutter) => {
        this.updateGutter(gutter);
      });
    },
    computed: {
      sizeList() {
        let {
          span,
          offset,
          pull,
          push
        } = this;
        return {
          span,
          offset,
          pull,
          push
        };
      },
      pointClassList() {
        let classList = [];
        ["xs", "sm", "md", "lg", "xl"].forEach((point) => {
          const props = this[point];
          if (typeof props === "number") {
            classList.push(`${ComponentClass$1}-${point}-${props}`);
          } else if (typeof props === "object" && props) {
            Object.keys(props).forEach((pointProp) => {
              classList.push(
                pointProp === "span" ? `${ComponentClass$1}-${point}-${props[pointProp]}` : `${ComponentClass$1}-${point}-${pointProp}-${props[pointProp]}`
              );
            });
          }
        });
        return classList.join(" ");
      }
    },
    methods: {
      updateGutter(parentGutter) {
        parentGutter = Number(parentGutter);
        if (!isNaN(parentGutter)) {
          this.gutter = parentGutter / 2;
        }
      }
    },
    watch: {
      sizeList: {
        immediate: true,
        handler(newVal) {
          let classList = [];
          for (let size in newVal) {
            const curSize = newVal[size];
            if ((curSize || curSize === 0) && curSize !== -1) {
              classList.push(
                size === "span" ? `${ComponentClass$1}-${curSize}` : `${ComponentClass$1}-${size}-${curSize}`
              );
            }
          }
          this.sizeClass = classList.join(" ");
        }
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-col", $data.sizeClass, $options.pointClassList]),
      style: vue.normalizeStyle({
        paddingLeft: `${Number($data.gutter)}rpx`,
        paddingRight: `${Number($data.gutter)}rpx`
      })
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 6);
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$n], ["__scopeId", "data-v-28ff6624"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/uni_modules/uni-row/components/uni-col/uni-col.vue"]]);
  const ComponentClass = "uni-row";
  const modifierSeparator = "--";
  const _sfc_main$q = {
    name: "uniRow",
    componentName: "uniRow",
    props: {
      type: String,
      gutter: Number,
      justify: {
        type: String,
        default: "start"
      },
      align: {
        type: String,
        default: "top"
      },
      width: {
        type: [String, Number],
        default: 750
      }
    },
    created() {
    },
    computed: {
      marginValue() {
        if (this.gutter) {
          return -(this.gutter / 2);
        }
        return 0;
      },
      typeClass() {
        return this.type === "flex" ? `${ComponentClass + modifierSeparator}flex` : "";
      },
      justifyClass() {
        return this.justify !== "start" ? `${ComponentClass + modifierSeparator}flex-justify-${this.justify}` : "";
      },
      alignClass() {
        return this.align !== "top" ? `${ComponentClass + modifierSeparator}flex-align-${this.align}` : "";
      }
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-row", $options.typeClass, $options.justifyClass, $options.alignClass]),
      style: vue.normalizeStyle({
        marginLeft: `${Number($options.marginValue)}rpx`,
        marginRight: `${Number($options.marginValue)}rpx`
      })
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 6);
  }
  const __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$m], ["__scopeId", "data-v-097353af"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/uni_modules/uni-row/components/uni-row/uni-row.vue"]]);
  const _sfc_main$p = {
    name: "TimePicker",
    data() {
      return {
        stime: "choose start time",
        etime: "choose end time",
        gutter: 0,
        nvueWidth: 730
      };
    },
    methods: {
      bindsTimeChange: function(e) {
        this.stime = e.detail.value;
        this.$emit("getStartTime", this.stime);
      },
      bindeTimeChange: function(e) {
        this.etime = e.detail.value;
        this.$emit("getEndTime", this.etime);
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_col = resolveEasycom(vue.resolveDynamicComponent("uni-col"), __easycom_0$4);
    const _component_uni_row = resolveEasycom(vue.resolveDynamicComponent("uni-row"), __easycom_1$4);
    return vue.openBlock(), vue.createBlock(_component_uni_row, {
      class: "demo-uni-row",
      width: $data.nvueWidth
    }, {
      default: vue.withCtx(() => [
        vue.createVNode(_component_uni_col, {
          span: 3,
          class: "text"
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(" From ")
          ]),
          _: 1
        }),
        vue.createVNode(_component_uni_col, { span: 9 }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("picker", {
              class: "start",
              mode: "time",
              onChange: _cache[0] || (_cache[0] = (...args) => $options.bindsTimeChange && $options.bindsTimeChange(...args))
            }, [
              vue.createElementVNode("view", null, vue.toDisplayString($data.stime), 1)
            ], 32)
          ]),
          _: 1
        }),
        vue.createVNode(_component_uni_col, {
          span: 2,
          class: "text"
        }, {
          default: vue.withCtx(() => [
            vue.createTextVNode(" To ")
          ]),
          _: 1
        }),
        vue.createVNode(_component_uni_col, { span: 9 }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("picker", {
              class: "start",
              mode: "time",
              onChange: _cache[1] || (_cache[1] = (...args) => $options.bindeTimeChange && $options.bindeTimeChange(...args))
            }, [
              vue.createElementVNode("view", null, vue.toDisplayString($data.etime), 1)
            ], 32)
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["width"]);
  }
  const TimePicker = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$l], ["__scopeId", "data-v-9abc2ae5"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/components/time-picker/index.vue"]]);
  const _sfc_main$o = {
    name: "Card",
    data() {
      return {
        order: {
          username: "pangyu",
          activity: {
            name: "lesson1",
            price: 17,
            discription: "..."
          }
        }
      };
    },
    components: {
      TimePicker
    },
    methods: {
      getStartTime(e) {
        formatAppLog("log", "at pages/facilities/choosetime/index.vue:64", e);
      },
      getEndTime(e) {
        formatAppLog("log", "at pages/facilities/choosetime/index.vue:67", e);
      },
      order(activity) {
        uni.request({
          url: urlPrefix + "/order",
          method: "POST",
          data: {
            activityId: activity.id,
            name: activity.name
          },
          header: {
            "Authorization": uni.getStorageSync("token")
          }
        }).then((res) => {
          if (res.statusCode === 200) {
            uni.showToast({
              title: "Order Success!",
              duration: 2e3
            });
            setTimeout(() => {
              uni.redirectTo({
                url: "/pages/order/index"
              });
            }, 1500);
          } else {
            uni.showToast({
              title: res.data.message.split(";")[0],
              duration: 2e3,
              icon: "error"
            });
          }
          formatAppLog("log", "at pages/facilities/choosetime/index.vue:98", res);
        }).catch((error) => {
          uni.showToast({
            title: "Order Failed!",
            duration: 2e3,
            icon: "error"
          });
        });
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_section = resolveEasycom(vue.resolveDynamicComponent("uni-section"), __easycom_0$9);
    const _component_uni_datetime_picker = resolveEasycom(vue.resolveDynamicComponent("uni-datetime-picker"), __easycom_0$6);
    const _component_TimePicker = vue.resolveComponent("TimePicker");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createVNode(_component_uni_section, {
        title: "username",
        type: "line",
        titleFontSize: "18px"
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "example-body" }, vue.toDisplayString($options.order.username), 1)
        ]),
        _: 1
      }),
      vue.createVNode(_component_uni_section, {
        title: "activity",
        type: "line",
        titleFontSize: "18px"
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "example-body" }, vue.toDisplayString($options.order.activity.name), 1)
        ]),
        _: 1
      }),
      vue.createVNode(_component_uni_section, {
        title: "discription",
        type: "line",
        titleFontSize: "18px"
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "example-body" }, vue.toDisplayString($options.order.activity.discription), 1)
        ]),
        _: 1
      }),
      vue.createVNode(_component_uni_section, {
        title: "price",
        type: "line",
        titleFontSize: "18px"
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "example-body" }, vue.toDisplayString($options.order.activity.price), 1)
        ]),
        _: 1
      }),
      vue.createVNode(_component_uni_section, {
        title: "choose date",
        type: "line",
        titleFontSize: "18px"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_datetime_picker, {
            type: "date",
            "clear-icon": false,
            modelValue: _ctx.single,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.single = $event),
            onMaskClick: _ctx.maskClick
          }, null, 8, ["modelValue", "onMaskClick"])
        ]),
        _: 1
      }),
      vue.createVNode(_component_uni_section, {
        title: "choose time",
        type: "line",
        titleFontSize: "18px"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_TimePicker, {
            class: "picker",
            onGetStartTime: $options.getStartTime,
            onGetEndTime: $options.getEndTime
          }, null, 8, ["onGetStartTime", "onGetEndTime"])
        ]),
        _: 1
      }),
      vue.createElementVNode("button", {
        class: "btn",
        type: "warn",
        onClick: _cache[1] || (_cache[1] = ($event) => $options.order(_ctx.activity))
      }, "Book")
    ], 64);
  }
  const PagesFacilitiesChoosetimeIndex = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$k], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/pages/facilities/choosetime/index.vue"]]);
  const _sfc_main$n = {};
  function _sfc_render$j(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", null, " timetable ");
  }
  const PagesFacilitiesTimetableIndex = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$j], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/pages/facilities/timetable/index.vue"]]);
  const _sfc_main$m = {
    __name: "index",
    props: ["post"],
    setup(__props) {
      const props = __props;
      let like_count = vue.ref(Math.ceil(Math.random() * 99));
      let fill = vue.ref("none");
      let stroke = vue.ref("currentColor");
      let cover_style = vue.reactive({});
      let card_style = vue.reactive({});
      let info_style = vue.reactive({});
      const like = () => {
        if (fill.value != "Red") {
          like_count.value += 1;
          fill.value = "Red";
          stroke.value = "Red";
        } else {
          like_count.value -= 1;
          fill.value = "none";
          stroke.value = "currentColor";
        }
      };
      if (props.post.id % 6 === 2) {
        cover_style["height"] = "180px";
        card_style["height"] = "228px";
        card_style["bottom"] = "0px";
      } else if (props.post.id % 6 === 4) {
        cover_style["height"] = "240px";
        card_style["position"] = "relative";
        card_style["bottom"] = "60px";
        card_style["height"] = "288px";
      } else if (props.post.id % 6 === 3) {
        card_style["height"] = "288px";
      } else if (props.post.id % 6 === 0) {
        cover_style["height"] = "240px";
        card_style["height"] = "288px";
        card_style["position"] = "relative";
        card_style["bottom"] = "60px";
        card_style["align-self"] = "";
      } else if (props.post.id % 6 === 5) {
        card_style["height"] = "288px";
      }
      if (props.post.id % 2 === 0) {
        card_style["position"] = "relative";
        let mul = Math.floor((props.post.id - 1) / 6);
        card_style["bottom"] = String(parseInt(card_style["bottom"]) + 60 * mul) + "px";
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          style: vue.normalizeStyle(vue.unref(card_style))
        }, [
          vue.createElementVNode("div", { id: "image" }, [
            vue.createElementVNode("image", {
              src: __props.post.url,
              mode: "aspectFill",
              id: "cover_image",
              style: vue.normalizeStyle(vue.unref(cover_style))
            }, null, 12, ["src"])
          ]),
          vue.createElementVNode("div", {
            id: "info",
            style: vue.normalizeStyle(vue.unref(info_style))
          }, [
            vue.createElementVNode("div", { id: "title" }, vue.toDisplayString(__props.post.title), 1),
            vue.createElementVNode("div", { id: "author" }, [
              vue.createElementVNode("div", { id: "avator" }, [
                vue.createElementVNode("image", {
                  src: __props.post.avator,
                  mode: "aspectFill",
                  id: "avator_image"
                }, null, 8, ["src"])
              ]),
              vue.createElementVNode("div", { id: "name" }, vue.toDisplayString(__props.post.author), 1),
              vue.createElementVNode("div", {
                id: "like",
                onClick: _cache[0] || (_cache[0] = ($event) => like())
              }, [
                (vue.openBlock(), vue.createElementBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "15",
                  height: "15",
                  viewBox: "0 -13 50 58"
                }, [
                  vue.createElementVNode("path", {
                    fill: vue.unref(fill),
                    stroke: vue.unref(stroke),
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "8",
                    d: "M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8Z"
                  }, null, 8, ["fill", "stroke"])
                ])),
                vue.createTextVNode(vue.toDisplayString(vue.unref(like_count)), 1)
              ])
            ])
          ], 4)
        ], 4);
      };
    }
  };
  const DiscoveryCard = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-f9db55d9"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/components/discovery-card/index.vue"]]);
  const _sfc_main$l = {
    __name: "others",
    setup(__props) {
      uni.getSystemInfo();
      let items = vue.reactive([
        {
          id: 1,
          url: `../../static/discovery/${Math.ceil(Math.random() * 20)}.png`,
          author: "prosperous",
          avator: `https://api.yimian.xyz/img?type=head&id=${Math.ceil(Math.random() * 100)}`,
          title: "Hello World6!",
          time: "2023-4-5"
        },
        {
          id: 2,
          url: `../../static/discovery/${Math.ceil(Math.random() * 20)}.png`,
          author: "prosperousye",
          avator: `https://api.yimian.xyz/img?type=head&id=${Math.ceil(Math.random() * 100)}`,
          title: "Hello World5!",
          time: "2023-4-6"
        },
        {
          id: 3,
          url: `../../static/discovery/${Math.ceil(Math.random() * 20)}.png`,
          author: "prosperous125",
          avator: `https://api.yimian.xyz/img?type=head&id=${Math.ceil(Math.random() * 100)}`,
          title: "Hello World4!",
          time: "2023-4-7"
        },
        {
          id: 4,
          url: `../../static/discovery/${Math.ceil(Math.random() * 20)}.png`,
          author: "Xiaokang",
          avator: `https://api.yimian.xyz/img?type=head&id=${Math.ceil(Math.random() * 100)}`,
          title: "Hello World3!",
          time: "2023-4-8"
        },
        {
          id: 5,
          url: `../../static/discovery/${Math.ceil(Math.random() * 20)}.png`,
          author: "XiaokangYe",
          avator: `https://api.yimian.xyz/img?type=head&id=${Math.ceil(Math.random() * 100)}`,
          title: "Hello World2!",
          time: "2023-4-9"
        },
        {
          id: 6,
          url: `../../static/discovery/${Math.ceil(Math.random() * 20)}.png`,
          author: "YouKnowWho",
          avator: `https://api.yimian.xyz/img?type=head&id=${Math.ceil(Math.random() * 100)}`,
          title: "Hello World1!",
          time: "2023-4-10"
        }
      ]);
      let container = vue.reactive({
        height: "864px"
      });
      onReachBottom(() => {
        setTimeout(() => {
          let items_new = [];
          for (let j = 0; j < 6; j++) {
            let item = items[j];
            let item_copy = {};
            for (let i in item) {
              if (i === "id") {
                item_copy["id"] = item["id"] + items.length;
              } else if (i === "url") {
                item_copy["url"] = `../../static/discovery/${Math.ceil(Math.random() * 20)}.png`;
              } else if (i === "avator") {
                item_copy["avator"] = `https://api.yimian.xyz/img?type=head&id=${Math.ceil(Math.random() * 100)}`;
              } else {
                item_copy[i] = item[i];
              }
            }
            items_new.push(item_copy);
          }
          for (let j = 0; j < 6; j++) {
            items.push(items_new[j]);
          }
          container.height = String(parseInt(container.height.slice(0, -2)) + 864) + "px";
        }, 500);
      });
      onPullDownRefresh(() => {
        setTimeout(() => {
          location.reload();
          uni.stopPullDownRefresh();
        }, 500);
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createElementVNode("div", {
            id: "container",
            style: vue.normalizeStyle(vue.unref(container))
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(vue.unref(items), (item) => {
              return vue.openBlock(), vue.createBlock(DiscoveryCard, {
                class: "items",
                key: vue.unref(items).id,
                post: item
              }, null, 8, ["post"]);
            }), 128))
          ], 4)
        ]);
      };
    }
  };
  const PagesOthersOthers = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-fc6b325a"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/pages/others/others.vue"]]);
  const _sfc_main$k = {
    name: "UniBadge",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: "error"
      },
      inverted: {
        type: Boolean,
        default: false
      },
      isDot: {
        type: Boolean,
        default: false
      },
      maxNum: {
        type: Number,
        default: 99
      },
      absolute: {
        type: String,
        default: ""
      },
      offset: {
        type: Array,
        default() {
          return [0, 0];
        }
      },
      text: {
        type: [String, Number],
        default: ""
      },
      size: {
        type: String,
        default: "small"
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {};
    },
    computed: {
      width() {
        return String(this.text).length * 8 + 12;
      },
      classNames() {
        const {
          inverted,
          type,
          size,
          absolute
        } = this;
        return [
          inverted ? "uni-badge--" + type + "-inverted" : "",
          "uni-badge--" + type,
          "uni-badge--" + size,
          absolute ? "uni-badge--absolute" : ""
        ].join(" ");
      },
      positionStyle() {
        if (!this.absolute)
          return {};
        let w = this.width / 2, h = 10;
        if (this.isDot) {
          w = 5;
          h = 5;
        }
        const x = `${-w + this.offset[0]}px`;
        const y = `${-h + this.offset[1]}px`;
        const whiteList = {
          rightTop: {
            right: x,
            top: y
          },
          rightBottom: {
            right: x,
            bottom: y
          },
          leftBottom: {
            left: x,
            bottom: y
          },
          leftTop: {
            left: x,
            top: y
          }
        };
        const match = whiteList[this.absolute];
        return match ? match : whiteList["rightTop"];
      },
      dotStyle() {
        if (!this.isDot)
          return {};
        return {
          width: "10px",
          minWidth: "0",
          height: "10px",
          padding: "0",
          borderRadius: "10px"
        };
      },
      displayValue() {
        const {
          isDot,
          text,
          maxNum
        } = this;
        return isDot ? "" : Number(text) > maxNum ? `${maxNum}+` : text;
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-badge--x" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.text ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 0,
        class: vue.normalizeClass([$options.classNames, "uni-badge"]),
        style: vue.normalizeStyle([$options.positionStyle, $props.customStyle, $options.dotStyle]),
        onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick())
      }, vue.toDisplayString($options.displayValue), 7)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$i], ["__scopeId", "data-v-c97cb896"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/uni_modules/uni-badge/components/uni-badge/uni-badge.vue"]]);
  const _sfc_main$j = {
    name: "UniListItem",
    emits: ["click", "switchChange"],
    props: {
      direction: {
        type: String,
        default: "row"
      },
      title: {
        type: String,
        default: ""
      },
      note: {
        type: String,
        default: ""
      },
      ellipsis: {
        type: [Number, String],
        default: 0
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      clickable: {
        type: Boolean,
        default: false
      },
      showArrow: {
        type: [Boolean, String],
        default: false
      },
      link: {
        type: [Boolean, String],
        default: false
      },
      to: {
        type: String,
        default: ""
      },
      showBadge: {
        type: [Boolean, String],
        default: false
      },
      showSwitch: {
        type: [Boolean, String],
        default: false
      },
      switchChecked: {
        type: [Boolean, String],
        default: false
      },
      badgeText: {
        type: String,
        default: ""
      },
      badgeType: {
        type: String,
        default: "success"
      },
      badgeStyle: {
        type: Object,
        default() {
          return {};
        }
      },
      rightText: {
        type: String,
        default: ""
      },
      thumb: {
        type: String,
        default: ""
      },
      thumbSize: {
        type: String,
        default: "base"
      },
      showExtraIcon: {
        type: [Boolean, String],
        default: false
      },
      extraIcon: {
        type: Object,
        default() {
          return {
            type: "",
            color: "#000000",
            size: 20,
            customPrefix: ""
          };
        }
      },
      border: {
        type: Boolean,
        default: true
      },
      customStyle: {
        type: Object,
        default() {
          return {
            padding: "",
            backgroundColor: "#FFFFFF"
          };
        }
      },
      keepScrollPosition: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      "customStyle.padding": {
        handler(padding) {
          if (typeof padding == "number") {
            padding += "";
          }
          let paddingArr = padding.split(" ");
          if (paddingArr.length === 1) {
            this.padding = {
              "top": padding,
              "right": padding,
              "bottom": padding,
              "left": padding
            };
          } else if (paddingArr.length === 2) {
            this.padding = {
              "top": padding[0],
              "right": padding[1],
              "bottom": padding[0],
              "left": padding[1]
            };
          } else if (paddingArr.length === 4) {
            this.padding = {
              "top": padding[0],
              "right": padding[1],
              "bottom": padding[2],
              "left": padding[3]
            };
          }
        },
        immediate: true
      }
    },
    data() {
      return {
        isFirstChild: false,
        padding: {
          top: "",
          right: "",
          bottom: "",
          left: ""
        }
      };
    },
    mounted() {
      this.list = this.getForm();
      if (this.list) {
        if (!this.list.firstChildAppend) {
          this.list.firstChildAppend = true;
          this.isFirstChild = true;
        }
      }
    },
    methods: {
      getForm(name2 = "uniList") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name2) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      },
      onClick() {
        if (this.to !== "") {
          this.openPage();
          return;
        }
        if (this.clickable || this.link) {
          this.$emit("click", {
            data: {}
          });
        }
      },
      onSwitchChange(e) {
        this.$emit("switchChange", e.detail);
      },
      openPage() {
        if (["navigateTo", "redirectTo", "reLaunch", "switchTab"].indexOf(this.link) !== -1) {
          this.pageApi(this.link);
        } else {
          this.pageApi("navigateTo");
        }
      },
      pageApi(api) {
        let callback = {
          url: this.to,
          success: (res) => {
            this.$emit("click", {
              data: res
            });
          },
          fail: (err) => {
            this.$emit("click", {
              data: err
            });
          }
        };
        switch (api) {
          case "navigateTo":
            uni.navigateTo(callback);
            break;
          case "redirectTo":
            uni.redirectTo(callback);
            break;
          case "reLaunch":
            uni.reLaunch(callback);
            break;
          case "switchTab":
            uni.switchTab(callback);
            break;
          default:
            uni.navigateTo(callback);
        }
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$b);
    const _component_uni_badge = resolveEasycom(vue.resolveDynamicComponent("uni-badge"), __easycom_1$3);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass([{ "uni-list-item--disabled": $props.disabled }, "uni-list-item"]),
      style: vue.normalizeStyle({ "background-color": $props.customStyle.backgroundColor }),
      "hover-class": !$props.clickable && !$props.link || $props.disabled || $props.showSwitch ? "" : "uni-list-item--hover",
      onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.isFirstChild ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: vue.normalizeClass(["border--left", { "uni-list--border": $props.border }])
      }, null, 2)) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-list-item__container", { "container--right": $props.showArrow || $props.link, "flex--direction": $props.direction === "column" }]),
        style: vue.normalizeStyle({ paddingTop: $data.padding.top, paddingLeft: $data.padding.left, paddingRight: $data.padding.right, paddingBottom: $data.padding.bottom })
      }, [
        vue.renderSlot(_ctx.$slots, "header", {}, () => [
          vue.createElementVNode("view", { class: "uni-list-item__header" }, [
            $props.thumb ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "uni-list-item__icon"
            }, [
              vue.createElementVNode("image", {
                src: $props.thumb,
                class: vue.normalizeClass(["uni-list-item__icon-img", ["uni-list--" + $props.thumbSize]])
              }, null, 10, ["src"])
            ])) : $props.showExtraIcon ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "uni-list-item__icon"
            }, [
              vue.createVNode(_component_uni_icons, {
                customPrefix: $props.extraIcon.customPrefix,
                color: $props.extraIcon.color,
                size: $props.extraIcon.size,
                type: $props.extraIcon.type
              }, null, 8, ["customPrefix", "color", "size", "type"])
            ])) : vue.createCommentVNode("v-if", true)
          ])
        ], true),
        vue.renderSlot(_ctx.$slots, "body", {}, () => [
          vue.createElementVNode("view", {
            class: vue.normalizeClass(["uni-list-item__content", { "uni-list-item__content--center": $props.thumb || $props.showExtraIcon || $props.showBadge || $props.showSwitch }])
          }, [
            $props.title ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 0,
              class: vue.normalizeClass(["uni-list-item__content-title", [$props.ellipsis !== 0 && $props.ellipsis <= 2 ? "uni-ellipsis-" + $props.ellipsis : ""]])
            }, vue.toDisplayString($props.title), 3)) : vue.createCommentVNode("v-if", true),
            $props.note ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 1,
              class: "uni-list-item__content-note"
            }, vue.toDisplayString($props.note), 1)) : vue.createCommentVNode("v-if", true)
          ], 2)
        ], true),
        vue.renderSlot(_ctx.$slots, "footer", {}, () => [
          $props.rightText || $props.showBadge || $props.showSwitch ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: vue.normalizeClass(["uni-list-item__extra", { "flex--justify": $props.direction === "column" }])
          }, [
            $props.rightText ? (vue.openBlock(), vue.createElementBlock("text", {
              key: 0,
              class: "uni-list-item__extra-text"
            }, vue.toDisplayString($props.rightText), 1)) : vue.createCommentVNode("v-if", true),
            $props.showBadge ? (vue.openBlock(), vue.createBlock(_component_uni_badge, {
              key: 1,
              type: $props.badgeType,
              text: $props.badgeText,
              "custom-style": $props.badgeStyle
            }, null, 8, ["type", "text", "custom-style"])) : vue.createCommentVNode("v-if", true),
            $props.showSwitch ? (vue.openBlock(), vue.createElementBlock("switch", {
              key: 2,
              disabled: $props.disabled,
              checked: $props.switchChecked,
              onChange: _cache[0] || (_cache[0] = (...args) => $options.onSwitchChange && $options.onSwitchChange(...args))
            }, null, 40, ["disabled", "checked"])) : vue.createCommentVNode("v-if", true)
          ], 2)) : vue.createCommentVNode("v-if", true)
        ], true)
      ], 6),
      $props.showArrow || $props.link ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
        key: 1,
        size: 16,
        class: "uni-icon-wrapper",
        color: "#bbb",
        type: "arrowright"
      })) : vue.createCommentVNode("v-if", true)
    ], 14, ["hover-class"]);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$h], ["__scopeId", "data-v-c7524739"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/uni_modules/uni-list/components/uni-list-item/uni-list-item.vue"]]);
  const _sfc_main$i = {
    name: "uniList",
    "mp-weixin": {
      options: {
        multipleSlots: false
      }
    },
    props: {
      stackFromEnd: {
        type: Boolean,
        default: false
      },
      enableBackToTop: {
        type: [Boolean, String],
        default: false
      },
      scrollY: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: Boolean,
        default: true
      },
      renderReverse: {
        type: Boolean,
        default: false
      }
    },
    created() {
      this.firstChildAppend = false;
    },
    methods: {
      loadMore(e) {
        this.$emit("scrolltolower");
      },
      scroll(e) {
        this.$emit("scroll", e);
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-list uni-border-top-bottom" }, [
      $props.border ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-list--border-top"
      })) : vue.createCommentVNode("v-if", true),
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.border ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-list--border-bottom"
      })) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$g], ["__scopeId", "data-v-c2f1266a"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/uni_modules/uni-list/components/uni-list/uni-list.vue"]]);
  const urlPrefix$5 = Config.urlPrefix;
  const orderNavbar = [
    {
      id: "all",
      name: "To Be Paid",
      iconpath: "/static/icon/tobepaid.svg",
      url: "../order/index"
    },
    {
      id: "payment",
      name: "Paid",
      iconpath: "/static/icon/paid.svg",
      url: "../order/index"
    },
    {
      id: "delivery",
      name: "Cancelled",
      iconpath: "/static/icon/cancelled.svg",
      url: "../order/index"
    }
  ];
  const itemList$1 = [
    {
      id: "all",
      name: "Personal Info",
      icon: "qpdingdan",
      url: "./personal-info/index"
    },
    {
      id: "payment",
      name: "Wallet",
      icon: "daifukuan",
      url: "./wallet/index"
    },
    {
      id: "delivery",
      name: "Bookings",
      icon: "daifahuo",
      url: "../order/index"
    },
    {
      id: "received",
      name: "Settings",
      icon: "daishouhuo",
      url: "./settings/index"
    }
  ];
  const _sfc_main$h = {
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
        itemList: itemList$1,
        isLogin: false
      };
    },
    methods: {
      async getUserInfo() {
        uni.request({
          url: urlPrefix$5 + "/user",
          method: "GET",
          header: {
            "Authorization": uni.getStorageSync("token")
          }
        }).then((res) => {
          if (res.data.code === 0) {
            formatAppLog("log", "at pages/mine/mine.vue:134", "username: ", res.data.result.username);
            formatAppLog("log", "at pages/mine/mine.vue:135", "email: ", res.data.result.email);
            this.isLogin = true;
            this.userInfo.username = res.data.result.username;
            this.userInfo.email = res.data.result.email;
          } else {
            uni.showToast({
              title: "Get info failed",
              duration: 2e3
            });
          }
        });
      },
      handleService(url) {
        uni.navigateTo({
          url
        });
      },
      handleLogin() {
        !this.isLogin && uni.navigateTo({
          url: "/pages/login/index"
        });
      },
      logout() {
        formatAppLog("log", "at pages/mine/mine.vue:160", "logout");
        uni.setStorageSync("token", null);
        this.isLogin = false;
      }
    },
    mounted() {
      formatAppLog("log", "at pages/mine/mine.vue:166", "token", uni.getStorageSync("token"));
      if (uni.getStorageSync("token") !== null) {
        formatAppLog("log", "at pages/mine/mine.vue:168", "asdfsdfsad");
        this.getUserInfo();
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_avatar_image = vue.resolveComponent("avatar-image");
    const _component_Card = vue.resolveComponent("Card");
    const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_0$3);
    const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", {
        class: "main-header",
        style: vue.normalizeStyle({ height: _ctx.platform == "H5" ? "260rpx" : "320rpx", paddingTop: _ctx.platform == "H5" ? "0" : "80rpx" })
      }, [
        vue.createElementVNode("view", { class: "bgc" }),
        vue.createCommentVNode(" \u7528\u6237\u4FE1\u606F "),
        $data.isLogin ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "user-info"
        }, [
          vue.createCommentVNode(" \u5934\u50CF "),
          vue.createElementVNode("view", { class: "user-avatar" }, [
            vue.createVNode(_component_avatar_image, {
              url: $data.userInfo.avatar_url,
              width: 100
            }, null, 8, ["url"])
          ]),
          vue.createCommentVNode(" \u4FE1\u606F "),
          !$data.isLogin ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "user-content"
          }, [
            vue.createElementVNode("view", { class: "nick-name oneline-hide" }, "Login"),
            vue.createElementVNode("view", { class: "mobile" }, "Click here to login")
          ])) : vue.createCommentVNode("v-if", true),
          $data.isLogin ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "user-content"
          }, [
            vue.createElementVNode("view", { class: "nick-name oneline-hide" }, vue.toDisplayString($data.userInfo.username), 1),
            vue.createElementVNode("view", { class: "mobile" }, vue.toDisplayString($data.userInfo.email), 1)
          ])) : vue.createCommentVNode("v-if", true)
        ])) : (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "user-info",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.handleLogin && $options.handleLogin(...args))
        }, [
          vue.createElementVNode("view", { class: "user-avatar" }, [
            vue.createVNode(_component_avatar_image, { width: 100 })
          ]),
          vue.createElementVNode("view", { class: "user-content" }, [
            vue.createElementVNode("view", { class: "nick-name" }, "Sign In"),
            vue.createElementVNode("view", { class: "login-tips" }, "Click here to sign in")
          ])
        ]))
      ], 4),
      vue.createCommentVNode(" \u8BA2\u5355\u64CD\u4F5C "),
      vue.createVNode(_component_Card, {
        DataList: $data.orderNavbar,
        name: "Order",
        extra: "more >",
        class: "cards"
      }, null, 8, ["DataList"]),
      vue.createCommentVNode(" \u5176\u4ED6 "),
      vue.createElementVNode("view", null, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.itemList, (item, index) => {
          return vue.openBlock(), vue.createBlock(_component_uni_list, {
            key: index,
            onClick: ($event) => $options.handleService(item.url)
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_list_item, {
                title: item.name
              }, null, 8, ["title"])
            ]),
            _: 2
          }, 1032, ["onClick"]);
        }), 128)),
        vue.createVNode(_component_uni_list, { onClick: $options.logout }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_list_item, { title: "Logout" })
          ]),
          _: 1
        }, 8, ["onClick"])
      ])
    ]);
  }
  const PagesMineMine = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$f], ["__scopeId", "data-v-7c2ebfa5"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/pages/mine/mine.vue"]]);
  function obj2strClass(obj) {
    let classess = "";
    for (let key in obj) {
      const val = obj[key];
      if (val) {
        classess += `${key} `;
      }
    }
    return classess;
  }
  function obj2strStyle(obj) {
    let style = "";
    for (let key in obj) {
      const val = obj[key];
      style += `${key}:${val};`;
    }
    return style;
  }
  const _sfc_main$g = {
    name: "uni-easyinput",
    emits: ["click", "iconClick", "update:modelValue", "input", "focus", "blur", "confirm", "clear", "eyes", "change"],
    model: {
      prop: "modelValue",
      event: "update:modelValue"
    },
    options: {
      virtualHost: true
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      },
      formItem: {
        from: "uniFormItem",
        default: null
      }
    },
    props: {
      name: String,
      value: [Number, String],
      modelValue: [Number, String],
      type: {
        type: String,
        default: "text"
      },
      clearable: {
        type: Boolean,
        default: true
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: " "
      },
      placeholderStyle: String,
      focus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      confirmType: {
        type: String,
        default: "done"
      },
      clearSize: {
        type: [Number, String],
        default: 24
      },
      inputBorder: {
        type: Boolean,
        default: true
      },
      prefixIcon: {
        type: String,
        default: ""
      },
      suffixIcon: {
        type: String,
        default: ""
      },
      trim: {
        type: [Boolean, String],
        default: true
      },
      passwordIcon: {
        type: Boolean,
        default: true
      },
      primaryColor: {
        type: String,
        default: "#2979ff"
      },
      styles: {
        type: Object,
        default() {
          return {
            color: "#333",
            backgroundColor: "#fff",
            disableColor: "#F7F6F6",
            borderColor: "#e5e5e5"
          };
        }
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      }
    },
    data() {
      return {
        focused: false,
        val: "",
        showMsg: "",
        border: false,
        isFirstBorder: false,
        showClearIcon: false,
        showPassword: false,
        focusShow: false,
        localMsg: "",
        isEnter: false
      };
    },
    computed: {
      isVal() {
        const val = this.val;
        if (val || val === 0) {
          return true;
        }
        return false;
      },
      msg() {
        return this.localMsg || this.errorMessage;
      },
      inputMaxlength() {
        return Number(this.maxlength);
      },
      boxStyle() {
        return `color:${this.inputBorder && this.msg ? "#e43d33" : this.styles.color};`;
      },
      inputContentClass() {
        return obj2strClass({
          "is-input-border": this.inputBorder,
          "is-input-error-border": this.inputBorder && this.msg,
          "is-textarea": this.type === "textarea",
          "is-disabled": this.disabled,
          "is-focused": this.focusShow
        });
      },
      inputContentStyle() {
        const focusColor = this.focusShow ? this.primaryColor : this.styles.borderColor;
        const borderColor = this.inputBorder && this.msg ? "#dd524d" : focusColor;
        return obj2strStyle({
          "border-color": borderColor || "#e5e5e5",
          "background-color": this.disabled ? this.styles.disableColor : this.styles.backgroundColor
        });
      },
      inputStyle() {
        const paddingRight = this.type === "password" || this.clearable || this.prefixIcon ? "" : "10px";
        return obj2strStyle({
          "padding-right": paddingRight,
          "padding-left": this.prefixIcon ? "" : "10px"
        });
      }
    },
    watch: {
      value(newVal) {
        this.val = newVal;
      },
      modelValue(newVal) {
        this.val = newVal;
      },
      focus(newVal) {
        this.$nextTick(() => {
          this.focused = this.focus;
          this.focusShow = this.focus;
        });
      }
    },
    created() {
      this.init();
      if (this.form && this.formItem) {
        this.$watch("formItem.errMsg", (newVal) => {
          this.localMsg = newVal;
        });
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.focused = this.focus;
        this.focusShow = this.focus;
      });
    },
    methods: {
      init() {
        if (this.value || this.value === 0) {
          this.val = this.value;
        } else if (this.modelValue || this.modelValue === 0 || this.modelValue === "") {
          this.val = this.modelValue;
        } else {
          this.val = null;
        }
      },
      onClickIcon(type) {
        this.$emit("iconClick", type);
      },
      onEyes() {
        this.showPassword = !this.showPassword;
        this.$emit("eyes", this.showPassword);
      },
      onInput(event) {
        let value = event.detail.value;
        if (this.trim) {
          if (typeof this.trim === "boolean" && this.trim) {
            value = this.trimStr(value);
          }
          if (typeof this.trim === "string") {
            value = this.trimStr(value, this.trim);
          }
        }
        if (this.errMsg)
          this.errMsg = "";
        this.val = value;
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
      },
      onFocus() {
        this.$nextTick(() => {
          this.focused = true;
        });
        this.$emit("focus", null);
      },
      _Focus(event) {
        this.focusShow = true;
        this.$emit("focus", event);
      },
      onBlur() {
        this.focused = false;
        this.$emit("focus", null);
      },
      _Blur(event) {
        event.detail.value;
        this.focusShow = false;
        this.$emit("blur", event);
        if (this.isEnter === false) {
          this.$emit("change", this.val);
        }
        if (this.form && this.formItem) {
          const { validateTrigger } = this.form;
          if (validateTrigger === "blur") {
            this.formItem.onFieldChange();
          }
        }
      },
      onConfirm(e) {
        this.$emit("confirm", this.val);
        this.isEnter = true;
        this.$emit("change", this.val);
        this.$nextTick(() => {
          this.isEnter = false;
        });
      },
      onClear(event) {
        this.val = "";
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
        this.$emit("clear");
      },
      onkeyboardheightchange(event) {
        this.$emit("keyboardheightchange", event);
      },
      trimStr(str, pos = "both") {
        if (pos === "both") {
          return str.trim();
        } else if (pos === "left") {
          return str.trimLeft();
        } else if (pos === "right") {
          return str.trimRight();
        } else if (pos === "start") {
          return str.trimStart();
        } else if (pos === "end") {
          return str.trimEnd();
        } else if (pos === "all") {
          return str.replace(/\s+/g, "");
        } else if (pos === "none") {
          return str;
        }
        return str;
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$b);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-easyinput", { "uni-easyinput-error": $options.msg }]),
      style: vue.normalizeStyle($options.boxStyle)
    }, [
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-easyinput__content", $options.inputContentClass]),
        style: vue.normalizeStyle($options.inputContentStyle)
      }, [
        $props.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
          key: 0,
          class: "content-clear-icon",
          type: $props.prefixIcon,
          color: "#c0c4cc",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClickIcon("prefix")),
          size: "22"
        }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true),
        $props.type === "textarea" ? (vue.openBlock(), vue.createElementBlock("textarea", {
          key: 1,
          class: vue.normalizeClass(["uni-easyinput__content-textarea", { "input-padding": $props.inputBorder }]),
          name: $props.name,
          value: $data.val,
          placeholder: $props.placeholder,
          placeholderStyle: $props.placeholderStyle,
          disabled: $props.disabled,
          "placeholder-class": "uni-easyinput__placeholder-class",
          maxlength: $options.inputMaxlength,
          focus: $data.focused,
          autoHeight: $props.autoHeight,
          onInput: _cache[1] || (_cache[1] = (...args) => $options.onInput && $options.onInput(...args)),
          onBlur: _cache[2] || (_cache[2] = (...args) => $options._Blur && $options._Blur(...args)),
          onFocus: _cache[3] || (_cache[3] = (...args) => $options._Focus && $options._Focus(...args)),
          onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
          onKeyboardheightchange: _cache[5] || (_cache[5] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
        }, null, 42, ["name", "value", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "autoHeight"])) : (vue.openBlock(), vue.createElementBlock("input", {
          key: 2,
          type: $props.type === "password" ? "text" : $props.type,
          class: "uni-easyinput__content-input",
          style: vue.normalizeStyle($options.inputStyle),
          name: $props.name,
          value: $data.val,
          password: !$data.showPassword && $props.type === "password",
          placeholder: $props.placeholder,
          placeholderStyle: $props.placeholderStyle,
          "placeholder-class": "uni-easyinput__placeholder-class",
          disabled: $props.disabled,
          maxlength: $options.inputMaxlength,
          focus: $data.focused,
          confirmType: $props.confirmType,
          onFocus: _cache[6] || (_cache[6] = (...args) => $options._Focus && $options._Focus(...args)),
          onBlur: _cache[7] || (_cache[7] = (...args) => $options._Blur && $options._Blur(...args)),
          onInput: _cache[8] || (_cache[8] = (...args) => $options.onInput && $options.onInput(...args)),
          onConfirm: _cache[9] || (_cache[9] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
          onKeyboardheightchange: _cache[10] || (_cache[10] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
        }, null, 44, ["type", "name", "value", "password", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "confirmType"])),
        $props.type === "password" && $props.passwordIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 3 }, [
          vue.createCommentVNode(" \u5F00\u542F\u5BC6\u7801\u65F6\u663E\u793A\u5C0F\u773C\u775B "),
          $options.isVal ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
            type: $data.showPassword ? "eye-slash-filled" : "eye-filled",
            size: 22,
            color: $data.focusShow ? $props.primaryColor : "#c0c4cc",
            onClick: $options.onEyes
          }, null, 8, ["class", "type", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
        ], 64)) : $props.suffixIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 4 }, [
          $props.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: "content-clear-icon",
            type: $props.suffixIcon,
            color: "#c0c4cc",
            onClick: _cache[11] || (_cache[11] = ($event) => $options.onClickIcon("suffix")),
            size: "22"
          }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
        ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 5 }, [
          $props.clearable && $options.isVal && !$props.disabled && $props.type !== "textarea" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
            type: "clear",
            size: $props.clearSize,
            color: $options.msg ? "#dd524d" : $data.focusShow ? $props.primaryColor : "#c0c4cc",
            onClick: $options.onClear
          }, null, 8, ["class", "size", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
        ], 64)),
        vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
      ], 6)
    ], 6);
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$e], ["__scopeId", "data-v-09fd5285"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  const _sfc_main$f = {
    name: "uniFormsItem",
    options: {
      virtualHost: true
    },
    provide() {
      return {
        uniFormItem: this
      };
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      }
    },
    props: {
      rules: {
        type: Array,
        default() {
          return null;
        }
      },
      name: {
        type: [String, Array],
        default: ""
      },
      required: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ""
      },
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      labelAlign: {
        type: String,
        default: ""
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      },
      leftIcon: String,
      iconColor: {
        type: String,
        default: "#606266"
      }
    },
    data() {
      return {
        errMsg: "",
        userRules: null,
        localLabelAlign: "left",
        localLabelWidth: "65px",
        localLabelPos: "left",
        border: false,
        isFirstBorder: false
      };
    },
    computed: {
      msg() {
        return this.errorMessage || this.errMsg;
      }
    },
    watch: {
      "form.formRules"(val) {
        this.init();
      },
      "form.labelWidth"(val) {
        this.localLabelWidth = this._labelWidthUnit(val);
      },
      "form.labelPosition"(val) {
        this.localLabelPos = this._labelPosition();
      },
      "form.labelAlign"(val) {
      }
    },
    created() {
      this.init(true);
      if (this.name && this.form) {
        this.$watch(
          () => {
            const val = this.form._getDataValue(this.name, this.form.localData);
            return val;
          },
          (value, oldVal) => {
            const isEqual2 = this.form._isEqual(value, oldVal);
            if (!isEqual2) {
              const val = this.itemSetValue(value);
              this.onFieldChange(val, false);
            }
          },
          {
            immediate: false
          }
        );
      }
    },
    unmounted() {
      this.__isUnmounted = true;
      this.unInit();
    },
    methods: {
      setRules(rules = null) {
        this.userRules = rules;
        this.init(false);
      },
      setValue() {
      },
      async onFieldChange(value, formtrigger = true) {
        const {
          formData,
          localData,
          errShowType,
          validateCheck,
          validateTrigger,
          _isRequiredField,
          _realName
        } = this.form;
        const name2 = _realName(this.name);
        if (!value) {
          value = this.form.formData[name2];
        }
        const ruleLen = this.itemRules.rules && this.itemRules.rules.length;
        if (!this.validator || !ruleLen || ruleLen === 0)
          return;
        const isRequiredField2 = _isRequiredField(this.itemRules.rules || []);
        let result = null;
        if (validateTrigger === "bind" || formtrigger) {
          result = await this.validator.validateUpdate(
            {
              [name2]: value
            },
            formData
          );
          if (!isRequiredField2 && (value === void 0 || value === "")) {
            result = null;
          }
          if (result && result.errorMessage) {
            if (errShowType === "undertext") {
              this.errMsg = !result ? "" : result.errorMessage;
            }
            if (errShowType === "toast") {
              uni.showToast({
                title: result.errorMessage || "\u6821\u9A8C\u9519\u8BEF",
                icon: "none"
              });
            }
            if (errShowType === "modal") {
              uni.showModal({
                title: "\u63D0\u793A",
                content: result.errorMessage || "\u6821\u9A8C\u9519\u8BEF"
              });
            }
          } else {
            this.errMsg = "";
          }
          validateCheck(result ? result : null);
        } else {
          this.errMsg = "";
        }
        return result ? result : null;
      },
      init(type = false) {
        const {
          validator,
          formRules,
          childrens,
          formData,
          localData,
          _realName,
          labelWidth,
          _getDataValue,
          _setDataValue
        } = this.form || {};
        this.localLabelAlign = this._justifyContent();
        this.localLabelWidth = this._labelWidthUnit(labelWidth);
        this.localLabelPos = this._labelPosition();
        this.form && type && childrens.push(this);
        if (!validator || !formRules)
          return;
        if (!this.form.isFirstBorder) {
          this.form.isFirstBorder = true;
          this.isFirstBorder = true;
        }
        if (this.group) {
          if (!this.group.isFirstBorder) {
            this.group.isFirstBorder = true;
            this.isFirstBorder = true;
          }
        }
        this.border = this.form.border;
        const name2 = _realName(this.name);
        const itemRule = this.userRules || this.rules;
        if (typeof formRules === "object" && itemRule) {
          formRules[name2] = {
            rules: itemRule
          };
          validator.updateSchema(formRules);
        }
        const itemRules = formRules[name2] || {};
        this.itemRules = itemRules;
        this.validator = validator;
        this.itemSetValue(_getDataValue(this.name, localData));
      },
      unInit() {
        if (this.form) {
          const {
            childrens,
            formData,
            _realName
          } = this.form;
          childrens.forEach((item, index) => {
            if (item === this) {
              this.form.childrens.splice(index, 1);
              delete formData[_realName(item.name)];
            }
          });
        }
      },
      itemSetValue(value) {
        const name2 = this.form._realName(this.name);
        const rules = this.itemRules.rules || [];
        const val = this.form._getValue(name2, value, rules);
        this.form._setDataValue(name2, this.form.formData, val);
        return val;
      },
      clearValidate() {
        this.errMsg = "";
      },
      _isRequired() {
        return this.required;
      },
      _justifyContent() {
        if (this.form) {
          const {
            labelAlign
          } = this.form;
          let labelAli = this.labelAlign ? this.labelAlign : labelAlign;
          if (labelAli === "left")
            return "flex-start";
          if (labelAli === "center")
            return "center";
          if (labelAli === "right")
            return "flex-end";
        }
        return "flex-start";
      },
      _labelWidthUnit(labelWidth) {
        return this.num2px(this.labelWidth ? this.labelWidth : labelWidth || (this.label ? 65 : "auto"));
      },
      _labelPosition() {
        if (this.form)
          return this.form.labelPosition || "left";
        return "left";
      },
      isTrigger(rule, itemRlue, parentRule) {
        if (rule === "submit" || !rule) {
          if (rule === void 0) {
            if (itemRlue !== "bind") {
              if (!itemRlue) {
                return parentRule === "" ? "bind" : "submit";
              }
              return "submit";
            }
            return "bind";
          }
          return "submit";
        }
        return "bind";
      },
      num2px(num) {
        if (typeof num === "number") {
          return `${num}px`;
        }
        return num;
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uni-forms-item", ["is-direction-" + $data.localLabelPos, $data.border ? "uni-forms-item--border" : "", $data.border && $data.isFirstBorder ? "is-first-border" : ""]])
    }, [
      vue.renderSlot(_ctx.$slots, "label", {}, () => [
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["uni-forms-item__label", { "no-label": !$props.label && !$props.required }]),
          style: vue.normalizeStyle({ width: $data.localLabelWidth, justifyContent: $data.localLabelAlign })
        }, [
          $props.required ? (vue.openBlock(), vue.createElementBlock("text", {
            key: 0,
            class: "is-required"
          }, "*")) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("text", null, vue.toDisplayString($props.label), 1)
        ], 6)
      ], true),
      vue.createElementVNode("view", { class: "uni-forms-item__content" }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
        vue.createElementVNode("view", {
          class: vue.normalizeClass(["uni-forms-item__error", { "msg--active": $options.msg }])
        }, [
          vue.createElementVNode("text", null, vue.toDisplayString($options.msg), 1)
        ], 2)
      ])
    ], 2);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$d], ["__scopeId", "data-v-462874dd"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue"]]);
  var pattern = {
    email: /^\S+?@\S+?\.\S+?$/,
    idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    url: new RegExp(
      "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
      "i"
    )
  };
  const FORMAT_MAPPING = {
    "int": "integer",
    "bool": "boolean",
    "double": "number",
    "long": "number",
    "password": "string"
  };
  function formatMessage(args, resources = "") {
    var defaultMessage = ["label"];
    defaultMessage.forEach((item) => {
      if (args[item] === void 0) {
        args[item] = "";
      }
    });
    let str = resources;
    for (let key in args) {
      let reg = new RegExp("{" + key + "}");
      str = str.replace(reg, args[key]);
    }
    return str;
  }
  function isEmptyValue(value, type) {
    if (value === void 0 || value === null) {
      return true;
    }
    if (typeof value === "string" && !value) {
      return true;
    }
    if (Array.isArray(value) && !value.length) {
      return true;
    }
    if (type === "object" && !Object.keys(value).length) {
      return true;
    }
    return false;
  }
  const types = {
    integer(value) {
      return types.number(value) && parseInt(value, 10) === value;
    },
    string(value) {
      return typeof value === "string";
    },
    number(value) {
      if (isNaN(value)) {
        return false;
      }
      return typeof value === "number";
    },
    "boolean": function(value) {
      return typeof value === "boolean";
    },
    "float": function(value) {
      return types.number(value) && !types.integer(value);
    },
    array(value) {
      return Array.isArray(value);
    },
    object(value) {
      return typeof value === "object" && !types.array(value);
    },
    date(value) {
      return value instanceof Date;
    },
    timestamp(value) {
      if (!this.integer(value) || Math.abs(value).toString().length > 16) {
        return false;
      }
      return true;
    },
    file(value) {
      return typeof value.url === "string";
    },
    email(value) {
      return typeof value === "string" && !!value.match(pattern.email) && value.length < 255;
    },
    url(value) {
      return typeof value === "string" && !!value.match(pattern.url);
    },
    pattern(reg, value) {
      try {
        return new RegExp(reg).test(value);
      } catch (e) {
        return false;
      }
    },
    method(value) {
      return typeof value === "function";
    },
    idcard(value) {
      return typeof value === "string" && !!value.match(pattern.idcard);
    },
    "url-https"(value) {
      return this.url(value) && value.startsWith("https://");
    },
    "url-scheme"(value) {
      return value.startsWith("://");
    },
    "url-web"(value) {
      return false;
    }
  };
  class RuleValidator {
    constructor(message) {
      this._message = message;
    }
    async validateRule(fieldKey, fieldValue, value, data, allData) {
      var result = null;
      let rules = fieldValue.rules;
      let hasRequired = rules.findIndex((item) => {
        return item.required;
      });
      if (hasRequired < 0) {
        if (value === null || value === void 0) {
          return result;
        }
        if (typeof value === "string" && !value.length) {
          return result;
        }
      }
      var message = this._message;
      if (rules === void 0) {
        return message["default"];
      }
      for (var i = 0; i < rules.length; i++) {
        let rule = rules[i];
        let vt = this._getValidateType(rule);
        Object.assign(rule, {
          label: fieldValue.label || `["${fieldKey}"]`
        });
        if (RuleValidatorHelper[vt]) {
          result = RuleValidatorHelper[vt](rule, value, message);
          if (result != null) {
            break;
          }
        }
        if (rule.validateExpr) {
          let now = Date.now();
          let resultExpr = rule.validateExpr(value, allData, now);
          if (resultExpr === false) {
            result = this._getMessage(rule, rule.errorMessage || this._message["default"]);
            break;
          }
        }
        if (rule.validateFunction) {
          result = await this.validateFunction(rule, value, data, allData, vt);
          if (result !== null) {
            break;
          }
        }
      }
      if (result !== null) {
        result = message.TAG + result;
      }
      return result;
    }
    async validateFunction(rule, value, data, allData, vt) {
      let result = null;
      try {
        let callbackMessage = null;
        const res = await rule.validateFunction(rule, value, allData || data, (message) => {
          callbackMessage = message;
        });
        if (callbackMessage || typeof res === "string" && res || res === false) {
          result = this._getMessage(rule, callbackMessage || res, vt);
        }
      } catch (e) {
        result = this._getMessage(rule, e.message, vt);
      }
      return result;
    }
    _getMessage(rule, message, vt) {
      return formatMessage(rule, message || rule.errorMessage || this._message[vt] || message["default"]);
    }
    _getValidateType(rule) {
      var result = "";
      if (rule.required) {
        result = "required";
      } else if (rule.format) {
        result = "format";
      } else if (rule.arrayType) {
        result = "arrayTypeFormat";
      } else if (rule.range) {
        result = "range";
      } else if (rule.maximum !== void 0 || rule.minimum !== void 0) {
        result = "rangeNumber";
      } else if (rule.maxLength !== void 0 || rule.minLength !== void 0) {
        result = "rangeLength";
      } else if (rule.pattern) {
        result = "pattern";
      } else if (rule.validateFunction) {
        result = "validateFunction";
      }
      return result;
    }
  }
  const RuleValidatorHelper = {
    required(rule, value, message) {
      if (rule.required && isEmptyValue(value, rule.format || typeof value)) {
        return formatMessage(rule, rule.errorMessage || message.required);
      }
      return null;
    },
    range(rule, value, message) {
      const {
        range,
        errorMessage
      } = rule;
      let list = new Array(range.length);
      for (let i = 0; i < range.length; i++) {
        const item = range[i];
        if (types.object(item) && item.value !== void 0) {
          list[i] = item.value;
        } else {
          list[i] = item;
        }
      }
      let result = false;
      if (Array.isArray(value)) {
        result = new Set(value.concat(list)).size === list.length;
      } else {
        if (list.indexOf(value) > -1) {
          result = true;
        }
      }
      if (!result) {
        return formatMessage(rule, errorMessage || message["enum"]);
      }
      return null;
    },
    rangeNumber(rule, value, message) {
      if (!types.number(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let {
        minimum,
        maximum,
        exclusiveMinimum,
        exclusiveMaximum
      } = rule;
      let min = exclusiveMinimum ? value <= minimum : value < minimum;
      let max = exclusiveMaximum ? value >= maximum : value > maximum;
      if (minimum !== void 0 && min) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMinimum ? "exclusiveMinimum" : "minimum"]);
      } else if (maximum !== void 0 && max) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMaximum ? "exclusiveMaximum" : "maximum"]);
      } else if (minimum !== void 0 && maximum !== void 0 && (min || max)) {
        return formatMessage(rule, rule.errorMessage || message["number"].range);
      }
      return null;
    },
    rangeLength(rule, value, message) {
      if (!types.string(value) && !types.array(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let min = rule.minLength;
      let max = rule.maxLength;
      let val = value.length;
      if (min !== void 0 && val < min) {
        return formatMessage(rule, rule.errorMessage || message["length"].minLength);
      } else if (max !== void 0 && val > max) {
        return formatMessage(rule, rule.errorMessage || message["length"].maxLength);
      } else if (min !== void 0 && max !== void 0 && (val < min || val > max)) {
        return formatMessage(rule, rule.errorMessage || message["length"].range);
      }
      return null;
    },
    pattern(rule, value, message) {
      if (!types["pattern"](rule.pattern, value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      return null;
    },
    format(rule, value, message) {
      var customTypes = Object.keys(types);
      var format = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format || rule.arrayType;
      if (customTypes.indexOf(format) > -1) {
        if (!types[format](value)) {
          return formatMessage(rule, rule.errorMessage || message.typeError);
        }
      }
      return null;
    },
    arrayTypeFormat(rule, value, message) {
      if (!Array.isArray(value)) {
        return formatMessage(rule, rule.errorMessage || message.typeError);
      }
      for (let i = 0; i < value.length; i++) {
        const element = value[i];
        let formatResult = this.format(rule, element, message);
        if (formatResult !== null) {
          return formatResult;
        }
      }
      return null;
    }
  };
  class SchemaValidator extends RuleValidator {
    constructor(schema, options) {
      super(SchemaValidator.message);
      this._schema = schema;
      this._options = options || null;
    }
    updateSchema(schema) {
      this._schema = schema;
    }
    async validate(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidate(data, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async validateAll(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidate(data, true, allData);
      }
      return result;
    }
    async validateUpdate(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidateUpdate(data, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async invokeValidate(data, all, allData) {
      let result = [];
      let schema = this._schema;
      for (let key in schema) {
        let value = schema[key];
        let errorMessage = await this.validateRule(key, value, data[key], data, allData);
        if (errorMessage != null) {
          result.push({
            key,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    async invokeValidateUpdate(data, all, allData) {
      let result = [];
      for (let key in data) {
        let errorMessage = await this.validateRule(key, this._schema[key], data[key], data, allData);
        if (errorMessage != null) {
          result.push({
            key,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    _checkFieldInSchema(data) {
      var keys = Object.keys(data);
      var keys2 = Object.keys(this._schema);
      if (new Set(keys.concat(keys2)).size === keys2.length) {
        return "";
      }
      var noExistFields = keys.filter((key) => {
        return keys2.indexOf(key) < 0;
      });
      var errorMessage = formatMessage({
        field: JSON.stringify(noExistFields)
      }, SchemaValidator.message.TAG + SchemaValidator.message["defaultInvalid"]);
      return [{
        key: "invalid",
        errorMessage
      }];
    }
  }
  function Message() {
    return {
      TAG: "",
      default: "\u9A8C\u8BC1\u9519\u8BEF",
      defaultInvalid: "\u63D0\u4EA4\u7684\u5B57\u6BB5{field}\u5728\u6570\u636E\u5E93\u4E2D\u5E76\u4E0D\u5B58\u5728",
      validateFunction: "\u9A8C\u8BC1\u65E0\u6548",
      required: "{label}\u5FC5\u586B",
      "enum": "{label}\u8D85\u51FA\u8303\u56F4",
      timestamp: "{label}\u683C\u5F0F\u65E0\u6548",
      whitespace: "{label}\u4E0D\u80FD\u4E3A\u7A7A",
      typeError: "{label}\u7C7B\u578B\u65E0\u6548",
      date: {
        format: "{label}\u65E5\u671F{value}\u683C\u5F0F\u65E0\u6548",
        parse: "{label}\u65E5\u671F\u65E0\u6CD5\u89E3\u6790,{value}\u65E0\u6548",
        invalid: "{label}\u65E5\u671F{value}\u65E0\u6548"
      },
      length: {
        minLength: "{label}\u957F\u5EA6\u4E0D\u80FD\u5C11\u4E8E{minLength}",
        maxLength: "{label}\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7{maxLength}",
        range: "{label}\u5FC5\u987B\u4ECB\u4E8E{minLength}\u548C{maxLength}\u4E4B\u95F4"
      },
      number: {
        minimum: "{label}\u4E0D\u80FD\u5C0F\u4E8E{minimum}",
        maximum: "{label}\u4E0D\u80FD\u5927\u4E8E{maximum}",
        exclusiveMinimum: "{label}\u4E0D\u80FD\u5C0F\u4E8E\u7B49\u4E8E{minimum}",
        exclusiveMaximum: "{label}\u4E0D\u80FD\u5927\u4E8E\u7B49\u4E8E{maximum}",
        range: "{label}\u5FC5\u987B\u4ECB\u4E8E{minimum}and{maximum}\u4E4B\u95F4"
      },
      pattern: {
        mismatch: "{label}\u683C\u5F0F\u4E0D\u5339\u914D"
      }
    };
  }
  SchemaValidator.message = new Message();
  const deepCopy = (val) => {
    return JSON.parse(JSON.stringify(val));
  };
  const typeFilter = (format) => {
    return format === "int" || format === "double" || format === "number" || format === "timestamp";
  };
  const getValue = (key, value, rules) => {
    const isRuleNumType = rules.find((val) => val.format && typeFilter(val.format));
    const isRuleBoolType = rules.find((val) => val.format && val.format === "boolean" || val.format === "bool");
    if (!!isRuleNumType) {
      if (!value && value !== 0) {
        value = null;
      } else {
        value = isNumber(Number(value)) ? Number(value) : value;
      }
    }
    if (!!isRuleBoolType) {
      value = isBoolean(value) ? value : false;
    }
    return value;
  };
  const setDataValue = (field, formdata, value) => {
    formdata[field] = value;
    return value || "";
  };
  const getDataValue = (field, data) => {
    return objGet(data, field);
  };
  const realName = (name2, data = {}) => {
    const base_name = _basePath(name2);
    if (typeof base_name === "object" && Array.isArray(base_name) && base_name.length > 1) {
      const realname = base_name.reduce((a, b) => a += `#${b}`, "_formdata_");
      return realname;
    }
    return base_name[0] || name2;
  };
  const isRealName = (name2) => {
    const reg = /^_formdata_#*/;
    return reg.test(name2);
  };
  const rawData = (object = {}, name2) => {
    let newData = JSON.parse(JSON.stringify(object));
    let formData = {};
    for (let i in newData) {
      let path = name2arr(i);
      objSet(formData, path, newData[i]);
    }
    return formData;
  };
  const name2arr = (name2) => {
    let field = name2.replace("_formdata_#", "");
    field = field.split("#").map((v) => isNumber(v) ? Number(v) : v);
    return field;
  };
  const objSet = (object, path, value) => {
    if (typeof object !== "object")
      return object;
    _basePath(path).reduce((o, k, i, _) => {
      if (i === _.length - 1) {
        o[k] = value;
        return null;
      } else if (k in o) {
        return o[k];
      } else {
        o[k] = /^[0-9]{1,}$/.test(_[i + 1]) ? [] : {};
        return o[k];
      }
    }, object);
    return object;
  };
  function _basePath(path) {
    if (Array.isArray(path))
      return path;
    return path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  }
  const objGet = (object, path, defaultVal = "undefined") => {
    let newPath = _basePath(path);
    let val = newPath.reduce((o, k) => {
      return (o || {})[k];
    }, object);
    return !val || val !== void 0 ? val : defaultVal;
  };
  const isNumber = (num) => {
    return !isNaN(Number(num));
  };
  const isBoolean = (bool) => {
    return typeof bool === "boolean";
  };
  const isRequiredField = (rules) => {
    let isNoField = false;
    for (let i = 0; i < rules.length; i++) {
      const ruleData = rules[i];
      if (ruleData.required) {
        isNoField = true;
        break;
      }
    }
    return isNoField;
  };
  const isEqual = (a, b) => {
    if (a === b) {
      return a !== 0 || 1 / a === 1 / b;
    }
    if (a == null || b == null) {
      return a === b;
    }
    var classNameA = toString.call(a), classNameB = toString.call(b);
    if (classNameA !== classNameB) {
      return false;
    }
    switch (classNameA) {
      case "[object RegExp]":
      case "[object String]":
        return "" + a === "" + b;
      case "[object Number]":
        if (+a !== +a) {
          return +b !== +b;
        }
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case "[object Date]":
      case "[object Boolean]":
        return +a === +b;
    }
    if (classNameA == "[object Object]") {
      var propsA = Object.getOwnPropertyNames(a), propsB = Object.getOwnPropertyNames(b);
      if (propsA.length != propsB.length) {
        return false;
      }
      for (var i = 0; i < propsA.length; i++) {
        var propName = propsA[i];
        if (a[propName] !== b[propName]) {
          return false;
        }
      }
      return true;
    }
    if (classNameA == "[object Array]") {
      if (a.toString() == b.toString()) {
        return true;
      }
      return false;
    }
  };
  const _sfc_main$e = {
    name: "uniForms",
    emits: ["validate", "submit"],
    options: {
      virtualHost: true
    },
    props: {
      value: {
        type: Object,
        default() {
          return null;
        }
      },
      modelValue: {
        type: Object,
        default() {
          return null;
        }
      },
      model: {
        type: Object,
        default() {
          return null;
        }
      },
      rules: {
        type: Object,
        default() {
          return {};
        }
      },
      errShowType: {
        type: String,
        default: "undertext"
      },
      validateTrigger: {
        type: String,
        default: "submit"
      },
      labelPosition: {
        type: String,
        default: "left"
      },
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      labelAlign: {
        type: String,
        default: "left"
      },
      border: {
        type: Boolean,
        default: false
      }
    },
    provide() {
      return {
        uniForm: this
      };
    },
    data() {
      return {
        formData: {},
        formRules: {}
      };
    },
    computed: {
      localData() {
        const localVal = this.model || this.modelValue || this.value;
        if (localVal) {
          return deepCopy(localVal);
        }
        return {};
      }
    },
    watch: {
      rules: {
        handler: function(val, oldVal) {
          this.setRules(val);
        },
        deep: true,
        immediate: true
      }
    },
    created() {
      let getbinddata = getApp().$vm.$.appContext.config.globalProperties.binddata;
      if (!getbinddata) {
        getApp().$vm.$.appContext.config.globalProperties.binddata = function(name2, value, formName) {
          if (formName) {
            this.$refs[formName].setValue(name2, value);
          } else {
            let formVm;
            for (let i in this.$refs) {
              const vm = this.$refs[i];
              if (vm && vm.$options && vm.$options.name === "uniForms") {
                formVm = vm;
                break;
              }
            }
            if (!formVm)
              return formatAppLog("error", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:182", "\u5F53\u524D uni-froms \u7EC4\u4EF6\u7F3A\u5C11 ref \u5C5E\u6027");
            formVm.setValue(name2, value);
          }
        };
      }
      this.childrens = [];
      this.inputChildrens = [];
      this.setRules(this.rules);
    },
    methods: {
      setRules(rules) {
        this.formRules = Object.assign({}, this.formRules, rules);
        this.validator = new SchemaValidator(rules);
      },
      setValue(key, value) {
        let example = this.childrens.find((child) => child.name === key);
        if (!example)
          return null;
        this.formData[key] = getValue(key, value, this.formRules[key] && this.formRules[key].rules || []);
        return example.onFieldChange(this.formData[key]);
      },
      validate(keepitem, callback) {
        return this.checkAll(this.formData, keepitem, callback);
      },
      validateField(props = [], callback) {
        props = [].concat(props);
        let invalidFields = {};
        this.childrens.forEach((item) => {
          const name2 = realName(item.name);
          if (props.indexOf(name2) !== -1) {
            invalidFields = Object.assign({}, invalidFields, {
              [name2]: this.formData[name2]
            });
          }
        });
        return this.checkAll(invalidFields, [], callback);
      },
      clearValidate(props = []) {
        props = [].concat(props);
        this.childrens.forEach((item) => {
          if (props.length === 0) {
            item.errMsg = "";
          } else {
            const name2 = realName(item.name);
            if (props.indexOf(name2) !== -1) {
              item.errMsg = "";
            }
          }
        });
      },
      submit(keepitem, callback, type) {
        for (let i in this.dataValue) {
          const itemData = this.childrens.find((v) => v.name === i);
          if (itemData) {
            if (this.formData[i] === void 0) {
              this.formData[i] = this._getValue(i, this.dataValue[i]);
            }
          }
        }
        if (!type) {
          formatAppLog("warn", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:289", "submit \u65B9\u6CD5\u5373\u5C06\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528validate\u65B9\u6CD5\u4EE3\u66FF\uFF01");
        }
        return this.checkAll(this.formData, keepitem, callback, "submit");
      },
      async checkAll(invalidFields, keepitem, callback, type) {
        if (!this.validator)
          return;
        let childrens = [];
        for (let i in invalidFields) {
          const item = this.childrens.find((v) => realName(v.name) === i);
          if (item) {
            childrens.push(item);
          }
        }
        if (!callback && typeof keepitem === "function") {
          callback = keepitem;
        }
        let promise;
        if (!callback && typeof callback !== "function" && Promise) {
          promise = new Promise((resolve, reject) => {
            callback = function(valid, invalidFields2) {
              !valid ? resolve(invalidFields2) : reject(valid);
            };
          });
        }
        let results = [];
        let tempFormData = JSON.parse(JSON.stringify(invalidFields));
        for (let i in childrens) {
          const child = childrens[i];
          let name2 = realName(child.name);
          const result = await child.onFieldChange(tempFormData[name2]);
          if (result) {
            results.push(result);
            if (this.errShowType === "toast" || this.errShowType === "modal")
              break;
          }
        }
        if (Array.isArray(results)) {
          if (results.length === 0)
            results = null;
        }
        if (Array.isArray(keepitem)) {
          keepitem.forEach((v) => {
            let vName = realName(v);
            let value = getDataValue(v, this.localData);
            if (value !== void 0) {
              tempFormData[vName] = value;
            }
          });
        }
        if (type === "submit") {
          this.$emit("submit", {
            detail: {
              value: tempFormData,
              errors: results
            }
          });
        } else {
          this.$emit("validate", results);
        }
        let resetFormData = {};
        resetFormData = rawData(tempFormData, this.name);
        callback && typeof callback === "function" && callback(results, resetFormData);
        if (promise && callback) {
          return promise;
        } else {
          return null;
        }
      },
      validateCheck(result) {
        this.$emit("validate", result);
      },
      _getValue: getValue,
      _isRequiredField: isRequiredField,
      _setDataValue: setDataValue,
      _getDataValue: getDataValue,
      _realName: realName,
      _isRealName: isRealName,
      _isEqual: isEqual
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-forms" }, [
      vue.createElementVNode("form", null, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])
    ]);
  }
  const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$c], ["__scopeId", "data-v-9a1e3c32"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/uni_modules/uni-forms/components/uni-forms/uni-forms.vue"]]);
  const urlPrefix$4 = Config.urlPrefix;
  const _sfc_main$d = {
    data() {
      return {
        formData: {
          username: "",
          password: ""
        },
        rules: {
          username: {
            rules: [{
              required: true,
              errorMessage: "Please input your username"
            }]
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
          }
        }
      };
    },
    methods: {
      submit() {
        this.$refs.form.validate().then((res) => {
          formatAppLog("log", "at pages/login/index.vue:59", "formData", this.formData);
          uni.request({
            url: urlPrefix$4 + "/login",
            header: {
              "content-type": "application/json;charset:utf-8"
            },
            method: "POST",
            data: this.formData,
            success(res2) {
              if (res2.data.code === 0) {
                uni.showModal({
                  title: "Login Successfully!",
                  confirmText: "Confirm",
                  showCancel: false,
                  success: function(modalRes) {
                    uni.setStorageSync("token", res2.data.result.token);
                    if (modalRes.confirm) {
                      uni.reLaunch({
                        url: "/pages/mine/mine"
                      });
                    }
                  }
                });
              } else {
                uni.showModal({
                  title: res2.data.message,
                  confirmText: "Confirm",
                  showCancel: false
                });
              }
            }
          });
        }).catch((err) => {
          formatAppLog("log", "at pages/login/index.vue:98", "Invalid form data\uFF1A", err);
        });
      },
      toRigisterPage() {
        uni.navigateTo({
          url: "/pages/register/register"
        });
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$2);
    const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_1$1);
    const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_uni_forms, {
        ref: "form",
        modelValue: $data.formData,
        rules: $data.rules,
        labelPosition: "top",
        style: { "margin": "20rpx" }
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_forms_item, {
            label: "Username",
            name: "username"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "text",
                modelValue: $data.formData.username,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.formData.username = $event),
                onInput: _cache[1] || (_cache[1] = ($event) => _ctx.binddata("username", $data.formData.username))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          vue.createVNode(_component_uni_forms_item, {
            label: "Password",
            name: "password",
            style: { "position": "relative", "bottom": "10px" }
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                class: "input",
                modelValue: $data.formData.password,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.formData.password = $event),
                type: "password",
                onInput: _cache[3] || (_cache[3] = ($event) => _ctx.binddata("password", $data.formData.password))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue", "rules"]),
      vue.createElementVNode("button", {
        onClick: _cache[4] || (_cache[4] = (...args) => $options.submit && $options.submit(...args)),
        style: { "margin-left": "20rpx", "margin-right": "20rpx", "background-color": "#f25e5e", "color": "white", "font-weight": "bold", "height": "45px", "position": "relative", "bottom": "20rpx" }
      }, "Submit"),
      vue.createElementVNode("view", {
        style: { "text-align": "center", "text-decoration": "underline", "color": "#f25e5e", "font-size": "25rpx", "margin-top": "8rpx" },
        onClick: _cache[5] || (_cache[5] = (...args) => $options.toRigisterPage && $options.toRigisterPage(...args))
      }, "No account? Rigister now ->")
    ]);
  }
  const PagesLoginIndex = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$b], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/pages/login/index.vue"]]);
  const urlPrefix$3 = Config.urlPrefix;
  const _sfc_main$c = {
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
        uni.request({
          url: urlPrefix$3 + "/user",
          method: "GET",
          header: {
            "Authorization": uni.getStorageSync("token")
          }
        }).then((res) => {
          if (res.data.code === 0) {
            formatAppLog("log", "at pages/mine/personal-info/index.vue:57", "username: ", res.data.result.username);
            formatAppLog("log", "at pages/mine/personal-info/index.vue:58", "email: ", res.data.result.email);
            this.userInfo.username = res.data.result.username;
            this.userInfo.email = res.data.result.email;
          } else {
            uni.showToast({
              title: "Get info failed",
              duration: 2e3
            });
          }
        });
      }
    },
    mounted() {
      formatAppLog("log", "at pages/mine/personal-info/index.vue:71", "token", uni.getStorageSync("token"));
      if (uni.getStorageSync("token") !== null) {
        formatAppLog("log", "at pages/mine/personal-info/index.vue:73", "asdfsdfsad");
        this.getUserInfo();
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_avatar_image = vue.resolveComponent("avatar-image");
    const _component_uni_col = resolveEasycom(vue.resolveDynamicComponent("uni-col"), __easycom_0$4);
    const _component_uni_row = resolveEasycom(vue.resolveDynamicComponent("uni-row"), __easycom_1$4);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("view", { class: "main" }, [
        vue.createElementVNode("view", { class: "user-info" }, [
          vue.createCommentVNode(" \u5934\u50CF "),
          vue.createElementVNode("view", { class: "user-avatar" }, [
            vue.createVNode(_component_avatar_image, {
              url: $data.userInfo.avatar_url,
              width: 250
            }, null, 8, ["url"])
          ]),
          vue.createElementVNode("button", {
            size: "mini",
            class: "avatar-btn"
          }, "update your avatar")
        ])
      ]),
      vue.createElementVNode("view", { class: "user-content" }, [
        vue.createVNode(_component_uni_row, { class: "row" }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_col, {
              span: 10,
              class: "title"
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("Username")
              ]),
              _: 1
            }),
            vue.createVNode(_component_uni_col, { span: 14 }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString($data.userInfo.username), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        vue.createVNode(_component_uni_row, { class: "row" }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_col, {
              span: 10,
              class: "title"
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("Email")
              ]),
              _: 1
            }),
            vue.createVNode(_component_uni_col, { span: 14 }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString($data.userInfo.email), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        vue.createVNode(_component_uni_row, { class: "row" }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_col, {
              span: 10,
              class: "title"
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("Gender")
              ]),
              _: 1
            }),
            vue.createVNode(_component_uni_col, { span: 14 }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("Male")
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      vue.createElementVNode("button", {
        type: "warn",
        class: "submit-btn"
      }, "Submit")
    ], 64);
  }
  const PagesMinePersonalInfoIndex = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$a], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/pages/mine/personal-info/index.vue"]]);
  const _sfc_main$b = {
    props: {
      ishide: {
        type: Boolean,
        required: true
      },
      zindex: {
        type: Number,
        default: 99
      },
      opacity: {
        type: Number,
        default: 0.6
      },
      width: {
        type: String,
        default: "2000rpx"
      },
      height: {
        type: String,
        default: "2000rpx"
      },
      radius: {
        type: String
      },
      bgcolor: {
        type: String,
        default: "#FFFFFF"
      }
    },
    computed: {
      maskStyle() {
        return `
					z-index:${this.zindex};
					background:rgba(0,0,0,${this.opacity});
				`;
      },
      tipStyle() {
        return `
					width:${this.width};
					height:${this.height};
					z-index:${this.zindex + 1};
					border-radius:${this.radius};
					background-color:${this.bgcolor};
				`;
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
      onTouchmove: _cache[0] || (_cache[0] = vue.withModifiers(() => {
      }, ["stop", "prevent"]))
    }, [
      vue.createCommentVNode(" mask "),
      vue.createElementVNode("view", {
        class: "mask",
        style: vue.normalizeStyle($options.maskStyle)
      }, null, 4),
      vue.createCommentVNode(" content "),
      vue.createElementVNode("view", {
        class: "tip",
        style: vue.normalizeStyle($options.tipStyle)
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 4)
    ], 544)), [
      [vue.vShow, $props.ishide]
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$9], ["__scopeId", "data-v-53dfd3f4"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/uni_modules/zwy-popup/components/zwy-popup/zwy-popup.vue"]]);
  const _sfc_main$a = {
    data() {
      return {
        isshow: false
      };
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_zwy_popup = resolveEasycom(vue.resolveDynamicComponent("zwy-popup"), __easycom_0$1);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("view", { class: "main" }, [
        vue.createElementVNode("view", { class: "balance-btn" }, [
          vue.createElementVNode("button", null, "Balance")
        ]),
        vue.createElementVNode("view", { class: "discount-btn" }, [
          vue.createElementVNode("button", null, "Discount Coupon")
        ])
      ]),
      vue.createElementVNode("button", {
        type: "warn",
        class: "topup-btn",
        onClick: _cache[0] || (_cache[0] = ($event) => $data.isshow = !$data.isshow)
      }, "Top Up"),
      vue.createCommentVNode(" Use the component "),
      vue.createVNode(_component_zwy_popup, {
        ishide: $data.isshow,
        width: "600rpx",
        height: "760rpx",
        radius: "16rpx"
      }, {
        default: vue.withCtx(() => [
          vue.createCommentVNode(" basic layout "),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "title" }, "Top Up Your Account"),
            vue.createElementVNode("view", { class: "text" }, "Please select the amount you want to recharge:"),
            vue.createElementVNode("view", { class: "amount-box-2" }, [
              vue.createElementVNode("button", { class: "amount-btn" }, "\xA5 10"),
              vue.createElementVNode("button", { class: "amount-btn" }, "\xA5 15"),
              vue.createElementVNode("button", { class: "amount-btn" }, "\xA5 20")
            ]),
            vue.createElementVNode("view", { class: "amount-box-1" }, [
              vue.createElementVNode("button", { class: "amount-btn" }, "\xA5 30"),
              vue.createElementVNode("button", { class: "amount-btn" }, "\xA5 50"),
              vue.createElementVNode("button", { class: "amount-btn" }, "\xA5 90")
            ]),
            vue.createElementVNode("view", { class: "input" }, [
              vue.createElementVNode("input", {
                class: "cus-input",
                type: "digit",
                placeholder: "Custom Input (Unit: \xA5)"
              })
            ]),
            vue.createElementVNode("view", { class: "info" }, "Hint: You can become a member of BodyBuddy by topping up \xA5100 once a time!"),
            vue.createElementVNode("button", {
              class: "btn",
              onClick: _cache[1] || (_cache[1] = ($event) => $data.isshow = false)
            }, "Confirm")
          ]),
          vue.createCommentVNode(" close button "),
          vue.createElementVNode("view", {
            class: "close",
            onClick: _cache[2] || (_cache[2] = ($event) => $data.isshow = false)
          }, "\u2715")
        ]),
        _: 1
      }, 8, ["ishide"])
    ], 64);
  }
  const PagesMineWalletIndex = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$8], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/pages/mine/wallet/index.vue"]]);
  const _sfc_main$9 = {
    __name: "index",
    setup(__props) {
      vue.onMounted(() => {
        request_orders();
      });
      const urlPrefix2 = Config.urlPrefix;
      const barNameList2 = [
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
      const reqContentList = vue.reactive([]);
      const request_orders = function() {
        uni.request({
          url: urlPrefix2 + "/order/token/",
          methods: "GET",
          header: {
            "Authorization": uni.getStorageSync("token")
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
          formatAppLog("log", "at pages/order/index.vue:65", reqContentList);
        });
      };
      const width2 = "33.3%";
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", null, [
          vue.createVNode(TopNavBar, {
            width: width2,
            barNameList: barNameList2,
            barContentList: reqContentList
          }, null, 8, ["barContentList"])
        ]);
      };
    }
  };
  const PagesOrderIndex = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/pages/order/index.vue"]]);
  const itemList = [
    { id: "security", name: "Account Security", url: "../security/index" },
    { id: "language", name: "Language", url: "" },
    { id: "textsize", name: "Text Size", url: "" },
    { id: "helpfeedback", name: "Help & Feedback", url: "../help/index" },
    { id: "aboutBodyBuddy", name: "About BodyBuddy", url: "../about/index" }
  ];
  const _sfc_main$8 = {
    data() {
      return {
        itemList
      };
    },
    methods: {
      toTargetItem(item) {
        uni.navigateTo({
          url: item.url
        });
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_list_item = resolveEasycom(vue.resolveDynamicComponent("uni-list-item"), __easycom_0$3);
    const _component_uni_list = resolveEasycom(vue.resolveDynamicComponent("uni-list"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "main" }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($data.itemList, (item, index) => {
        return vue.openBlock(), vue.createBlock(_component_uni_list, {
          key: index,
          onClick: ($event) => $options.toTargetItem(item)
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_list_item, {
              class: "choice",
              title: item.name
            }, null, 8, ["title"])
          ]),
          _: 2
        }, 1032, ["onClick"]);
      }), 128))
    ]);
  }
  const PagesMineSettingsIndex = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/pages/mine/settings/index.vue"]]);
  const _sfc_main$7 = {
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
        formatAppLog("log", "at pages/facilities/find/index.vue:39", "Choose one:", this.datetimesingle);
      },
      range(newval) {
        formatAppLog("log", "at pages/facilities/find/index.vue:42", "Choose period:", this.range);
      },
      datetimerange(newval) {
        formatAppLog("log", "at pages/facilities/find/index.vue:45", "Choose period:", this.datetimerange);
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
      openTime() {
        this.$refs.timeslot.open();
      },
      confirmTime(e) {
        formatAppLog("log", "at pages/facilities/find/index.vue:62", e);
        this.time = e.start.hour + ":" + e.start.min + "~" + e.end.hour + ":" + e.end.min;
      },
      change(e) {
        this.single = e;
        formatAppLog("log", "at pages/facilities/find/index.vue:67", "Event change:", this.single = e);
      },
      changeLog(e) {
        formatAppLog("log", "at pages/facilities/find/index.vue:70", "Event change:", e);
      },
      maskClick(e) {
        formatAppLog("log", "at pages/facilities/find/index.vue:73", "Event maskClick:", e);
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_datetime_picker = resolveEasycom(vue.resolveDynamicComponent("uni-datetime-picker"), __easycom_0$6);
    const _component_timeSlot = vue.resolveComponent("timeSlot");
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("view", { class: "page container" }, [
        vue.createElementVNode("view", { class: "example-body" }, [
          vue.createVNode(_component_uni_datetime_picker, {
            type: "date",
            "clear-icon": false,
            modelValue: $data.single,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.single = $event),
            onMaskClick: $options.maskClick
          }, null, 8, ["modelValue", "onMaskClick"])
        ]),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("button", {
            class: "time-btn",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.openTime && $options.openTime(...args))
          }, "choose specific time")
        ]),
        vue.createElementVNode("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "text" }, "The choosen time period is: " + vue.toDisplayString($data.single + $data.time || "None"), 1)
        ])
      ]),
      vue.createVNode(_component_timeSlot, {
        ref: "timeslot",
        title: "Choose the time",
        onConfirm: $options.confirmTime
      }, null, 8, ["onConfirm"])
    ], 64);
  }
  const PagesFacilitiesFindIndex = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/pages/facilities/find/index.vue"]]);
  const urlPrefix$2 = Config.urlPrefix;
  const _sfc_main$6 = {
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
            ]
          }
        }
      };
    },
    methods: {
      submitData() {
        formatAppLog("log", "at pages/register/register.vue:120", "sadf");
        this.$refs.form.validate().then((res) => {
          formatAppLog("log", "at pages/register/register.vue:124", "valid form data: ", res);
          uni.request({
            url: urlPrefix$2 + "/Consumer",
            method: "POST",
            data: this.formData
          }).then((res2) => {
            formatAppLog("log", "at pages/register/register.vue:131", "res.data.code: ", res2);
            if (res2.data.code === 0) {
              uni.showModal({
                title: "Registered successfully!",
                confirmText: "Confirm",
                cancelText: "Cancel",
                success: function(res3) {
                  if (res3.confirm) {
                    uni.navigateTo({
                      url: "/pages/login/index"
                    });
                  }
                }
              });
            } else {
              uni.showModal({
                title: "Failed",
                confirmText: "Confirm",
                cancelText: "Cancel"
              });
            }
          }).catch((error) => {
            formatAppLog("log", "at pages/register/register.vue:154", "error: ", error);
          });
        }).catch((err) => {
          formatAppLog("log", "at pages/register/register.vue:158", "Invalid form data:", err);
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
        uni.request({
          url: urlPrefix$2 + "/Consumer/" + this.formData.email,
          method: "POST"
        }).then((res) => {
          formatAppLog("log", "at pages/register/register.vue:178", res);
        }).catch((e) => {
          formatAppLog("log", "at pages/register/register.vue:181", e);
        });
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_0$2);
    const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_1$1);
    const _component_uni_col = resolveEasycom(vue.resolveDynamicComponent("uni-col"), __easycom_0$4);
    const _component_uni_row = resolveEasycom(vue.resolveDynamicComponent("uni-row"), __easycom_1$4);
    const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_4);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_uni_forms, {
        ref: "form",
        modelValue: $data.formData,
        rules: $data.rules,
        labelPosition: "top",
        style: { "margin": "20rpx" }
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_forms_item, {
            label: "Username",
            name: "username"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                modelValue: $data.formData.username,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.formData.username = $event),
                onInput: _cache[1] || (_cache[1] = ($event) => _ctx.binddata("username", $data.formData.username))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          vue.createVNode(_component_uni_forms_item, {
            label: "Email",
            name: "email",
            style: { "position": "relative", "bottom": "10px" }
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_row, { class: "demo-uni-row" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_col, { span: 18 }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_uni_easyinput, {
                        modelValue: $data.formData.email,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.formData.email = $event),
                        onInput: _cache[3] || (_cache[3] = ($event) => _ctx.binddata("email", $data.formData.email))
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  vue.createVNode(_component_uni_col, {
                    span: 5,
                    offset: 1
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("button", {
                        style: { "height": "37px", "background-color": "#f25e5e", "color": "#ffffff", "font-size": "30rpx" },
                        onClick: _cache[4] || (_cache[4] = (...args) => $options.getCaptcha && $options.getCaptcha(...args)),
                        disabled: $data.captchaDisabled
                      }, vue.toDisplayString($data.getCaptchaText), 9, ["disabled"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          vue.createVNode(_component_uni_forms_item, {
            label: "Captcha",
            name: "confirmCode",
            style: { "position": "relative", "bottom": "20px" }
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                modelValue: $data.formData.confirmCode,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.formData.confirmCode = $event),
                onInput: _cache[6] || (_cache[6] = ($event) => _ctx.binddata("confirmCode", $data.formData.confirmCode))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          vue.createVNode(_component_uni_forms_item, {
            label: "Password",
            name: "password",
            style: { "position": "relative", "bottom": "30px" }
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "password",
                modelValue: $data.formData.password,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.formData.password = $event),
                onInput: _cache[8] || (_cache[8] = ($event) => _ctx.binddata("password", $data.formData.password))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          vue.createVNode(_component_uni_forms_item, {
            label: "ConfirmedPassword",
            name: "confirmedPassword",
            style: { "position": "relative", "bottom": "40px" }
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "password",
                modelValue: $data.formData.confirmedPassword,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => $data.formData.confirmedPassword = $event),
                onInput: _cache[10] || (_cache[10] = ($event) => _ctx.binddata("confirmedPassword", $data.formData.confirmedPassword))
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue", "rules"]),
      vue.createElementVNode("button", {
        onClick: _cache[11] || (_cache[11] = (...args) => $options.submitData && $options.submitData(...args)),
        style: { "margin-left": "20rpx", "margin-right": "20rpx", "background-color": "#f25e5e", "color": "white", "font-weight": "bold", "height": "45px", "position": "relative", "bottom": "50rpx" }
      }, " Submit ")
    ]);
  }
  const PagesRegisterRegister = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/pages/register/register.vue"]]);
  const _sfc_main$5 = {};
  function _sfc_render$4(_ctx, _cache) {
    const _component_uni_col = resolveEasycom(vue.resolveDynamicComponent("uni-col"), __easycom_0$4);
    const _component_uni_row = resolveEasycom(vue.resolveDynamicComponent("uni-row"), __easycom_1$4);
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createElementVNode("view", { class: "main" }, [
        vue.createElementVNode("view", { class: "info" }, [
          vue.createCommentVNode(" logo "),
          vue.createElementVNode("view", { class: "logo" }, [
            vue.createElementVNode("image", {
              src: "/static/logo.jpg",
              mode: "aspectFill"
            })
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "name" }, "BodyBuddy"),
      vue.createElementVNode("view", { class: "slogan" }, "EXERCISE MAKE YOU BETTER"),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createVNode(_component_uni_row, { class: "row" }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_col, { class: "title" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("What's BodyBuddy?")
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        vue.createVNode(_component_uni_row, { class: "row" }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_col, { class: "detail" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("BodyBuddy is designed to help users conveniently book time and facilities to use gymnasiums. Users can choose different facilities and time slots to make reservations, and the system will automatically check the availability and display the order on the user's personal interface.")
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        vue.createVNode(_component_uni_row, { class: "row" }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_col, { class: "title" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("Version Update")
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        vue.createVNode(_component_uni_row, { class: "row" }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_uni_col, { class: "detail" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("v0.1.0 - update in 02/21/2023")
              ]),
              _: 1
            }),
            vue.createVNode(_component_uni_col, { class: "detail" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("v1.0.0 - update in 03/12/2023")
              ]),
              _: 1
            }),
            vue.createVNode(_component_uni_col, { class: "detail" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("v1.1.0 - update in 03/25/2023")
              ]),
              _: 1
            }),
            vue.createVNode(_component_uni_col, { class: "detail" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("v2.0.0 - update in 03/28/2023")
              ]),
              _: 1
            }),
            vue.createVNode(_component_uni_col, { class: "detail" }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("v2.1.0 - update in 04/03/2023")
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      vue.createElementVNode("view", { class: "bottom" }, " Copyright \xA9\uFE0F 2022-2023 BodyBuddy. All Rights Reserved. ")
    ], 64);
  }
  const PagesMineAboutIndex = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/pages/mine/about/index.vue"]]);
  const _sfc_main$4 = {
    name: "uniCollapseItem",
    props: {
      title: {
        type: String,
        default: ""
      },
      name: {
        type: [Number, String],
        default: ""
      },
      disabled: {
        type: Boolean,
        default: false
      },
      showAnimation: {
        type: Boolean,
        default: false
      },
      open: {
        type: Boolean,
        default: false
      },
      thumb: {
        type: String,
        default: ""
      },
      titleBorder: {
        type: String,
        default: "auto"
      },
      border: {
        type: Boolean,
        default: true
      },
      showArrow: {
        type: Boolean,
        default: true
      }
    },
    data() {
      const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      return {
        isOpen: false,
        isheight: null,
        height: 0,
        elId,
        nameSync: 0
      };
    },
    watch: {
      open(val) {
        this.isOpen = val;
        this.onClick(val, "init");
      }
    },
    updated(e) {
      this.$nextTick(() => {
        this.init(true);
      });
    },
    created() {
      this.collapse = this.getCollapse();
      this.oldHeight = 0;
      this.onClick(this.open, "init");
    },
    unmounted() {
      this.__isUnmounted = true;
      this.uninstall();
    },
    mounted() {
      if (!this.collapse)
        return;
      if (this.name !== "") {
        this.nameSync = this.name;
      } else {
        this.nameSync = this.collapse.childrens.length + "";
      }
      if (this.collapse.names.indexOf(this.nameSync) === -1) {
        this.collapse.names.push(this.nameSync);
      } else {
        formatAppLog("warn", "at uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.vue:154", `name \u503C ${this.nameSync} \u91CD\u590D`);
      }
      if (this.collapse.childrens.indexOf(this) === -1) {
        this.collapse.childrens.push(this);
      }
      this.init();
    },
    methods: {
      init(type) {
        this.getCollapseHeight(type);
      },
      uninstall() {
        if (this.collapse) {
          this.collapse.childrens.forEach((item, index) => {
            if (item === this) {
              this.collapse.childrens.splice(index, 1);
            }
          });
          this.collapse.names.forEach((item, index) => {
            if (item === this.nameSync) {
              this.collapse.names.splice(index, 1);
            }
          });
        }
      },
      onClick(isOpen, type) {
        if (this.disabled)
          return;
        this.isOpen = isOpen;
        if (this.isOpen && this.collapse) {
          this.collapse.setAccordion(this);
        }
        if (type !== "init") {
          this.collapse.onChange(isOpen, this);
        }
      },
      getCollapseHeight(type, index = 0) {
        const views = uni.createSelectorQuery().in(this);
        views.select(`#${this.elId}`).fields({
          size: true
        }, (data) => {
          if (index >= 10)
            return;
          if (!data) {
            index++;
            this.getCollapseHeight(false, index);
            return;
          }
          this.height = data.height;
          this.isheight = true;
          if (type)
            return;
          this.onClick(this.isOpen, "init");
        }).exec();
      },
      getNvueHwight(type) {
        dom.getComponentRect(this.$refs["collapse--hook"], (option) => {
          if (option && option.result && option.size) {
            this.height = option.size.height;
            this.isheight = true;
            if (type)
              return;
            this.onClick(this.open, "init");
          }
        });
      },
      getCollapse(name2 = "uniCollapse") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name2) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$b);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-collapse-item" }, [
      vue.createCommentVNode(" onClick(!isOpen) "),
      vue.createElementVNode("view", {
        onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick(!$data.isOpen)),
        class: vue.normalizeClass(["uni-collapse-item__title", { "is-open": $data.isOpen && $props.titleBorder === "auto", "uni-collapse-item-border": $props.titleBorder !== "none" }])
      }, [
        vue.createElementVNode("view", { class: "uni-collapse-item__title-wrap" }, [
          vue.renderSlot(_ctx.$slots, "title", {}, () => [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["uni-collapse-item__title-box", { "is-disabled": $props.disabled }])
            }, [
              $props.thumb ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 0,
                src: $props.thumb,
                class: "uni-collapse-item__title-img"
              }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("text", { class: "uni-collapse-item__title-text" }, vue.toDisplayString($props.title), 1)
            ], 2)
          ], true)
        ]),
        $props.showArrow ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: vue.normalizeClass([{ "uni-collapse-item__title-arrow-active": $data.isOpen, "uni-collapse-item--animation": $props.showAnimation === true }, "uni-collapse-item__title-arrow"])
        }, [
          vue.createVNode(_component_uni_icons, {
            color: $props.disabled ? "#ddd" : "#bbb",
            size: "14",
            type: "bottom"
          }, null, 8, ["color"])
        ], 2)) : vue.createCommentVNode("v-if", true)
      ], 2),
      vue.createElementVNode("view", {
        class: vue.normalizeClass(["uni-collapse-item__wrap", { "is--transition": $props.showAnimation }]),
        style: vue.normalizeStyle({ height: ($data.isOpen ? $data.height : 0) + "px" })
      }, [
        vue.createElementVNode("view", {
          id: $data.elId,
          ref: "collapse--hook",
          class: vue.normalizeClass(["uni-collapse-item__wrap-content", { open: $data.isheight, "uni-collapse-item--border": $props.border && $data.isOpen }])
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ], 10, ["id"])
      ], 6)
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-3d2dde9f"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.vue"]]);
  const _sfc_main$3 = {
    name: "uniCollapse",
    emits: ["change", "activeItem", "input", "update:modelValue"],
    props: {
      value: {
        type: [String, Array],
        default: ""
      },
      modelValue: {
        type: [String, Array],
        default: ""
      },
      accordion: {
        type: [Boolean, String],
        default: false
      }
    },
    data() {
      return {};
    },
    computed: {
      dataValue() {
        let value = typeof this.value === "string" && this.value === "" || Array.isArray(this.value) && this.value.length === 0;
        let modelValue = typeof this.modelValue === "string" && this.modelValue === "" || Array.isArray(this.modelValue) && this.modelValue.length === 0;
        if (value) {
          return this.modelValue;
        }
        if (modelValue) {
          return this.value;
        }
        return this.value;
      }
    },
    watch: {
      dataValue(val) {
        this.setOpen(val);
      }
    },
    created() {
      this.childrens = [];
      this.names = [];
    },
    mounted() {
      this.$nextTick(() => {
        this.setOpen(this.dataValue);
      });
    },
    methods: {
      setOpen(val) {
        let str = typeof val === "string";
        let arr = Array.isArray(val);
        this.childrens.forEach((vm, index) => {
          if (str) {
            if (val === vm.nameSync) {
              if (!this.accordion) {
                formatAppLog("warn", "at uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue:75", "accordion \u5C5E\u6027\u4E3A false ,v-model \u7C7B\u578B\u5E94\u8BE5\u4E3A array");
                return;
              }
              vm.isOpen = true;
            }
          }
          if (arr) {
            val.forEach((v) => {
              if (v === vm.nameSync) {
                if (this.accordion) {
                  formatAppLog("warn", "at uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue:85", "accordion \u5C5E\u6027\u4E3A true ,v-model \u7C7B\u578B\u5E94\u8BE5\u4E3A string");
                  return;
                }
                vm.isOpen = true;
              }
            });
          }
        });
        this.emit(val);
      },
      setAccordion(self) {
        if (!this.accordion)
          return;
        this.childrens.forEach((vm, index) => {
          if (self !== vm) {
            vm.isOpen = false;
          }
        });
      },
      resize() {
        this.childrens.forEach((vm, index) => {
          vm.getCollapseHeight();
        });
      },
      onChange(isOpen, self) {
        let activeItem = [];
        if (this.accordion) {
          activeItem = isOpen ? self.nameSync : "";
        } else {
          this.childrens.forEach((vm, index) => {
            if (vm.isOpen) {
              activeItem.push(vm.nameSync);
            }
          });
        }
        this.$emit("change", activeItem);
        this.emit(activeItem);
      },
      emit(val) {
        this.$emit("input", val);
        this.$emit("update:modelValue", val);
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-collapse" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-3f050360"], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue"]]);
  const urlPrefix$1 = Config.urlPrefix;
  const _sfc_main$2 = {
    components: {},
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
        uni.request({
          url: urlPrefix$1 + "/user",
          method: "GET",
          header: {
            "Authorization": uni.getStorageSync("token")
          }
        }).then((res) => {
          if (res.data.code === 0) {
            formatAppLog("log", "at pages/mine/security/index.vue:58", "username: ", res.data.result.username);
            formatAppLog("log", "at pages/mine/security/index.vue:59", "email: ", res.data.result.email);
            this.userInfo.username = res.data.result.username;
            this.userInfo.email = res.data.result.email;
          } else {
            uni.showToast({
              title: "Get info failed",
              duration: 2e3
            });
          }
        });
      }
    },
    mounted() {
      formatAppLog("log", "at pages/mine/security/index.vue:72", "token", uni.getStorageSync("token"));
      if (uni.getStorageSync("token") !== null) {
        formatAppLog("log", "at pages/mine/security/index.vue:74", "asdfsdfsad");
        this.getUserInfo();
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_collapse_item = resolveEasycom(vue.resolveDynamicComponent("uni-collapse-item"), __easycom_0);
    const _component_uni_collapse = resolveEasycom(vue.resolveDynamicComponent("uni-collapse"), __easycom_1);
    return vue.openBlock(), vue.createBlock(_component_uni_collapse, {
      accordion: "",
      modelValue: _ctx.accordionVal,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.accordionVal = $event),
      onChange: _ctx.change
    }, {
      default: vue.withCtx(() => [
        vue.createVNode(_component_uni_collapse_item, { title: "BodyBuddy ID" }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("text", { class: "text" }, vue.toDisplayString($data.userInfo.username), 1)
            ])
          ]),
          _: 1
        }),
        vue.createVNode(_component_uni_collapse_item, { title: "Email" }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("text", { class: "text" }, vue.toDisplayString($data.userInfo.email), 1)
            ])
          ]),
          _: 1
        }),
        vue.createVNode(_component_uni_collapse_item, { title: "Emergency Contacts" }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("text", { class: "text" }, "Not set")
            ])
          ]),
          _: 1
        }),
        vue.createVNode(_component_uni_collapse_item, { title: "Devices" }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("text", { class: "text" }, "-current device")
            ])
          ]),
          _: 1
        }),
        vue.createVNode(_component_uni_collapse_item, { title: "More Setting" }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("text", { class: "text" }, "No more currently")
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue", "onChange"]);
  }
  const PagesMineSecurityIndex = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/pages/mine/security/index.vue"]]);
  const _sfc_main$1 = {};
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_collapse_item = resolveEasycom(vue.resolveDynamicComponent("uni-collapse-item"), __easycom_0);
    const _component_uni_collapse = resolveEasycom(vue.resolveDynamicComponent("uni-collapse"), __easycom_1);
    return vue.openBlock(), vue.createBlock(_component_uni_collapse, {
      accordion: "",
      modelValue: _ctx.accordionVal,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.accordionVal = $event),
      onChange: _ctx.change
    }, {
      default: vue.withCtx(() => [
        vue.createVNode(_component_uni_collapse_item, { title: "Why don't I have the Pay feature?" }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("text", { class: "text" }, "Currently, our BodyBuddy only simulates the payment process, and does not actually realize the payment operation. Because payment involves connecting with other third-party service software. The BodyBuddy will do this later.")
            ])
          ]),
          _: 1
        }),
        vue.createVNode(_component_uni_collapse_item, { title: "Is it necessary to use an email address for registration?" }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("text", { class: "text" }, "Currently, account registration can only allow users to use email addresses to register, because BodyBuddy can send verification codes by sending emails to provide a safer way to protect user privacy. Later BodyBuddy may expand to use a phone number for registration, which requires to establish a connection with a third-party service for SMS delivery.")
            ])
          ]),
          _: 1
        }),
        vue.createVNode(_component_uni_collapse_item, { title: "Why are there so few facilities?" }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("text", { class: "text" }, "BodyBuddy has only established contact with a small number of facilities for the convenience of management. When our operation level continues to improve, we will consider expanding more.")
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue", "onChange"]);
  }
  const PagesMineHelpIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/pages/mine/help/index.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/facilities/index", PagesFacilitiesIndex);
  __definePage("pages/choosefacility/index", PagesChoosefacilityIndex);
  __definePage("pages/facilities/details/index", PagesFacilitiesDetailsIndex);
  __definePage("pages/facilities/choosetime/index", PagesFacilitiesChoosetimeIndex);
  __definePage("pages/facilities/timetable/index", PagesFacilitiesTimetableIndex);
  __definePage("pages/others/others", PagesOthersOthers);
  __definePage("pages/mine/mine", PagesMineMine);
  __definePage("pages/login/index", PagesLoginIndex);
  __definePage("pages/mine/personal-info/index", PagesMinePersonalInfoIndex);
  __definePage("pages/mine/wallet/index", PagesMineWalletIndex);
  __definePage("pages/order/index", PagesOrderIndex);
  __definePage("pages/mine/settings/index", PagesMineSettingsIndex);
  __definePage("pages/facilities/find/index", PagesFacilitiesFindIndex);
  __definePage("pages/register/register", PagesRegisterRegister);
  __definePage("components/facility/index", ComponentsFacilityIndex);
  __definePage("pages/mine/about/index", PagesMineAboutIndex);
  __definePage("pages/mine/security/index", PagesMineSecurityIndex);
  __definePage("pages/mine/help/index", PagesMineHelpIndex);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/pangyu/Documents/CS_Year3/\u8F6F\u4EF6\u5DE5\u7A0B/Sports Center/mobile_frontend/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
