<template>
    <el-menu :default-active="activeIndex" menu-trigger="click" class="el-menu-demo" mode="horizontal" @select="handleSelect" unique-opened>
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
    </el-menu>
</template>
<script>
  export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        showModuleUpload() {
            this.$store.commit('User/SET_SHOW_MODULEUPLOAD', true)
        }
    }
  }
</script>