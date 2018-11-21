import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-account-info',
    templateUrl: './account-info.component.html',
    styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {
    @Input() accountInfo: any;

    private gridApi;
    private gridColumnApi;
    private rowData;
    private columnDefs;
    private domLayout;

    constructor() {
        this.columnDefs = [
            { headerName: 'Current User Status', field: 'currentUserStatus' },
            { headerName: 'Account Type', field: 'accountType' },
            { headerName: 'Current Hopsworks Roles', field: 'currentHopsworksRoles' },
            { headerName: 'Max Number of Projects allowed', field: 'maxNumProjects' },
            { headerName: 'Last Password Change', field: 'lastPasswordChange' }
        ];
        this.domLayout = 'autoHeight';
    }

    ngOnInit() {
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.rowData = [this.accountInfo];
    }

}
