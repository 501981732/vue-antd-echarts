<template>
    <div class="login">
        <transition name='fade-top'>
            <a-form :form="form" class='form' v-show='showLogin'>
                <h2>XX系统</h2>
                <a-form-item :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol" label="账号">
                    <a-input v-decorator="[
          'username',
          {rules: [{ required: true, message: 'Please input your name' }]}
        ]" placeholder="Please input your ID" />
                </a-form-item>
                <a-form-item :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol" label="密码">
                    <a-input v-decorator="[
          'nickname',
          {rules: [{ required: checkNick, message: 'Please input your nickname' }]}
        ]" placeholder="Please input your password" />
                </a-form-item>
                <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
                </a-form-item>
                <a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
                    <a-button type="primary" @click="check">
                        登录
                    </a-button>
                </a-form-item>
            </a-form>
        </transition>
    </div>
</template>
<script>
const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};
const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 6, offset: 9 },
};
export default {
    data() {
        return {
            checkNick: true,
            formItemLayout,
            formTailLayout,
            form: this.$form.createForm(this),
            showLogin: false
        };
    },
    mounted() {
        this.showLogin = true
    },
    methods: {
        check() {
            this.form.validateFields(
                (err) => {
                    if (!err) {
                        console.info('success');
                        this.$router.push({name:'index'})
                    }
                },
            );
        },
    },
};
</script>
<style lang="less">
.login {
    height: 100%;
    width: 100%;
    background: #f1f2f7;
    overflow: hidden;
}

.form {
    width: 400px;
    background: #fff;
    border-radius: 10px;
    margin: 200px auto;
    padding: 10px 0;
}
</style>