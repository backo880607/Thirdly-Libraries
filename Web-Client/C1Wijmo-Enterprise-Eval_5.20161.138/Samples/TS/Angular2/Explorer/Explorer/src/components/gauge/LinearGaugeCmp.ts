'use strict';

import { Component, View } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { GaugeBaseCmp } from './GaugeBaseCmp';
import * as wjNg2Gauge from 'wijmo/wijmo.angular2.gauge';

// Linear gauge sample component.
@Component({
    selector: 'linear-gauge-cmp'
})
@View({
        templateUrl: 'src/components/gauge/linearGaugeCmp.html',
        directives: [wjNg2Gauge.WjLinearGauge, wjNg2Gauge.WjRange, CORE_DIRECTIVES],
})
export class LinearGaugeCmp extends GaugeBaseCmp {

    constructor() {
        super();
    }
}


