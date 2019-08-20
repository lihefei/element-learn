<template>
    <div class="index">
        <el-container>
            <el-aside class="nav">
                <router-link to="/">Base</router-link>
                <router-link to="/form1">Form1</router-link>
                <router-link to="/form2">Form2</router-link>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {};
    },
    components: {}
};
</script>

<style lang="scss" scoped>
.nav {
    background-color: #d3dce6;

    a {
        display: block;
        padding: 20px;
        line-height: 2;

        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
}
</style>

