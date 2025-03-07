/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst testIds_1 = __webpack_require__(/*! ./testIds */ \"./src/testIds.ts\");\nconst appDiv = document.querySelector(`[data-testid=\"${testIds_1.testIds.appContainer}\"]`);\nconst heading = document.querySelector(`[data-testid=\"${testIds_1.testIds.mainHeading}\"]`);\nconst paragraph = document.querySelector(`[data-testid=\"${testIds_1.testIds.sampleParagraph}\"]`);\nconst button = document.querySelector(`[data-testid=\"${testIds_1.testIds.clickButton}\"]`);\nconst input = document.querySelector(`[data-testid=\"${testIds_1.testIds.textInput}\"]`);\nconst display = document.querySelector(`[data-testid=\"${testIds_1.testIds.displayArea}\"]`);\nconst checkbox = document.querySelector(`[data-testid=\"${testIds_1.testIds.showMessageCheckbox}\"]`);\nconst message = document.querySelector(`[data-testid=\"${testIds_1.testIds.conditionalMessage}\"]`);\nconst select = document.querySelector(`[data-testid=\"${testIds_1.testIds.optionSelect}\"]`);\nconst selectedDisplay = document.querySelector(`[data-testid=\"${testIds_1.testIds.selectedOptionDisplay}\"]`);\nconst firstNameLabel = document.querySelector(`[data-testid=\"${testIds_1.testIds.firstNameLabel}\"]`);\nconst questionLabel = document.querySelector(`[data-testid=\"${testIds_1.testIds.firstNameLabel}\"]`);\nif (appDiv) {\n    appDiv.innerHTML = ''; // Clear existing content\n    const container = document.createElement('div');\n    container.style.display = 'flex';\n    container.style.flexDirection = 'column';\n    container.style.gap = '15px'; // Adjust gap for spacing\n    if (heading) {\n        container.appendChild(heading);\n    }\n    if (paragraph) {\n        container.appendChild(paragraph);\n    }\n    if (button) {\n        container.appendChild(button);\n        button.addEventListener('click', () => {\n            if (paragraph) {\n                paragraph.textContent = 'Button clicked!';\n            }\n        });\n    }\n    // Create and append the input-container\n    const inputContainer = document.createElement('div');\n    inputContainer.classList.add('input-container'); // Add the class for styling\n    if (firstNameLabel) {\n        inputContainer.appendChild(firstNameLabel);\n    }\n    if (input) {\n        inputContainer.appendChild(input);\n    }\n    container.appendChild(inputContainer); // Append inputContainer to main container\n    if (display) {\n        container.appendChild(display);\n        if (input) {\n            input.addEventListener('input', () => {\n                display.textContent = `You typed: ${input.value}`;\n            });\n        }\n    }\n    if (checkbox && message) {\n        message.style.display = 'none';\n        const checkboxContainer = document.createElement('div');\n        checkboxContainer.classList.add('checkbox-container');\n        checkboxContainer.style.display = 'flex';\n        checkboxContainer.style.alignItems = 'center';\n        // Recreate the questionLabel element\n        const questionLabel = document.createElement('label');\n        questionLabel.setAttribute('data-testid', testIds_1.testIds.questionLabel); // Use the data-testid from testIds\n        questionLabel.textContent = 'Do you like cheese?'; // Set the label text\n        checkboxContainer.appendChild(questionLabel); // Append the recreated label\n        checkboxContainer.appendChild(checkbox);\n        container.appendChild(checkboxContainer);\n        container.appendChild(message);\n        checkbox.addEventListener('change', () => {\n            if (message && checkbox) {\n                message.style.display = checkbox.checked ? 'block' : 'none';\n            }\n        });\n    }\n    if (select && selectedDisplay) {\n        container.appendChild(select);\n        container.appendChild(selectedDisplay);\n        select.addEventListener('change', () => {\n            if (select) {\n                selectedDisplay.textContent = `Selected: ${select.value}`;\n            }\n        });\n    }\n    appDiv.appendChild(container); // Corrected line: Add the container to appDiv\n}\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/testIds.ts":
/*!************************!*\
  !*** ./src/testIds.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.testIds = void 0;\nexports.testIds = {\n    appContainer: 'app-container',\n    mainHeading: 'main-heading',\n    sampleParagraph: 'sample-paragraph',\n    clickButton: 'click-button',\n    textInput: 'text-input',\n    firstNameLabel: 'firstName-label',\n    questionLabel: 'question-label',\n    displayArea: 'display-area',\n    showMessageCheckbox: 'show-message-checkbox',\n    showMessageLabel: 'show-message-label',\n    conditionalMessage: 'conditional-message',\n    optionSelect: 'option-select',\n    selectedOptionDisplay: 'selected-option-display',\n};\n\n\n//# sourceURL=webpack:///./src/testIds.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;