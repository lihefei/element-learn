<template>
    <div class="base">
        <section>
            <h2>Basic</h2>

            <section>
                <h4>Button 按钮</h4>

                <div>
                    <el-button>默认按钮</el-button>
                    <el-button type="primary">主要按钮</el-button>
                    <el-button type="success">成功按钮</el-button>
                    <el-button type="info">信息按钮</el-button>
                    <el-button type="warning">警告按钮</el-button>
                    <el-button type="danger">危险按钮</el-button>
                    <div style="margin: 20px 0">
                        <el-button plain>朴素按钮</el-button>
                        <el-button type="primary" plain>主要按钮</el-button>
                        <el-button type="success" plain>成功按钮</el-button>
                        <el-button type="info" plain>信息按钮</el-button>
                        <el-button type="warning" plain>警告按钮</el-button>
                        <el-button type="danger" plain>危险按钮</el-button>
                    </div>

                    <div>
                        <el-button round>圆形按钮</el-button>
                        <el-button type="primary" round>主要按钮</el-button>
                        <el-button type="success" round>成功按钮</el-button>
                        <el-button type="info" round>信息按钮</el-button>
                        <el-button type="warning" round>警告按钮</el-button>
                        <el-button type="danger" round>危险按钮</el-button>
                    </div>
                    <div style="margin: 20px 0">
                        <el-button type="text">文字按钮</el-button>
                        <el-button type="text" disabled>文字按钮</el-button>
                        <el-button type="primary" icon="el-icon-edit"></el-button>
                        <el-button type="primary" icon="el-icon-share"></el-button>
                        <el-button type="primary" icon="el-icon-delete"></el-button>
                        <el-button type="primary" icon="el-icon-search">搜索</el-button>
                        <el-button type="primary">
                            上传
                            <i class="el-icon-upload el-icon--right"></i>
                        </el-button>
                    </div>
                    <div>
                        <el-button-group>
                            <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
                            <el-button type="primary">
                                下一页
                                <i class="el-icon-arrow-right el-icon--right"></i>
                            </el-button>
                        </el-button-group>
                        <el-button-group>
                            <el-button type="primary" icon="el-icon-edit"></el-button>
                            <el-button type="primary" icon="el-icon-share"></el-button>
                            <el-button type="primary" icon="el-icon-delete"></el-button>
                        </el-button-group>
                    </div>
                    <el-button type="primary" :loading="true">加载中</el-button>
                    <div>
                        <el-button>默认按钮</el-button>
                        <el-button size="medium">中等按钮</el-button>
                        <el-button size="small">小型按钮</el-button>
                        <el-button size="mini">超小按钮</el-button>
                    </div>
                    <div style="margin-top: 20px">
                        <el-button round>默认按钮</el-button>
                        <el-button size="medium" round>中等按钮</el-button>
                        <el-button size="small" round>小型按钮</el-button>
                        <el-button size="mini" round>超小按钮</el-button>
                    </div>
                </div>
            </section>

            <section>
                <h4>Icon 图标</h4>

                <i class="el-icon-edit"></i>
                <i class="el-icon-share"></i>
                <i class="el-icon-delete"></i>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </section>

            <section>
                <h4>Color 色彩</h4>
                <el-row :gutter="20">
                    <el-col :span="4">
                        <div class="color-box bg-blue">
                            Blue
                            #409EFF
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="color-box bg-success">
                            Success
                            #67C23A
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="color-box bg-warning">
                            Warning
                            #E6A23C
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="color-box bg-danger">
                            Danger
                            #F56C6C
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="color-box bg-info">
                            Info
                            #909399
                        </div>
                    </el-col>
                </el-row>
            </section>

            <section>
                <h4>Container 布局容器</h4>
                <el-container>
                    <el-header>header</el-header>
                    <el-container>
                        <el-aside width="200px">Aside</el-aside>
                        <el-main>main</el-main>
                    </el-container>
                    <el-footer>footer</el-footer>
                </el-container>
            </section>

            <section class="demo-layout">
                <h4>Layout 布局</h4>
                <el-row>
                    <el-col :span="24">
                        <div class="grid-content bg-purple-dark"></div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light"></div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple-light"></div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple-light"></div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple-light"></div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="4">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content bg-purple-light"></div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content bg-purple-light"></div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content bg-purple-light"></div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :span="6" :offset="6">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="6" :offset="6">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :span="6" :offset="6">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12" :offset="6">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                </el-row>
                <el-row type="flex" class="row-bg">
                    <el-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple-light"></div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="center">
                    <el-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple-light"></div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="end">
                    <el-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple-light"></div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-between">
                    <el-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple-light"></div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="space-around">
                    <el-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple-light"></div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                        <div class="grid-content bg-purple-light"></div>
                    </el-col>
                    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                        <div class="grid-content bg-purple"></div>
                    </el-col>
                    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                        <div class="grid-content bg-purple-light"></div>
                    </el-col>
                </el-row>
            </section>
        </section>
    </div>
</template>

<script>
export default {
    name: 'base'
};
</script>
<style lang="scss" space>
.base {
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .el-header,
    .el-main,
    .el-aside,
    .el-footer {
        text-align: center;
    }

    .el-main {
        background-color: #e9eef3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    .el-footer,
    .el-header {
        background-color: #b3c0d1;
        color: #333;
        line-height: 60px;
    }

    .el-header {
        padding: 0 20px;
        box-sizing: border-box;
    }
    .el-aside {
        background-color: #d3dce6;
        text-align: center;
        line-height: 200px;
    }

    .color-box {
        border-radius: 4px;
        padding: 20px;
        height: 74px;
        box-sizing: border-box;
        color: #fff;
        font-size: 14px;
    }
    .bg-blue {
        background-color: #409eff;
    }
    .bg-success {
        background-color: #67c23a;
    }
    .bg-warning {
        background-color: #e6a23c;
    }
    .bg-danger {
        background-color: #f56c6c;
    }
    .bg-info {
        background-color: #909399;
    }
}
</style>
