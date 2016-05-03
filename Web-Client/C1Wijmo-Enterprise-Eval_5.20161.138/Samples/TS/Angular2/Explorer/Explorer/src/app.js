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
var router_1 = require('angular2/router');
// Services
var MenuSvc_1 = require('./services/MenuSvc');
var DataSvc_1 = require('./services/DataSvc');
var SparkSvc_1 = require('./services/SparkSvc');
// Wijmo Input components 
var wjNg2Input = require('wijmo/wijmo.angular2.input');
// Sample components
// Infrastructure
var IntroCmp_1 = require('./components/infra/IntroCmp');
// Input
var ComboBoxCmp_1 = require('./components/input/ComboBoxCmp');
var ListBoxCmp_1 = require('./components/input/ListBoxCmp');
var MenuCmp_1 = require('./components/input/MenuCmp');
var AutoCompleteCmp_1 = require('./components/input/AutoCompleteCmp');
var MultiSelectCmp_1 = require('./components/input/MultiSelectCmp');
var DateTimeCmp_1 = require('./components/input/DateTimeCmp');
var NumbersCmp_1 = require('./components/input/NumbersCmp');
var ColorsCmp_1 = require('./components/input/ColorsCmp');
var MaskedInputCmp_1 = require('./components/input/MaskedInputCmp');
var PopupCmp_1 = require('./components/input/PopupCmp');
// Grid
var GridIntroCmp_1 = require('./components/grid/GridIntroCmp');
var GridGroupingCmp_1 = require('./components/grid/GridGroupingCmp');
var GridPagingCmp_1 = require('./components/grid/GridPagingCmp');
var GridTemplatesCmp_1 = require('./components/grid/GridTemplatesCmp');
var GridDynamicColumnsCmp_1 = require('./components/grid/GridDynamicColumnsCmp');
var GridCellEditTemplatesCmp_1 = require('./components/grid/GridCellEditTemplatesCmp');
//import { Test1Cmp } from './components/grid/Test1Cmp';
// Chart
var ChartIntroCmp_1 = require('./components/chart/ChartIntroCmp');
var ChartAxesCmp_1 = require('./components/chart/ChartAxesCmp');
// Pie
var PieChartIntroCmp_1 = require('./components/piechart/PieChartIntroCmp');
// Gauge
var LinearGaugeCmp_1 = require('./components/gauge/LinearGaugeCmp');
var RadialGaugeCmp_1 = require('./components/gauge/RadialGaugeCmp');
var BulletGaugeCmp_1 = require('./components/gauge/BulletGaugeCmp');
var explorer;
(function (explorer) {
    'use strict';
    // The Explorer application root component.
    var AppCmp = (function () {
        function AppCmp(menuSvc) {
            this._activeTheme = '';
            this.navCollapsed = true;
            this.menuData = menuSvc.getMenu();
        }
        Object.defineProperty(AppCmp.prototype, "activeTheme", {
            get: function () {
                return this._activeTheme;
            },
            set: function (value) {
                if (this._activeTheme != value) {
                    this._activeTheme = value;
                    var themeLink = document.getElementById('activeThemeLink');
                    if (themeLink) {
                        themeLink.href = value;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            core_1.Input()
        ], AppCmp.prototype, "menuData", void 0);
        __decorate([
            core_1.Input()
        ], AppCmp.prototype, "navCollapsed", void 0);
        AppCmp = __decorate([
            core_1.Component({
                selector: 'app-cmp',
            }),
            router_1.RouteConfig([
                //{ path: '/', redirectTo: ['/infra/intro'] },
                { path: '/', redirectTo: ['InfraIntro'] },
                // Infra
                { path: '/infra/intro', component: IntroCmp_1.IntroCmp, as: 'InfraIntro' },
                // Input
                { path: '/input/listbox', component: ListBoxCmp_1.ListBoxCmp, as: 'InputListBox' },
                { path: '/input/combo', component: ComboBoxCmp_1.ComboBoxCmp, as: 'InputCombo' },
                { path: '/input/menu', component: MenuCmp_1.MenuCmp, as: 'InputMenu' },
                { path: '/input/autocomplete', component: AutoCompleteCmp_1.AutoCompleteCmp, as: 'InputAutoComplete' },
                { path: '/input/multiselect', component: MultiSelectCmp_1.MultiSelectCmp, as: 'InputMultiSelect' },
                { path: '/input/datetime', component: DateTimeCmp_1.DateTimeCmp, as: 'InputDateTime' },
                { path: '/input/number', component: NumbersCmp_1.NumbersCmp, as: 'InputNumber' },
                { path: '/input/color', component: ColorsCmp_1.ColorsCmp, as: 'InputColor' },
                { path: '/input/mask', component: MaskedInputCmp_1.MaskedInputCmp, as: 'InputMask' },
                { path: '/input/popup', component: PopupCmp_1.PopupCmp, as: 'InputPopup' },
                // Grid 
                { path: '/grid/intro', component: GridIntroCmp_1.GridIntroCmp, as: 'GridIntro' },
                { path: '/grid/grouping', component: GridGroupingCmp_1.GridGroupingCmp, as: 'GridGrouping' },
                { path: '/grid/paging', component: GridPagingCmp_1.GridPagingCmp, as: 'GridPaging' },
                { path: '/grid/templates', component: GridTemplatesCmp_1.GridTemplatesCmp, as: 'GridTemplates' },
                { path: '/grid/dynacols', component: GridDynamicColumnsCmp_1.GridDynamicColumnsCmp, as: 'GridDynaCols' },
                { path: '/grid/celledittempl', component: GridCellEditTemplatesCmp_1.GridCellEditTemplatesCmp, as: 'GridCellEditTempl' },
                //{ path: '/grid/test1', component: Test1Cmp, as: 'GridTest1' }, 
                // Chart
                { path: '/chart/intro', component: ChartIntroCmp_1.ChartIntroCmp, as: 'ChartIntro' },
                { path: '/chart/axes', component: ChartAxesCmp_1.ChartAxesCmp, as: 'ChartAxes' },
                // Pie
                { path: '/piechart/intro', component: PieChartIntroCmp_1.PieChartIntroCmp, as: 'PieChartIntro' },
                // Gauge
                { path: '/gauge/linear', component: LinearGaugeCmp_1.LinearGaugeCmp, as: 'GaugeLinear' },
                { path: '/gauge/radial', component: RadialGaugeCmp_1.RadialGaugeCmp, as: 'GaugeRadial' },
                { path: '/gauge/bullet', component: BulletGaugeCmp_1.BulletGaugeCmp, as: 'GaugeBullet' },
            ]),
            core_1.View({
                templateUrl: 'src/app.html',
                directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem,
                    wjNg2Input.WjMenuSeparator],
            }),
            __param(0, core_1.Inject(MenuSvc_1.MenuSvc))
        ], AppCmp);
        return AppCmp;
    })();
    explorer.AppCmp = AppCmp;
})(explorer = exports.explorer || (exports.explorer = {}));
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
browser_1.bootstrap(explorer.AppCmp, [
    router_1.ROUTER_PROVIDERS,
    core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
    MenuSvc_1.MenuSvc,
    DataSvc_1.DataSvc,
    SparkSvc_1.SparkSvc
]);
//# sourceMappingURL=app.js.map