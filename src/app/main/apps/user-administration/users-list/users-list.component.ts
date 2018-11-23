import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UsersService } from '../../../../shared/services/users.service';

@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
    @Output() goUserEdit = new EventEmitter();
    private selectedRow = null;
    private gridApi;
    private gridColumnApi;
    private rowData: any[];

    private columnDefs;
    private paginationPageSize = 25;
    private paginationNumberFormatter;
    private rowSelection;
    private domLayout;
    private sideBar;

    constructor(private usersService: UsersService) {
        this.columnDefs = [
            { headerName: 'First Name', field: 'fname', filter: 'agTextColumnFilter', floatingFilterComponentParams: { suppressFilterButton: true } },
            { headerName: 'Last Name', field: 'lname', filter: 'agTextColumnFilter', floatingFilterComponentParams: { suppressFilterButton: true } },
            { headerName: 'Email', field: 'email', filter: 'agTextColumnFilter', floatingFilterComponentParams: { suppressFilterButton: true } },
            { headerName: 'Type', field: 'type', filter: 'agTextColumnFilter', floatingFilterComponentParams: { suppressFilterButton: true } },
            { headerName: 'Status', field: 'status', filter: 'agTextColumnFilter', floatingFilterComponentParams: { suppressFilterButton: true } },
            { headerName: 'Online', field: 'online', filter: 'agTextColumnFilter', floatingFilterComponentParams: { suppressFilterButton: true } },
            { headerName: 'Role', field: 'role', suppressFilter: true }
        ];
        this.paginationNumberFormatter = function (params) {
            return '[' + params.value.toLocaleString() + ']';
        };
        this.rowSelection = 'single';
        this.domLayout = 'autoHeight';
        this.sideBar = {
            toolPanels: [
                {
                    id: 'columns',
                    labelDefault: 'Columns',
                    labelKey: 'columns',
                    iconKey: 'columns',
                    toolPanel: 'agColumnsToolPanel',
                    toolPanelParams: {
                        suppressRowGroups: true,
                        suppressValues: true,
                        suppressPivots: true,
                        suppressPivotMode: true,
                        suppressSideButtons: true,
                        suppressColumnFilter: false,
                        suppressColumnSelectAll: false,
                        suppressColumnExpandAll: true
                    }
                }
            ],
            defaultToolPanel: 'columns'
        };
    }

    ngOnInit() {
    }

    onPageSizeChanged(newPageSize) {
        this.gridApi.paginationSetPageSize(Number(this.paginationPageSize));
    }

    onSelectionChanged() {
         this.selectedRow = this.gridApi.getSelectedRows();
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.rowData = [
            {
                fname: 'Pavel',
                lname: 'Panov',
                email: 'paveltiger9@gmail.com',
                type: 'ADMIN',
                status: 'ONLINE',
                role: 'ADMIN'
            },
            {
                fname: 'Pavel',
                lname: 'Panov',
                email: 'paveltiger9@gmail.com',
                type: 'ADMIN',
                status: 'ONLINE',
                role: 'ADMIN'
            },
            {
                fname: 'Pavel',
                lname: 'Panov',
                email: 'paveltiger9@gmail.com',
                type: 'ADMIN',
                status: 'ONLINE',
                role: 'ADMIN'
            },
            {
                fname: 'Pavel',
                lname: 'Panov',
                email: 'paveltiger9@gmail.com',
                type: 'ADMIN',
                status: 'ONLINE',
                role: 'ADMIN'
            },
            {
                fname: 'Pavel',
                lname: 'Panov',
                email: 'paveltiger9@gmail.com',
                type: 'ADMIN',
                status: 'ONLINE',
                role: 'ADMIN'
            },{
                fname: 'Pavel',
                lname: 'Panov',
                email: 'paveltiger9@gmail.com',
                type: 'ADMIN',
                status: 'ONLINE',
                role: 'ADMIN'
            },
            {
                fname: 'Pavel',
                lname: 'Panov',
                email: 'paveltiger9@gmail.com',
                type: 'ADMIN',
                status: 'ONLINE',
                role: 'ADMIN'
            },
            {
                fname: 'Pavel',
                lname: 'Panov',
                email: 'paveltiger9@gmail.com',
                type: 'ADMIN',
                status: 'ONLINE',
                role: 'ADMIN'
            },
            {
                fname: 'Pavel',
                lname: 'Panov',
                email: 'paveltiger9@gmail.com',
                type: 'ADMIN',
                status: 'ONLINE',
                role: 'ADMIN'
            },
            {
                fname: 'Pavel',
                lname: 'Panov',
                email: 'paveltiger9@gmail.com',
                type: 'ADMIN',
                status: 'ONLINE',
                role: 'ADMIN'
            },
            {
                fname: 'Pavel',
                lname: 'Panov',
                email: 'paveltiger9@gmail.com',
                type: 'ADMIN',
                status: 'ONLINE',
                role: 'ADMIN'
            },
            {
                fname: 'Pavel',
                lname: 'Panov',
                email: 'paveltiger9@gmail.com',
                type: 'ADMIN',
                status: 'ONLINE',
                role: 'ADMIN'
            },
            {
                fname: 'Pavel',
                lname: 'Panov',
                email: 'paveltiger9@gmail.com',
                type: 'ADMIN',
                status: 'ONLINE',
                role: 'ADMIN'
            },
            {
                fname: 'Pavel',
                lname: 'Panov',
                email: 'paveltiger9@gmail.com',
                type: 'ADMIN',
                status: 'ONLINE',
                role: 'ADMIN'
            },
            {
                fname: 'Pavel',
                lname: 'Panov',
                email: 'paveltiger9@gmail.com',
                type: 'ADMIN',
                status: 'ONLINE',
                role: 'ADMIN'
            },
        ];

        // this.usersService.getUsers()
        //     .subscribe(users => {
        //         this.rowData = users.map(user => {
        //             const roles = [];
        //             user.bbcGroupCollection.map(group => {
        //                 roles.push(group.groupName);
        //             });
        //             const type = user.mode === 'M_ACCOUNT_TYPE' ? 'Mobile Account' : user.mode;
        //             const online = user.isonline === 1 ? 'True (' + user.isonline + ')' : 'False (' + user.isonline + ')';
        //             return {
        //                 fname: user.fname,
        //                 lname: user.lname,
        //                 email: user.email,
        //                 type: type,
        //                 status: user.status,
        //                 online: online,
        //                 role: '[' + roles + ']',
        //             };
        //         });
        //     });
    }

    edit() {
        const selectedRowData = this.gridApi.getSelectedRows();
        this.goUserEdit.emit(selectedRowData[0].email);
    }

}
