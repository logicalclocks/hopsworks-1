import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-personal-info',
    templateUrl: './personal-info.component.html',
    styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
    // @Input() personalInfo: any;

    private gridApi;
    private gridColumnApi;
    private rowData;
    private columnDefs;
    private domLayout;

    constructor() {
        this.columnDefs = [
            { headerName: 'Name', field: 'name' },
            { headerName: 'Email', field: 'email' },
            { headerName: 'Phone', field: 'phone' },
            { headerName: 'Organization', field: 'organization' }
        ];
        this.domLayout = 'autoHeight';
    }

    ngOnInit() {
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.rowData = [
            {
                name: 'Pavel Panov',
                email: 'paveltiger9@gmail.com',
                phone: '79876543210',
                organization: 'Any'
            }
        ];
    }

}
