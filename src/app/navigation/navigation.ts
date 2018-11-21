import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'user-administration',
                title    : 'User Administration',
                translate: 'NAV.USER_ADMINISTRATION',
                type     : 'item',
                icon     : 'supervisor_account',
                url      : '/apps/user-administration'
            },
            {
                id       : 'new-users',
                title    : 'New Users',
                translate: 'NAV.NEW_USERS',
                type     : 'item',
                icon     : 'account_circle',
                url      : '/apps/new-users'
            },
            {
                id       : 'spam-requests',
                title    : 'Spam Requests',
                translate: 'NAV.SPAM_REQUESTS',
                type     : 'item',
                icon     : 'error_outline',
                url      : '/apps/spam-requests'
            },
            {
                id       : 'monitoring-control',
                title    : 'Monitoring and Control',
                translate: 'NAV.MONITORING_&_CONTROL',
                type     : 'item',
                icon     : 'search',
                url      : '/apps/monitoring-control'
            },
            {
                id       : 'projects-management',
                title    : 'Projects Management',
                translate: 'NAV.PROJECTS_MANAGEMENT',
                type     : 'item',
                icon     : 'settings',
                url      : '/apps/projects-management'
            },
            {
                id       : 'ndb-backups',
                title    : 'Ndb Backups',
                translate: 'NAV.NDB_BACKUPS',
                type     : 'item',
                icon     : 'storage',
                url      : '/apps/ndb-backups'
            },
            {
                id       : 'master-encryption-key',
                title    : 'Master encryption key',
                translate: 'NAV.MASTER_ENCRYPTION_KEY',
                type     : 'item',
                icon     : 'lock',
                url      : '/apps/master-encryption-key'
            },
            {
                id       : 'edit-variables',
                title    : 'Edit variables',
                translate: 'NAV.EDIT_VARIABLES',
                type     : 'item',
                icon     : 'edit',
                url      : '/apps/edit-variables'
            },
            {
                id       : 'yarn-admin',
                title    : 'YARN(jobs) Admin',
                translate: 'NAV.YARN_ADMIN',
                type     : 'item',
                icon     : 'layers',
                url      : '/apps/yarn-admin'
            },
            {
                id       : 'hdfs-admin',
                title    : 'HDFS Admin',
                translate: 'NAV.HDFS_ADMIN',
                type     : 'item',
                icon     : 'layers',
                url      : '/apps/hdfs-admin'
            },
            {
                id       : 'jupyter-notebook-servers',
                title    : 'Jupyter Notebook Servers',
                translate: 'NAV.JUPYTER_NOTEBOOK_SERVERS',
                type     : 'item',
                icon     : 'note',
                url      : '/apps/jupyter-notebook-servers'
            },
            {
                id       : 'hive-llap-lifecycle',
                title    : 'Hive LLAP lifecycle',
                translate: 'NAV.HIVE_LLAP_LIFECYCLE',
                type     : 'item',
                icon     : 'rv_hookup',
                url      : '/apps/hive-llap-lifecycle'
            },
            {
                id       : 'manage-cluster-nodes',
                title    : 'Manage cluster nodes',
                translate: 'NAV.MANAGE_CLUSTER_NODES',
                type     : 'item',
                icon     : 'public',
                url      : '/apps/manage-cluster-nodes'
            },
            {
                id       : 'manage-conda',
                title    : 'Manage Conda',
                translate: 'NAV.MANAGE_CONDA',
                type     : 'item',
                icon     : 'transform',
                url      : '/apps/manage-conda'
            },
        ]
    }
];
