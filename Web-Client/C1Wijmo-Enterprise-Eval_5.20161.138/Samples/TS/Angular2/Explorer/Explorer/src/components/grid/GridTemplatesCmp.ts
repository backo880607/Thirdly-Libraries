﻿'use strict';

import { Component, View, EventEmitter, Inject } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { GridBaseCmp } from './GridBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';

// FlexGrid Templates sample component.
@Component({
    selector: 'grid-templates-cmp'
})
@View({
        templateUrl: 'src/components/grid/gridTemplatesCmp.html',
        directives: [wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Grid.WjFlexGridCellTemplate, CORE_DIRECTIVES,
        wjNg2Input.WjInputNumber],
})
export class GridTemplatesCmp extends GridBaseCmp {

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);

    }
}


