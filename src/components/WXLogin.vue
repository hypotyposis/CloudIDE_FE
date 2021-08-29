<template>
<div>
    <h1>WeChat Login</h1>
    <el-button v-on:click="wechatLogin">微信登录</el-button>
</div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: {
        wechatLogin() {
            window.location.href = "https://open.weixin.qq.com/connect/qrconnect?appid=wx4799092721e40691&redirect_uri=http%3A%2F%2Fdev.ac-code.com%2Fcallback&response_type=code&scope=snsapi_login#wechat_redirect";
        }
    },
    mounted() {

        var obj = new WxLogin({
        self_redirect:true,
        id:"login_container", 
        appid: "wx4799092721e40691", 
        scope: "snsapi_login", 
        redirect_uri: "http%3A%2F%2Fhdk.ac-code.com%2Fmain",
        state: "",
        style: "black",
        href: ""
        });
    }
}
</script>

<style scoped>

</style>