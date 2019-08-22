<template>
    <div class="form">
        <section>
            <h2>Form</h2>

            <section>
                <h4>Form 表单</h4>
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="活动名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="活动时间">
                        <el-col :span="11">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="form.date1"
                                style="width: 100%;"
                            ></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-time-picker
                                type="fixed-time"
                                placeholder="选择时间"
                                v-model="form.date2"
                                style="width: 100%;"
                            ></el-time-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="即时配送">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="活动性质">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                            <el-checkbox label="地推活动" name="type"></el-checkbox>
                            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="特殊资源">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="线上品牌商赞助"></el-radio>
                            <el-radio label="线下场地免费"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="活动形式">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item label="审批人">
                        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域">
                        <el-select v-model="formInline.region" placeholder="活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
                <el-radio-group v-model="labelPosition" size="small">
                    <el-radio-button label="left">左对齐</el-radio-button>
                    <el-radio-button label="right">右对齐</el-radio-button>
                    <el-radio-button label="top">顶部对齐</el-radio-button>
                </el-radio-group>
                <div style="margin: 20px;"></div>
                <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                    <el-form-item label="名称">
                        <el-input v-model="formLabelAlign.name"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域">
                        <el-input v-model="formLabelAlign.region"></el-input>
                    </el-form-item>
                    <el-form-item label="活动形式">
                        <el-input v-model="formLabelAlign.type"></el-input>
                    </el-form-item>
                </el-form>
                <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="100px"
                    class="demo-ruleForm"
                >
                    <el-form-item label="活动名称" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域" prop="region">
                        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="活动时间" required>
                        <el-col :span="11">
                            <el-form-item prop="date1">
                                <el-date-picker
                                    type="date"
                                    placeholder="选择日期"
                                    v-model="ruleForm.date1"
                                    style="width: 100%;"
                                ></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-form-item prop="date2">
                                <el-time-picker
                                    type="fixed-time"
                                    placeholder="选择时间"
                                    v-model="ruleForm.date2"
                                    style="width: 100%;"
                                ></el-time-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="即时配送" prop="delivery">
                        <el-switch v-model="ruleForm.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="活动性质" prop="type">
                        <el-checkbox-group v-model="ruleForm.type">
                            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                            <el-checkbox label="地推活动" name="type"></el-checkbox>
                            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="特殊资源" prop="resource">
                        <el-radio-group v-model="ruleForm.resource">
                            <el-radio label="线上品牌商赞助"></el-radio>
                            <el-radio label="线下场地免费"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="活动形式" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
                <el-form
                    :model="ruleForm2"
                    status-icon
                    :rules="rules2"
                    ref="ruleForm2"
                    label-width="100px"
                    class="demo-ruleForm"
                >
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="年龄" prop="age">
                        <el-input v-model.number="ruleForm2.age"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                        <el-button @click="resetForm('ruleForm2')">重置</el-button>
                    </el-form-item>
                </el-form>
                <el-form
                    :model="dynamicValidateForm"
                    ref="dynamicValidateForm"
                    label-width="100px"
                    class="demo-dynamic"
                >
                    <el-form-item
                        prop="email"
                        label="邮箱"
                        :rules="[
                            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                            ]"
                    >
                        <el-input v-model="dynamicValidateForm.email"></el-input>
                    </el-form-item>
                    <el-form-item
                        v-for="(domain, index) in dynamicValidateForm.domains"
                        :label="'域名' + index"
                        :key="domain.key"
                        :prop="'domains.' + index + '.value'"
                        :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
                    >
                        <el-input v-model="domain.value"></el-input>
                        <el-button @click.prevent="removeDomain(domain)">删除</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
                        <el-button @click="addDomain">新增域名</el-button>
                        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
                    </el-form-item>
                </el-form>
                <el-form
                    :model="numberValidateForm"
                    ref="numberValidateForm"
                    label-width="100px"
                    class="demo-ruleForm"
                    size="mini"
                >
                    <el-form-item
                        label="年龄"
                        prop="age"
                        :rules="[
      { required: true, message: '年龄不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]"
                    >
                        <el-input
                            type="age"
                            v-model.number="numberValidateForm.age"
                            auto-complete="off"
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
                        <el-button @click="resetForm('numberValidateForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </section>

            <section>
                <h4>Transfer 穿梭框</h4>
                <el-transfer v-model="transferValue1" :data="transferData"></el-transfer>
                <el-transfer
                    filterable
                    :filter-method="filterMethod"
                    filter-placeholder="请输入城市拼音"
                    v-model="transferValue2"
                    :data="transferData2"
                ></el-transfer>
                <el-transfer
                    v-model="transferValue4"
                    :props="{
                        key: 'value',
                        label: 'desc'
                    }"
                    :data="transferData3"
                ></el-transfer>
            </section>

            <section>
                <h4>ColorPicker 颜色选择器</h4>
                <div class="block">
                    <span class="demonstration">有默认值</span>
                    <el-color-picker v-model="color1"></el-color-picker>
                </div>
                <div class="block">
                    <span class="demonstration">无默认值</span>
                    <el-color-picker v-model="color2"></el-color-picker>
                </div>
                <div class="block">
                    <span class="demonstration">透明度</span>
                    <el-color-picker v-model="color3" show-alpha></el-color-picker>
                </div>

                <div class="block">
                    <span class="demonstration">尺寸</span>
                    <el-color-picker v-model="color1"></el-color-picker>
                    <el-color-picker v-model="color1" size="medium"></el-color-picker>
                    <el-color-picker v-model="color1" size="small"></el-color-picker>
                    <el-color-picker v-model="color1" size="mini"></el-color-picker>
                </div>
            </section>

            <section>
                <h4>Rate 评分</h4>
                <div class="block">
                    <span class="demonstration">默认不区分颜色</span>
                    <el-rate v-model="rateValue1"></el-rate>
                </div>
                <div class="block">
                    <span class="demonstration">区分颜色</span>
                    <el-rate v-model="rateValue2" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
                </div>
                <br />
                <el-rate v-model="rateValue3" show-text></el-rate>
                <br />
                <el-rate
                    v-model="rateValue4"
                    :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
                    void-icon-class="icon-rate-face-off"
                    :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                ></el-rate>
                <br />
                <el-rate
                    v-model="rateValue5"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}"
                ></el-rate>
            </section>

            <section>
                <h4>Upload 上传</h4>
                <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList"
                >
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                >
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>

                <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                >
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible" size="tiny">
                    <img width="100%" :src="dialogImageUrl" alt />
                </el-dialog>
                <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList2"
                    list-type="picture"
                >
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-change="handleChange"
                    :file-list="fileList3"
                >
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                <el-upload
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple
                >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">
                        将文件拖到此处，或
                        <em>点击上传</em>
                    </div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                <el-upload
                    class="upload-demo"
                    ref="upload"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                    :auto-upload="false"
                >
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <el-button
                        style="margin-left: 10px;"
                        size="small"
                        type="success"
                        @click="submitUpload"
                    >上传到服务器</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </section>

            <section>
                <h4>DateTimePicker 日期时间选择器</h4>
                <div class="block">
                    <span class="demonstration">默认</span>
                    <el-date-picker v-model="datePickerValue1" type="datetime" placeholder="选择日期时间"></el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">带快捷选项</span>
                    <el-date-picker
                        v-model="datePickerValue2"
                        type="datetime"
                        placeholder="选择日期时间"
                        align="right"
                        :picker-options="pickerOptions1"
                    ></el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">默认</span>
                    <el-date-picker
                        v-model="datePickerValue3"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                    ></el-date-picker>
                </div>
                <div class="block">
                    <span class="demonstration">带快捷选项</span>
                    <el-date-picker
                        v-model="datePickerValue4"
                        type="datetimerange"
                        :picker-options="pickerOptions2"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        align="right"
                    ></el-date-picker>
                </div>
            </section>

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
        const generateData = _ => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
                data.push({
                    key: i,
                    label: `备选项 ${i}`,
                    disabled: i % 4 === 0
                });
            }
            return data;
        };
        const generateData2 = _ => {
            const data = [];
            const cities = [
                '上海',
                '北京',
                '广州',
                '深圳',
                '南京',
                '西安',
                '成都'
            ];
            const pinyin = [
                'shanghai',
                'beijing',
                'guangzhou',
                'shenzhen',
                'nanjing',
                'xian',
                'chengdu'
            ];

            cities.forEach((city, index) => {
                data.push({
                    label: city,
                    key: index,
                    pinyin: pinyin[index]
                });
            });
            return data;
        };

        const generateData3 = _ => {
            const data = [];
            for (let i = 1; i <= 15; i++) {
                data.push({
                    value: i,
                    desc: `备选项 ${i}`,
                    disabled: i % 4 === 0
                });
            }
            return data;
        };

        var checkAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('年龄不能为空'));
            }
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error('请输入数字值'));
                } else {
                    if (value < 18) {
                        callback(new Error('必须年满18岁'));
                    } else {
                        callback();
                    }
                }
            }, 1000);
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm2.checkPass !== '') {
                    this.$refs.ruleForm2.validateField('checkPass');
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm2.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
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
            datePickerValue11: '',
            fileList: [
                {
                    name: 'food.jpeg',
                    url:
                        'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                },
                {
                    name: 'food2.jpeg',
                    url:
                        'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }
            ],
            fileList2: [
                {
                    name: 'food.jpeg',
                    url:
                        'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                },
                {
                    name: 'food2.jpeg',
                    url:
                        'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }
            ],
            imageUrl: '',
            dialogImageUrl: '',
            dialogVisible: false,
            fileList3: [
                {
                    name: 'food.jpeg',
                    url:
                        'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
                    status: 'finished'
                },
                {
                    name: 'food2.jpeg',
                    url:
                        'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
                    status: 'finished'
                }
            ],
            rateValue1: null,
            rateValue2: null,
            rateValue3: null,
            rateValue4: null,
            rateValue5: 3.7,
            color1: '#409EFF',
            color2: null,
            color3: 'rgba(19, 206, 102, 0.8)',
            transferData: generateData(),
            transferValue1: [1, 4],
            transferData2: generateData2(),
            transferValue2: [],
            filterMethod(query, item) {
                return item.pinyin.indexOf(query) > -1;
            },
            transferData3: generateData3(),
            transferValue4: [],
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            formInline: {
                user: '',
                region: ''
            },
            labelPosition: 'right',
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            },
            ruleForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: '请输入活动名称',
                        trigger: 'blur'
                    },
                    {
                        min: 3,
                        max: 5,
                        message: '长度在 3 到 5 个字符',
                        trigger: 'blur'
                    }
                ],
                region: [
                    {
                        required: true,
                        message: '请选择活动区域',
                        trigger: 'change'
                    }
                ],
                date1: [
                    {
                        type: 'date',
                        required: true,
                        message: '请选择日期',
                        trigger: 'change'
                    }
                ],
                date2: [
                    {
                        type: 'date',
                        required: true,
                        message: '请选择时间',
                        trigger: 'change'
                    }
                ],
                type: [
                    {
                        type: 'array',
                        required: true,
                        message: '请至少选择一个活动性质',
                        trigger: 'change'
                    }
                ],
                resource: [
                    {
                        required: true,
                        message: '请选择活动资源',
                        trigger: 'change'
                    }
                ],
                desc: [
                    {
                        required: true,
                        message: '请填写活动形式',
                        trigger: 'blur'
                    }
                ]
            },
            ruleForm2: {
                pass: '',
                checkPass: '',
                age: ''
            },
            rules2: {
                pass: [{ validator: validatePass, trigger: 'blur' }],
                checkPass: [{ validator: validatePass2, trigger: 'blur' }],
                age: [{ validator: checkAge, trigger: 'blur' }]
            },
            dynamicValidateForm: {
                domains: [
                    {
                        value: ''
                    }
                ],
                email: ''
            },
            numberValidateForm: {
                age: ''
            }
        };
    },
    components: {},
    methods: {
        formatTooltip(val) {
            return val / 100;
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(
                `当前限制选择 3 个文件，本次选择了 ${
                    files.length
                } 个文件，共选择了 ${files.length + fileList.length} 个文件`
            );
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${file.name}？`);
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleChange(file, fileList) {
            this.fileList3 = fileList.slice(-3);
        },
        submitUpload() {
            this.$refs.upload.submit();
        },
        onSubmit() {
            console.log('submit!');
        },
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        removeDomain(item) {
            var index = this.dynamicValidateForm.domains.indexOf(item);
            if (index !== -1) {
                this.dynamicValidateForm.domains.splice(index, 1);
            }
        },
        addDomain() {
            this.dynamicValidateForm.domains.push({
                value: '',
                key: Date.now()
            });
        }
    },
    mounted() {}
};
</script>

<style lang="scss" scoped>
.form {
}
</style>

