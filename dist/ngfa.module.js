"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("font-awesome/css/font-awesome.min.css");
const common_1 = require("@angular/common");
const core_1 = require("@angular/core");
const ngfa_component_1 = require("./ngfa.component");
class NgFontAwesomeModule {
}
NgFontAwesomeModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule],
                declarations: [
                    ngfa_component_1.FaIcon,
                    ngfa_component_1.FaListIcon
                ],
                exports: [
                    ngfa_component_1.FaIcon,
                    ngfa_component_1.FaListIcon
                ]
            },] },
];
/** @nocollapse */
NgFontAwesomeModule.ctorParameters = () => [];
exports.NgFontAwesomeModule = NgFontAwesomeModule;
//# sourceMappingURL=ngfa.module.js.map