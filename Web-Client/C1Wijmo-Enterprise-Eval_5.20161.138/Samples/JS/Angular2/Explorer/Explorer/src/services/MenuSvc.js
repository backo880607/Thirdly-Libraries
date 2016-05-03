'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
// Application navigation menu service.
var MenuSvc = (function () {
    function MenuSvc() {
    }
    //constructor(http: Http) {
    //    this._http = http;
    //}
    MenuSvc.prototype.getMenu = function () {
        var ret = [
            {
                "section": "Infrastructure",
                "links": [
                    { "text": "Introduction", "url": "/infra/intro", "alias": "InfraIntro" },
                    { "text": "Globalization", "url": "/infra/globalization" },
                    { "text": "CollectionView", "url": "/infra/data" },
                    { "text": "Tracking Changes", "url": "/infra/trackChanges" },
                    { "text": "OData", "url": "/infra/odata" },
                    { "text": "Controls", "url": "/infra/controls" },
                    { "text": "Control Templates", "url": "/infra/templates" },
                    { "text": "Events", "url": "/infra/events" },
                    { "text": "Themes", "url": "/infra/themes" },
                    { "text": "Tooltips", "url": "/infra/tooltips" }
                ]
            },
            {
                "section": "Input",
                "links": [
                    { "text": "Introduction", "url": "/input/intro" },
                    { "text": "ListBox", "url": "/input/listbox", "alias": "InputListBox" },
                    { "text": "ComboBox", "url": "/input/combo", "alias": "InputCombo" },
                    { "text": "AutoComplete", "url": "/input/autocomplete", "alias": "InputAutoComplete" },
                    { "text": "MultiSelect", "url": "/input/multiselect", "alias": "InputMultiSelect" },
                    { "text": "Menu", "url": "/input/menu", "alias": "InputMenu" },
                    { "text": "Date, Time", "url": "/input/datetime", "alias": "InputDateTime" },
                    { "text": "Numbers", "url": "/input/number", "alias": "InputNumber" },
                    { "text": "Colors", "url": "/input/color", "alias": "InputColor" },
                    { "text": "Masked Input", "url": "/input/mask", "alias": "InputMask" },
                    { "text": "Popup", "url": "/input/popup", "alias": "InputPopup" }
                ]
            },
            {
                "section": "FlexGrid",
                "links": [
                    { "text": "Introduction", "url": "/grid/intro", "alias": "GridIntro" },
                    { "text": "Grouping", "url": "/grid/grouping", "alias": "GridGrouping" },
                    { "text": "Paging", "url": "/grid/paging", "alias": "GridPaging" },
                    { "text": "Star Sizing", "url": "/grid/star" },
                    { "text": "Column Layout", "url": "/grid/columnLayout" },
                    { "text": "Tree View", "url": "/grid/tree" },
                    { "text": "Cell Merging", "url": "/grid/merging" },
                    { "text": "Unbound Grid", "url": "/grid/unbound" },
                    { "text": "Custom Cells", "url": "/grid/ccells" },
                    { "text": "OData", "url": "/grid/odata" },
                    { "text": "Editing", "url": "/grid/editing" },
                    { "text": "Frozen Cells", "url": "/grid/frozen" },
                    { "text": "Right To Left", "url": "/grid/rtl" },
                    { "text": "Templates", "url": "/grid/templates", "alias": "GridTemplates" },
                    { "text": "No Directive", "url": "/grid/nodctv" },
                    { "text": "Dynamic Columns", "url": "/grid/dynacols", "alias": "GridDynaCols" },
                    { "text": "Cell Edit Templates", "url": "/grid/celledittempl", "alias": "GridCellEditTempl" },
                ]
            },
            {
                "section": "FlexChart",
                "links": [
                    { "text": "Introduction", "url": "/chart/intro", "alias": "ChartIntro" },
                    { "text": "Binding", "url": "/chart/binding" },
                    { "text": "Series Binding", "url": "/chart/seriesBinding" },
                    { "text": "Header and Footer", "url": "/chart/headerFooter" },
                    { "text": "Hit Test", "url": "/chart/hitTest" },
                    { "text": "Selection", "url": "/chart/selection" },
                    { "text": "Labels", "url": "/chart/labels" },
                    { "text": "Item Formatter", "url": "/chart/itemFormatter" },
                    { "text": "Zoom", "url": "/chart/zoom" },
                    { "text": "Bubble", "url": "/chart/bubble" },
                    { "text": "Financial Chart", "url": "/chart/finance" },
                    { "text": "LineMarker", "url": "/chart/marker" },
                    { "text": "Zones", "url": "/chart/zones" },
                    { "text": "Axes", "url": "/chart/axes", "alias": "ChartAxes" },
                    { "text": "Plot areas", "url": "/chart/plotAreas" }
                ]
            },
            {
                "section": "FlexPie",
                "links": [
                    { "text": "Introduction", "url": "/piechart/intro", "alias": "PieChartIntro" },
                    { "text": "Selection", "url": "/piechart/selection" },
                    { "text": "ItemFormatter", "url": "/piechart/itemFormatter" }
                ]
            },
            {
                "section": "Gauges",
                "links": [
                    { "text": "Introduction", "url": "/gauge/intro" },
                    { "text": "LinearGauge", "url": "/gauge/linear", "alias": "GaugeLinear" },
                    { "text": "RadialGauge", "url": "/gauge/radial", "alias": "GaugeRadial" },
                    { "text": "BulletGraph", "url": "/gauge/bullet", "alias": "GaugeBullet" }
                ]
            }
        ];
        return ret;
        //return this._http.get('data/menu.json').
        //return $http.get('data/menu.json')
        //    .then(function (result) {
        //        return result.data;
        //    });
    };
    MenuSvc = __decorate([
        core_1.Injectable()
    ], MenuSvc);
    return MenuSvc;
})();
exports.MenuSvc = MenuSvc;
//# sourceMappingURL=MenuSvc.js.map