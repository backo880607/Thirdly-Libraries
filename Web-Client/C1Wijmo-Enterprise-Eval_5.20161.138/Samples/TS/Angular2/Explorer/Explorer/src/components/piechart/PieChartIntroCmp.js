'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var wjNg2Input = require('wijmo/wijmo.angular2.input');
var wjNg2Chart = require('wijmo/wijmo.angular2.chart');
// PieChart Introduction sample component.
var PieChartIntroCmp = (function () {
    function PieChartIntroCmp() {
        this.pal = 0;
        this.palettes = ['standard', 'cocoa', 'coral', 'dark', 'highcontrast', 'light', 'midnight', 'minimal', 'modern', 'organic', 'slate'];
        this.labels = 0;
        this.lblBorder = false;
        // populate itemsSource
        var names = ['Oranges', 'Apples', 'Pears', 'Bananas', 'Pineapples'];
        this.itemsSource = [];
        for (var i = 0; i < names.length; i++) {
            this.itemsSource.push({
                name: names[i],
                value: Math.round(Math.random() * 100)
            });
        }
    }
    PieChartIntroCmp.prototype.getPalette = function (palIdx) {
        return wijmo.chart.Palettes[this.palettes[palIdx]];
    };
    PieChartIntroCmp.prototype.hasLabels = function () {
        var chart = this.chart;
        return chart && chart.dataLabel.position != 0;
    };
    ;
    __decorate([
        core_1.ViewChild('chart')
    ], PieChartIntroCmp.prototype, "chart", void 0);
    PieChartIntroCmp = __decorate([
        core_1.Component({
            selector: 'pie-chart-intro-cmp'
        }),
        core_1.View({
            templateUrl: 'src/components/piechart/pieChartIntroCmp.html',
            directives: [wjNg2Chart.WjFlexPie, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, common_1.CORE_DIRECTIVES]
        })
    ], PieChartIntroCmp);
    return PieChartIntroCmp;
})();
exports.PieChartIntroCmp = PieChartIntroCmp;
//# sourceMappingURL=PieChartIntroCmp.js.map