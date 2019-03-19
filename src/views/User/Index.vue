<template>
    <div class="">
        <a-layout>
            <a-layout-sider width="200" style="background: #fff">
                <a-switch defaultChecked @change="changeTheme" checkedChildren="dark" unCheckedChildren="light" />
                <a-menu mode="inline" :defaultSelectedKeys="['1']" :defaultOpenKeys="['sub1']" :style="{ height: '100%', borderRight: 0 }" :theme="theme" @click='handleClick'>
                    <a-sub-menu key="user" @titleClick='titleClick'>
                        <span slot="title"><a-icon type="user" />住院管理</span>
                        <a-menu-item key="info1" >患者信息</a-menu-item>
                        <a-menu-item key="info2">住院信息</a-menu-item>
                        <a-menu-item key="info3">诊疗信息</a-menu-item>
                        <a-menu-item key="info4">报表输出</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub2">
                        <span slot="title"><a-icon type="laptop" />subnav 2</span>
                        <a-menu-item key="5">option5</a-menu-item>
                        <a-menu-item key="6">option6</a-menu-item>
                        <a-menu-item key="7">option7</a-menu-item>
                        <a-menu-item key="8">option8</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub3">
                        <span slot="title"><a-icon type="notification" />subnav 3</span>
                        <a-menu-item key="9">option9</a-menu-item>
                        <a-menu-item key="10">option10</a-menu-item>
                        <a-menu-item key="11">option11</a-menu-item>
                        <a-menu-item key="12">option12</a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <a-layout style="padding: 0 24px 24px">
                <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
                    <router-view />
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            theme: 'dark',
        }
    },
    mounted() {

    },
    methods: {
        changeTheme (checked) {
          this.theme = checked ? 'dark' : 'light'
        },
        handleClick(e) {
            let path = `/${e.keyPath[1]}/${e.keyPath[0]}`
            this.$router.push({path})
        },
        titleClick({ key, domEvent }) {
            // console.log(key,domEvent)
        },
    },
    watch: {

    },
    computed: {

    }
}
</script>
<style lang='less' scoped>
</style>