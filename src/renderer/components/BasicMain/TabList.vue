<template>
    <Tabs :value="activeTab" class="i-tab" type="card" closable :animated="false" :draggable="true" @on-tab-remove="handleTabRemove" @on-drag-drop="handleDragDrop">
        <TabPane class="i-tabPane" v-for="(tab, index) in tabList" :key="index" :label="tab.label" :name="tab.name">
            <div class="tab-inner">
                {{ tab.label }}
                <Flow ></Flow>
            </div>
        </TabPane>
    </Tabs>
</template>
<script>
    import Flow from '../Flow/Index'
    export default {
        name: 'TabList',
        data () {
            return {
                activeTab: 'name1',
                tabList: [
                    {
                        label: '标签一',
                        name: 'name1'
                    }
                ]    
            }
        },
        components: {
            Flow
        },
        methods: {
            handleTabRemove (name) {
                this['tab' + name] = false;
            },
            handleDragDrop (name, newName, a, b, names) {
                // names 为调整后的 name 集合
                this.tabList.splice(b, 1, ...this.tabList.splice(a, 1, this.tabList[b]));
            }
        },
        mounted () {
            console.log(this.activeTab, "22")
        }
    }
</script>
<style>
.i-tab {
    width: 100%;
    height: 100%;
    background: rgb(227, 232, 238);


}

.i-tabPane {
    width: 100%;
    height: 100%;
    border: 1px solid #dcdee2;
    background: #fff;
    margin-top: -17px;

}

.tab-inner {
    width: 100%;
    height: 1000px;

}
</style>