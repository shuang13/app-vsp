<template>
  <div class="top-bar">
    
    <div class="top-bar-main">
      
        <div class="top-bar-menu">
            
            <MainMenu class="top-bar-menu-tabs"></MainMenu>
            <div class="top-bar-menu-user">
                <UserInfo></UserInfo>
                
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import UserInfo from './UserInfo'
import MainMenu from './MainMenu'
export default {
    name: 'basicHeader',
    data() {
        return {
            
        }
    },
    components: {
        UserInfo,
        MainMenu
    },
    computed: {
    
    },
    methods: {
        
    }
}
</script>


<style scoped>
    .top-bar {
    }
    .top-bar-menu-tabs {

    }
</style>
