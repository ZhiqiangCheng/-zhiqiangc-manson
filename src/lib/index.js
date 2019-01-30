import ToastComponent from "./vue-toast.vue";

let Toast = {};
Toast.install = function(Vue, options) {
  //vue.use 的时候传入Vue

  var opt = {
    //默认
    duration: 3000
  };
  for (var key in options) {
    //覆盖
    opt[key] = options[key];
  }

  Vue.prototype.$toast = function(message, option) {
    if (typeof option == "object") {
      //覆盖
      for (var key in option) {
        opt[key] = option[key];
      }
    }
    const ToastController = Vue.extend(ToastComponent);

    var instance = new ToastController().$mount(document.createElement("div"));

    instance.message = message;
    instance.visible = true;
    document.body.appendChild(instance.$el); //vue.$el
    setTimeout(() => {
      instance.visible = false;
      document.body.removeChild(instance.$el); //vue.$el
    }, opt.duration);
  };
  Vue.prototype.$toast["show"] = function(message, option) {
    //扩展
    Vue.prototype.$toast(message, option);
  };
};
if (window.Vue) {
  Vue.use(Toast);
}
export default Toast;
