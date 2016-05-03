/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
import { DataSvc } from './services/DataSvc';
export declare class AppCmp {
    data: wijmo.collections.CollectionView;
    protected dataSvc: DataSvc;
    flex: wijmo.grid.FlexGrid;
    constructor(dataSvc: DataSvc);
}
