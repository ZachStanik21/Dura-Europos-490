<template>
    <Header :authenticated="authenticated" @logout="logout"/>
    <Login v-if="!authenticated" @authenticate="authenticate"/>
    <SearchArea v-show="authenticated && groupView" :clear="clear" :submission="submission" @search="setSubmission" @data-ready="setClear" @single-image="singleImageView"/>
    <SingleImage v-if="!groupView && authenticated" :image="image" @group-view-on="groupViewOn"/>
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
            clear: false,
            submission: false,
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
            this.clear = true;
            this.submission = false;
        },
        singleImageView(image) {
            this.groupView = false;
            this.image = image;
        },
        groupViewOn(clear, submission) {
            this.groupView = true;
            if (clear) {
                this.clear = true;
            }
            if (submission) {
                this.submission = true;
            }
        },
        setClear() {
            this.clear = false;
        },
        setSubmission() {
            this.submission = false;
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
