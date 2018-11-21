import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { NewUsersComponent } from './new-users.component';

const routes: Routes = [
    {
        path     : '**',
        component: NewUsersComponent
    }
];

@NgModule({
    declarations: [
        NewUsersComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule,
        FuseWidgetModule
    ]
})
export class NewUsersModule {
}
