webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/SearchArea.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/components/SearchArea.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _GroupSelect_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GroupSelect.vue */ \"./src/components/GroupSelect.vue\");\n/* harmony import */ var _SortSelect_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SortSelect.vue */ \"./src/components/SortSelect.vue\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'SearchArea',\n  props: ['clear', 'submission'],\n  data: function data() {\n    return {\n      titleText: \"\",\n      groupText: \"\",\n      sortText: \"\",\n      images: [],\n      displayImages: []\n    };\n  },\n  components: {\n    GroupSelect: _GroupSelect_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    SortSelect: _SortSelect_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n  mounted: function mounted() {\n    this.setImages();\n  },\n  methods: {\n    groupSelect: function groupSelect(group) {\n      this.groupText = group;\n    },\n    sortSelect: function sortSelect(sort) {\n      this.sortText = sort;\n    },\n    searchImages: function searchImages(event) {\n      var _this = this;\n\n      if (event.type == \"click\" || event.which == 13) {\n        if (this.groupText == \"all groups\") {\n          this.groupText = \"\";\n        }\n\n        if (this.groupText && this.titleText) {\n          this.displayImages = this.images.filter(function (image) {\n            return image['groups'].includes(_this.groupText) && image['name'].toLowerCase().includes(_this.titleText.toLowerCase());\n          });\n        } else if (this.titleText) {\n          this.displayImages = this.images.filter(function (image) {\n            return image['name'].toLowerCase().includes(_this.titleText.toLowerCase());\n          });\n        } else if (this.groupText) {\n          this.displayImages = this.images.filter(function (image) {\n            return image['groups'].includes(_this.groupText);\n          });\n        } else {\n          this.displayImages = this.images;\n        }\n\n        if (this.sortText) {\n          if (this.sortText == \"Title\") {\n            this.displayImages.sort(function (e1, e2) {\n              e1['name'] < e2['name'];\n            });\n          } else if (this.sortText == \"Accession no.\") {\n            this.displayImages.sort(function (e1, e2) {\n              e1['accession'] < e2['accession'];\n            });\n          } else {\n            this.displayImages.sort(function (e1, e2) {\n              e1['date'] < e2['date'];\n            });\n          }\n        }\n\n        this.sortText = \"\";\n        this.$emit('search');\n      }\n    },\n    setImages: function setImages() {\n      this.images = __webpack_require__(/*! ../assets/imageData.json */ \"./src/assets/imageData.json\");\n    }\n  },\n  watch: {\n    clear: function clear(newClear) {\n      if (newClear) {\n        this.groupText = \"\";\n        this.titleText = \"\";\n        this.sortText = \"\";\n        this.displayImages = [];\n        this.$emit('data-ready');\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9TZWFyY2hBcmVhLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEFyZWEudnVlPzczMWEiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgaWQ9XCJzZWFyY2gtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJzZWFyY2gtaW5wdXQtd3JhcHBlclwiIEBrZXlkb3duPVwic2VhcmNoSW1hZ2VzXCI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJzZWFyY2hcIiB0YWJpbmRleD1cIjFcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCB0aXRsZS4uLlwiIHYtbW9kZWw9XCJ0aXRsZVRleHRcIj5cbiAgICAgICAgICAgIDxHcm91cFNlbGVjdCBAZ3JvdXAtc2VsZWN0PVwiZ3JvdXBTZWxlY3RcIiA6Y2xlYXI9XCJjbGVhclwiLz5cbiAgICAgICAgICAgIDxTb3J0U2VsZWN0IEBzb3J0LXNlbGVjdD1cInNvcnRTZWxlY3RcIiA6Y2xlYXI9XCJjbGVhclwiLz5cbiAgICAgICAgICAgIDxidXR0b24gdGFiaW5kZXg9XCI0XCIgQGNsaWNrPVwic2VhcmNoSW1hZ2VzXCI+U0VBUkNIPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwicmVzdWx0c1wiPlxuICAgICAgICAgICAgPHAgdi1zaG93PVwic3VibWlzc2lvblwiPlN1Ym1pc3Npb24gc3VjY2Vzc2Z1bCE8L3A+XG4gICAgICAgICAgICA8aW1nIHYtZm9yPVwiaW1hZ2UgaW4gZGlzcGxheUltYWdlc1wiIDprZXk9XCJpbWFnZVsnaWQnXVwiIDpzcmM9XCJpbWFnZVsnaW1nX2xpbmsnXVwiIEBjbGljaz1cIiRlbWl0KCdzaW5nbGUtaW1hZ2UnLCBpbWFnZSlcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEdyb3VwU2VsZWN0IGZyb20gJy4vR3JvdXBTZWxlY3QudnVlJ1xuaW1wb3J0IFNvcnRTZWxlY3QgZnJvbSAnLi9Tb3J0U2VsZWN0LnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnU2VhcmNoQXJlYScsXG4gIHByb3BzOiBbXG4gICAgICAnY2xlYXInLFxuICAgICAgJ3N1Ym1pc3Npb24nXG4gIF0sXG4gIGRhdGEgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0aXRsZVRleHQ6IFwiXCIsXG4gICAgICAgICAgZ3JvdXBUZXh0OiBcIlwiLFxuICAgICAgICAgIHNvcnRUZXh0OiBcIlwiLFxuICAgICAgICAgIGltYWdlczogW10sXG4gICAgICAgICAgZGlzcGxheUltYWdlczogW10sXG4gICAgICB9XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICAgICAgR3JvdXBTZWxlY3QsXG4gICAgICAgIFNvcnRTZWxlY3QsXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgICB0aGlzLnNldEltYWdlcygpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgICBncm91cFNlbGVjdChncm91cCkge1xuICAgICAgICAgIHRoaXMuZ3JvdXBUZXh0ID0gZ3JvdXA7XG4gICAgICB9LFxuICAgICAgc29ydFNlbGVjdChzb3J0KSB7XG4gICAgICAgICAgdGhpcy5zb3J0VGV4dCA9IHNvcnQ7XG4gICAgICB9LFxuICAgICAgc2VhcmNoSW1hZ2VzKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT0gXCJjbGlja1wiIHx8IGV2ZW50LndoaWNoID09IDEzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ncm91cFRleHQgPT0gXCJhbGwgZ3JvdXBzXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyb3VwVGV4dCA9IFwiXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmdyb3VwVGV4dCAmJiB0aGlzLnRpdGxlVGV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUltYWdlcyA9IHRoaXMuaW1hZ2VzLmZpbHRlcihpbWFnZSA9PiBpbWFnZVsnZ3JvdXBzJ10uaW5jbHVkZXModGhpcy5ncm91cFRleHQpICYmIGltYWdlWyduYW1lJ10udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnRpdGxlVGV4dC50b0xvd2VyQ2FzZSgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnRpdGxlVGV4dCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUltYWdlcyA9IHRoaXMuaW1hZ2VzLmZpbHRlcihpbWFnZSA9PiBpbWFnZVsnbmFtZSddLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy50aXRsZVRleHQudG9Mb3dlckNhc2UoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ncm91cFRleHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlJbWFnZXMgPSB0aGlzLmltYWdlcy5maWx0ZXIoaW1hZ2UgPT4gaW1hZ2VbJ2dyb3VwcyddLmluY2x1ZGVzKHRoaXMuZ3JvdXBUZXh0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlJbWFnZXMgPSB0aGlzLmltYWdlcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuc29ydFRleHQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3J0VGV4dCA9PSBcIlRpdGxlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5SW1hZ2VzLnNvcnQoKGUxLCBlMikgPT4ge2UxWyduYW1lJ10gPCBlMlsnbmFtZSddfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc29ydFRleHQgPT0gXCJBY2Nlc3Npb24gbm8uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5SW1hZ2VzLnNvcnQoKGUxLCBlMikgPT4ge2UxWydhY2Nlc3Npb24nXSA8IGUyWydhY2Nlc3Npb24nXX0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5SW1hZ2VzLnNvcnQoKGUxLCBlMikgPT4ge2UxWydkYXRlJ10gPCBlMlsnZGF0ZSddfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNvcnRUZXh0ID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NlYXJjaCcpO1xuICAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzZXRJbWFnZXMoKSB7XG4gICAgICAgICAgdGhpcy5pbWFnZXMgPSByZXF1aXJlKCcuLi9hc3NldHMvaW1hZ2VEYXRhLmpzb24nKTtcbiAgICAgIH0sXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgICBjbGVhcihuZXdDbGVhcikge1xuICAgICAgICAgIGlmIChuZXdDbGVhcikge1xuICAgICAgICAgICAgICB0aGlzLmdyb3VwVGV4dCA9IFwiXCI7XG4gICAgICAgICAgICAgIHRoaXMudGl0bGVUZXh0ID0gXCJcIjtcbiAgICAgICAgICAgICAgdGhpcy5zb3J0VGV4dCA9IFwiXCI7XG4gICAgICAgICAgICAgIHRoaXMuZGlzcGxheUltYWdlcyA9IFtdO1xuICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdkYXRhLXJlYWR5Jyk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbnAge1xuICAgIG1hcmdpbjogMCAxMHB4IDAgMTBweDtcbiAgICBjb2xvcjogI0M0QTQ4NDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbiNzZWFyY2gtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIG1hcmdpbjogMTMwcHggYXV0byAwIGF1dG87XG4gICAgd2lkdGg6IDk1MHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbiAgICBnYXA6IDI1cHg7XG59XG5cbiNzZWFyY2gtaW5wdXQtd3JhcHBlciB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbiNzZWFyY2gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDNEE0ODQ7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBjb2xvcjogI0M0QTQ4NDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4jcmVzdWx0cyB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIDE4NXB4KTtcbiAgICByb3ctZ2FwOiAxNXB4O1xufVxuXG4jc2VhcmNoOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICNEOUI1OTI7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjQzRBNDg0O1xufVxuXG5idXR0b24ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzRBNDg0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuYnV0dG9uOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDlCNTkyO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNEOUI1OTI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbWcge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IDE4NXB4O1xuICAgIHdpZHRoOiAxODVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDNEE0ODQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbn1cblxuaW1nOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbjwvc3R5bGU+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNUNBO0FBOENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFwRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/SearchArea.vue?vue&type=script&lang=js\n");

/***/ })

})