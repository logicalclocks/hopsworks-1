import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { JupyterNotebookServersComponent } from './jupyter-notebook-servers.component';

const routes: Routes = [
    {
        path     : '**',
        component: JupyterNotebookServersComponent
    }
];

@NgModule({
    declarations: [
        JupyterNotebookServersComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule,
        FuseWidgetModule
    ]
})
export class JupyterNotebookServersModule {
}
