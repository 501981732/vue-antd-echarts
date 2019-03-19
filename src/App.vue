<template>
    <div id="app">
<!--         <a-layout id="components-layout-demo-top-side-2">
            <a-layout-header class="header">
                <div class="logo" />
                <a-menu theme="dark" mode="horizontal" :defaultSelectedKeys="['']" :style="{ lineHeight: '64px' }">
                    <a-menu-item v-for='item in menuRouter' :key="item.path" @click='goRoute'>{{item.title}}</a-menu-item>
                </a-menu>
            </a-layout-header> -->
            <router-view />
        <!-- </a-layout> -->
    </div>
</template>
<script>
export default {
    name: 'app',
    data() {
        return {
            menuRouter: [{
                path:'home',
                title:'首页'
            },{
                path:'user',
                title:'用户'
            },{
                path:'3',
                title:'3'
            },{
                path:'4',
                title:'4'
            }]
        }
    },
    methods: {
        goRoute({ item, key, keyPath }) {
            this.$router.push({ path: `/${key}` })
        }
    },
}
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    width: 100%
}

#components-layout-demo-top-side-2 .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, .2);
    margin: 16px 28px 16px 0;
    float: left;
}
</style>