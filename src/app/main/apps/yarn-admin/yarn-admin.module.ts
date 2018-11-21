import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { YarnAdminComponent } from './yarn-admin.component';

const routes: Routes = [
    {
        path     : '**',
        component: YarnAdminComponent
    }
];

@NgModule({
    declarations: [
        YarnAdminComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule,
        FuseWidgetModule
    ]
})
export class YarnAdminModule {
}
