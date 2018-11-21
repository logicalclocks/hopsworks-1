import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { ManageClusterNodesComponent } from './manage-cluster-nodes.component';

const routes: Routes = [
    {
        path     : '**',
        component: ManageClusterNodesComponent
    }
];

@NgModule({
    declarations: [
        ManageClusterNodesComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule,
        FuseWidgetModule
    ]
})
export class ManageClusterNodesModule {
}
