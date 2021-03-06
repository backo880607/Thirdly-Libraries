'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var FrmBaseCmp_1 = require('./FrmBaseCmp');
var FrmEditAccountCmp = (function (_super) {
    __extends(FrmEditAccountCmp, _super);
    function FrmEditAccountCmp() {
        _super.call(this);
    }
    FrmEditAccountCmp = __decorate([
        core_1.Component({
            selector: 'frm-edit-account-cmp',
            templateUrl: 'src/components/includes/frmEditAccountCmp.html',
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
        })
    ], FrmEditAccountCmp);
    return FrmEditAccountCmp;
})(FrmBaseCmp_1.FrmBaseCmp);
exports.FrmEditAccountCmp = FrmEditAccountCmp;
//# sourceMappingURL=FrmEditAccountCmp.js.map