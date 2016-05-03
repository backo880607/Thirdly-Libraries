﻿///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

// Angular
import { Component, View, EventEmitter, provide, Input, Inject, enableProdMode } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { bootstrap } from 'angular2/platform/browser';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import { AppTab, AppTabPane } from './components/AppTab';
import { DataSvc } from './services/DataSvc';

    'use strict';

    // The Explorer application root component.
    @Component({
        selector: 'app-cmp',
        templateUrl: 'src/app.html',
        directives: [CORE_DIRECTIVES, AppTab, AppTabPane,
            wjNg2Chart.WjFlexPie, wjNg2Chart.WjFlexPieDataLabel, wjNg2Chart.WjFlexChartLegend,
            wjNg2Input.WjInputNumber,wjNg2Input.WjMenu, wjNg2Input.WjMenuItem]
    })


    export class AppCmp {
        // generate some random data
        protected dataSvc: DataSvc;
        itemsSource: { name: string, value: number }[];
        header = 'Fruit By Value';
        footer = '2014 GrapeCity, inc.';
        legendPosition = 'Right';
        innerRadius = 0;
        offset = 0;
        startAngle = 0;
        reversed = false;
        palette = 'standard';
        palettes = ['standard', 'cocoa', 'coral', 'dark', 'highcontrast', 'light', 'midnight', 'minimal', 'modern', 'organic', 'slate'];
        selectedPosition = 'Top';
        selectedOffset = 0;
        isAnimated = true;
        chartPalette: wijmo.chart.Palettes;

        constructor( @Inject(DataSvc) dataSvc: DataSvc) {
            this.dataSvc = dataSvc;
            this.itemsSource = this.dataSvc.getData();
        }

        paletteChanged = (sender: wijmo.input.Menu) => {
            var p = this.palettes[sender.selectedIndex];
            this.palette = p;
            this.chartPalette = wijmo.chart.Palettes[p];
        };
}


enableProdMode();
// Bootstrap application with hash style navigation and global services.
bootstrap(AppCmp, [
DataSvc
]);