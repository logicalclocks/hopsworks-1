import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../shared/services/users.service';

export enum UsersViewMode {
    List = 0,
    Edit = 1
}

@Component({
    selector: 'app-user-administration',
    templateUrl: './user-administration.component.html',
    styleUrls: ['./user-administration.component.scss']
})
export class UserAdministrationComponent implements OnInit {
    UsersViewMode = UsersViewMode;
    view = UsersViewMode.List;
    selectedUser: any;

    constructor(private usersService: UsersService) {
    }

    ngOnInit() {
    }

    goUserEdit(email: any) {
        this.usersService.getUser(email)
            .subscribe(user => {
                this.selectedUser = user;
                this.view = UsersViewMode.Edit;
            });
    }

    goUserList() {
        this.view = UsersViewMode.List;
    }

}
