import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { SpamRequestsComponent } from './spam-requests.component';

const routes: Routes = [
    {
        path     : '**',
        component: SpamRequestsComponent
    }
];

@NgModule({
    declarations: [
        SpamRequestsComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule,
        FuseWidgetModule
    ]
})
export class SpamRequestsModule {
}
