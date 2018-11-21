import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { MasterEncryptionKeyComponent } from './master-encryption-key.component';

const routes: Routes = [
    {
        path     : '**',
        component: MasterEncryptionKeyComponent
    }
];

@NgModule({
    declarations: [
        MasterEncryptionKeyComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule,
        FuseWidgetModule
    ]
})
export class MasterEncryptionKeyModule {
}
