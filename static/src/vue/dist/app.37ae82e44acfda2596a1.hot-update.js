webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/SearchArea.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SearchArea.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _GroupSelect_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GroupSelect.vue */ \"./src/components/GroupSelect.vue\");\n/* harmony import */ var _SortSelect_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SortSelect.vue */ \"./src/components/SortSelect.vue\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'SearchArea',\n  props: ['clear', 'submission'],\n  data: function data() {\n    return {\n      titleText: \"\",\n      groupText: \"\",\n      sortText: \"\",\n      images: [],\n      displayImages: []\n    };\n  },\n  components: {\n    GroupSelect: _GroupSelect_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    SortSelect: _SortSelect_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n  mounted: function mounted() {\n    this.setImages();\n  },\n  methods: {\n    groupSelect: function groupSelect(group) {\n      this.groupText = group;\n    },\n    sortSelect: function sortSelect(sort) {\n      console.log(sort);\n      this.sortText = sort;\n    },\n    searchImages: function searchImages(event) {\n      var _this = this;\n\n      console.log(\"event\");\n\n      if (event.type == \"click\" || event.which == 13) {\n        if (this.groupText == \"all groups\") {\n          this.groupText = \"\";\n        }\n\n        if (this.groupText && this.titleText) {\n          this.displayImages = this.images.filter(function (image) {\n            return image['groups'].includes(_this.groupText) && image['name'].toLowerCase().includes(_this.titleText.toLowerCase());\n          });\n        } else if (this.titleText) {\n          this.displayImages = this.images.filter(function (image) {\n            return image['name'].toLowerCase().includes(_this.titleText.toLowerCase());\n          });\n        } else if (this.groupText) {\n          this.displayImages = this.images.filter(function (image) {\n            return image['groups'].includes(_this.groupText);\n          });\n        } else {\n          this.displayImages = this.images;\n        }\n\n        if (this.sortText) {\n          if (this.sortText == \"Title\") {\n            this.displayImages.sort(function (e1, e2) {\n              e1['name'] < e2['name'];\n            });\n          } else if (this.sortText == \"Accession no.\") {\n            this.displayImages.sort(function (e1, e2) {\n              e1['accession'] < e2['accession'];\n            });\n          } else {\n            this.displayImages.sort(function (e1, e2) {\n              e1['date'] < e2['date'];\n            });\n          }\n        }\n\n        this.$emit('search');\n      }\n    },\n    setImages: function setImages() {\n      this.images = __webpack_require__(/*! ../assets/imageData.json */ \"./src/assets/imageData.json\");\n    }\n  },\n  watch: {\n    clear: function clear(newClear) {\n      if (newClear) {\n        this.groupText = \"\";\n        this.titleText = \"\";\n        this.sortText = \"\";\n        this.displayImages = [];\n        this.$emit('data-ready');\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9TZWFyY2hBcmVhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEFyZWEudnVlPzczMWEiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgaWQ9XCJzZWFyY2gtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJzZWFyY2gtaW5wdXQtd3JhcHBlclwiIEBrZXlkb3duPVwic2VhcmNoSW1hZ2VzXCI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJzZWFyY2hcIiB0YWJpbmRleD1cIjFcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCB0aXRsZS4uLlwiIHYtbW9kZWw9XCJ0aXRsZVRleHRcIj5cbiAgICAgICAgICAgIDxHcm91cFNlbGVjdCBAZ3JvdXAtc2VsZWN0PVwiZ3JvdXBTZWxlY3RcIiA6Y2xlYXI9XCJjbGVhclwiLz5cbiAgICAgICAgICAgIDxTb3J0U2VsZWN0IEBzb3J0LXNlbGVjdD1cInNvcnRTZWxlY3RcIiA6Y2xlYXI9XCJjbGVhclwiLz5cbiAgICAgICAgICAgIDxidXR0b24gdGFiaW5kZXg9XCI0XCIgQGNsaWNrPVwic2VhcmNoSW1hZ2VzXCI+U0VBUkNIPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwicmVzdWx0c1wiPlxuICAgICAgICAgICAgPHAgdi1zaG93PVwic3VibWlzc2lvblwiPlN1Ym1pc3Npb24gc3VjY2Vzc2Z1bCE8L3A+XG4gICAgICAgICAgICA8aW1nIHYtZm9yPVwiaW1hZ2UgaW4gZGlzcGxheUltYWdlc1wiIDprZXk9XCJpbWFnZVsnaWQnXVwiIDpzcmM9XCJpbWFnZVsnaW1nX2xpbmsnXVwiIEBjbGljaz1cIiRlbWl0KCdzaW5nbGUtaW1hZ2UnLCBpbWFnZSlcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEdyb3VwU2VsZWN0IGZyb20gJy4vR3JvdXBTZWxlY3QudnVlJ1xuaW1wb3J0IFNvcnRTZWxlY3QgZnJvbSAnLi9Tb3J0U2VsZWN0LnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnU2VhcmNoQXJlYScsXG4gIHByb3BzOiBbXG4gICAgICAnY2xlYXInLFxuICAgICAgJ3N1Ym1pc3Npb24nXG4gIF0sXG4gIGRhdGEgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZVRleHQ6IFwiXCIsXG4gICAgICAgICAgZ3JvdXBUZXh0OiBcIlwiLFxuICAgICAgICAgIHNvcnRUZXh0OiBcIlwiLFxuICAgICAgICAgIGltYWdlczogW10sXG4gICAgICAgICAgZGlzcGxheUltYWdlczogW10sXG4gICAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICAgICAgR3JvdXBTZWxlY3QsXG4gICAgICAgIFNvcnRTZWxlY3QsXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgICB0aGlzLnNldEltYWdlcygpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgICBncm91cFNlbGVjdChncm91cCkge1xuICAgICAgICAgIHRoaXMuZ3JvdXBUZXh0ID0gZ3JvdXA7XG4gICAgICB9LFxuICAgICAgc29ydFNlbGVjdChzb3J0KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coc29ydClcbiAgICAgICAgICB0aGlzLnNvcnRUZXh0ID0gc29ydDtcbiAgICAgIH0sXG4gICAgICBzZWFyY2hJbWFnZXMoZXZlbnQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImV2ZW50XCIpO1xuICAgICAgICAgIGlmIChldmVudC50eXBlID09IFwiY2xpY2tcIiB8fCBldmVudC53aGljaCA9PSAxMykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXBUZXh0ID09IFwiYWxsIGdyb3Vwc1wiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncm91cFRleHQgPSBcIlwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5ncm91cFRleHQgJiYgdGhpcy50aXRsZVRleHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlJbWFnZXMgPSB0aGlzLmltYWdlcy5maWx0ZXIoaW1hZ2UgPT4gaW1hZ2VbJ2dyb3VwcyddLmluY2x1ZGVzKHRoaXMuZ3JvdXBUZXh0KSAmJiBpbWFnZVsnbmFtZSddLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy50aXRsZVRleHQudG9Mb3dlckNhc2UoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy50aXRsZVRleHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlJbWFnZXMgPSB0aGlzLmltYWdlcy5maWx0ZXIoaW1hZ2UgPT4gaW1hZ2VbJ25hbWUnXS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMudGl0bGVUZXh0LnRvTG93ZXJDYXNlKCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZ3JvdXBUZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5SW1hZ2VzID0gdGhpcy5pbWFnZXMuZmlsdGVyKGltYWdlID0+IGltYWdlWydncm91cHMnXS5pbmNsdWRlcyh0aGlzLmdyb3VwVGV4dCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5SW1hZ2VzID0gdGhpcy5pbWFnZXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNvcnRUZXh0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc29ydFRleHQgPT0gXCJUaXRsZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUltYWdlcy5zb3J0KChlMSwgZTIpID0+IHtlMVsnbmFtZSddIDwgZTJbJ25hbWUnXX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNvcnRUZXh0ID09IFwiQWNjZXNzaW9uIG5vLlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUltYWdlcy5zb3J0KChlMSwgZTIpID0+IHtlMVsnYWNjZXNzaW9uJ10gPCBlMlsnYWNjZXNzaW9uJ119KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUltYWdlcy5zb3J0KChlMSwgZTIpID0+IHtlMVsnZGF0ZSddIDwgZTJbJ2RhdGUnXX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2VhcmNoJyk7XG4gICAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldEltYWdlcygpIHtcbiAgICAgICAgICB0aGlzLmltYWdlcyA9IHJlcXVpcmUoJy4uL2Fzc2V0cy9pbWFnZURhdGEuanNvbicpO1xuICAgICAgfSxcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICAgIGNsZWFyKG5ld0NsZWFyKSB7XG4gICAgICAgICAgaWYgKG5ld0NsZWFyKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ3JvdXBUZXh0ID0gXCJcIjtcbiAgICAgICAgICAgICAgdGhpcy50aXRsZVRleHQgPSBcIlwiO1xuICAgICAgICAgICAgICB0aGlzLnNvcnRUZXh0ID0gXCJcIjtcbiAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5SW1hZ2VzID0gW107XG4gICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2RhdGEtcmVhZHknKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxucCB7XG4gICAgbWFyZ2luOiAwIDEwcHggMCAxMHB4O1xuICAgIGNvbG9yOiAjQzRBNDg0O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuI3NlYXJjaC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWFyZ2luOiAxMzBweCBhdXRvIDAgYXV0bztcbiAgICB3aWR0aDogOTUwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICAgIGdhcDogMjVweDtcbn1cblxuI3NlYXJjaC1pbnB1dC13cmFwcGVyIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuI3NlYXJjaCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0M0QTQ4NDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGNvbG9yOiAjQzRBNDg0O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiNyZXN1bHRzIHtcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgMTg1cHgpO1xuICAgIHJvdy1nYXA6IDE1cHg7XG59XG5cbiNzZWFyY2g6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogI0Q5QjU5Mjtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICNDNEE0ODQ7XG59XG5cbmJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDNEE0ODQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5idXR0b246Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEOUI1OTI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q5QjU5MjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmltZyB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGhlaWdodDogMTg1cHg7XG4gICAgd2lkdGg6IDE4NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0M0QTQ4NDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xufVxuXG5pbWc6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wOCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuPC9zdHlsZT4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0NBO0FBK0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFyRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/SearchArea.vue?vue&type=script&lang=js\n");

/***/ })

})