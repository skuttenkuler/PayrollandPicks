module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _queries_AllPlayersQuery_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queries/AllPlayersQuery.graphql */ \"./queries/AllPlayersQuery.graphql\");\n/* harmony import */ var _queries_AllPlayersQuery_graphql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_queries_AllPlayersQuery_graphql__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/samkuttenkuler/Desktop/Dev/Projects/PayrollandPicks/frontend/pages/index.tsx\";\n\n //import QUERY_TEAMS from '../queries/AllTeamsQuery.graphql';\n\n\n\nfunction Home() {\n  const {\n    data,\n    loading,\n    error\n  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(_queries_AllPlayersQuery_graphql__WEBPACK_IMPORTED_MODULE_3___default.a); // make sure all data is loaded\n\n  if (loading) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 12\n    }, this);\n  } // check for errors\n\n\n  if (error) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \":( an error happened\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 12\n    }, this);\n  } // if all good return data\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Players\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Teams\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: data.players.map(player => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n          children: [player.firstName, player.lastName]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: player.playerImage,\n          alt: \"logo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 13\n        }, this)]\n      }, player.playerId, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 11\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInVzZVF1ZXJ5IiwiUVVFUllfUExBWUVSUyIsInN0eWxlcyIsImNvbnRhaW5lciIsInBsYXllcnMiLCJtYXAiLCJwbGF5ZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInBsYXllckltYWdlIiwicGxheWVySWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixRQUFNO0FBQUVDLFFBQUY7QUFBUUMsV0FBUjtBQUFpQkM7QUFBakIsTUFBMkJDLCtEQUFRLENBQUNDLHVFQUFELENBQXpDLENBRDZCLENBRTdCOztBQUNBLE1BQUlILE9BQUosRUFBYTtBQUNYLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRCxHQUw0QixDQU83Qjs7O0FBQ0EsTUFBSUMsS0FBSixFQUFXO0FBQ1Qsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNELEdBVjRCLENBWTdCOzs7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUcsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBTUU7QUFBQSxnQkFDR04sSUFBSSxDQUFDTyxPQUFMLENBQWFDLEdBQWIsQ0FBa0JDLE1BQUQsaUJBQ2hCO0FBQUEsZ0NBQ0U7QUFBQSxxQkFBS0EsTUFBTSxDQUFDQyxTQUFaLEVBQXVCRCxNQUFNLENBQUNFLFFBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUssYUFBRyxFQUFFRixNQUFNLENBQUNHLFdBQWpCO0FBQThCLGFBQUcsRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUEsU0FBVUgsTUFBTSxDQUFDSSxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQkQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5cbi8vaW1wb3J0IFFVRVJZX1RFQU1TIGZyb20gJy4uL3F1ZXJpZXMvQWxsVGVhbXNRdWVyeS5ncmFwaHFsJztcbmltcG9ydCBRVUVSWV9QTEFZRVJTIGZyb20gJy4uL3F1ZXJpZXMvQWxsUGxheWVyc1F1ZXJ5LmdyYXBocWwnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVlcnkoUVVFUllfUExBWUVSUyk7XG4gIC8vIG1ha2Ugc3VyZSBhbGwgZGF0YSBpcyBsb2FkZWRcbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPHA+bG9hZGluZy4uLjwvcD47XG4gIH1cblxuICAvLyBjaGVjayBmb3IgZXJyb3JzXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiA8cD46KCBhbiBlcnJvciBoYXBwZW5lZDwvcD47XG4gIH1cblxuICAvLyBpZiBhbGwgZ29vZCByZXR1cm4gZGF0YVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UGxheWVyczwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGgxPlRlYW1zPC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtkYXRhLnBsYXllcnMubWFwKChwbGF5ZXI6YW55KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3BsYXllci5wbGF5ZXJJZH0+XG4gICAgICAgICAgICA8aDQ+e3BsYXllci5maXJzdE5hbWV9e3BsYXllci5sYXN0TmFtZX08L2g0PlxuICAgICAgICAgICAgPGltZyBzcmM9e3BsYXllci5wbGF5ZXJJbWFnZX0gYWx0PVwibG9nb1wiLz4gIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./queries/AllPlayersQuery.graphql":
/*!*****************************************!*\
  !*** ./queries/AllPlayersQuery.graphql ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n    var doc = {\"kind\":\"Document\",\"definitions\":[{\"kind\":\"OperationDefinition\",\"operation\":\"query\",\"variableDefinitions\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"players\"},\"arguments\":[],\"directives\":[],\"selectionSet\":{\"kind\":\"SelectionSet\",\"selections\":[{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"playerId\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"firstName\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"lastName\"},\"arguments\":[],\"directives\":[]},{\"kind\":\"Field\",\"name\":{\"kind\":\"Name\",\"value\":\"playerImage\"},\"arguments\":[],\"directives\":[]}]}}]}}],\"loc\":{\"start\":0,\"end\":81}};\n    doc.loc.source = {\"body\":\"query {\\n  players{\\n    playerId\\n    firstName\\n    lastName\\n    playerImage\\n  }\\n}\\n\",\"name\":\"GraphQL request\",\"locationOffset\":{\"line\":1,\"column\":1}};\n  \n\n    var names = {};\n    function unique(defs) {\n      return defs.filter(\n        function(def) {\n          if (def.kind !== 'FragmentDefinition') return true;\n          var name = def.name.value\n          if (names[name]) {\n            return false;\n          } else {\n            names[name] = true;\n            return true;\n          }\n        }\n      )\n    }\n  \n\n    // Collect any fragment/type references from a node, adding them to the refs Set\n    function collectFragmentReferences(node, refs) {\n      if (node.kind === \"FragmentSpread\") {\n        refs.add(node.name.value);\n      } else if (node.kind === \"VariableDefinition\") {\n        var type = node.type;\n        if (type.kind === \"NamedType\") {\n          refs.add(type.name.value);\n        }\n      }\n\n      if (node.selectionSet) {\n        node.selectionSet.selections.forEach(function(selection) {\n          collectFragmentReferences(selection, refs);\n        });\n      }\n\n      if (node.variableDefinitions) {\n        node.variableDefinitions.forEach(function(def) {\n          collectFragmentReferences(def, refs);\n        });\n      }\n\n      if (node.definitions) {\n        node.definitions.forEach(function(def) {\n          collectFragmentReferences(def, refs);\n        });\n      }\n    }\n\n    var definitionRefs = {};\n    (function extractReferences() {\n      doc.definitions.forEach(function(def) {\n        if (def.name) {\n          var refs = new Set();\n          collectFragmentReferences(def, refs);\n          definitionRefs[def.name.value] = refs;\n        }\n      });\n    })();\n\n    function findOperation(doc, name) {\n      for (var i = 0; i < doc.definitions.length; i++) {\n        var element = doc.definitions[i];\n        if (element.name && element.name.value == name) {\n          return element;\n        }\n      }\n    }\n\n    function oneQuery(doc, operationName) {\n      // Copy the DocumentNode, but clear out the definitions\n      var newDoc = {\n        kind: doc.kind,\n        definitions: [findOperation(doc, operationName)]\n      };\n      if (doc.hasOwnProperty(\"loc\")) {\n        newDoc.loc = doc.loc;\n      }\n\n      // Now, for the operation we're running, find any fragments referenced by\n      // it or the fragments it references\n      var opRefs = definitionRefs[operationName] || new Set();\n      var allRefs = new Set();\n      var newRefs = new Set();\n\n      // IE 11 doesn't support \"new Set(iterable)\", so we add the members of opRefs to newRefs one by one\n      opRefs.forEach(function(refName) {\n        newRefs.add(refName);\n      });\n\n      while (newRefs.size > 0) {\n        var prevRefs = newRefs;\n        newRefs = new Set();\n\n        prevRefs.forEach(function(refName) {\n          if (!allRefs.has(refName)) {\n            allRefs.add(refName);\n            var childRefs = definitionRefs[refName] || new Set();\n            childRefs.forEach(function(childRef) {\n              newRefs.add(childRef);\n            });\n          }\n        });\n      }\n\n      allRefs.forEach(function(refName) {\n        var op = findOperation(doc, refName);\n        if (op) {\n          newDoc.definitions.push(op);\n        }\n      });\n\n      return newDoc;\n    }\n    \n    module.exports = doc;\n    \n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9xdWVyaWVzL0FsbFBsYXllcnNRdWVyeS5ncmFwaHFsPzRlOTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGVBQWUsa0NBQWtDLDBHQUEwRyxxQ0FBcUMsdUJBQXVCLGdDQUFnQyxnREFBZ0QscUNBQXFDLHVCQUF1QixpQ0FBaUMsZ0NBQWdDLEVBQUUsdUJBQXVCLGtDQUFrQyxnQ0FBZ0MsRUFBRSx1QkFBdUIsaUNBQWlDLGdDQUFnQyxFQUFFLHVCQUF1QixvQ0FBb0MsZ0NBQWdDLEdBQUcsR0FBRyxTQUFTO0FBQ3JzQixzQkFBc0IsZUFBZSxZQUFZLGlFQUFpRSxHQUFHLCtDQUErQzs7O0FBR3BLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0EscUJBQXFCLDRCQUE0QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9xdWVyaWVzL0FsbFBsYXllcnNRdWVyeS5ncmFwaHFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgdmFyIGRvYyA9IHtcImtpbmRcIjpcIkRvY3VtZW50XCIsXCJkZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJPcGVyYXRpb25EZWZpbml0aW9uXCIsXCJvcGVyYXRpb25cIjpcInF1ZXJ5XCIsXCJ2YXJpYWJsZURlZmluaXRpb25zXCI6W10sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicGxheWVyc1wifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdLFwic2VsZWN0aW9uU2V0XCI6e1wia2luZFwiOlwiU2VsZWN0aW9uU2V0XCIsXCJzZWxlY3Rpb25zXCI6W3tcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInBsYXllcklkXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImZpcnN0TmFtZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJsYXN0TmFtZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwbGF5ZXJJbWFnZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfV19fV19fV0sXCJsb2NcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjo4MX19O1xuICAgIGRvYy5sb2Muc291cmNlID0ge1wiYm9keVwiOlwicXVlcnkge1xcbiAgcGxheWVyc3tcXG4gICAgcGxheWVySWRcXG4gICAgZmlyc3ROYW1lXFxuICAgIGxhc3ROYW1lXFxuICAgIHBsYXllckltYWdlXFxuICB9XFxufVxcblwiLFwibmFtZVwiOlwiR3JhcGhRTCByZXF1ZXN0XCIsXCJsb2NhdGlvbk9mZnNldFwiOntcImxpbmVcIjoxLFwiY29sdW1uXCI6MX19O1xuICBcblxuICAgIHZhciBuYW1lcyA9IHt9O1xuICAgIGZ1bmN0aW9uIHVuaXF1ZShkZWZzKSB7XG4gICAgICByZXR1cm4gZGVmcy5maWx0ZXIoXG4gICAgICAgIGZ1bmN0aW9uKGRlZikge1xuICAgICAgICAgIGlmIChkZWYua2luZCAhPT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicpIHJldHVybiB0cnVlO1xuICAgICAgICAgIHZhciBuYW1lID0gZGVmLm5hbWUudmFsdWVcbiAgICAgICAgICBpZiAobmFtZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmFtZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICBcblxuICAgIC8vIENvbGxlY3QgYW55IGZyYWdtZW50L3R5cGUgcmVmZXJlbmNlcyBmcm9tIGEgbm9kZSwgYWRkaW5nIHRoZW0gdG8gdGhlIHJlZnMgU2V0XG4gICAgZnVuY3Rpb24gY29sbGVjdEZyYWdtZW50UmVmZXJlbmNlcyhub2RlLCByZWZzKSB7XG4gICAgICBpZiAobm9kZS5raW5kID09PSBcIkZyYWdtZW50U3ByZWFkXCIpIHtcbiAgICAgICAgcmVmcy5hZGQobm9kZS5uYW1lLnZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAobm9kZS5raW5kID09PSBcIlZhcmlhYmxlRGVmaW5pdGlvblwiKSB7XG4gICAgICAgIHZhciB0eXBlID0gbm9kZS50eXBlO1xuICAgICAgICBpZiAodHlwZS5raW5kID09PSBcIk5hbWVkVHlwZVwiKSB7XG4gICAgICAgICAgcmVmcy5hZGQodHlwZS5uYW1lLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS5zZWxlY3Rpb25TZXQpIHtcbiAgICAgICAgbm9kZS5zZWxlY3Rpb25TZXQuc2VsZWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdGlvbikge1xuICAgICAgICAgIGNvbGxlY3RGcmFnbWVudFJlZmVyZW5jZXMoc2VsZWN0aW9uLCByZWZzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLnZhcmlhYmxlRGVmaW5pdGlvbnMpIHtcbiAgICAgICAgbm9kZS52YXJpYWJsZURlZmluaXRpb25zLmZvckVhY2goZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgICAgY29sbGVjdEZyYWdtZW50UmVmZXJlbmNlcyhkZWYsIHJlZnMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUuZGVmaW5pdGlvbnMpIHtcbiAgICAgICAgbm9kZS5kZWZpbml0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGRlZikge1xuICAgICAgICAgIGNvbGxlY3RGcmFnbWVudFJlZmVyZW5jZXMoZGVmLCByZWZzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRlZmluaXRpb25SZWZzID0ge307XG4gICAgKGZ1bmN0aW9uIGV4dHJhY3RSZWZlcmVuY2VzKCkge1xuICAgICAgZG9jLmRlZmluaXRpb25zLmZvckVhY2goZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgIGlmIChkZWYubmFtZSkge1xuICAgICAgICAgIHZhciByZWZzID0gbmV3IFNldCgpO1xuICAgICAgICAgIGNvbGxlY3RGcmFnbWVudFJlZmVyZW5jZXMoZGVmLCByZWZzKTtcbiAgICAgICAgICBkZWZpbml0aW9uUmVmc1tkZWYubmFtZS52YWx1ZV0gPSByZWZzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KSgpO1xuXG4gICAgZnVuY3Rpb24gZmluZE9wZXJhdGlvbihkb2MsIG5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jLmRlZmluaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jLmRlZmluaXRpb25zW2ldO1xuICAgICAgICBpZiAoZWxlbWVudC5uYW1lICYmIGVsZW1lbnQubmFtZS52YWx1ZSA9PSBuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbmVRdWVyeShkb2MsIG9wZXJhdGlvbk5hbWUpIHtcbiAgICAgIC8vIENvcHkgdGhlIERvY3VtZW50Tm9kZSwgYnV0IGNsZWFyIG91dCB0aGUgZGVmaW5pdGlvbnNcbiAgICAgIHZhciBuZXdEb2MgPSB7XG4gICAgICAgIGtpbmQ6IGRvYy5raW5kLFxuICAgICAgICBkZWZpbml0aW9uczogW2ZpbmRPcGVyYXRpb24oZG9jLCBvcGVyYXRpb25OYW1lKV1cbiAgICAgIH07XG4gICAgICBpZiAoZG9jLmhhc093blByb3BlcnR5KFwibG9jXCIpKSB7XG4gICAgICAgIG5ld0RvYy5sb2MgPSBkb2MubG9jO1xuICAgICAgfVxuXG4gICAgICAvLyBOb3csIGZvciB0aGUgb3BlcmF0aW9uIHdlJ3JlIHJ1bm5pbmcsIGZpbmQgYW55IGZyYWdtZW50cyByZWZlcmVuY2VkIGJ5XG4gICAgICAvLyBpdCBvciB0aGUgZnJhZ21lbnRzIGl0IHJlZmVyZW5jZXNcbiAgICAgIHZhciBvcFJlZnMgPSBkZWZpbml0aW9uUmVmc1tvcGVyYXRpb25OYW1lXSB8fCBuZXcgU2V0KCk7XG4gICAgICB2YXIgYWxsUmVmcyA9IG5ldyBTZXQoKTtcbiAgICAgIHZhciBuZXdSZWZzID0gbmV3IFNldCgpO1xuXG4gICAgICAvLyBJRSAxMSBkb2Vzbid0IHN1cHBvcnQgXCJuZXcgU2V0KGl0ZXJhYmxlKVwiLCBzbyB3ZSBhZGQgdGhlIG1lbWJlcnMgb2Ygb3BSZWZzIHRvIG5ld1JlZnMgb25lIGJ5IG9uZVxuICAgICAgb3BSZWZzLmZvckVhY2goZnVuY3Rpb24ocmVmTmFtZSkge1xuICAgICAgICBuZXdSZWZzLmFkZChyZWZOYW1lKTtcbiAgICAgIH0pO1xuXG4gICAgICB3aGlsZSAobmV3UmVmcy5zaXplID4gMCkge1xuICAgICAgICB2YXIgcHJldlJlZnMgPSBuZXdSZWZzO1xuICAgICAgICBuZXdSZWZzID0gbmV3IFNldCgpO1xuXG4gICAgICAgIHByZXZSZWZzLmZvckVhY2goZnVuY3Rpb24ocmVmTmFtZSkge1xuICAgICAgICAgIGlmICghYWxsUmVmcy5oYXMocmVmTmFtZSkpIHtcbiAgICAgICAgICAgIGFsbFJlZnMuYWRkKHJlZk5hbWUpO1xuICAgICAgICAgICAgdmFyIGNoaWxkUmVmcyA9IGRlZmluaXRpb25SZWZzW3JlZk5hbWVdIHx8IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGNoaWxkUmVmcy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICAgIG5ld1JlZnMuYWRkKGNoaWxkUmVmKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGFsbFJlZnMuZm9yRWFjaChmdW5jdGlvbihyZWZOYW1lKSB7XG4gICAgICAgIHZhciBvcCA9IGZpbmRPcGVyYXRpb24oZG9jLCByZWZOYW1lKTtcbiAgICAgICAgaWYgKG9wKSB7XG4gICAgICAgICAgbmV3RG9jLmRlZmluaXRpb25zLnB1c2gob3ApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG5ld0RvYztcbiAgICB9XG4gICAgXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBkb2M7XG4gICAgXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./queries/AllPlayersQuery.graphql\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2M1NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });