<template>
    <Modal
    v-model="showModuleUpload"
    width="450"
    title="模块上传"
    :loading="loading"
    ok-text="上传"
    @on-ok="handleSubmit('formModuleUpload')">
        <Form ref="formModuleUpload" :model="formModuleUpload" :rules="ruleModuleUpload" label-position="left" :label-width="100">
            <FormItem prop="logo" label="Logo">
                <template v-if="logo.status === 'finished'">
                    <img :src="logo.url">
                    <div class="demo-upload-list-cover">
                        <Icon type="ios-eye-outline" @click.native="handleView(logo.name)"></Icon>
                        <Icon type="ios-trash-outline" @click.native="handleRemove(logo)"></Icon>
                    </div>
                </template>
                <template v-else>
                    <Progress v-if="logo.showProgress" :percent="logo.percentage" hide-info></Progress>
                </template>
                <Upload
                    ref="uploadLogo"
                    :show-upload-list="false"
                    :default-file-list="defaultLogo"
                    :on-success="handleSuccess"
                    :format="['jpg','jpeg','png']"
                    :max-size="2048"
                    :on-format-error="handleFormatError"
                    :on-exceeded-size="handleMaxSize"
                    :before-upload="handleBeforeUpload"
                    multiple
                    :headers="header"
                    type="drag"
                    action="##"
                    style="display: inline-block;width:58px;">
                    <div style="width: 58px;height:58px;line-height: 58px;">
                        <Icon type="ios-camera" size="20"></Icon>
                    </div>
                </Upload>
                <Modal title="图片预览" v-model="showLogoPreview">
                    <img :src="'https://###' + imgName" style="width: 100%">
                </Modal>
            </FormItem>
            <FormItem prop="info" label="功能描述">
                <Input type="textarea" v-model="formModuleUpload.info" placeholder="描述模块基本功能">
                </Input>
            </FormItem>
            <FormItem prop="funName" label="函数名">
                <Input type="text" v-model="formModuleUpload.funName" placeholder="function">
                </Input>
            </FormItem>
            <FormItem prop="otherName" label="别名">
                <Input type="text" v-model="formModuleUpload.herName" placeholder="请输入">
                </Input>
            </FormItem>
            <FormItem prop="moduleClass" label="类别">
                <Select v-model="formModuleUpload.moduleClass">
                    <Option v-for="item in moduleClassList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </FormItem>
            <FormItem prop="ownership" label="知识产权">
                <Input type="text" v-model="formModuleUpload.ownership" placeholder="请输入">
                </Input>
            </FormItem>
            <FormItem prop="contact" label="联系人">
                <Input type="text" v-model="formModuleUpload.contact" placeholder="请输入">
                </Input>
            </FormItem>
            <FormItem prop="contactTel" label="联系人电话">
                <Input type="tel" v-model="formModuleUpload.contactTel" placeholder="请输入">
                </Input>
            </FormItem>
            <FormItem prop="contactMail" label="联系人邮箱">
                <Input type="email" v-model="formModuleUpload.contactMail" placeholder="请输入">
                </Input>
            </FormItem>
            <!-- <FormItem prop="user">
                <Input type="text" v-model="formModuleUpload.user" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formModuleUpload.password" placeholder="Password">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem> -->
        </Form>
    </Modal>
</template>

<script>

  export default {
    name: 'moduleUpload',
    data () {
        return {
            header: {'Content-Type':'multipart/form-data'},
            loading: true,
            moduleClassList: [{
                    label: '1',
                    value: '1'
                }
            ],
            formModuleUpload: {
                info: '',
                funName: '',
                otherName: '',
                moduleClass: '',
                ownership: '',
                contact: '',
                contactTel: '',
                contactMail: '',
            },
            ruleModuleUpload: {
                info: [{
                    required: true, 
                    message: 'Please fill in.',
                    trigger: 'blur',
                }],
                funName: [{
                    required: true, 
                    message: 'Please fill in.',
                    trigger: 'blur',
                }],
                otherName: [{
                    required: true, 
                    message: 'Please fill in.',
                    trigger: 'blur',
                }],
                moduleClass: [{
                    required: true, 
                    message: 'Please fill in.',
                    trigger: 'blur',
                }],
                ownership: [{
                    required: true, 
                    message: 'Please fill in.',
                    trigger: 'blur',
                }],
                contact: [{
                    required: true, 
                    message: 'Please fill in.',
                    trigger: 'blur',
                }],
                contactTel: [{
                    required: true, 
                    message: 'Please fill in.',
                    trigger: 'blur',
                }],
                contactMail: [{
                    required: true, 
                    message: 'Please fill in.',
                    trigger: 'blur',
                }]
            },
            logo: [],
            defaultLogo: [{
                name: '',
                url: ''
            }],
            imgName: '',
            showLogoPreview: false,
        }
    },
    computed: {
        showModuleUpload: {
            get () {
                return this.$store.state.User.showModuleUpload
            },
            set (value) {
                this.$store.commit('User/SET_SHOW_MODULEUPLOAD', value)
            }
        }
    },
    watch: {
        showModuleUpload (newVal) {
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
                        this.$http.post(this.$api.moduleUpload, formModuleUpload)
                        .then(res => {
                            if(res.code === '200'){
                                const { id } = res.id
                                this.$store.commit('User/SET_SHOW_MODULEUPLOAD', false)
                                setTimeout(() => {
                                    // 刷新页面
                                    this.loading = false
                                    this.$Message.error('上传成功！')
                                }, 100)
                                
                            } else {
                                this.$Message.error('上传失败！')
                            }
                        })

                    } catch(error) {
                        this.loading = false
                        this.$Message.error('上传失败！')

                    }
                } else {
                    this.$Message.error('上传失败！')
                    setTimeout(() => {
                        this.loading = false

                    }, 200)
                }
            })
        },
        handleView (name) {
            this.imgName = name;
            this.visible = true;
        },
        handleRemove (file) {
            const fileList = this.$refs.upload.fileList;
            this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
        },
        handleSuccess (res, file) {
            file.url = '';
            file.name = '';
            console.log(file)
            var forms = new FormData()
            var configs = {
                headers: {'Content-Type':'multipart/form-data'}
            };
            forms.append('file', file.target.files[0])

            this.$http.postFile(this.$api.upload, forms, configs)
            .then(res => {
                if(res.code === '200'){
                    
                    
                } else {
                    this.$Message.error('操作失败！')
                }
            })
    
        },
        handleFormatError (file) {
            this.$Notice.warning({
                title: 'The file format is incorrect',
                desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
            });
        },
        handleMaxSize (file) {
            this.$Notice.warning({
                title: 'Exceeding file size limit',
                desc: 'File  ' + file.name + ' is too large, no more than 2M.'
            });
        },
        handleBeforeUpload () {
            
        },
        cancel() {
            
        }
    },
    mounted() {
        this.logo = this.$refs.uploadLogo.fileList.slice(-1)
    }
  }
</script>

<style>

</style>
