import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components';

import { EditVariablesComponent } from './edit-variables.component';


const routes: Routes = [
    {
        path     : '**',
        component: EditVariablesComponent
    }
];

@NgModule({
    declarations: [
        EditVariablesComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule,
        FuseWidgetModule
    ]
})
export class EditVariablesModule {
}
