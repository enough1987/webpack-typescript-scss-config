"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var TEXT = _.join(_.values({
    a: 'Hello',
    b: 'Header',
}), ' ');
var Header = document.createElement('div');
exports.Header = Header;
Header.innerHTML = TEXT;
//# sourceMappingURL=header.component.js.map