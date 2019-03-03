import CustomSwitch from './custom-switch'

/* istanbul ignore next */
CustomSwitch.install = function(Vue) {
  Vue.component(CustomSwitch.name, CustomSwitch);
};

export default CustomSwitch;

