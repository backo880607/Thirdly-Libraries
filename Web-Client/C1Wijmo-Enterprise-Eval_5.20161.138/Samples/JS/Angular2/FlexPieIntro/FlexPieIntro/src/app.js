///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Angular
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var browser_1 = require('angular2/platform/browser');
var wjNg2Chart = require('wijmo/wijmo.angular2.chart');
var wjNg2Input = require('wijmo/wijmo.angular2.input');
var AppTab_1 = require('./components/AppTab');
var DataSvc_1 = require('./services/DataSvc');
'use strict';
// The Explorer application root component.
var AppCmp = (function () {
    function AppCmp(dataSvc) {
        var _this = this;
        this.header = 'Fruit By Value';
        this.footer = '2014 GrapeCity, inc.';
        this.legendPosition = 'Right';
        this.innerRadius = 0;
        this.offset = 0;
        this.startAngle = 0;
        this.reversed = false;
        this.palette = 'standard';
        this.palettes = ['standard', 'cocoa', 'coral', 'dark', 'highcontrast', 'light', 'midnight', 'minimal', 'modern', 'organic', 'slate'];
        this.selectedPosition = 'Top';
        this.selectedOffset = 0;
        this.isAnimated = true;
        this.paletteChanged = function (sender) {
            var p = _this.palettes[sender.selectedIndex];
            _this.palette = p;
            _this.chartPalette = wijmo.chart.Palettes[p];
        };
        this.dataSvc = dataSvc;
        this.itemsSource = this.dataSvc.getData();
    }
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app-cmp',
            templateUrl: 'src/app.html',
            directives: [common_1.CORE_DIRECTIVES, AppTab_1.AppTab, AppTab_1.AppTabPane,
                wjNg2Chart.WjFlexPie, wjNg2Chart.WjFlexPieDataLabel, wjNg2Chart.WjFlexChartLegend,
                wjNg2Input.WjInputNumber, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
browser_1.bootstrap(AppCmp, [
    DataSvc_1.DataSvc
]);
//# sourceMappingURL=app.js.map