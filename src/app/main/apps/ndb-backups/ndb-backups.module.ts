import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { NdbBackupsComponent } from './ndb-backups.component';

const routes: Routes = [
    {
        path     : '**',
        component: NdbBackupsComponent
    }
];

@NgModule({
    declarations: [
        NdbBackupsComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule,
        FuseWidgetModule
    ]
})
export class NdbBackupsModule {
}
