import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { ManageCondaComponent } from './manage-conda.component';

const routes: Routes = [
    {
        path     : '**',
        component: ManageCondaComponent
    }
];

@NgModule({
    declarations: [
        ManageCondaComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule,
        FuseWidgetModule
    ]
})
export class ManageCondaModule {
}
