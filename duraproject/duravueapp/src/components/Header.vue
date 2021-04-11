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

h1 {
    margin: 0;
    font-size: 35px;
    float: left;
}

h3 {
    float: right;
    margin: 10px 50px 0 0;
    cursor: pointer;
}
</style>