<template>
    <div id="header-main">
        <h1>Dura Europos Cataloguing Interface</h1>
        <div v-if="authenticated" @click="$emit('logout')">
            <h3>LOGOUT</h3>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: [
      "authenticated",
  ],
}
</script>

<style scoped>
#header-main { 
    background-color: #C4A484;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 25px;
    z-index: 100;
}

html[dir="ltr"] #header-main {
    left: 0;
}

html[dir="rtl"] #header-main {
    right: 0;
}

h1 {
    margin: 0;
    font-size: 35px;
    float: left;
}

html[dir="ltr"] h1 {
    float: left;
}

html[dir="rtl"] h1 {
    float: right;
}

h3 {
    cursor: pointer;
    float: right;
    margin: 10px 50px 0 0;
}

html[dir="ltr"] h3 {
    float: right;
    margin: 10px 50px 0 0;
}

html[dir="rtl"] h3 {
    float: left;
    margin: 10px 0 0 50px;
}
</style>