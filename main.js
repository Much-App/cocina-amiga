/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../imgs/background.png */ \"./src/imgs/background.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,400;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,500;1,700;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,900;1,400;1,500;1,900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  font-size: 10px;\\n  /* Color Palette */\\n  --pine-green: 1, 121, 111;\\n  --mustard: 225,173,1;\\n  --warm-beige: 243, 231,211;\\n  --rhubard-red: 173,7,29;\\n  --light-green: 186,247,51;\\n  --black: 0, 0, 0;\\n  --white: 255, 255, 255;\\n  /* text fonts from google fonts*/\\n  --merriweather: \\\"Merriweather\\\", serif;\\n  --open-sans: \\\"Open Sans\\\", sans-serif;\\n  --playfair: \\\"Playfair Display\\\", serif;\\n  --roboto: \\\"Roboto\\\", sans-serif;\\n}\\n\\n#content {\\n  display: grid;\\n  grid-template: minmax(110px, 16vh) minmax(1200px, 1fr)/1fr;\\n  grid-template-areas: \\\"header\\\" \\\"main\\\";\\n  padding-top: 6vh;\\n  background: rgb(var(--rhubard-red));\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n  min-height: 100vh;\\n  min-width: 100vw;\\n  overflow: hidden;\\n  gap: 4vh;\\n}\\n\\n#header {\\n  grid-area: header;\\n  text-align: center;\\n  height: minmax(100px, 15vh);\\n}\\n#header > img {\\n  width: auto;\\n  height: minmax(100px, 15vh);\\n  background-color: rgba(var(--white), 0.55);\\n  border-radius: 3vw;\\n  padding: 8px;\\n}\\n\\n#tabs {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  justify-content: start;\\n  align-items: center;\\n  margin: 7px;\\n  gap: 18px;\\n  position: fixed;\\n  top: 6px;\\n  left: 0;\\n  width: 32vw;\\n  height: 4vh;\\n  font-family: var(--roboto);\\n}\\n#tabs > button {\\n  align-items: center;\\n  background-color: rgba(255, 255, 255, 0.7);\\n  border: 2px solid #000;\\n  box-sizing: border-box;\\n  color: #000;\\n  cursor: pointer;\\n  display: inline-flex;\\n  fill: #000;\\n  font-family: var(--roboto);\\n  font-size: 16px;\\n  font-weight: 500;\\n  height: 44px;\\n  justify-content: center;\\n  letter-spacing: 0;\\n  line-height: 24px;\\n  min-width: 130px;\\n  outline: 0;\\n  padding: 0 17px;\\n  text-align: center;\\n  text-decoration: none;\\n  transition: all 0.3s;\\n}\\n#tabs > button:focus {\\n  background-color: rgb(255, 255, 255);\\n}\\n#tabs > button:hover {\\n  border-color: rgb(var(--mustard));\\n  fill: rgb(var(--mustard));\\n  background-color: rgb(255, 255, 255);\\n}\\n#tabs > button:active {\\n  border-color: rgb(var(--mustard));\\n  fill: rgb(var(--mustard));\\n  background-color: rgb(255, 255, 255);\\n}\\n\\n#home-tab {\\n  display: flex;\\n  flex-flow: row nowrap;\\n  height: 500px;\\n  width: auto;\\n  gap: 30px;\\n  justify-self: center;\\n  align-items: center;\\n}\\n#home-tab > .intro {\\n  display: flex;\\n  flex-flow: column nowrap;\\n  position: relative;\\n  top: 60px;\\n  width: 600px;\\n  height: 290px;\\n  background-color: rgba(255, 255, 255, 0.7);\\n  padding: 50px;\\n  border-radius: 35%;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 10px;\\n}\\n#home-tab > .intro > h1 {\\n  font-size: 32px;\\n  font-style: italic;\\n  font-weight: 700;\\n  font-family: var(--merriweather);\\n}\\n#home-tab > .intro > p {\\n  font-size: 28px;\\n  font-family: var(--roboto);\\n  line-height: 30px;\\n}\\n#home-tab > div > img {\\n  height: 280px;\\n  width: auto;\\n  border-radius: 40%;\\n  box-shadow: 8px 8px 8px rgba(var(--rhubard-red));\\n}\\n\\n#menu-tab {\\n  display: grid;\\n  grid-template-rows: repeat(auto-fit, 200px);\\n  grid-template-columns: 1fr 1fr 1fr 1fr;\\n  gap: 50px;\\n  margin: 0 50px;\\n  justify-content: start;\\n}\\n#menu-tab > div {\\n  background-color: rgba(255, 255, 255, 0.8);\\n  border-radius: 10px;\\n  height: max-content;\\n  padding: 10px;\\n  margin: 0;\\n  font-family: var(--roboto);\\n  text-align: center;\\n}\\n\\n.menu-img {\\n  height: 180px;\\n  width: auto;\\n  border-radius: 20px;\\n}\\n\\n#contact-tab {\\n  display: grid;\\n  grid-template-rows: 180px 200px 200px;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-areas: \\\"message message\\\" \\\"boletin feedback\\\" \\\"menus feedback\\\";\\n  column-gap: 25px;\\n  row-gap: 20px;\\n  margin: 0 10vw;\\n  height: 80vh;\\n  background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(200, 200, 200, 0.9) 100%);\\n  padding: 25px;\\n  border-radius: 50px;\\n}\\n#contact-tab > div {\\n  justify-content: center;\\n  align-items: center;\\n}\\n#contact-tab > #contact-msg {\\n  display: flex;\\n  grid-area: message;\\n  border-radius: 60px;\\n  line-height: 180px;\\n  width: 55vw;\\n  justify-self: center;\\n  justify-content: center;\\n}\\n#contact-tab > #contact-msg > h1 {\\n  width: 50vw;\\n  display: inline-block;\\n  vertical-align: middle;\\n  line-height: normal;\\n  text-align: center;\\n  font-size: 28px;\\n  font-weight: 700;\\n  font-family: var(--merriweather);\\n  letter-spacing: 1px;\\n}\\n#contact-tab > #email-list {\\n  display: flex;\\n  flex-flow: column nowrap;\\n  grid-area: boletin;\\n  background-color: rgba(255, 255, 255, 0.4);\\n  border-radius: 30%;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 10px;\\n}\\n#contact-tab > #email-list > p {\\n  width: 80%;\\n  display: inline-block;\\n  vertical-align: middle;\\n  line-height: normal;\\n  text-align: justify;\\n  font-size: 24px;\\n  font-weight: 500;\\n  font-family: var(--roboto);\\n  letter-spacing: 1px;\\n  text-shadow: 0.5px 0.5px 0.5px whitesmoke;\\n}\\n#contact-tab > #email-list > input {\\n  width: 65%;\\n  height: 20px;\\n  font-size: 18px;\\n}\\n#contact-tab > #email-list > button {\\n  width: 14%;\\n  background-color: rgba(var(--warm-beige), 0.9);\\n  font-size: 1.1vw;\\n  font-weight: 400;\\n  font-family: var(--roboto);\\n  letter-spacing: 1px;\\n  border-radius: 4px;\\n}\\n#contact-tab > #download-menu {\\n  display: flex;\\n  flex-flow: column nowrap;\\n  grid-area: menus;\\n  background-color: rgba(255, 255, 255, 0.4);\\n  border-radius: 30%;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 10px;\\n  justify-self: center;\\n  width: 80%;\\n}\\n#contact-tab > #download-menu > p {\\n  width: 80%;\\n  display: inline-block;\\n  vertical-align: middle;\\n  line-height: normal;\\n  text-align: center;\\n  font-size: 24px;\\n  font-weight: 500;\\n  font-family: var(--roboto);\\n  letter-spacing: 1px;\\n  text-shadow: 0.5px 0.5px 0.5px whitesmoke;\\n}\\n#contact-tab > #download-menu > button {\\n  width: 30%;\\n  border-radius: 25px;\\n  background-color: rgba(var(--light-green), 1);\\n  font-size: 20px;\\n  font-weight: 500;\\n  font-family: var(--roboto);\\n  letter-spacing: 1px;\\n}\\n#contact-tab > #feedback {\\n  display: flex;\\n  flex-flow: column nowrap;\\n  grid-area: feedback;\\n  background-color: rgba(255, 255, 255, 0.4);\\n  border-radius: 30px;\\n  gap: 10px;\\n  justify-self: center;\\n  align-items: flex-start;\\n  padding: 12px;\\n  min-width: 700px;\\n}\\n#contact-tab > #feedback > #feedback-input {\\n  height: 100%;\\n  width: 85%;\\n  background-color: rgb(240, 240, 240);\\n  border-radius: 8px;\\n}\\n#contact-tab > #feedback > label {\\n  font-size: 20px;\\n  font-weight: 500;\\n  font-family: var(--roboto);\\n  letter-spacing: 1px;\\n}\\n#contact-tab > #feedback > input {\\n  width: 60%;\\n  height: 30px;\\n  border-radius: 6px;\\n  font-size: 14px;\\n  font-weight: 400;\\n  font-family: var(--roboto);\\n  letter-spacing: 1px;\\n  padding: 5px;\\n}\\n#contact-tab > #feedback > p {\\n  width: 80%;\\n  display: inline-block;\\n  vertical-align: middle;\\n  line-height: normal;\\n  text-align: center;\\n  justify-self: center;\\n  font-size: 22px;\\n  font-weight: 600;\\n  font-family: var(--roboto);\\n  letter-spacing: 1px;\\n  text-shadow: 0.5px 0.5px 0.5px whitesmoke;\\n}\\n#contact-tab > #feedback > button {\\n  width: 14%;\\n  background-color: rgba(var(--warm-beige), 0.9);\\n  font-size: 1.1vw;\\n  font-weight: 400;\\n  font-family: var(--roboto);\\n  letter-spacing: 1px;\\n  border-radius: 4px;\\n}\\n\\n/* CSS RESET */\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/imgs/logo1nb.png":
/*!******************************!*\
  !*** ./src/imgs/logo1nb.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/logo1nb.4f58fd16b15191ae36b7c0cf25cfa740.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/logo1nb.png?");

/***/ }),

/***/ "./src/imgs/plato0.png":
/*!*****************************!*\
  !*** ./src/imgs/plato0.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/plato0.afd416b6bae6371d7ea9a7595bbf434a.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/plato0.png?");

/***/ }),

/***/ "./src/imgs/plato1.png":
/*!*****************************!*\
  !*** ./src/imgs/plato1.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/plato1.64b539e5cd2599a1393aba2ef41763d8.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/plato1.png?");

/***/ }),

/***/ "./src/imgs/plato2.png":
/*!*****************************!*\
  !*** ./src/imgs/plato2.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/plato2.ec2ff1e01945cb5159b6176156ec0467.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/plato2.png?");

/***/ }),

/***/ "./src/imgs/plato3.png":
/*!*****************************!*\
  !*** ./src/imgs/plato3.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/plato3.fdf9b1200553f06996f144921d67ebf5.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/plato3.png?");

/***/ }),

/***/ "./src/imgs/plato4.png":
/*!*****************************!*\
  !*** ./src/imgs/plato4.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/plato4.b73eb90ec41ebf56ad6d110784e22a79.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/plato4.png?");

/***/ }),

/***/ "./src/imgs/plato5.png":
/*!*****************************!*\
  !*** ./src/imgs/plato5.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/plato5.41b211c8b786aa7cfee7a889d77c70bb.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/plato5.png?");

/***/ }),

/***/ "./src/imgs/plato6.png":
/*!*****************************!*\
  !*** ./src/imgs/plato6.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/plato6.10df307b5da32bf095f872d008667811.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/plato6.png?");

/***/ }),

/***/ "./src/imgs/profile1.jpeg":
/*!********************************!*\
  !*** ./src/imgs/profile1.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"imgs/profile1.86c940e5973277aa29b5542e93f16a1e.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/profile1.jpeg?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load.js */ \"./src/page-load.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/menu */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact */ \"./src/pages/contact.js\");\n\n\n\n\n  \n\n(0,_page_load_js__WEBPACK_IMPORTED_MODULE_1__.loadPage)();\n(0,_pages_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n\nhomebtn.addEventListener('click',_page_load_js__WEBPACK_IMPORTED_MODULE_1__.reset);\nmenubtn.addEventListener('click',_page_load_js__WEBPACK_IMPORTED_MODULE_1__.reset);\ncontactbtn.addEventListener('click',_page_load_js__WEBPACK_IMPORTED_MODULE_1__.reset);\nhomebtn.addEventListener('click',_pages_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nmenubtn.addEventListener('click',_pages_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\ncontactbtn.addEventListener('click',_pages_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n\n\n \n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage),\n/* harmony export */   \"reset\": () => (/* binding */ reset)\n/* harmony export */ });\n/* harmony import */ var _imgs_logo1nb_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/logo1nb.png */ \"./src/imgs/logo1nb.png\");\n/* harmony import */ var _imgs_logo1nb_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_imgs_logo1nb_png__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction loadPage(){\n   \n   const content = document.querySelector('#content');\n\n   const tabs = document.createElement('div');\n   tabs.setAttribute('id','tabs');\n\n   const homebtn = document.createElement('button');\n   homebtn.setAttribute('id','homebtn');\n   homebtn.classList.add('tab');\n   homebtn.textContent = 'HOME';\n   tabs.appendChild(homebtn)\n\n   const menubtn = document.createElement('button');\n   menubtn.setAttribute('id','menubtn');\n   menubtn.classList.add('tab');\n   menubtn.textContent='MENU';\n   tabs.appendChild(menubtn);\n\n   const contactbtn = document.createElement('button');\n   contactbtn.setAttribute('id','contactbtn');\n   contactbtn.classList.add('tab');\n   contactbtn.textContent='CONTACT';\n   tabs.appendChild(contactbtn);\n\n   const header = document.createElement('div');\n   header.setAttribute('id','header');\n\n   const headerimg = document.createElement('img');\n   headerimg.setAttribute('src',(_imgs_logo1nb_png__WEBPACK_IMPORTED_MODULE_0___default()));\n   headerimg.setAttribute('alt','Cocina amiga logo');\n   header.appendChild(headerimg);\n   \n   content.appendChild(tabs);\n   content.appendChild(header);\n\n}\nfunction reset(){\n   const content = document.querySelector('#content');\n   while (content.childElementCount > 2){\n      content.removeChild(content.lastChild);\n   \n   }\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction makeContact (){\n   const content = document.querySelector('#content');\n\n   const contactpage = document.createElement('div');\n   contactpage.setAttribute('id','contact-tab');\n\n   const msg = document.createElement('div');\n      msg.setAttribute('id','contact-msg');\n      const msgh1 = document.createElement('h1');\n      msgh1.textContent = 'Contactanos! Responderemos todas tus preguntas y nos encantaria recibir tu feedback.';\n      msg.appendChild(msgh1);\n\n   const emailList = document.createElement('div');\n      emailList.setAttribute('id','email-list');\n      const inscribete = document.createElement('p');\n      inscribete.textContent = 'Inscribete a nuestro boletin para recibir ofertas, noticias y recursos!';\n      emailList.appendChild(inscribete);\n      const emailInput = document.createElement('input');\n      emailInput.setAttribute('type','email');\n      emailList.appendChild(emailInput);\n      const emailBtn = document.createElement('button');\n      emailBtn.textContent = 'Enviar';\n      emailList.appendChild(emailBtn);\n\n   const download = document.createElement('div');\n      download.setAttribute('id','download-menu');\n      const pMenu = document.createElement('p');\n      pMenu.textContent = 'Descarga nuestros menus!';\n      download.appendChild(pMenu);\n      const monthBtn1 = document.createElement('button');\n      monthBtn1.textContent = 'Julio';\n      download.appendChild(monthBtn1);\n      const monthBtn2 = document.createElement('button');\n      monthBtn2.textContent = 'Agosto';\n      download.appendChild(monthBtn2);\n      const monthBtn3 = document.createElement('button');\n      monthBtn3.textContent = 'Septiembre';\n      download.appendChild(monthBtn3);\n\n   const feedback = document.createElement('div');\n      feedback.setAttribute('id','feedback');\n      const pFeedback = document.createElement('p');\n      pFeedback.textContent = 'Escribenos tus sugerencias o quejas!'\n      feedback.appendChild(pFeedback);\n      const label1 = document.createElement('label');\n      label1.textContent='Correo Electronico';\n      feedback.appendChild(label1);\n      const inputFeed1 = document.createElement('input');\n      inputFeed1.setAttribute('type','email');\n      inputFeed1.setAttribute('placeholder','usuario@gmail.com');\n      feedback.appendChild(inputFeed1);\n      const label2 = document.createElement('label');\n      label2.textContent = 'Mensaje';\n      feedback.appendChild(label2);\n      const inputFeed2 = document.createElement('input');\n      inputFeed2.setAttribute('type','text');\n      inputFeed2.setAttribute('id','feedback-input');\n      feedback.appendChild(inputFeed2);\n\n   contactpage.appendChild(msg);\n   contactpage.appendChild(emailList);\n   contactpage.appendChild(download);\n   contactpage.appendChild(feedback);\n   content.appendChild(contactpage);\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeContact);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _imgs_profile1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/profile1.jpeg */ \"./src/imgs/profile1.jpeg\");\n/* harmony import */ var _imgs_profile1_jpeg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_imgs_profile1_jpeg__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nfunction makeHome (){\n   const content = document.querySelector('#content');\n   const homepage = document.createElement('div');\n   homepage.setAttribute('id','home-tab');\n   const profileDiv = document.createElement('div');\n   const profileImg = document.createElement('img');\n   profileImg.setAttribute('src',(_imgs_profile1_jpeg__WEBPACK_IMPORTED_MODULE_0___default()));\n   profileImg.setAttribute('alt','Profile picture');\n   profileDiv.appendChild(profileImg);\n   const intro = document.createElement('div');\n   intro.classList.add('intro');\n   const heading = document.createElement('h1');\n   heading.textContent = 'Salud, Sabor y Placer';\n   intro.appendChild(heading);\n\n   const paragraph = document.createElement('p');\n   paragraph.textContent = 'Cocina Amiga busca crear una experiencia culinaria que se resume en esas tres palabras. Queremos ayudar a nuestros clientes a aprender que comer saludable no significa dejar de disfrutar la comida.'\n   intro.appendChild(paragraph);\n\n      homepage.appendChild(profileDiv);\n      homepage.appendChild(intro);\n      content.appendChild(homepage)\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeHome);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _imgs_plato0_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/plato0.png */ \"./src/imgs/plato0.png\");\n/* harmony import */ var _imgs_plato0_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_imgs_plato0_png__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _imgs_plato1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/plato1.png */ \"./src/imgs/plato1.png\");\n/* harmony import */ var _imgs_plato1_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_imgs_plato1_png__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _imgs_plato2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../imgs/plato2.png */ \"./src/imgs/plato2.png\");\n/* harmony import */ var _imgs_plato2_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_imgs_plato2_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _imgs_plato3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../imgs/plato3.png */ \"./src/imgs/plato3.png\");\n/* harmony import */ var _imgs_plato3_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_imgs_plato3_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _imgs_plato4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imgs/plato4.png */ \"./src/imgs/plato4.png\");\n/* harmony import */ var _imgs_plato4_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_imgs_plato4_png__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _imgs_plato5_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../imgs/plato5.png */ \"./src/imgs/plato5.png\");\n/* harmony import */ var _imgs_plato5_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_imgs_plato5_png__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _imgs_plato6_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../imgs/plato6.png */ \"./src/imgs/plato6.png\");\n/* harmony import */ var _imgs_plato6_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_imgs_plato6_png__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\nfunction makeMenu (){   \n   const content = document.querySelector('#content');\n   const menupage = document.createElement('div');\n   menupage.setAttribute('id','menu-tab');\n\n      const div0 = document.createElement('div');\n         const h0 = document.createElement('h1');\n         h0.textContent = `Opcion #1`;\n         div0.appendChild(h0);\n         const img0 = document.createElement('img');\n         img0.setAttribute('src',(_imgs_plato0_png__WEBPACK_IMPORTED_MODULE_0___default()));\n         img0.classList.add('menu-img');\n         div0.appendChild(img0);\n         menupage.appendChild(div0);\n      const div1 = document.createElement('div');\n         const h1 = document.createElement('h1');\n         h1.textContent = `Opcion #2`;\n         div1.appendChild(h1);\n         const img1 = document.createElement('img');\n         img1.setAttribute('src',(_imgs_plato1_png__WEBPACK_IMPORTED_MODULE_1___default()));\n         img1.classList.add('menu-img');\n         div1.appendChild(img1);\n         menupage.appendChild(div1);\n      const div2 = document.createElement('div');\n         const h2 = document.createElement('h1');\n         h2.textContent = `Opcion #2`;\n         div2.appendChild(h2);\n         const img2 = document.createElement('img');\n         img2.setAttribute('src',(_imgs_plato2_png__WEBPACK_IMPORTED_MODULE_2___default()));\n         img2.classList.add('menu-img');\n         div2.appendChild(img2);\n         menupage.appendChild(div2);\n      const div3 = document.createElement('div');\n         const h3 = document.createElement('h1');\n         h3.textContent = `Opcion #3`;\n         div3.appendChild(h3);\n         const img3 = document.createElement('img');\n         img3.setAttribute('src',(_imgs_plato3_png__WEBPACK_IMPORTED_MODULE_3___default()));\n         img3.classList.add('menu-img');\n         div3.appendChild(img3);\n         menupage.appendChild(div3);\n      const div4 = document.createElement('div');\n         const h4 = document.createElement('h1');\n         h4.textContent = `Opcion #4`;\n         div4.appendChild(h4);\n         const img4 = document.createElement('img');\n         img4.setAttribute('src',(_imgs_plato4_png__WEBPACK_IMPORTED_MODULE_4___default()));\n         img4.classList.add('menu-img');\n         div4.appendChild(img4);\n         menupage.appendChild(div4);\n      const div5 = document.createElement('div');\n         const h5 = document.createElement('h1');\n         h5.textContent = `Opcion #5`;\n         div5.appendChild(h5);\n         const img5 = document.createElement('img');\n         img5.setAttribute('src',(_imgs_plato5_png__WEBPACK_IMPORTED_MODULE_5___default()));\n         img5.classList.add('menu-img');\n         div5.appendChild(img5);\n         menupage.appendChild(div5);\n      const div6 = document.createElement('div');\n         const h6 = document.createElement('h1');\n         h6.textContent = `Opcion #6`;\n         div6.appendChild(h6);\n         const img6 = document.createElement('img');\n         img6.setAttribute('src',(_imgs_plato6_png__WEBPACK_IMPORTED_MODULE_6___default()));\n         img6.classList.add('menu-img');\n         div6.appendChild(img6);\n         menupage.appendChild(div6);\n\n\n\n      content.appendChild(menupage)\n\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu.js?");

/***/ }),

/***/ "./src/imgs/background.png":
/*!*********************************!*\
  !*** ./src/imgs/background.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"82c618a6d44f31831d2a.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/imgs/background.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;