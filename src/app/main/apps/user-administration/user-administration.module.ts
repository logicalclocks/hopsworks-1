import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { AgGridModule } from 'ag-grid-angular';

import { UserAdministrationComponent } from './user-administration.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { PersonalInfoComponent } from './user-edit/personal-info/personal-info.component';
import { ChangeSettingsComponent } from './user-edit/change-settings/change-settings.component';
import { AddressComponent } from './user-edit/address/address.component';
import { AccountInfoComponent } from './user-edit/account-info/account-info.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';

const routes: Routes = [
    {
        path     : '**',
        component: UserAdministrationComponent
    }
];

@NgModule({
    declarations: [
        UserAdministrationComponent,
        UsersListComponent,
        UserEditComponent,
        PersonalInfoComponent,
        ChangeSettingsComponent,
        AddressComponent,
        AccountInfoComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule,
        FuseWidgetModule,
        AgGridModule.withComponents([]),
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule
    ]
})
export class UserAdministrationModule {
}
