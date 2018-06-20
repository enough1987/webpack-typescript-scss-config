"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var body_component_1 = require("./components/body.component");
var footer_component_1 = require("./components/footer.component");
var header_component_1 = require("./components/header.component");
require("./styles.scss");
console.log(header_component_1.Header, body_component_1.Body, footer_component_1.Footer);
document.body.appendChild(header_component_1.Header);
document.body.appendChild(body_component_1.Body);
document.body.appendChild(footer_component_1.Footer);
//# sourceMappingURL=index.js.map