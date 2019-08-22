import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'element-ui/lib/theme-chalk/index.css';
import { Form, FormItem, Transfer, ColorPicker, Rate, Dialog, Message, MessageBox, Upload, DatePicker, TimeSelect, TimePicker, Slider, Tooltip, Switch, Row, Col, Container, Header, aside, Main, Footer, Icon, Button, ButtonGroup, Radio, RadioGroup, RadioButton, Checkbox, CheckboxGroup, CheckboxButton, Input, Select, Option, OptionGroup, Autocomplete, InputNumber, Cascader } from 'element-ui'; //模块化引入

import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
locale.use(lang); //设置语言

Vue.config.productionTip = false;
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }; //设置element配置
Vue.prototype.$message = Message;

Vue.use(Row)
    .use(Col)
    .use(Container)
    .use(Header)
    .use(aside)
    .use(Main)
    .use(Footer)
    .use(Icon)
    .use(Button)
    .use(ButtonGroup)
    .use(Radio)
    .use(RadioGroup)
    .use(RadioButton)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(CheckboxButton)
    .use(Input)
    .use(Select)
    .use(Option)
    .use(OptionGroup)
    .use(Autocomplete)
    .use(InputNumber)
    .use(Switch)
    .use(Cascader)
    .use(Tooltip)
    .use(Slider)
    .use(TimePicker)
    .use(DatePicker)
    .use(TimeSelect)
    .use(Upload)
    .use(MessageBox)
    .use(Message)
    .use(Rate)
    .use(Dialog)
    .use(ColorPicker)
    .use(Transfer)
    .use(Form)
    .use(FormItem);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
