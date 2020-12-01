<template>
    <el-menu :default-active="activeIndex" menu-trigger="click" class="el-menu" mode="horizontal" @select="handleSelect" unique-opened>
        <el-submenu index="1">
            <template slot="title">文件</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">视图</template>
            <el-menu-item index="2-1" @click="showModuleUpload">模块上传</el-menu-item>
            <el-submenu index="2-2">
                <template slot="title">选项1</template>
                <el-menu-item index="2-2-1">选项1-1</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="3">插件</el-menu-item>
        <el-submenu  class="user-avatar" index="4">
            <template slot="title">
                <Avatar icon="ios-person" size="small"  />
            </template>
            <el-menu-item index="4-1" @click="showLogin">登录</el-menu-item>
            <el-menu-item index="4-2" @click="showLogin">注册</el-menu-item>
            
        </el-submenu>
        
    </el-menu>
</template>
<script>
  export default {
    data() {
        return {
            activeIndex: '1',
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        showModuleUpload() {
            this.$store.commit('User/SET_SHOW_MODULEUPLOAD', true)
        },
        showLogin () {
            this.$store.commit('User/SET_SHOW_LOGIN', true)
        },
    }
  }
</script>
<style scoped>
.user-avatar {
    position: absolute;
    width: 70px;
    top: 0px;
    right: 20px;
}
.user-avatar .el-menu--horizontal {
    width: 100px;
}

.el-menu--popup li:hover {
    background: #d5e8fc;
}
</style>