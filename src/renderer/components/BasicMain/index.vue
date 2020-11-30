<template>
	<div class="basicMain">
        <TabList></TabList> 
	</div>
</template>

<script>
import TabList from './TabList'
export default {
	name: 'basicMain',
    data() {
        return {
            
        }
    },
    components: {
       	TabList,
    },
    computed: {
    
    },
    methods: {
     
    }
}
</script>


<style scoped>
.basicMain {
    width: 100%;
    height: 100%;
}
</style>
