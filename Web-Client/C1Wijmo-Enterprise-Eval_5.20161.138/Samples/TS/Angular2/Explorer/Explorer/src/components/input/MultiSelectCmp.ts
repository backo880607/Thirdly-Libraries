'use strict';

import { Component, View, EventEmitter, Inject } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { InputBaseCmp } from './InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

// MultiSelect sample component.
@Component({
    selector: 'multi-select-cmp'
})
@View({
        templateUrl: 'src/components/input/multiSelectCmp.html',
        directives: [wjNg2Input.WjMultiSelect, CORE_DIRECTIVES]
})
export class MultiSelectCmp extends InputBaseCmp {

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }
}


