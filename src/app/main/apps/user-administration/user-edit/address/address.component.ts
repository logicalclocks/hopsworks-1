import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
    @Input() address: any;

    private gridApi;
    private gridColumnApi;
    private rowData;
    private columnDefs;
    private domLayout;

    constructor() {
        this.columnDefs = [
            { headerName: 'C/O', field: 'co' },
            { headerName: 'Street and number', field: 'streetNumber' },
            { headerName: 'Postal Code/City', field: 'postalCity' },
            { headerName: 'State', field: 'state' },
            { headerName: 'Organization Phone', field: 'organizationPhone' },
            { headerName: 'Fax', field: 'fax' },
            { headerName: 'Contact Person', field: 'contactPerson' },
            { headerName: 'Department', field: 'department' },
            { headerName: 'Website', field: 'website' },
        ];
        this.domLayout = 'autoHeight';
    }

    ngOnInit() {
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.rowData = [this.address];
    }

}
