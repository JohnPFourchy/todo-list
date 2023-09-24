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
/* harmony export */   addLocalStorageNotes: () => (/* binding */ addLocalStorageNotes),
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
        for(let i = 0; i < notes.length; i++) {
            const n = notes[i].querySelector(".notes");
            n.classList.add("hidden");
            notes[i].classList.remove("add-border");
        }

        t.classList.remove("hidden");
        note.classList.add("add-border");
    });
}

function addLocalStorageNotes(localNotes) {
    for(let i = 0; i < localNotes.length; i++) {
        console.log(localNotes[0]);
        //addNote(localNotes[i]);
    }
}



/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNoteToStorage: () => (/* binding */ addNoteToStorage)
/* harmony export */ });
function addNoteToStorage(note) {
    if(localStorage.getItem("lst") === null) {
        localStorage.setItem("lst", JSON.stringify([]));
    }

    const titleStr = note.querySelector(".note-title").innerHTML;
    console.log(titleStr);
    let arr = JSON.parse(localStorage.getItem("lst"));
    arr.push(note);
    localStorage.setItem("lst", JSON.stringify(arr));
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
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");




if(localStorage.getItem("lst") !== null) {
    const localNotes = JSON.parse(localStorage.getItem("lst"));
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.addLocalStorageNotes)(localNotes);
}

// main application logic
const addBtn = document.querySelector(".add-note");
addBtn.addEventListener("click", () => {
    const note = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.createNote)("apple");
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.hideNote)(note);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.addNote)(note);
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.selectNote)(note);
    
    // add note to local storage
    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.addNoteToStorage)(note);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDWEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjJDO0FBQ2tDO0FBQy9CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMERBQVU7QUFDM0IsSUFBSSxpREFBUTtBQUNaLElBQUksZ0RBQU87QUFDWCxJQUFJLG1EQUFVO0FBQ2Q7QUFDQTtBQUNBLElBQUksNkRBQWdCO0FBQ3BCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGZpbGUgd2lsbCBjcmVhdGUgY29tcG9uZW50cyAtIG5ldyBub3RlIGZvcm0gYW5kIG5vdGVzXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOb3RlKCkge1xyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBsaS5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtXCIpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcIm5vdGUtdGl0bGVcIik7XHJcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiZW50ZXIgdGl0bGVcIjtcclxuXHJcbiAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICAgIHRleHRhcmVhLmNsYXNzTGlzdC5hZGQoXCJub3Rlc1wiKTtcclxuICAgIHRleHRhcmVhLnBsYWNlaG9sZGVyID0gXCJXcml0ZSB3aGF0ZXZlciB5b3Ugd2FudCBoZXJlIC4uLlwiO1xyXG5cclxuICAgIGxpLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIGxpLmFwcGVuZENoaWxkKHRleHRhcmVhKTtcclxuXHJcbiAgICByZXR1cm4gbGk7XHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlTm90ZX07IiwiLy8gdGhpcyBmaWxlIHdpbGwgbWFuaXB1bGF0ZSB0aGUgZG9tXHJcblxyXG5mdW5jdGlvbiBhZGROb3RlKG5vdGUpIHtcclxuICAgIGNvbnN0IGxzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibHN0XCIpO1xyXG4gICAgbHN0LmFwcGVuZENoaWxkKG5vdGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlTm90ZShub3RlKSB7XHJcbiAgICBjb25zdCB0ID0gbm90ZS5xdWVyeVNlbGVjdG9yKFwiLm5vdGVzXCIpO1xyXG4gICAgdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWxlY3ROb3RlKG5vdGUpIHtcclxuXHJcbiAgICAvLyBGdXR1cmUgUmVmZXJlbmNlOiBRdWVyeVNlbGVjdG9yQWxsIE9OTFkgZ2V0IGRlc2NlbmRhbnRzIG9mIHRoZSBub2RlIVxyXG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlzdC1pdGVtXCIpO1xyXG4gICAgY29uc3QgdCA9IG5vdGUucXVlcnlTZWxlY3RvcihcIi5ub3Rlc1wiKTtcclxuXHJcbiAgICBub3RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG5vdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG4gPSBub3Rlc1tpXS5xdWVyeVNlbGVjdG9yKFwiLm5vdGVzXCIpO1xyXG4gICAgICAgICAgICBuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIG5vdGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhZGQtYm9yZGVyXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIG5vdGUuY2xhc3NMaXN0LmFkZChcImFkZC1ib3JkZXJcIik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTG9jYWxTdG9yYWdlTm90ZXMobG9jYWxOb3Rlcykge1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxvY2FsTm90ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbE5vdGVzWzBdKTtcclxuICAgICAgICAvL2FkZE5vdGUobG9jYWxOb3Rlc1tpXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7YWRkTm90ZSwgc2VsZWN0Tm90ZSwgaGlkZU5vdGUsIGFkZExvY2FsU3RvcmFnZU5vdGVzfTsiLCJmdW5jdGlvbiBhZGROb3RlVG9TdG9yYWdlKG5vdGUpIHtcclxuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibHN0XCIpID09PSBudWxsKSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsc3RcIiwgSlNPTi5zdHJpbmdpZnkoW10pKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0aXRsZVN0ciA9IG5vdGUucXVlcnlTZWxlY3RvcihcIi5ub3RlLXRpdGxlXCIpLmlubmVySFRNTDtcclxuICAgIGNvbnNvbGUubG9nKHRpdGxlU3RyKTtcclxuICAgIGxldCBhcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibHN0XCIpKTtcclxuICAgIGFyci5wdXNoKG5vdGUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsc3RcIiwgSlNPTi5zdHJpbmdpZnkoYXJyKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7YWRkTm90ZVRvU3RvcmFnZX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2NyZWF0ZU5vdGV9IGZyb20gXCIuL2NvbXBvbmVudHMuanNcIjtcclxuaW1wb3J0IHthZGROb3RlLCBzZWxlY3ROb3RlLCBoaWRlTm90ZSwgYWRkTG9jYWxTdG9yYWdlTm90ZXN9IGZyb20gXCIuL2RvbS5qc1wiO1xyXG5pbXBvcnQge2FkZE5vdGVUb1N0b3JhZ2V9IGZyb20gXCIuL3N0b3JhZ2UuanNcIjtcclxuXHJcbmlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibHN0XCIpICE9PSBudWxsKSB7XHJcbiAgICBjb25zdCBsb2NhbE5vdGVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxzdFwiKSk7XHJcbiAgICBhZGRMb2NhbFN0b3JhZ2VOb3Rlcyhsb2NhbE5vdGVzKTtcclxufVxyXG5cclxuLy8gbWFpbiBhcHBsaWNhdGlvbiBsb2dpY1xyXG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1ub3RlXCIpO1xyXG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNvbnN0IG5vdGUgPSBjcmVhdGVOb3RlKFwiYXBwbGVcIik7XHJcbiAgICBoaWRlTm90ZShub3RlKTtcclxuICAgIGFkZE5vdGUobm90ZSk7XHJcbiAgICBzZWxlY3ROb3RlKG5vdGUpO1xyXG4gICAgXHJcbiAgICAvLyBhZGQgbm90ZSB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICBhZGROb3RlVG9TdG9yYWdlKG5vdGUpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9