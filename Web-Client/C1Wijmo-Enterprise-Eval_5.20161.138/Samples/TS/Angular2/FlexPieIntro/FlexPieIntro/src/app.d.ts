/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
import { DataSvc } from './services/DataSvc';
export declare class AppCmp {
    protected dataSvc: DataSvc;
    itemsSource: {
        name: string;
        value: number;
    }[];
    header: string;
    footer: string;
    legendPosition: string;
    innerRadius: number;
    offset: number;
    startAngle: number;
    reversed: boolean;
    palette: string;
    palettes: string[];
    selectedPosition: string;
    selectedOffset: number;
    isAnimated: boolean;
    chartPalette: wijmo.chart.Palettes;
    constructor(dataSvc: DataSvc);
    paletteChanged: (sender: wijmo.input.Menu) => void;
}
