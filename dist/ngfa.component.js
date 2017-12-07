"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
class FaIcon {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.size = '1x';
        this.fixed = false;
        this.animation = 'none';
        this.rotate = 0;
        this.flipHorizontal = false;
        this.flipVertical = false;
    }
    transform() {
        if (this.animation !== 'none')
            return 'none';
        let r = (360 + this.rotate) % 360;
        let rotate = r ? `rotate(${r}deg) ` : '';
        let h = this.flipHorizontal ? -1 : 1;
        let v = this.flipVertical ? -1 : 1;
        let scale = h + v < 2 ? `scale(${h}, ${v})` : '';
        return this.sanitizer.bypassSecurityTrustStyle(`${rotate}${scale}` || 'none');
    }
}
FaIcon.decorators = [
    { type: core_1.Component, args: [{
                selector: 'fa',
                styles: [':host { display: inline-block }'],
                template: `<span class="fa fa-{{icon}} fa-{{size}} fa-{{animation}}"
                     [ngClass]="{ 'fa-fw': fixed }" [style.transform]="transform()"></span>`
            },] },
];
/** @nocollapse */
FaIcon.ctorParameters = () => [
    { type: platform_browser_1.DomSanitizer, },
];
FaIcon.propDecorators = {
    "icon": [{ type: core_1.Input },],
    "size": [{ type: core_1.Input },],
    "fixed": [{ type: core_1.Input },],
    "animation": [{ type: core_1.Input },],
    "rotate": [{ type: core_1.Input },],
    "flipHorizontal": [{ type: core_1.Input },],
    "flipVertical": [{ type: core_1.Input },],
};
exports.FaIcon = FaIcon;
class FaListIcon extends FaIcon {
    constructor(sanitizer, element) {
        super(sanitizer);
        this.sanitizer = sanitizer;
        this.element = element;
    }
    ngOnInit() {
        let fa = this.element.nativeElement;
        if (fa.parentElement.tagName.toLowerCase() === 'ul') {
            fa.parentElement.classList.add('fa-ul');
        }
    }
}
FaListIcon.decorators = [
    { type: core_1.Component, args: [{
                selector: 'fa-li',
                styles: [':host { display: list-item; position: relative }'],
                template: `<span class="fa fa-li fa-{{icon}} fa-{{size}} fa-{{animation}}"
                     [ngClass]="{ 'fa-fw': fixed }" [style.transform]="transform()"></span>
    <ng-content></ng-content>`
            },] },
];
/** @nocollapse */
FaListIcon.ctorParameters = () => [
    { type: platform_browser_1.DomSanitizer, },
    { type: core_1.ElementRef, },
];
exports.FaListIcon = FaListIcon;
//# sourceMappingURL=ngfa.component.js.map