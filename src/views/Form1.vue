<template>
    <div class="form">


        <section>
            <h2>Form1</h2>
            <section>
                <h4>Select 选择器</h4>
                <div class="block">
                    <span class="demonstration">默认 click 触发子菜单</span>
                    <el-cascader
                        :options="cascaderOptions"
                        v-model="selectedOptions"
                        @change="handleChange"
                    ></el-cascader>
                </div>
                <div class="block">
                    <span class="demonstration">hover 触发子菜单</span>
                    <el-cascader
                        expand-trigger="hover"
                        :options="cascaderOptions"
                        v-model="selectedOptions2"
                        @change="handleChange"
                    ></el-cascader>
                </div>
                <p><el-cascader
                  :options="cascaderOptions"
                  :show-all-levels="false"
                ></el-cascader></p>

                <p><el-cascader
                  :options="cascaderOptions"
                  v-model="selectedOptions3"
                ></el-cascader></p>

                <p>
                  <el-cascader
                    :options="cascaderOptions"
                    change-on-select
                  ></el-cascader>
                </p>

                <div class="block">
                <span class="demonstration">只可选择最后一级菜单的选项</span>
                <el-cascader
                  placeholder="试试搜索：指南"
                  :options="cascaderOptions"
                  filterable
                ></el-cascader>
              </div>
              <div class="block">
                <span class="demonstration">可选择任意一级菜单的选项</span>
                <el-cascader
                  placeholder="试试搜索：指南"
                  :options="cascaderOptions"
                  filterable
                  change-on-select
                ></el-cascader>
              </div>

            </section>

            <section>
                <h4>Select 选择器</h4>
                <p>
                    <el-select v-model="value" placeholder="请选择" clearable>
                        <el-option
                            v-for="item in cascaderOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            :disabled="item.disabled"
                        ></el-option>
                    </el-select>
                </p>
                <p>
                    <el-select v-model="value5" multiple placeholder="请选择">
                        <el-option
                            v-for="item in cascaderOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>

                    <el-select
                        v-model="value11"
                        multiple
                        collapse-tags
                        style="margin-left: 20px;"
                        placeholder="请选择"
                    >
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </p>
                <p>
                    <el-select v-model="value6" placeholder="请选择">
                        <el-option
                            v-for="item in cities"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                            <span style="float: left">{{ item.label }}</span>
                            <span
                                style="float: right; color: #8492a6; font-size: 13px"
                            >{{ item.value }}</span>
                        </el-option>
                    </el-select>
                </p>
                <p>
                    <el-select v-model="value7" placeholder="请选择">
                        <el-option-group
                            v-for="group in options3"
                            :key="group.label"
                            :label="group.label"
                        >
                            <el-option
                                v-for="item in group.options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-option-group>
                    </el-select>
                </p>
                <p>
                    <el-select v-model="value8" filterable placeholder="请选择">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </p>
                <p>
                    <el-select
                        v-model="value10"
                        multiple
                        filterable
                        allow-create
                        default-first-option
                        placeholder="请选择文章标签"
                    >
                        <el-option
                            v-for="item in options5"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </p>
            </section>

            <section>
                <h4>InputNumber 计数器</h4>
                <p>
                    <el-input-number
                        v-model="num1"
                        @change="handleChange"
                        :min="1"
                        :max="10"
                        label="描述文字"
                    ></el-input-number>
                </p>
                <p>
                    <el-input-number v-model="num2" :disabled="true"></el-input-number>
                </p>
                <p>
                    <el-input-number v-model="num3" :step="2"></el-input-number>
                </p>
                <p>
                    <el-input-number v-model="num4"></el-input-number>
                    <el-input-number size="medium" v-model="num5"></el-input-number>
                    <el-input-number size="small" v-model="num6"></el-input-number>
                    <el-input-number size="mini" v-model="num7"></el-input-number>
                </p>
                <p>
                    <el-input-number v-model="num8" controls-position="right" :min="1" :max="10"></el-input-number>
                </p>
            </section>

            <section>
                <h4>Input 输入框</h4>

                <el-input v-model="input" placeholder="请输入内容" clearable></el-input>
                <p>
                    <el-input placeholder="请输入内容" v-model="input1" :disabled="true"></el-input>
                </p>
                <div class="demo-input-suffix">
                    属性方式：
                    <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input2"></el-input>
                    <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input21"></el-input>
                </div>
                <div class="demo-input-suffix">
                    slot 方式：
                    <el-input placeholder="请选择日期" v-model="input22">
                        <i slot="suffix" class="el-input__icon el-icon-date"></i>
                    </el-input>
                    <el-input placeholder="请输入内容" v-model="input23">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </div>
                <p>
                    <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="请输入内容"
                        v-model="textarea"
                        autosize
                    ></el-input>
                    <el-input
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        placeholder="请输入内容"
                        v-model="textarea3"
                    ></el-input>
                </p>
                <div>
                    <el-input placeholder="请输入内容" v-model="input3">
                        <template slot="prepend">Http://</template>
                    </el-input>
                </div>
                <div style="margin-top: 15px;">
                    <el-input placeholder="请输入内容" v-model="input4">
                        <template slot="append">.com</template>
                    </el-input>
                </div>
                <div style="margin-top: 15px;">
                    <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
                        <el-select v-model="select" slot="prepend" placeholder="请选择">
                            <el-option label="餐厅名" value="1"></el-option>
                            <el-option label="订单号" value="2"></el-option>
                            <el-option label="用户电话" value="3"></el-option>
                        </el-select>
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
                <div class="demo-input-size">
                    <el-input placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input6"></el-input>
                    <el-input
                        size="medium"
                        placeholder="请输入内容"
                        suffix-icon="el-icon-date"
                        v-model="input7"
                    ></el-input>
                    <el-input
                        size="small"
                        placeholder="请输入内容"
                        suffix-icon="el-icon-date"
                        v-model="input8"
                    ></el-input>
                    <el-input
                        size="mini"
                        placeholder="请输入内容"
                        suffix-icon="el-icon-date"
                        v-model="input9"
                    ></el-input>
                </div>

                <el-row class="demo-autocomplete">
                    <el-col :span="12">
                        <div class="sub-title">激活即列出输入建议</div>
                        <el-autocomplete
                            class="inline-input"
                            v-model="state1"
                            :fetch-suggestions="querySearch"
                            placeholder="请输入内容"
                            @select="handleSelect"
                        ></el-autocomplete>
                    </el-col>
                    <el-col :span="12">
                        <div class="sub-title">输入后匹配输入建议</div>
                        <el-autocomplete
                            class="inline-input"
                            v-model="state2"
                            :fetch-suggestions="querySearch"
                            placeholder="请输入内容"
                            :trigger-on-focus="false"
                            @select="handleSelect"
                        ></el-autocomplete>
                    </el-col>
                </el-row>
                <div>
                    <el-autocomplete
                        popper-class="my-autocomplete"
                        v-model="state3"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入内容"
                        @select="handleSelect"
                    >
                        <i
                            class="el-icon-edit el-input__icon"
                            slot="suffix"
                            @click="handleIconClick"
                        ></i>
                        <template slot-scope="props">
                            <div class="name">{{ props.item.value }}</div>
                            <span class="addr">{{ props.item.address }}</span>
                        </template>
                    </el-autocomplete>
                </div>
            </section>

            <section>
                <h4>Checkbox 多选框</h4>
                <p>
                    <el-checkbox v-model="checked">备选项</el-checkbox>
                </p>
                <p>
                    <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
                    <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
                </p>
                <p>
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                        <el-checkbox label="禁用" disabled></el-checkbox>
                        <el-checkbox label="选中且禁用" disabled></el-checkbox>
                    </el-checkbox-group>
                </p>
                <div>
                    <el-checkbox
                        :indeterminate="isIndeterminate"
                        v-model="checkAll"
                        @change="handleCheckAllChange"
                    >全选</el-checkbox>
                    <div style="margin: 15px 0;"></div>
                    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                    </el-checkbox-group>
                </div>
                <div>
                    <el-checkbox-group v-model="checkedCities1" :min="1" :max="2">
                        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                    </el-checkbox-group>
                </div>
                <div>
                    <el-checkbox-group v-model="checkboxGroup1">
                        <el-checkbox-button
                            v-for="city in cities"
                            :label="city"
                            :key="city"
                        >{{city}}</el-checkbox-button>
                    </el-checkbox-group>
                </div>
                <div style="margin-top: 20px">
                    <el-checkbox-group v-model="checkboxGroup2" size="medium">
                        <el-checkbox-button
                            v-for="city in cities"
                            :label="city"
                            :key="city"
                        >{{city}}</el-checkbox-button>
                    </el-checkbox-group>
                </div>
                <div style="margin-top: 20px">
                    <el-checkbox-group v-model="checkboxGroup3" size="small">
                        <el-checkbox-button
                            v-for="city in cities"
                            :label="city"
                            :disabled="city === '北京'"
                            :key="city"
                        >{{city}}</el-checkbox-button>
                    </el-checkbox-group>
                </div>
                <div style="margin-top: 20px">
                    <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
                        <el-checkbox-button
                            v-for="city in cities"
                            :label="city"
                            :key="city"
                        >{{city}}</el-checkbox-button>
                    </el-checkbox-group>
                </div>
                <div>
                    <el-checkbox v-model="checked3" label="备选项1" border></el-checkbox>
                    <el-checkbox v-model="checked4" label="备选项2" border></el-checkbox>
                </div>
                <div style="margin-top: 20px">
                    <el-checkbox v-model="checked5" label="备选项1" border size="medium"></el-checkbox>
                    <el-checkbox v-model="checked6" label="备选项2" border size="medium"></el-checkbox>
                </div>
                <div style="margin-top: 20px">
                    <el-checkbox-group v-model="checkboxGroup5" size="small">
                        <el-checkbox label="备选项1" border></el-checkbox>
                        <el-checkbox label="备选项2" border disabled></el-checkbox>
                    </el-checkbox-group>
                </div>
                <div style="margin-top: 20px">
                    <el-checkbox-group v-model="checkboxGroup6" size="mini" disabled>
                        <el-checkbox label="备选项1" border></el-checkbox>
                        <el-checkbox label="备选项2" border></el-checkbox>
                    </el-checkbox-group>
                </div>
            </section>

            <section>
                <h4>Radio 单选框</h4>
                <p>
                    <el-radio v-model="radio" label="1">备选项</el-radio>
                    <el-radio v-model="radio" label="2">备选项</el-radio>
                </p>
                <p>
                    <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
                    <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
                </p>
                <p>
                    <el-radio-group v-model="radio2">
                        <el-radio :label="3">备选项</el-radio>
                        <el-radio :label="6">备选项</el-radio>
                        <el-radio :label="9">备选项</el-radio>
                    </el-radio-group>
                </p>
                <div>
                    <el-radio-group v-model="radio3">
                        <el-radio-button label="上海"></el-radio-button>
                        <el-radio-button label="北京"></el-radio-button>
                        <el-radio-button label="广州"></el-radio-button>
                        <el-radio-button label="深圳"></el-radio-button>
                    </el-radio-group>
                </div>
                <div style="margin-top: 20px">
                    <el-radio-group v-model="radio4" size="medium">
                        <el-radio-button label="上海"></el-radio-button>
                        <el-radio-button label="北京"></el-radio-button>
                        <el-radio-button label="广州"></el-radio-button>
                        <el-radio-button label="深圳"></el-radio-button>
                    </el-radio-group>
                </div>
                <div style="margin-top: 20px">
                    <el-radio-group v-model="radio5" size="small">
                        <el-radio-button label="上海"></el-radio-button>
                        <el-radio-button label="北京" disabled></el-radio-button>
                        <el-radio-button label="广州"></el-radio-button>
                        <el-radio-button label="深圳"></el-radio-button>
                    </el-radio-group>
                </div>
                <div style="margin-top: 20px">
                    <el-radio-group v-model="radio6" disabled size="mini">
                        <el-radio-button label="上海"></el-radio-button>
                        <el-radio-button label="北京"></el-radio-button>
                        <el-radio-button label="广州"></el-radio-button>
                        <el-radio-button label="深圳"></el-radio-button>
                    </el-radio-group>
                </div>
                <div>
                    <el-radio v-model="radio7" label="1" border>备选项1</el-radio>
                    <el-radio v-model="radio7" label="2" border>备选项2</el-radio>
                </div>
                <div style="margin-top: 20px">
                    <el-radio v-model="radio8" label="1" border size="medium">备选项1</el-radio>
                    <el-radio v-model="radio8" label="2" border size="medium">备选项2</el-radio>
                </div>
                <div style="margin-top: 20px">
                    <el-radio-group v-model="radio9" size="small">
                        <el-radio label="1" border>备选项1</el-radio>
                        <el-radio label="2" border disabled>备选项2</el-radio>
                    </el-radio-group>
                </div>
                <div style="margin-top: 20px">
                    <el-radio-group v-model="radio10" size="mini" disabled>
                        <el-radio label="1" border>备选项1</el-radio>
                        <el-radio label="2" border>备选项2</el-radio>
                    </el-radio-group>
                </div>
            </section>
        </section>
    </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
    name: '',
    data() {
        return {
            radio: '1',
            radio1: '选中且禁用',
            radio2: '3',
            radio3: '上海',
            radio4: '上海',
            radio5: '上海',
            radio6: '上海',
            radio7: '1',
            radio8: '1',
            radio9: '1',
            radio10: '1',
            checked: true,
            checked1: false,
            checked2: true,
            checked3: true,
            checked4: false,
            checked5: false,
            checked6: true,

            checkList: ['选中且禁用', '复选框 A'],
            checkAll: false,
            checkedCities1: ['上海', '北京'],
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true,
            checkboxGroup1: ['上海'],
            checkboxGroup2: ['上海'],
            checkboxGroup3: ['上海'],
            checkboxGroup4: ['上海'],
            checkboxGroup5: [],
            checkboxGroup6: [],
            input: '',
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            input5: '',
            input6: '',
            input7: '',
            input8: '',
            input9: '',
            input21: '',
            input22: '',
            input23: '',
            textarea: '',
            textarea3: '',

            select: '',
            restaurants: [],
            state1: '',
            state2: '',
            state3: '',
            num1: 1,
            num2: 1,
            num3: 5,
            num4: 1,
            num5: 1,
            num6: 1,
            num7: 1,
            num8: 1,
            options: [
                {
                    value: '选项1',
                    label: '黄金糕'
                },
                {
                    value: '选项2',
                    label: '双皮奶',
                    disabled: true
                },
                {
                    value: '选项3',
                    label: '蚵仔煎'
                },
                {
                    value: '选项4',
                    label: '龙须面'
                },
                {
                    value: '选项5',
                    label: '北京烤鸭'
                }
            ],
            value: '',
            value5: [],
            value11: [],
            cities: [
                {
                    value: 'Beijing',
                    label: '北京'
                },
                {
                    value: 'Shanghai',
                    label: '上海'
                },
                {
                    value: 'Nanjing',
                    label: '南京'
                },
                {
                    value: 'Chengdu',
                    label: '成都'
                },
                {
                    value: 'Shenzhen',
                    label: '深圳'
                },
                {
                    value: 'Guangzhou',
                    label: '广州'
                }
            ],
            value6: '',
            options3: [
                {
                    label: '热门城市',
                    options: [
                        {
                            value: 'Shanghai',
                            label: '上海'
                        },
                        {
                            value: 'Beijing',
                            label: '北京'
                        }
                    ]
                },
                {
                    label: '城市名',
                    options: [
                        {
                            value: 'Chengdu',
                            label: '成都'
                        },
                        {
                            value: 'Shenzhen',
                            label: '深圳'
                        },
                        {
                            value: 'Guangzhou',
                            label: '广州'
                        },
                        {
                            value: 'Dalian',
                            label: '大连'
                        }
                    ]
                }
            ],
            value7: '',
            value8: '',
            options5: [
                {
                    value: 'HTML',
                    label: 'HTML'
                },
                {
                    value: 'CSS',
                    label: 'CSS'
                },
                {
                    value: 'JavaScript',
                    label: 'JavaScript'
                }
            ],
            value10: [],
            cascaderOptions: [{
          value: 'zhinan',
          label: '指南',
          disabled: true,
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        selectedOptions: [],
        selectedOptions2: [],
        selectedOptions3: ['zujian', 'data', 'tag'],
        };
    },
    components: {},
    methods: {
        handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate =
                checkedCount > 0 && checkedCount < this.cities.length;
        },
        querySearch(queryString, cb) {
            var restaurants = this.restaurants;
            var results = queryString
                ? restaurants.filter(this.createFilter(queryString))
                : restaurants;
            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return restaurant => {
                return (
                    restaurant.value
                        .toLowerCase()
                        .indexOf(queryString.toLowerCase()) === 0
                );
            };
        },
        loadAll() {
            return [
                { value: '三全鲜食（北新泾店）', address: '长宁区新渔路144号' },
                {
                    value: 'Hot honey 首尔炸鸡（仙霞路）',
                    address: '上海市长宁区淞虹路661号'
                },
                {
                    value: '新旺角茶餐厅',
                    address: '上海市普陀区真北路988号创邑金沙谷6号楼113'
                },
                { value: '泷千家(天山西路店)', address: '天山西路438号' },
                {
                    value: '胖仙女纸杯蛋糕（上海凌空店）',
                    address: '上海市长宁区金钟路968号1幢18号楼一层商铺18-101'
                },
                { value: '贡茶', address: '上海市长宁区金钟路633号' },
                {
                    value: '豪大大香鸡排超级奶爸',
                    address: '上海市嘉定区曹安公路曹安路1685号'
                },
                {
                    value: '茶芝兰（奶茶，手抓饼）',
                    address: '上海市普陀区同普路1435号'
                },
                { value: '十二泷町', address: '上海市北翟路1444弄81号B幢-107' },
                { value: '星移浓缩咖啡', address: '上海市嘉定区新郁路817号' },
                { value: '阿姨奶茶/豪大大', address: '嘉定区曹安路1611号' },
                {
                    value: '新麦甜四季甜品炸鸡',
                    address: '嘉定区曹安公路2383弄55号'
                },
                {
                    value: 'Monica摩托主题咖啡店',
                    address: '嘉定区江桥镇曹安公路2409号1F，2383弄62号1F'
                },
                {
                    value: '浮生若茶（凌空soho店）',
                    address: '上海长宁区金钟路968号9号楼地下一层'
                },
                {
                    value: 'NONO JUICE  鲜榨果汁',
                    address: '上海市长宁区天山西路119号'
                },
                {
                    value: 'CoCo都可(北新泾店）',
                    address: '上海市长宁区仙霞西路'
                },
                {
                    value: '快乐柠檬（神州智慧店）',
                    address: '上海市长宁区天山西路567号1层R117号店铺'
                },
                {
                    value: 'Merci Paul cafe',
                    address: '上海市普陀区光复西路丹巴路28弄6号楼819'
                },
                {
                    value: '猫山王（西郊百联店）',
                    address: '上海市长宁区仙霞西路88号第一层G05-F01-1-306'
                },
                { value: '枪会山', address: '上海市普陀区棕榈路' },
                { value: '纵食', address: '元丰天山花园(东门) 双流路267号' },
                { value: '钱记', address: '上海市长宁区天山西路' },
                { value: '壹杯加', address: '上海市长宁区通协路' },
                {
                    value: '唦哇嘀咖',
                    address:
                        '上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元'
                },
                {
                    value: '爱茜茜里(西郊百联)',
                    address: '长宁区仙霞西路88号1305室'
                },
                {
                    value: '爱茜茜里(近铁广场)',
                    address:
                        '上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺'
                },
                {
                    value: '鲜果榨汁（金沙江路和美广店）',
                    address: '普陀区金沙江路2239号金沙和美广场B1-10-6'
                },
                {
                    value: '开心丽果（缤谷店）',
                    address: '上海市长宁区威宁路天山路341号'
                },
                {
                    value: '超级鸡车（丰庄路店）',
                    address: '上海市嘉定区丰庄路240号'
                },
                {
                    value: '妙生活果园（北新泾店）',
                    address: '长宁区新渔路144号'
                },
                { value: '香宜度麻辣香锅', address: '长宁区淞虹路148号' },
                {
                    value: '凡仔汉堡（老真北路店）',
                    address: '上海市普陀区老真北路160号'
                },
                {
                    value: '港式小铺',
                    address: '上海市长宁区金钟路968号15楼15-105室'
                },
                { value: '蜀香源麻辣香锅（剑河路店）', address: '剑河路443-1' },
                {
                    value: '北京饺子馆',
                    address: '长宁区北新泾街道天山西路490-1号'
                },
                {
                    value: '饭典*新简餐（凌空SOHO店）',
                    address: '上海市长宁区金钟路968号9号楼地下一层9-83室'
                },
                {
                    value: '焦耳·川式快餐（金钟路店）',
                    address: '上海市金钟路633号地下一层甲部'
                },
                { value: '动力鸡车', address: '长宁区仙霞西路299弄3号101B' },
                { value: '浏阳蒸菜', address: '天山西路430号' },
                {
                    value: '四海游龙（天山西路店）',
                    address: '上海市长宁区天山西路'
                },
                {
                    value: '樱花食堂（凌空店）',
                    address: '上海市长宁区金钟路968号15楼15-105室'
                },
                {
                    value: '壹分米客家传统调制米粉(天山店)',
                    address: '天山西路428号'
                },
                {
                    value: '福荣祥烧腊（平溪路店）',
                    address: '上海市长宁区协和路福泉路255弄57-73号'
                },
                {
                    value: '速记黄焖鸡米饭',
                    address: '上海市长宁区北新泾街道金钟路180号1层01号摊位'
                },
                { value: '红辣椒麻辣烫', address: '上海市长宁区天山西路492号' },
                {
                    value: '(小杨生煎)西郊百联餐厅',
                    address: '长宁区仙霞西路88号百联2楼'
                },
                { value: '阳阳麻辣烫', address: '天山西路389号' },
                {
                    value: '南拳妈妈龙虾盖浇饭',
                    address: '普陀区金沙江路1699号鑫乐惠美食广场A13'
                }
            ];
        },
        handleSelect(item) {
            console.log(item);
        },
        handleIconClick(ev) {
            console.log(ev);
        },
        handleChange(value) {
            console.log(value);
        }
    },
    mounted() {
        this.restaurants = this.loadAll();
    }
};
</script>

<style lang="scss" scoped>
.form {
    .demo-input-suffix {
        .el-input {
            width: 130px;
        }
    }
    .el-select .el-input {
        width: 130px;
    }
    .input-with-select .el-input-group__prepend {
        background-color: #fff;
    }
}
</style>

