<template>
    <div id="group-dropdown">
        <input id="group-input" placeholder="Search groups..." v-model.trim="groupText" @focusin="toggle" @focusout="toggle">
        <div id="group-list" v-show="listVisible">
            <div v-for="group in groupList" :key="group" class="group" v-show="groupVisible(group)" @mousedown="selectGroup(group)">
                {{ group }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'GroupSelect',
  data () {
      return {
          groupList: [],
          groupText: "",
          listVisible: false,
          selectedGroup: "",
      }
  },
  mounted() {
      this.setGroupList();
  },
  methods: {
      groupVisible(group) {
          let groupName = group.toLowerCase();
          let currInput = this.groupText.toLowerCase();
          return groupName.includes(currInput) || currInput == "";
      },
      toggle() {
          this.listVisible = !this.listVisible;
      },
      selectGroup(group) {
          this.selectedGroup = group;
          this.groupText = group;
          this.$emit("group-select", group.toLowerCase());
      },
      setGroupList() {
          this.groupList = ["All Groups", "Ungrouped", "Amulet", "Armor", "Bead", "Jar", "Mask", "Painting", "Sword"];
      },
  },
}
</script>

<style scoped>
#group-dropdown {
    position: relative;
}

#group-input {
    width: 100%;
    height: 45px;
    border-radius: 10px;
    border: 2px solid #C4A484;
    outline: none;
    padding-left: 15px;
    color: #C4A484;
    font-size: 18px;
    font-weight: 400;
    position: relative;
    z-index: 4;
    box-sizing: border-box;
}

#group-input:focus {
    border-radius: 10px 10px 0 0;
}

#group-list {
    position: absolute;
    box-sizing: content-box;
    width: 100%;
    height: auto;
    max-height: 220px;
    overflow-y: scroll;
    overflow-x: hidden;
    top: 70;
    background-color: #C4A484;
    z-index: 3;
    margin: 0;
    border-radius: 0 0 10px 10px;
}

.group {
    cursor: pointer;
    height: 30px;
    width: 100%;
    color: white;
    padding-left: 15px;
    padding-top: 7px;
    font-size: 16px;
}

.group:hover {
    background-color: #D9B592;
}

::placeholder {
    color: #C4A484;
}
</style>