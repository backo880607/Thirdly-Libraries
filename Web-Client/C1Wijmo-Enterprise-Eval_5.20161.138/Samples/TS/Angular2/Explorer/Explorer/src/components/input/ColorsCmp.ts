'use strict';

import { Component, View, EventEmitter, Inject } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { InputBaseCmp } from './InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

// Colors sample component.
@Component({
    selector: 'colors-cmp',
})
@View({
        templateUrl: 'src/components/input/colorsCmp.html',
        directives: [wjNg2Input.WjColorPicker, wjNg2Input.WjInputColor,
            wjNg2Input.WjComboBox, CORE_DIRECTIVES],

})
export class ColorsCmp extends InputBaseCmp {
    theColor = 'white';

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }
}
