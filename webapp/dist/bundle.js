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
/***/ (() => {

eval("\n// src/index.ts\nconst appDiv = document.getElementById('app');\nif (appDiv) {\n    // Heading\n    const heading = document.createElement('h1');\n    heading.textContent = 'Welcome to My TypeScript App!';\n    appDiv.appendChild(heading);\n    // Paragraph\n    const paragraph = document.createElement('p');\n    paragraph.textContent = 'This is a sample paragraph.';\n    appDiv.appendChild(paragraph);\n    // Button\n    const button = document.createElement('button');\n    button.textContent = 'Click Me!';\n    appDiv.appendChild(button);\n    // Event handler\n    button.addEventListener('click', () => {\n        paragraph.textContent = 'Button clicked!';\n    });\n    // Input field\n    const input = document.createElement('input');\n    input.type = 'text';\n    appDiv.appendChild(input);\n    // Display area\n    const display = document.createElement('p');\n    appDiv.appendChild(display);\n    // Input event handler\n    input.addEventListener('input', () => {\n        display.textContent = `You typed: ${input.value}`;\n    });\n    // Checkbox\n    const checkbox = document.createElement('input');\n    checkbox.type = 'checkbox';\n    appDiv.appendChild(checkbox);\n    const checkboxLabel = document.createElement(\"label\");\n    checkboxLabel.textContent = \"Show Message?\";\n    appDiv.appendChild(checkboxLabel);\n    const message = document.createElement('p');\n    message.textContent = 'This message is shown when the checkbox is checked.';\n    message.style.display = 'none'; // Initially hidden\n    appDiv.appendChild(message);\n    // Checkbox event handler\n    checkbox.addEventListener('change', () => {\n        message.style.display = checkbox.checked ? 'block' : 'none';\n    });\n    // Select element\n    const select = document.createElement('select');\n    const options = ['Option 1', 'Option 2', 'Option 3'];\n    options.forEach(optionText => {\n        const option = document.createElement('option');\n        option.textContent = optionText;\n        select.appendChild(option);\n    });\n    appDiv.appendChild(select);\n    const selectedDisplay = document.createElement('p');\n    appDiv.appendChild(selectedDisplay);\n    // Select event handler\n    select.addEventListener('change', () => {\n        selectedDisplay.textContent = `Selected: ${select.value}`;\n    });\n}\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;