import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

const routes = [
    {
        path        : 'user-administration',
        loadChildren: './user-administration/user-administration.module#UserAdministrationModule'
    },
    {
        path        : 'new-users',
        loadChildren: './new-users/new-users.module#NewUsersModule'
    },
    {
        path        : 'spam-requests',
        loadChildren: './spam-requests/spam-requests.module#SpamRequestsModule'
    },
    {
        path        : 'monitoring-control',
        loadChildren: './monitoring-control/monitoring-control.module#MonitoringControlModule'
    },
    {
        path        : 'projects-management',
        loadChildren: './projects-management/projects-management.module#ProjectsManagementModule'
    },
    {
        path        : 'ndb-backups',
        loadChildren: './ndb-backups/ndb-backups.module#NdbBackupsModule'
    },
    {
        path        : 'master-encryption-key',
        loadChildren: './master-encryption-key/master-encryption-key.module#MasterEncryptionKeyModule'
    },
    {
        path        : 'edit-variables',
        loadChildren: './edit-variables/edit-variables.module#EditVariablesModule'
    },
    {
        path        : 'yarn-admin',
        loadChildren: './yarn-admin/yarn-admin.module#YarnAdminModule'
    },
    {
        path        : 'hdfs-admin',
        loadChildren: './hdfs-admin/hdfs-admin.module#HdfsAdminModule'
    },
    {
        path        : 'jupyter-notebook-servers',
        loadChildren: './jupyter-notebook-servers/jupyter-notebook-servers.module#JupyterNotebookServersModule'
    },
    {
        path        : 'hive-llap-lifecycle',
        loadChildren: './hive-llap-lifecycle/hive-llap-lifecycle.module#HiveLlapLifecycleModule'
    },
    {
        path        : 'manage-cluster-nodes',
        loadChildren: './manage-cluster-nodes/manage-cluster-nodes.module#ManageClusterNodesModule'
    },
    {
        path        : 'manage-conda',
        loadChildren: './manage-conda/manage-conda.module#ManageCondaModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule
    ]
})
export class AppsModule {
}
