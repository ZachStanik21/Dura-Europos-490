<template>
    <div id="search-container">
        <div id="search-input-wrapper" @keydown="searchImages">
            <input id="search" tabindex="1" placeholder="Search title..." v-model="titleText">
            <GroupSelect @group-select="groupSelect" :clear="clear"/>
            <SortSelect @sort-select="sortSelect" :clear="clear"/>
            <button tabindex="4" @click="searchImages">SEARCH</button>
        </div>
        <div id="results">
            <p v-show="submission">Submission successful!</p>
            <img v-for="image in displayImages" :key="image['id']" :src="image['img_link']" @click="$emit('single-image', image)">
        </div>
    </div>
</template>

<script>
import GroupSelect from './GroupSelect.vue'
import SortSelect from './SortSelect.vue'

export default {
  name: 'SearchArea',
  props: [
      'clear',
      'submission'
  ],
  data () {
      return {
          titleText: "",
          groupText: "",
          sortText: "",
          images: [],
          displayImages: [],
      }
  },
  components: {
        GroupSelect,
        SortSelect,
  },
  mounted() {
      this.setImages();
  },
  methods: {
      groupSelect(group) {
          this.groupText = group;
      },
      sortSelect(sort) {
          this.sortText = sort;
      },
      searchImages(event) {
          if (event.type == "click" || event.which == 13) {
            if (this.groupText == "all groups") {
                this.groupText = "";
            }

            if (this.groupText && this.titleText) {
                this.displayImages = this.images.filter(image => image['groups'].includes(this.groupText) && image['name'].toLowerCase().includes(this.titleText.toLowerCase()));
            }
            else if (this.titleText) {
                this.displayImages = this.images.filter(image => image['name'].toLowerCase().includes(this.titleText.toLowerCase()));
            }
            else if (this.groupText) {
                this.displayImages = this.images.filter(image => image['groups'].includes(this.groupText));
            }
            else {
                this.displayImages = this.images;
            }

            this.sortText = "";
            this.$emit('search');
          }
      },
      setImages() {
          this.images = require('../assets/imageData.json');
      },
  },
  watch: {
      clear(newClear) {
          if (newClear) {
              this.groupText = "";
              this.titleText = "";
              this.sortText = "";
              this.displayImages = [];
              this.$emit('data-ready');
          }
      }
  }
}
</script>

<style scoped>
p {
    margin: 0 10px 0 10px;
    color: #C4A484;
    font-size: 18px;
}

#search-container {
    display: grid;
    margin: 130px auto 0 auto;
    width: 950px;
    grid-template-columns: 1fr 3fr;
    gap: 25px;
}

#search-input-wrapper {
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 250px;
    position: fixed;
}

#search {
    width: 100%;
    height: 45px;
    border-radius: 10px;
    border: 2px solid #C4A484;
    outline: none;
    padding-left: 15px;
    padding-right: 15px;
    color: #C4A484;
    font-size: 18px;
    font-weight: 400;
    box-sizing: border-box;
}

#results {
    grid-column: 2 / 3;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(auto-fill, 185px);
    row-gap: 15px;
}

#search:focus {
    border-color: #D9B592;
}

::placeholder {
    color: #C4A484;
}

button {
    width: 100px;
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

img {
    object-fit: cover;
    display: block;
    margin: auto;
    height: 185px;
    width: 185px;
    border-radius: 10px;
    border: 2px solid #C4A484;
    transition: all .2s ease-in-out;
}

img:hover {
    transform: scale(1.08);
    cursor: pointer;
}
</style>