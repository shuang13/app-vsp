<template>
    <Modal
    v-model="showLogin"
    width="350"
    title="登录"
    :loading="loading"
    ok-text="登录"
    @on-ok="handleSubmit('formLogin')">
        <Form ref="formLogin" :model="formLogin" :rules="ruleLogin">
            <FormItem prop="user">
                <Input type="text" v-model="formLogin.user" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formLogin.password" placeholder="Password">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
        </Form>
    </Modal>
</template>

<script>

  export default {
    name: 'login',
    data () {
        return {
            loading: true,
            formLogin: {
                user: '',
                password: ''
            },
            ruleLogin: {
                user: [
                    { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                    { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                ]
            }
        }
    },
    computed: {
        showLogin: {
            get () {
                return this.$store.state.User.showLogin
            },
            set (value) {
                this.$store.commit('User/SET_SHOW_LOGIN', value)
            }
        }
    },
    watch: {
        showLogin (newVal) {
            if (newVal) {
              // this.loading = false
            }
        }
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    try {
                        this.$http.post(this.$api.login, formLogin)
                        .then(res => {
                            if(res.code === '200'){
                                const { id } = res.id
                                localStorage.setItem('userId', id)
                                this.$store.commit('User/SET_SHOW_LOGIN', false)
                                setTimeout(() => {
                                    if (this.$route.name === 'home') {
                                        // 刷新页面
                                    } else {
                                      let redirect = this.redirect || '/home'
                                      this.$router.push({ path: redirect })
                                    }
                                    this.loading = false
                                }, 100)
                                
                            } else {
                                this.$Message.error('操作失败！')
                            }
                        })

                    } catch(error) {
                        this.loading = false
                        this.$Message.error('登录失败！')

                    }
                } else {
                    this.$Message.error('登录失败！')
                    setTimeout(() => {
                        this.loading = false

                    }, 200)
                }
            })
        },
        cancel() {
            
        }
    }
  }
</script>

<style>

</style>
