<template>
    <div id="app">
        <div>
            D:\\tools\\DuGuanjia File\\DuGuanjia/DuGuanjiaSvc.exe
        </div>
        <p>Version:{{ version }}</p>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <button @click="handleDisplayWindow(true)">隐藏窗口到系统托盘</button>
        <button @click="handleDisplayWindow(false)">展示窗口到系统托盘</button>
        <!-- <router-view/> -->
    </div>
</template>
<script>
export default {
    name: 'app',
    data() {
        return {
            version: window.myAPI.getVersion()
        };
    },
    methods: {
        handleDisplayWindow(data) {}
    }
};
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
