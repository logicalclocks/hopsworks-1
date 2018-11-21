import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { HdfsAdminComponent } from './hdfs-admin.component';

const routes: Routes = [
    {
        path     : '**',
        component: HdfsAdminComponent
    }
];

@NgModule({
    declarations: [
        HdfsAdminComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule,
        FuseWidgetModule
    ]
})
export class HdfsAdminModule {
}
