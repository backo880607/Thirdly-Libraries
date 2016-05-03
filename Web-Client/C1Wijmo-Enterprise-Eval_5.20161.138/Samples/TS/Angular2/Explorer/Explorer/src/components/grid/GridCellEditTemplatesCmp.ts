﻿'use strict';

import { Component, View, EventEmitter, Inject, forwardRef, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { GridBaseCmp } from './GridBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Core from 'wijmo/wijmo.angular2.core';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';

// FlexGrid Templates sample component.
@Component({
    selector: 'grid-cell-edit-templates-cmp'
})
@View({
        templateUrl: 'src/components/grid/gridCellEditTemplatesCmp.html',
        directives: [wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Grid.WjFlexGridCellTemplate, CORE_DIRECTIVES,
            wjNg2Input.WjInputNumber, wjNg2Input.WjInputDate, wjNg2Core.WjComponentLoader, wjNg2Core.WjHtmlLoader, 
            forwardRef(() => PersonCellEditorCmp)],
})
export class GridCellEditTemplatesCmp extends GridBaseCmp {
    personCellEditor = PersonCellEditorCmp;
    personCellEditorHtml = `<person-cell-editor-cmp [(firstName)]="cell.values.fn" [(lastName)]="cell.values.ln" 
                                            [(person)]="cell.value"></person-cell-editor-cmp>`;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
        this.itemCount = 300;
        // add 'person' property
        for (let item of this.data) {
            item['person'] = Person.getRandom();
        }
    }

    beginningEdit(flex: wijmo.grid.FlexGrid, args: wijmo.grid.CellRangeEventArgs) {
        if (flex.columns[args.col].binding === 'person') {
            var person = flex.getCellData(args.row, args.col, false);
            if (!person) {
                flex.setCellData(args.row, args.col, new Person());
            }
        }
    }

    format(data: any, format: string) {
        return data != null ? wijmo.Globalize.format(data, format) : '';
    }

}

@Component({
    selector: 'person-cell-editor-cmp',
        template: `
            <b>Name</b> <input [(ngModel)]="firstName" style="width:70px"/> 
            <b>Surname</b> <input [(ngModel)]="lastName" style="width:70px"/>
`,
        inputs: ['firstName', 'lastName', 'person'],
        outputs: ['firstNameChange', 'lastNameChange', 'personChange'],
    directives: [CORE_DIRECTIVES],
})
export class PersonCellEditorCmp {
    private _firstName = '';
    private _lastName = '';
    private _person: Person;
    // events must be synchronous!!!
    firstNameChange = new EventEmitter(false);
    lastNameChange = new EventEmitter(false);
    personChange = new EventEmitter(false);

    constructor() {
    }

    get firstName(): string {
        return this._firstName;
    }
    set firstName(value: string) {
        if (this._firstName !== value) {
            this._firstName = value;
            this.firstNameChange.next(value);
        }
    }

    get lastName(): string {
        return this._lastName;
    }
    set lastName(value: string) {
        if (this._lastName !== value) {
            this._lastName = value;
            this.lastNameChange.next(value);
        }
    }

    get person(): Person {
        return this._person;
    }
    set person(value: Person) {
        if (!value) {
            value = new Person();
        }
        if (this._person !== value) {
            this._person = value;
            this.personChange.next(value);
        }
    }

}

export class Person {
    private static _firstNames = ['Nancy', 'Lisa', 'Margaret', 'Sandra', 'Sharon', 'Amanda', 'Pamela', 'Anna',
        'James', 'John', 'Robert', 'Michael', 'David', 'Richard', 'Daniel', 'Paul'];
    private static _lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Wilson', 'Moore', 'Taylor', 'Jackson',
        'White', 'Harris', 'Thompson', 'Martinez', 'Robinson', 'Clark', 'Walker'];

    firstName: string;
    lastName: string;

    static getRandom(): Person {
        return new Person(Person._getRandomElement(Person._firstNames), Person._getRandomElement(Person._lastNames));
    }

    constructor(firstName?: string, lastName?: string) {
        this.firstName = firstName || '';
        this.lastName = lastName || '';
    }

    private static _getRandomElement(array: string[]): string {
        return array[Math.round(Math.random() * (array.length - 1))];
    }
}

