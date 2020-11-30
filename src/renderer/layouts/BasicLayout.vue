<template>
    <Layout class="i-layout">
        <header class="i-header">
            <BasicHeader></BasicHeader>
        </header>
        <Layout class="i-main">
            <Split v-model="split1">
                <div slot="left" class="i-main-sider" hide-trigger>
                    <BasicSider></BasicSider>
                </div>
                <Content slot="right" class="i-main-content">
                    <BasicMain></BasicMain>
                </Content>
                <!-- <Sider slot="right" class="i-sider" hide-trigger>Sider</Sider> -->

            </Split>
            
            
        </Layout>
        <Footer class="i-footer">Footer</Footer>
        <Login></Login> 
        <ModuleUpload></ModuleUpload>
    </Layout>
</template>

<script>
import BasicHeader from '@/components/BasicHeader/Index'
import BasicMain from '@/components/BasicMain/Index'
import BasicSider from '@/components/BasicSider/Index'
import BasicFooter from '@/components/BasicFooter/Index'
import Login from '@/components/Login/Index'
import ModuleUpload from '@/components/ModuleUpload/Index'
export default {
    data () {
        return {
          split1: 0.1
        }
    },
    computed: {
     
    },
    components: {
        BasicHeader,
        BasicSider,
        BasicMain,
        Login,
        ModuleUpload
    },
    methods: {
        showLogin() {
        },
        
    },
    created () {
     
    },

    mounted () {
      
    },
    destroy () {
     
    }
}
</script>

<style scoped>
.i-layout {
    width: 100%;
    height: 100%;
}
.i-header {
    background: #fff;

}
.i-main {
    width: 100%;
    height: 100%;
    border: 1px solid #dcdee2;
}
.i-main-content {
    width: 100%;
    height: 100%;
    padding: 10px;
    border: 1px solid #dcdee2;
    background: rgb(227, 232, 238);

}
.i-main-sider {
    min-width: 100%;
    height: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    background: #fff;
    border: 1px solid #dcdee2;

}
.i-footer {
    background: #fff;
    border: 1px solid #dcdee2;

}

</style>
