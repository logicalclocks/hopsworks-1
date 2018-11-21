import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSnackBarModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { AgGridModule } from 'ag-grid-angular';

import { ProjectsManagementComponent } from './projects-management.component';

const routes: Routes = [
    {
        path     : '**',
        component: ProjectsManagementComponent
    }
];

@NgModule({
    declarations: [
        ProjectsManagementComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule,
        FuseWidgetModule,
        AgGridModule.withComponents([]),
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatSnackBarModule
    ]
})
export class ProjectsManagementModule {
}
