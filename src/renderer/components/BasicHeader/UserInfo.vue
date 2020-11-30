<template>
    <div class="user-avatar" @click="showLogin">
        <Avatar icon="ios-person" size="small"  />
    </div>
    
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'userInfo',
    data() {
        return {

        }
    },
    components: {
      
    },
    computed: {
    
    },
    methods: {
        showLogin () {
            this.$store.commit('User/SET_SHOW_LOGIN', true)
        },
        
    }
}
</script>


<style scoped>
.user-avatar {
    display: inline-block;
    position: absolute;
    top: 20px;
    right: 20px;
}
</style>
