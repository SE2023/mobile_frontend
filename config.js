export default {

  // 系统名称
  name: "Sports Center",

  // 必填: 后端api地址, 斜杠/结尾, 参照下面格式
  // 例如: https://www.你的域名.com/index.php?s=/api/
  apiUrl: "http://127.0.0.1:8880",

  /**
   * 是否启用商城设置缓存
   * 将减少用户端重复请求; 正式运营时请设为true, 开启后商城设置同步前端需10分钟缓存
   */
  enabledSettingCache: true,

}
