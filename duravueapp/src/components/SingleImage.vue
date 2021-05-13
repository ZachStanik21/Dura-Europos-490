<template>
    <div id="container">
        <div id="info-container">
            <p @click="$emit('group-view-on', false, false)" id="search-return">Back to search</p>
            <div id="image-wrapper">
                <img id="selected-image" :src="image['img_link']">
            </div>
            <div id="image-properties-submit-wrapper">
                <button id="submit-button" @click="toggleForeground('submission')">SUBMIT DATA</button>
                <div id="properties-wrapper">
                    <p><strong>Wikidata Identifier</strong></p>
                    <p id="wikidata-identifier" v-show="selectedItem"> {{ selectedItem }} </p>
                    <button id="wikidata-search" @click="toggleForeground('wikidata')">SEARCH</button>
                    <div id="image-properties" v-for="(val, name) in imageProps" :key="name">
                        <p><strong> {{ name }} </strong></p>
                        <p v-if="val"> {{ val }} </p>
                        <input v-else />
                    </div>
                </div>
            </div>
        </div>
        <div id="background-blur" v-show="background" @click="toggleForeground('')">
        </div>
        <WikidataSearch :image="image" v-if="wikidata" @wikidata-item-select="selectWikidata" />
        <DataSubmission v-show="submission" @cancel="toggleForeground('')" @submit="$emit('group-view-on', true, true)" />
    </div>
</template>

<script>
import WikidataSearch from "./WikidataSeach.vue"
import DataSubmission from "./DataSubmission.vue"

export default {
  name: 'SingleImage',
  props: ['image'],
  components: {
      WikidataSearch,
      DataSubmission,
  },
  data() {
      return {
          background: false,
          foreground: "",
          wikidata: false,
          submission: false,
          selectedItem: "",
      }
  },
  computed: {
      imageProps() {
        let imageProps = {};
        for (const property in this.image) {
            if (property != "link" && property != "img_link" && property != "groups" && property != "id") {
                let newProperty = property.split('_');
                for (let i = 0; i < newProperty.length; i++) {
                    newProperty[i] = newProperty[i].charAt(0).toUpperCase() + newProperty[i].slice(1);
                }
                newProperty = newProperty.join(' ');
                imageProps[newProperty] = this.image[property];
            }
        }
        return imageProps;
    },
  },
  methods: {
      toggleForeground(foreground) {
          if (foreground) {
              this.foreground = foreground;
          }
          
          if(this.foreground == "wikidata") {
              this.wikidata = !this.wikidata;
          }
          else {
              this.submission = !this.submission;
          }

          this.background = !this.background;
      },
      selectWikidata(identifier) {
          this.selectedItem = identifier;
          this.toggleForeground('');
      },
  }
}
</script>

<style scoped>
#info-container {
    display: grid;
    margin: 130px auto 0 auto;
    width: 100%;
    grid-gap: 20px;
    grid-template-columns: 1fr 3fr 2fr 1fr;
    min-height: 0;
    min-width: 0;
    align-items: start;
    grid-template-rows: minmax(0, 550px);
}

#image-wrapper {
    grid-column: 2 / 3;
    position: relative;
    width: 100%;
}

#image-wrapper::after {
    display: block;
    content: "";
    padding-bottom: 80%;
}

#selected-image {
    position: absolute;
    top: 0;
    object-fit: contain;
    display: block;
    height: 100%;
    width: 100%;
    left: 0;
}

html[dir="ltr"] #selected-image {
    left: 0;
}

html[dir="rtl"] #selected-image {
    right: 0;
}

#search-return {
    grid-column: 1 / 2;
    color: #C4A484;
    cursor: pointer;
    margin: 0;
    padding-left: 20px;
    padding-right: 20px;
}

#image-properties-submit-wrapper {
    grid-column: 3/4;
    width: 100%;
    height: 100%;
    color: #C4A484;
}

#properties-wrapper {
    width: 100%;
    height: 90%;
    overflow-y: scroll;
    overflow-wrap: break-word;
}

input {
    width: 50%;
    height: 35px;
    border-radius: 10px;
    border: 2px solid #C4A484;
    outline: none;
    padding-left: 10px;
    padding-right: 10px;
    color: #C4A484;
    font-size: 16px;
    font-weight: 400;
    box-sizing: border-box;
}

input:focus {
    border-color: #D9B592;
}

::placeholder {
    color: #C4A484;
}

#submit-button {
    width: 175px;
    height: 40px;
    font-size: 16px;
}

#wikidata-search {
    width: 80px;
    height: 35px;
    font-size: 14px;
}

button {
    border-radius: 20px;
    background-color: #C4A484;
    color: white;
    border: none;
    outline: none;
    font-weight: 700;
}

button:focus {
    background-color: #D9B592;
}

button:hover {
    background-color: #D9B592;
    cursor: pointer;
}

#container {
    width: 100%;
    height: 100%;
}

#background-blur {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: white;
    opacity: 0.8;
    top: 0;
    left: 0;
    z-index: 101;
}

#wikidata-identifier, #wikidata-search {
    display: inline-block;
    margin: 0 15px 0 0;
}

html[dir="ltr"] #wikidata-identifier {
    margin: 0 15px 0 0;
}

html[dir="ltr"] #wikidata-search {
    margin: 0 15px 0 0;
}

html[dir="rtl"] #wikidata-identifier {
    margin: 0 0 0 15px;
}

html[dir="rtl"] #wikidata-search {
    margin: 0 0 0 15px;
}
</style>