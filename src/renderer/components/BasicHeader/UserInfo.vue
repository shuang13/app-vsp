<template>
    <div class="user-info">
        <!-- <div class="user-avatar" @click="showLogin">
            <Avatar icon="ios-person" size="small"  />
        </div> -->
        <!-- <Card icon="ios-options" :padding="0" shadow style="width: 300px;">
            <CellGroup>
                <Cell title="Only show titles" />
                <Cell title="Display label content" label="label content" />
                <Cell title="Display right content" extra="details" />
                <Cell title="Link" extra="details" to="/components/button" />
                <Cell title="Open link in new window" to="/components/button" target="_blank" />
                <Cell title="Disabled" disabled />
                <Cell title="Selected" selected />
                <Cell title="With Badge" to="/components/badge">
                    <Badge :count="10" slot="extra" />
                </Cell>
                
            </CellGroup>
        </Card> -->
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
