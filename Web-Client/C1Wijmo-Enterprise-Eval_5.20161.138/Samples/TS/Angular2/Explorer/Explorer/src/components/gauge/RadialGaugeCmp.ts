'use strict';

import { Component, View } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { GaugeBaseCmp } from './GaugeBaseCmp';
import * as wjNg2Gauge from 'wijmo/wijmo.angular2.gauge';

// Radial gauge sample component.
@Component({
    selector: 'radial-gauge-cmp'
})
@View({
        templateUrl: 'src/components/gauge/radialGaugeCmp.html',
        directives: [wjNg2Gauge.WjRadialGauge, wjNg2Gauge.WjRange, CORE_DIRECTIVES],
})
export class RadialGaugeCmp extends GaugeBaseCmp {

    constructor() {
        super();
    }
}


