import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { MonitoringControlComponent } from './monitoring-control.component';

const routes: Routes = [
    {
        path     : '**',
        component: MonitoringControlComponent
    }
];

@NgModule({
    declarations: [
        MonitoringControlComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule,
        FuseWidgetModule
    ]
})
export class MonitoringControlModule {
}
