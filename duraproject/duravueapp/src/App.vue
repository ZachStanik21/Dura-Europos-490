<template>
    <Header :authenticated="authenticated" @logout="logout"/>
    <Login v-if="!authenticated" @authenticate="authenticate"/>
    <SearchArea v-if="authenticated" />
</template>

<script>
import Header from './components/Header.vue'
import Login from './components/Login.vue'
import SearchArea from './components/SearchArea.vue'


export default {
    name: 'App',
    data () {
        return {
            authenticated: false,
        }
    },
    components: {
        Login,
        Header,
        SearchArea,
    },
    methods: {
        authenticate() {
            this.authenticated = true;
        },
        logout() {
            this.authenticated = false;
        }
    }
}
</script>

<style>
#app {
    font-family: Chivo, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
