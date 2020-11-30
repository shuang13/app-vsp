<template>
	<div class="basicSider">
		<div class="sider-header"></div>
		<div class="sider-main">
			<FileTree></FileTree>
		</div>
		<div class="sider-footer"></div>
	</div>
</template>

<script>
import FileTree from './FileTree'
export default {
	name: 'basicSider',
    data() {
        return {
            
        }
    },
    components: {
       	FileTree
    },
    computed: {
    
    },
    methods: {
     
    }
}
</script>


<style scoped>
.basicSider {
	width: 100%;
	height: 100%;
}
</style>
