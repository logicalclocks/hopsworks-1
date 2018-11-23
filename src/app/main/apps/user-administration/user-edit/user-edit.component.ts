import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
    // @Input() selectedUser: any;
    @Output() goUserList = new EventEmitter();

    personalInfo: any;
    address: any;
    changeSetting: any;
    accountInfo: any;

    constructor() {
    }

    ngOnInit() {
        // this.personalInfo = {
        //     name        : 'Mr ' + this.selectedUser.fname + ' ' + this.selectedUser.lname,
        //     email       : this.selectedUser.email,
        //     phone       : this.selectedUser.mobile,
        //     organization: this.selectedUser.organization ? this.selectedUser.organization.orgName : ''
        // };
        // this.address = {
        //     co               : this.selectedUser.address ? this.selectedUser.address.address1 : '',
        //     streetNumber     : this.selectedUser.address ? this.selectedUser.address.address2 + ' ' + this.selectedUser.address.address3 : '',
        //     postalCity       : this.selectedUser.address ? this.selectedUser.address.postalcode + ' / ' + this.selectedUser.address.city : '',
        //     state            : this.selectedUser.address ? this.selectedUser.address.state : '',
        //     organizationPhone: this.selectedUser.organization ? this.selectedUser.organization.phone : '',
        //     fax              : this.selectedUser.organization ? this.selectedUser.organization.fax : '',
        //     contactPerson    : this.selectedUser.organization ? this.selectedUser.organization.contactPerson + ' ' + this.selectedUser.organization.contactEmail : '',
        //     department       : this.selectedUser.organization ? this.selectedUser.organization.department : '',
        //     website          : this.selectedUser.organization ? this.selectedUser.organization.website : ''
        // };
        // this.changeSetting = {
        //
        // };
        // const roles = [];
        // this.selectedUser.bbcGroupCollection.map(group => {
        //     roles.push(group.groupName);
        // });
        // this.accountInfo = {
        //     currentUserStatus    : this.selectedUser.status,
        //     accountType          : this.selectedUser.mode === 'M_ACCOUNT_TYPE' ? 'Mobile Account' : this.selectedUser.mode,
        //     currentHopsworksRoles: roles,
        //     maxNumProjects       : this.selectedUser.maxNumProjects,
        //     lastPasswordChange   : new Date(this.selectedUser.passwordChanged)
        // };
    }

    goListUser() {
        this.goUserList.emit();
    }

}
