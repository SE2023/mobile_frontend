
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#F25E5E","enablePullDownRefresh":true,"backgroundTextStyle":"light","navigationBar":{"backgroundColor":"#F25E5E","titleText":"SportsCenter","type":"default","titleColor":"#ffffff"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"client","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"3.6.18","entryPagePath":"pages/index/index","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#7A7E83","selectedColor":"#007AFF","borderStyle":"black","blurEffect":"none","fontSize":"10px","iconWidth":"24px","spacing":"3px","height":"50px","backgroundColor":"#FFFFFF","list":[{"pagePath":"pages/index/index","iconPath":"/static/tabbar/list.png","selectedIconPath":"/static/tabbar/list_active.png","text":"首页"},{"pagePath":"pages/others/others","iconPath":"/static/tabbar/grid.png","selectedIconPath":"/static/tabbar/grid_active.png","text":"其他"},{"pagePath":"pages/mine/mine","iconPath":"/static/tabbar/me.png","selectedIconPath":"/static/tabbar/me_active.png","text":"我的"}],"selectedIndex":0,"shown":true},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/index/index","meta":{"isQuit":true,"isEntry":true,"isTabBar":true,"tabBarIndex":0,"navigationBar":{"titleText":"SportsCenter","type":"default"},"isNVue":false}},{"path":"pages/facilities/index","meta":{"navigationBar":{"titleText":"Facility","type":"default"},"isNVue":false}},{"path":"pages/facilities/details/index","meta":{"navigationBar":{"titleText":"Facility Details","type":"default"},"isNVue":false}},{"path":"pages/facilities/timetable/index","meta":{"navigationBar":{"titleText":"Facility Timetable","type":"default"},"isNVue":false}},{"path":"pages/others/others","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"navigationBar":{"titleText":"Others","type":"default"},"isNVue":false}},{"path":"pages/mine/mine","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/login/index","meta":{"navigationBar":{"titleText":"Login","type":"default"},"isNVue":false}},{"path":"pages/mine/personal-info/index","meta":{"navigationBar":{"titleText":"MyInfo","type":"default"},"isNVue":false}},{"path":"pages/mine/wallet/index","meta":{"navigationBar":{"titleText":"MyWallet","type":"default"},"isNVue":false}},{"path":"pages/order/index","meta":{"navigationBar":{"titleText":"Order","type":"default"},"isNVue":false}},{"path":"pages/mine/settings/index","meta":{"navigationBar":{"titleText":"Settings","type":"default"},"isNVue":false}},{"path":"pages/facilities/find/index","meta":{"navigationBar":{"titleText":"Facilities","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  