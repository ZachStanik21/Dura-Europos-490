<template>
    <Header :authenticated="authenticated" @logout="logout"/>
    <Login v-if="!authenticated" @authenticate="authenticate"/>
    <SearchArea v-show="authenticated && groupView" @single-image="singleImageView"/>
    <SingleImage v-show="!groupView && authenticated" :image="image" @group-view-on="groupViewOn"/>
</template>

<script>
import Header from './components/Header.vue'
import Login from './components/Login.vue'
import SearchArea from './components/SearchArea.vue'
import SingleImage from './components/SingleImage.vue'

export default {
    name: 'App',
    data () {
        return {
            authenticated: false,
            groupView: true,
            image: {},
        }
    },
    components: {
        Login,
        Header,
        SearchArea,
        SingleImage,
    },
    methods: {
        authenticate() {
            this.authenticated = true;
        },
        logout() {
            this.authenticated = false;
            this.groupView = true;
        },
        singleImageView(image) {
            this.groupView = false;
            this.image = image;
        },
        groupViewOn() {
            this.groupView = true;
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
