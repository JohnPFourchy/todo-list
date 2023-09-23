/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNote: () => (/* binding */ createNote)
/* harmony export */ });
// this file will create components - new note form and notes

function createNote() {
    const li = document.createElement("li");
    li.classList.add("list-item");

    const input = document.createElement("input");
    input.classList.add("note-title");
    input.placeholder = "enter title";

    const textarea = document.createElement("textarea");
    textarea.classList.add("notes");
    textarea.placeholder = "Write whatever you want here ...";

    li.appendChild(input);
    li.appendChild(textarea);

    return li;
}



/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNote: () => (/* binding */ addNote),
/* harmony export */   hideNote: () => (/* binding */ hideNote),
/* harmony export */   selectNote: () => (/* binding */ selectNote)
/* harmony export */ });
// this file will manipulate the dom

function addNote(note) {
    const lst = document.getElementById("lst");
    lst.appendChild(note);
}

function hideNote(note) {
    const t = note.querySelector(".notes");
    t.classList.add("hidden");
}

function selectNote(note) {

    // Future Reference: QuerySelectorAll ONLY get descendants of the node!
    const notes = document.getElementsByClassName("list-item");
    const t = note.querySelector(".notes");

    note.addEventListener("click", () => {
        console.log(notes.length);
        for(let i = 0; i < notes.length; i++) {
            const n = notes[i].querySelector(".notes");
            n.classList.add("hidden");
            notes[i].classList.remove("add-border");
            console.log(notes[i]);
        }

        t.classList.remove("hidden");
        note.classList.add("add-border");
    });
}



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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.js */ "./src/components.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");



// main application logic
const addBtn = document.querySelector(".add-note");
addBtn.addEventListener("click", () => {
    const note = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.createNote)("apple");
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.hideNote)(note);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.addNote)(note);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.selectNote)(note);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7OztVQy9CQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04yQztBQUNZO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBEQUFVO0FBQzNCLElBQUksaURBQVE7QUFDWixJQUFJLGdEQUFPO0FBQ1gsSUFBSSxtREFBVTtBQUNkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGZpbGUgd2lsbCBjcmVhdGUgY29tcG9uZW50cyAtIG5ldyBub3RlIGZvcm0gYW5kIG5vdGVzXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOb3RlKCkge1xyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBsaS5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtXCIpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcIm5vdGUtdGl0bGVcIik7XHJcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiZW50ZXIgdGl0bGVcIjtcclxuXHJcbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoXCJub3Rlc1wiKTtcclxuICAgIHRleHRhcmVhLnBsYWNlaG9sZGVyID0gXCJXcml0ZSB3aGF0ZXZlciB5b3Ugd2FudCBoZXJlIC4uLlwiO1xyXG5cclxuICAgIGxpLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIGxpLmFwcGVuZENoaWxkKHRleHRhcmVhKTtcclxuXHJcbiAgICByZXR1cm4gbGk7XHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlTm90ZX07IiwiLy8gdGhpcyBmaWxlIHdpbGwgbWFuaXB1bGF0ZSB0aGUgZG9tXHJcblxyXG5mdW5jdGlvbiBhZGROb3RlKG5vdGUpIHtcclxuICAgIGNvbnN0IGxzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibHN0XCIpO1xyXG4gICAgbHN0LmFwcGVuZENoaWxkKG5vdGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlTm90ZShub3RlKSB7XHJcbiAgICBjb25zdCB0ID0gbm90ZS5xdWVyeVNlbGVjdG9yKFwiLm5vdGVzXCIpO1xyXG4gICAgdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWxlY3ROb3RlKG5vdGUpIHtcclxuXHJcbiAgICAvLyBGdXR1cmUgUmVmZXJlbmNlOiBRdWVyeVNlbGVjdG9yQWxsIE9OTFkgZ2V0IGRlc2NlbmRhbnRzIG9mIHRoZSBub2RlIVxyXG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlzdC1pdGVtXCIpO1xyXG4gICAgY29uc3QgdCA9IG5vdGUucXVlcnlTZWxlY3RvcihcIi5ub3Rlc1wiKTtcclxuXHJcbiAgICBub3RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobm90ZXMubGVuZ3RoKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgbiA9IG5vdGVzW2ldLnF1ZXJ5U2VsZWN0b3IoXCIubm90ZXNcIik7XHJcbiAgICAgICAgICAgIG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgbm90ZXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImFkZC1ib3JkZXJcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5vdGVzW2ldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICBub3RlLmNsYXNzTGlzdC5hZGQoXCJhZGQtYm9yZGVyXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7YWRkTm90ZSwgc2VsZWN0Tm90ZSwgaGlkZU5vdGV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtjcmVhdGVOb3RlfSBmcm9tIFwiLi9jb21wb25lbnRzLmpzXCI7XHJcbmltcG9ydCB7YWRkTm90ZSwgc2VsZWN0Tm90ZSwgaGlkZU5vdGV9IGZyb20gXCIuL2RvbS5qc1wiO1xyXG5cclxuLy8gbWFpbiBhcHBsaWNhdGlvbiBsb2dpY1xyXG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1ub3RlXCIpO1xyXG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnN0IG5vdGUgPSBjcmVhdGVOb3RlKFwiYXBwbGVcIik7XHJcbiAgICBoaWRlTm90ZShub3RlKTtcclxuICAgIGFkZE5vdGUobm90ZSk7XHJcbiAgICBzZWxlY3ROb3RlKG5vdGUpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9