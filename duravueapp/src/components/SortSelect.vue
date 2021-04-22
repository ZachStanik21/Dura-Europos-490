<template>
    <div id="sort-dropdown">
        <div id="sort-input" tabindex="3" @focusin="toggle" @focusout="toggle">
            {{ sortText }}
        </div>
        <div id="sort-list" v-show="listVisible">
            <div v-for="sort in sortList" :key="sort" class="sort" @mousedown="selectSort(sort)">
                {{ sort }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SortSelect',
  props: ['clear'],
  data () {
      return {
          sortList: ["Title", "Accession no.", "Date created"],
          listVisible: false,
          selectedSort: "",
          sortText: "Sort by...",
      }
  },
  methods: {
      toggle() {
          this.listVisible = !this.listVisible;
      },
      selectSort(sort) {
          this.selectedSort = sort;
          this.sortText = sort;
          this.$emit("sort-select", sort);
      },
  },
  watch: {
      clear(newClear) {
          if (newClear) {
            this.selectedSort = "";
            this.sortText = "Sort by...";
          }
      }
  }
}
</script>

<style scoped>
#sort-dropdown {
    position: relative;
}

#sort-input {
    width: 100%;
    height: 45px;
    border-radius: 10px;
    border: 2px solid #C4A484;
    outline: none;
    color: #C4A484;
    font-size: 18px;
    font-weight: 400;
    position: relative;
    z-index: 2;
    padding: 9px 15px 0 15px;
    box-sizing: border-box;
    cursor: pointer;
}

#sort-input:focus {
    border-radius: 10px 10px 0 0;
}

#sort-list {
    position: absolute;
    box-sizing: content-box;
    width: 100%;
    height: auto;
    overflow-x: hidden;
    background-color: #C4A484;
    top: 40px;
    z-index: 0;
    margin: 0;
    border-radius: 0 0 10px 10px;
}

.sort {
    cursor: pointer;
    height: 30px;
    width: 100%;
    color: white;
    padding: 7px 15px 0 15px;
    font-size: 16px;
}

.sort:hover {
    background-color: #D9B592;
}

::placeholder {
    color: #C4A484;
    opacity: 0.8;
}
</style>