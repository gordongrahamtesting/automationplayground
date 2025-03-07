"use strict";
const message = "Hello, TypeScript!";
console.log(message);
const appDiv = document.getElementById('app');
if (appDiv) {
    appDiv.innerHTML = `<h1>${message}</h1>`;
}
