﻿///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

// Angular
import { Component, View, EventEmitter, provide, Input, Inject, ViewChild, enableProdMode } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { bootstrap } from 'angular2/platform/browser';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';
import * as wjNg2GridFilter from 'wijmo/wijmo.angular2.grid.filter';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import { DataSvc } from './services/DataSvc';

'use strict';

// The application root component.
@Component({
    selector: 'app-cmp',
    templateUrl: 'src/app.html',
    directives: [CORE_DIRECTIVES, 
        wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Grid.WjFlexGridCellTemplate, wjNg2Grid.WjTemplateCmp,
        wjNg2GridFilter.WjFlexGridFilter, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem]
})

export class AppCmp {    
    data: wijmo.collections.CollectionView;
    countryMap: wijmo.grid.DataMap;

    protected dataSvc: DataSvc;
    private _downloadsColumnFilterType = wijmo.grid.filter.FilterType.Condition;
    private _culture = 'en';

    @ViewChild('filter') filter: wijmo.grid.filter.FlexGridFilter;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.dataSvc = dataSvc;
        this.data = new wijmo.collections.CollectionView(this.dataSvc.getData());
        this.countryMap = new wijmo.grid.DataMap(new wijmo.collections.CollectionView(this.dataSvc.getCountryMap()), 'key', 'name');
    }

    get downloadsColumnFilterType(): wijmo.grid.filter.FilterType {
        return this._downloadsColumnFilterType;
    }
    set downloadsColumnFilterType(value: wijmo.grid.filter.FilterType) {
        if (this._downloadsColumnFilterType != value) {
            this._downloadsColumnFilterType = value;
            var f = this.filter;
            if (f) {
                var col = f.grid.columns.getColumn('downloads'),
                    cf = f.getColumnFilter(col, true);
                cf.filterType = this._downloadsColumnFilterType;
            }
        }
    }

    get culture(): string {
        return this._culture;
    }
    set culture(value: string) {
        if (this._culture != value) {
            this._culture = value;
            var self = this;
            // remove old localization reference
            $.ajax({
                url: 'scripts/vendor/wijmo.culture.' + self._culture + '.js',
                dataType: 'script',
                success: function (data) {
                    wijmo.Control.invalidateAll(); // invalidate all controls to show new culture
                },
            });
        }
    }

    saveFilter() {
        localStorage['filter'] = this.filter.filterDefinition;
    }

    restoreFilter() {
        this.filter.filterDefinition = localStorage['filter'];
    }

}

enableProdMode();
// Bootstrap application with hash style navigation and global services.
bootstrap(AppCmp, [
    DataSvc
]);