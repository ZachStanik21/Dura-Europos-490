<template>
    <div id="login-form" @keydown="authenticate">
        <p v-if="attempt" id="attempt-warning">Username or password incorrect, please try again.</p>
        <h3>Username</h3>
        <input v-model="username" />
        <h3>Password</h3>
        <input v-model="password" type="password"/>
        <button @click="authenticate">LOGIN</button>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
      return {
          username: "",
          password: "",
          attempt: false,
      }
  },
  methods: {
      authenticate(event) {
          if (event.type == "click" || event.which == 13) {
            if (this.username == "username" && this.password == "password") {
                this.$emit("authenticate");
            }
            else {
                this.attempt = true;
                this.username = "";
                this.password = "";
            }
          }
      }
  },
}
</script>

<style scoped>
#login-form {
    width: 300px;
    height: auto;
    margin: 225px auto 0 auto;
    color: #C4A484; 
}

input {
    width: 100%;
    height: 42px;
    border-radius: 20px;
    border: 2px solid #C4A484;
    outline: none;
    padding-left: 15px;
    color: #C4A484;
    font-size: 18px;
    font-weight: 400;
    box-sizing: border-box;
}

input:focus {
    border-color: #D9B592;
}

button {
    margin-top: 23px;
    width: 90px;
    height: 40px;
    border-radius: 20px;
    background-color: #C4A484;
    color: white;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 700;
}

button:focus {
    background-color: #D9B592;
}

button:hover {
    background-color: #D9B592;
    cursor: pointer;
}

#attempt-warning {
    color: #DF5959;
    font-weight: 400;
}
</style>