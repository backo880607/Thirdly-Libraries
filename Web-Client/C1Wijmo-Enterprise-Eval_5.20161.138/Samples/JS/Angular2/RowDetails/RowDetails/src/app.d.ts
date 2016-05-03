/// <reference path="../node_modules/angular2/typings/browser.d.ts" />
import { AfterViewInit } from 'angular2/core';
import { DataSvc } from './services/DataSvc';
import { Http } from 'angular2/http';
export declare class AppCmp implements AfterViewInit {
    private _dataSvc;
    private _http;
    private _productsCache;
    detailMode: string;
    categories: wijmo.collections.CollectionView;
    products: wijmo.collections.CollectionView;
    flex1: wijmo.grid.FlexGrid;
    constructor(_dataSvc: DataSvc, _http: Http);
    ngAfterViewInit(): void;
    private _initDetailProvider(grid);
    getData(view: wijmo.collections.CollectionView, url: string): void;
    getProducts(categoryID: any): any;
}
