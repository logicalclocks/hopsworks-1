import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { HiveLlapLifecycleComponent } from './hive-llap-lifecycle.component';

const routes: Routes = [
    {
        path     : '**',
        component: HiveLlapLifecycleComponent
    }
];

@NgModule({
    declarations: [
        HiveLlapLifecycleComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule,
        FuseWidgetModule
    ]
})
export class HiveLlapLifecycleModule {
}
