<template>
    <div class="form">
        <section>
            <h2>Form</h2>

            <section>
                <h4>DatePicker 日期选择器</h4>
                <div class="block">
                    <span class="demonstration">默认</span>
                    <el-date-picker v-model="datePickerValue1" type="date" placeholder="选择日期"></el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">带快捷选项</span>
                    <el-date-picker
                        v-model="datePickerValue2"
                        align="right"
                        type="date"
                        placeholder="选择日期"
                        :picker-options="pickerOptions1"
                    ></el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">周</span>
                    <el-date-picker
                        v-model="datePickerValue3"
                        type="week"
                        format="yyyy 第 WW 周"
                        placeholder="选择周"
                    ></el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">月</span>
                    <el-date-picker v-model="datePickerValue4" type="month" placeholder="选择月"></el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">年</span>
                    <el-date-picker
                        v-model="datePickerValue5"
                        align="right"
                        type="year"
                        placeholder="选择年"
                    ></el-date-picker>
                </div>

                <div class="block">
                    <span class="demonstration">默认</span>
                    <el-date-picker
                        v-model="datePickerValue6"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                    ></el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">带快捷选项</span>
                    <el-date-picker
                        v-model="datePickerValue7"
                        type="daterange"
                        align="right"
                        unlink-panels
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :picker-options="pickerOptions2"
                    ></el-date-picker>
                </div>

                <div class="block">
                    <span class="demonstration">date</span>
                    <el-date-picker
                        v-model="datePickerValue8"
                        type="date"
                        placeholder="选择日期"
                        default-value="2010-10-01"
                    ></el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">daterange</span>
                    <el-date-picker
                        v-model="datePickerValue9"
                        type="daterange"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        default-value="2010-10-01"
                    ></el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">默认为 Date 对象</span>
                    <div class="demonstration">组件值：{{ datePickerValue10 }}</div>
                    <el-date-picker
                        v-model="datePickerValue10"
                        type="date"
                        placeholder="选择日期"
                        format="yyyy 年 MM 月 dd 日"
                    ></el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">使用 value-format 进行格式化</span>
                    <div class="demonstration">组件值：{{ datePickerValue11 }}</div>
                    <el-date-picker
                        v-model="datePickerValue11"
                        type="date"
                        placeholder="选择日期"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                    ></el-date-picker>
                </div>
            </section>

            <section>
                <h4>TimePicker 时间选择器</h4>
                <p>
                    <el-time-select
                        v-model="timeSelectValue1"
                        :picker-options="{
                            start: '08:30',
                            step: '00:15',
                            end: '18:30'
                        }"
                        placeholder="选择时间"
                    ></el-time-select>
                </p>
                <p>
                    <el-time-picker
                        v-model="timePickerValue2"
                        :picker-options="{
                            selectableRange: '18:30:00 - 20:30:00'
                        }"
                        placeholder="任意时间点"
                    ></el-time-picker>
                    <el-time-picker
                        arrow-control
                        v-model="timePickerValue3"
                        :picker-options="{
                            selectableRange: '18:30:00 - 20:30:00'
                            }"
                        placeholder="任意时间点"
                    ></el-time-picker>
                </p>
                <p>
                    <el-time-picker
                        is-range
                        v-model="timePickerValue4"
                        range-separator="至"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        placeholder="选择时间范围"
                    ></el-time-picker>
                    <el-time-picker
                        is-range
                        arrow-control
                        v-model="timePickerValue5"
                        range-separator="至"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                        placeholder="选择时间范围"
                    ></el-time-picker>
                </p>
            </section>

            <section>
                <h4>Slider 滑块</h4>
                <div class="block">
                    <span class="demonstration">默认</span>
                    <el-slider v-model="sliderValue1"></el-slider>
                </div>
                <div class="block">
                    <span class="demonstration">自定义初始值</span>
                    <el-slider v-model="sliderValue2"></el-slider>
                </div>
                <div class="block">
                    <span class="demonstration">隐藏 Tooltip</span>
                    <el-slider v-model="sliderValue3" :show-tooltip="false"></el-slider>
                </div>
                <div class="block">
                    <span class="demonstration">格式化 Tooltip</span>
                    <el-slider v-model="sliderValue4" :format-tooltip="formatTooltip"></el-slider>
                </div>
                <div class="block">
                    <span class="demonstration">禁用</span>
                    <el-slider v-model="sliderValue5" disabled></el-slider>
                </div>

                <div class="block">
                    <span class="demonstration">不显示间断点</span>
                    <el-slider v-model="sliderValue6" :step="10"></el-slider>
                </div>
                <div class="block">
                    <span class="demonstration">显示间断点</span>
                    <el-slider v-model="sliderValue7" :step="10" show-stops></el-slider>
                </div>
                <div class="block">
                    <el-slider v-model="sliderValue8" show-input></el-slider>
                </div>
                <div class="block">
                    <el-slider v-model="sliderValue9" range show-stops :max="10"></el-slider>
                </div>
                <div class="block">
                    <el-slider v-model="sliderValue10" vertical height="200px"></el-slider>
                </div>
            </section>
            <section>
                <h4>Switch 开关</h4>
                <p>
                    <el-switch
                        v-model="switchValue2"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                    ></el-switch>
                </p>
                <p>
                    <el-switch v-model="switchValue3" active-text="按月付费" inactive-text="按年付费"></el-switch>
                    <el-switch
                        style="display: block"
                        v-model="switchValue4"
                        active-color="#13ce66"
                        inactive-color="#ff4949"
                        active-text="按月付费"
                        inactive-text="按年付费"
                    ></el-switch>
                </p>
                <p>
                    <el-tooltip :content="'Switch value: ' + switchValue5" placement="top">
                        <el-switch
                            v-model="switchValue5"
                            active-color="#13ce66"
                            inactive-color="#ff4949"
                            active-value="100"
                            inactive-value="0"
                        ></el-switch>
                    </el-tooltip>
                </p>
                <p>
                    <el-switch v-model="switchValue6" disabled></el-switch>
                    <el-switch v-model="switchValue7" disabled></el-switch>
                </p>
            </section>
        </section>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            switchValue1: true,
            switchValue2: true,
            switchValue3: true,
            switchValue4: true,
            switchValue5: 100,
            switchValue6: true,
            switchValue7: false,
            sliderValue1: 0,
            sliderValue2: 50,
            sliderValue3: 36,
            sliderValue4: 48,
            sliderValue5: 42,
            sliderValue6: 0,
            sliderValue7: 0,
            sliderValue8: 0,
            sliderValue9: [4, 8],
            sliderValue10: 0,
            timeSelectValue1: '',
            timePickerValue2: new Date(2016, 9, 10, 18, 40),
            timePickerValue3: new Date(2016, 9, 10, 18, 40),
            timePickerValue4: [
                new Date(2016, 9, 10, 8, 40),
                new Date(2016, 9, 10, 9, 40)
            ],
            timePickerValue5: [
                new Date(2016, 9, 10, 8, 40),
                new Date(2016, 9, 10, 9, 40)
            ],
            pickerOptions1: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [
                    {
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    },
                    {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    },
                    {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }
                ]
            },
            pickerOptions2: {
                shortcuts: [
                    {
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 7
                            );
                            picker.$emit('pick', [start, end]);
                        }
                    },
                    {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 30
                            );
                            picker.$emit('pick', [start, end]);
                        }
                    },
                    {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(
                                start.getTime() - 3600 * 1000 * 24 * 90
                            );
                            picker.$emit('pick', [start, end]);
                        }
                    }
                ]
            },
            datePickerValue1: '',
            datePickerValue2: '',
            datePickerValue3: '',
            datePickerValue4: '',
            datePickerValue5: '',
            datePickerValue6: '',
            datePickerValue7: '',
            datePickerValue8: '',
            datePickerValue9: '',
            datePickerValue10: '',
            datePickerValue11: ''
        };
    },
    components: {},
    methods: {
        formatTooltip(val) {
            return val / 100;
        }
    },
    mounted() {}
};
</script>

<style lang="scss" scoped>
.form {
}
</style>

