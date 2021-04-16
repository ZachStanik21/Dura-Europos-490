<template>
    <div id="wikidata-search-wrapper" @keydown="searchWikidata">
        <div id="search-wrapper" v-show="showSearch">
            <p><strong>Submit at least one of the following to search Wikidata items:</strong></p>
            <input placeholder="Accession Number" v-model="accessionSearch"/>
            <input placeholder="Title" v-model="titleSearch"/>
            <input placeholder="Group (Instance of)" v-model="groupSearch"/>
            <button @click="searchWikidata">SEARCH</button>
        </div>
        <div id="results-wrapper" v-show="!showSearch">
            <div v-for="result in results" :key="result.id" class="result-group" @click="$emit('wikidata-item-select')">
                <img :src="result.imageLink" />
                <div class="properties-wrapper">
                    <p class="result"> {{ result.title }} </p>
                    <p class="result"> {{ result.identifier }} </p>
                    <p class="result"> {{ result.accession }} </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'WikidataSearch',
  props: ['image'],
  data() {
      return {
          accessionSearch: "",
          titleSearch: "",
          groupSearch: "",
          showSearch: true,
      }
  },
  methods: {
      searchWikidata(event) {
          if (event.type == "click" || event.which == 13) {
            this.showSearch = false;
          }
      },
  },
  computed: {
      results() {
          return [
              {
                  id: 0,
                  imageLink: this.image['img_link'],
                  title: this.image['name'],
                  identifier: "Q0123456789",
                  accession: "1934.435",
              },
              {
                  id: 1,
                  imageLink: this.image['img_link'],
                  title: this.image['name'],
                  identifier: "Q0123456789",
                  accession: "1934.435",
              },
              {
                  id: 2,
                  imageLink: this.image['img_link'],
                  title: this.image['name'],
                  identifier: "Q0123456789",
                  accession: "1934.435",
              },
          ];

      }
  }
}
</script>

<style scoped>
#wikidata-search-wrapper {
    background-color: white;
    position: fixed;
    width: 400px;
    height: 300px;
    border-radius: 10px;
    border: 2px solid #C4A484;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 102;
    padding-left: 25px;
    padding-right: 25px;
    box-sizing: border-box;
}

p {
    color: #C4A484;
}

input {
    box-sizing: border-box;
    width: 100%;
    height: 38px;
    border-radius: 20px;
    border: 2px solid #C4A484;
    outline: none;
    padding-left: 15px;
    color: #C4A484;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 15px;
}

input:focus {
    border-color: #D9B592;
}

::placeholder {
    color: #C4A484;
    opacity: 0.8;
}

button {
    border-radius: 20px;
    background-color: #C4A484;
    color: white;
    border: none;
    outline: none;
    font-weight: 700;
    width: 100px;
    height: 38px;
    font-size: 16px;
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
    height: 130px;
    width: 130px;
    border-radius: 4px;
    grid-column: 1/2;
}

#results-wrapper {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
}

.result {
    margin: 0 0 15px 0;
}

#properties-wrapper {
    grid-column: 2/3;
}

.result-group {
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    justify-items: start;
    margin: 20px 0;
}
</style>