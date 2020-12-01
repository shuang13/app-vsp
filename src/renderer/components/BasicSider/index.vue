<template>
	<div class="basicSider">
		<div class="sider-header">
			Project
			<Icon class="i-icon-sider-close" type="md-close"  />
		</div>
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
.sider-header {
	padding-left: 5px;
	width: 100%;
	height: 24px;
	background: #226AA5;
	line-height: 24px;
	color: #fff;
}
.i-icon-sider-close {
	display: inline-block;
	position: absolute;
	top: 5px;
	right: 5px;
	color: #fff;
}
.basicSider {
	width: 100%;
	height: 100%;
}
</style>
