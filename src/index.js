"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./styles.scss");
var lodash_1 = require("lodash");
var getHeader = function () {
    var helloWebpack = lodash_1.default.join(lodash_1.default.values({
        a: 'Hello',
        b: 'webpack'
    }), ' ');
    var element = document.createElement('h1');
    element.innerHTML = helloWebpack;
    return element;
};
document.body.appendChild(getHeader());
