<template>
    <div id="data-submission-wrapper">
        <button id="cancel-button" @click="$emit('cancel')">CANCEL</button>
        <button id="submit-button" @click="$emit('submit')">SUBMIT</button>
    </div>
</template>

<script>
export default {
  name: 'DataSubmission',
  data() {
      return {
      }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped>
#data-submission-wrapper {
    background-color: white;
    position: fixed;
    width: 400px;
    height: 100px;
    border-radius: 10px;
    border: 2px solid #C4A484;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 103;
    padding: 30px 30px 0 30px;
    box-sizing: border-box;
}

button {
    border-radius: 20px;
    outline: none;
    font-weight: 700;
    width: 150px;
    height: 38px;
    font-size: 16px;
}

#cancel-button {
    background-color: white;
    color: #DF5959;
    border: 2px solid #C4A484;
    float: left;
}

html[dir="ltr"] #cancel-button {
    float: left;
}

html[dir="rtl"] #cancel-button {
    float: right;
}

#submit-button {
    float: right;
    background-color: #C4A484;
    color: white;
    border: none;
    float: right;
}

html[dir="ltr"] #submit-button {
    float: right;
}

html[dir="rtl"] #submit-button {
    float: left;
}

#submit-button:focus {
    background-color: #D9B592;
}

#submit-button:hover {
    background-color: #D9B592;
    cursor: pointer;
}

#cancel-button:focus {
    background-color: #AAAAAA;
}

#cancel-button:hover {
    background-color: #EEEEEE;
    cursor: pointer;
}
</style>