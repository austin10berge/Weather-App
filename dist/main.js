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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const apiKey = \"560bdf986e36b4947bb03df589d103d1\";\nlet endpoint = \"http://api.openweathermap.org/data/2.5/weather?q=Eastvale&units=imperial&APPID=\";\n\nwindow.onload = function() {\n    grabData(); // API fetch and calls addWeatherInfo\n};\n\n// Create an h4 and write the weather info\nfunction addWeatherInfo(temperature, sky, skyDescription) {\n    let content = document.getElementById('content');\n    content.innerHTML = '';\n    let tempText = document.createElement('h4');\n    tempText.innerHTML = \"The current temperature is \" + temperature + \"\\nThe sky is \" + sky + \" and \" + skyDescription;\n    console.log(\"Test \" + temperature);\n\n    content.appendChild(tempText);\n    console.log(temperature);\n}\n\n// Grab the data and call addWeatherInfo\ngrabData = async () => {\n    const response = await fetch(endpoint + apiKey, {mode: 'cors'});\n    const weatherData = await response.json();\n    addWeatherInfo(weatherData.main.temp, weatherData.weather[0].main, weatherData.weather[0].description);\n}\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;