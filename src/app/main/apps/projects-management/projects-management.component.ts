import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { ProjectsManagementService } from '../../../shared/services/projects-management.service';

@Component({
    selector: 'app-projects-management',
    templateUrl: './projects-management.component.html',
    styleUrls: ['./projects-management.component.scss']
})
export class ProjectsManagementComponent implements OnInit {
    private selectedRow = null;
    private gridApi;
    private gridColumnApi;
    private rowData;

    private columnDefs;
    private paginationPageSize = 25;
    private paginationNumberFormatter;
    private rowSelection;
    private domLayout;
    private components;
    private editType;
    private sideBar;

    constructor(
        private projectsManagementService: ProjectsManagementService,
        private snackBar: MatSnackBar
    ) {
        this.columnDefs = [
            {
                headerName: 'Project',
                field: 'project',
                filter: 'agTextColumnFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true
                }
            },
            {
                headerName: 'Yarn quota left',
                field: 'yarnQuotaLeft',
                filter: 'agTextColumnFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true
                },
                editable: true
            },
            {
                headerName: 'Yarn used',
                field: 'yarnUsed',
                filter: 'agTextColumnFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true
                }
            },
            {
                headerName: '# Kafka Topics',
                field: 'kafkaTopics',
                filter: 'agTextColumnFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true
                },
                editable: true,
                cellEditor: 'numericCellEditor'
            },
            {
                headerName: 'Disk quota',
                field: 'diskQuota',
                filter: 'agTextColumnFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true
                },
                editable: true
            },
            {
                headerName: 'Disk Used (MB)',
                field: 'diskUsed',
                filter: 'agTextColumnFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true
                }
            },
            {
                headerName: 'Max No of Files',
                field: 'maxNoOfFiles',
                filter: 'agTextColumnFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true
                },
                editable: true,
                cellEditor: 'numericCellEditor'
            },
            {
                headerName: 'Num Files Used',
                field: 'numFilesUsed',
                filter: 'agTextColumnFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true
                },
                cellEditor: 'numericCellEditor'
            },
            {
                headerName: 'HiveDB Quota',
                field: 'hiveDbQuota',
                filter: 'agTextColumnFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true
                },
                editable: true
            },
            {
                headerName: 'HiveDB Used',
                field: 'hiveDbUsed',
                filter: 'agTextColumnFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true
                }
            },
            {
                headerName: 'HiveDB Max # Files',
                field: 'hiveDbMaxFiles',
                filter: 'agTextColumnFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true
                },
                editable: true,
                cellEditor: 'numericCellEditor'
            },
            {
                headerName: 'HiveDB # Files',
                field: 'hiveDbFiles',
                filter: 'agTextColumnFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true
                },
                cellEditor: 'numericCellEditor'
            },
            {
                headerName: 'Owner',
                field: 'owner',
                filter: 'agTextColumnFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true
                }
            },
            {
                headerName: 'Archived',
                field: 'archived',
                filter: 'agTextColumnFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true
                },
                editable: true,
                cellEditor: 'agSelectCellEditor',
                cellEditorParams: {
                    values: ['true', 'false']
                }
            },
            {
                headerName: 'Payment type',
                field: 'paymentType',
                filter: 'agTextColumnFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true
                },
                editable: true,
                cellEditor: 'agSelectCellEditor',
                cellEditorParams: {
                    values: ['PREPAID', 'NOLIMIT']
                }
            },
            {
                headerName: 'Last Update',
                field: 'lastUpdate',
                filter: 'agTextColumnFilter',
                floatingFilterComponentParams: {
                    suppressFilterButton: true
                }
            }
        ];
        this.paginationNumberFormatter = function (params) {
            return '[' + params.value.toLocaleString() + ']';
        };
        this.domLayout = 'autoHeight';
        this.components = { numericCellEditor: this.getNumericCellEditor() };
        this.rowSelection = 'single';
        this.editType = 'fullRow';
        this.sideBar = {
            toolPanels: [
                {
                    id: 'columns',
                    labelDefault: 'Columns',
                    labelKey: 'columns',
                    iconKey: 'columns',
                    toolPanel: 'agColumnsToolPanel',
                    toolPanelParams: {
                        suppressRowGroups: true,
                        suppressValues: true,
                        suppressPivots: true,
                        suppressPivotMode: true,
                        suppressSideButtons: true,
                        suppressColumnFilter: false,
                        suppressColumnSelectAll: false,
                        suppressColumnExpandAll: true
                    }
                }
            ],
            defaultToolPanel: 'columns'
        };
    }

    ngOnInit() {
    }

    onPageSizeChanged(newPageSize) {
        this.gridApi.paginationSetPageSize(Number(this.paginationPageSize));
    }

    onSelectionChanged() {
        this.selectedRow = this.gridApi.getSelectedRows();
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.rowData = [
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            },
            {
                projectId: 1,
                project: 'Name',
                yarnQuotaLeft: 600,
                yarnUsed: 100,
                kafkaTopics: 1,
                diskQuota: 100,
                diskUsed: 100,
                maxNoOfFiles: 100,
                numFilesUsed: 1,
                hiveDbQuota: 100,
                hiveDbUsed: 100,
                hiveDbMaxFiles: 1,
                hiveDbFiles: 0,
                owner: 'Owner',
                archived: true,
                paymentType: 'Type',
                lastUpdate: new Date()
            }
        ];

        // this.projectsManagementService.getProjects()
        //     .subscribe(projects => {
        //         this.rowData = projects.map(project => {
        //             return {
        //                 projectId: project.projectId,
        //                 project: project.projectName,
        //                 yarnQuotaLeft: this.convertTime(project.projectQuotas.yarnQuotaInSecs),
        //                 yarnUsed: this.convertTime(project.projectQuotas.yarnUsedQuotaInSecs),
        //                 kafkaTopics: project.projectQuotas.kafkaMaxNumTopics,
        //                 diskQuota: this.convertCapacity(project.projectQuotas.hdfsQuotaInBytes),
        //                 diskUsed: this.convertCapacity(project.projectQuotas.hdfsUsageInBytes),
        //                 maxNoOfFiles: project.projectQuotas.hdfsNsQuota,
        //                 numFilesUsed: project.projectQuotas.hdfsNsCount,
        //                 hiveDbQuota: this.convertCapacity(project.projectQuotas.hiveHdfsQuotaInBytes),
        //                 hiveDbUsed: this.convertCapacity(project.projectQuotas.hiveHdfsUsageInBytes),
        //                 hiveDbMaxFiles: project.projectQuotas.hiveHdfsNsQuota,
        //                 hiveDbFiles: project.projectQuotas.hiveHdfsNsCount,
        //                 owner: project.projectOwner,
        //                 archived: project.archived,
        //                 paymentType: project.paymentType,
        //                 lastUpdate: new Date(project.lastQuotaUpdate)
        //             };
        //         });
        //     });
    }

    onSave() {
        const selectedRow = this.gridApi.getSelectedRows();
        const data = {
            archived: selectedRow[0].archived,
            lastQuotaUpdate: (selectedRow[0].lastUpdate).toISOString(),
            paymentType: selectedRow[0].paymentType,
            projectId: selectedRow[0].projectId,
            projectName: selectedRow[0].project,
            projectOwner: selectedRow[0].owner,
            projectQuotas: {
                hdfsNsCount: selectedRow[0].numFilesUsed,
                hdfsNsQuota: selectedRow[0].maxNoOfFiles,
                hdfsQuotaInBytes: this.convertbytes(selectedRow[0].diskQuota),
                hdfsUsageInBytes: this.convertbytes(selectedRow[0].diskUsed),
                hiveHdfsNsCount: selectedRow[0].hiveDbFiles,
                hiveHdfsNsQuota: selectedRow[0].hiveDbMaxFiles,
                hiveHdfsQuotaInBytes: this.convertbytes(selectedRow[0].hiveDbQuota),
                hiveHdfsUsageInBytes: this.convertbytes(selectedRow[0].hiveDbUsed),
                kafkaMaxNumTopics: selectedRow[0].kafkaTopics,
                yarnQuotaInSecs: this.convertSeconds(selectedRow[0].yarnQuotaLeft),
                yarnUsedQuotaInSecs: this.convertSeconds(selectedRow[0].yarnUsed)
            }
        };
        this.projectsManagementService.updateProject(data)
            .subscribe(() => {
                this.snackBar.open('Successfully saved.', 'Close', {
                    duration: 2000
                });
            });
    }

    onForceRemove() {
        const selectedRow = this.gridApi.getSelectedRows();
        const id = selectedRow[0].projectId;
        this.projectsManagementService.forceRemoveProject(id)
            .subscribe(() => {
                this.snackBar.open('Successfully Removed.', 'Close', {
                    duration: 2000
                });
            });
    }

    convertTime(seconds) {
        const s = Math.round(parseFloat(seconds));
        const fm = [
            Math.floor(s / 60 / 60 / 24),
            Math.floor(s / 60 / 60) % 24,
            Math.floor(s / 60) % 60,
            s % 60
        ];
        return fm.map((v, i) => {
            return ((v < 10) ? '0' : '') + v;
        }).join(' : ');
    }

    convertSeconds(time) {
        const a = time.split(' : ');
        return (+a[0]) * 60 * 60 * 24 + (+a[1]) * 60 * 60 + (+a[2]) * 60 + (+a[3]);
    }

    convertCapacity(bytes) {
        const b = parseFloat(bytes);
        const gb = Math.round(b / (1024 * 1024 * 1024));
        const mb = Math.round(b / (1024 * 1024));
        if (mb >= 1024) {
            return gb + 'GB';
        } else {
            return mb + 'MB';
        }
    }

    convertbytes(capacity) {
        if (capacity.indexOf('GB') !== -1) {
            return parseInt(capacity) * 1024 * 1024 * 1024;
        } else {
            return parseInt(capacity) * 1024 * 1024;
        }
    }

    getNumericCellEditor() {
        function isCharNumeric(charStr) {
            return !!/\d/.test(charStr);
        }

        function isKeyPressedNumeric(event) {
            var charCode = getCharCodeFromEvent(event);
            var charStr = String.fromCharCode(charCode);
            return isCharNumeric(charStr);
        }

        function getCharCodeFromEvent(event) {
            event = event || window.event;
            return typeof event.which === 'undefined' ? event.keyCode : event.which;
        }

        function NumericCellEditor() {
        }

        NumericCellEditor.prototype.init = function (params) {
            this.focusAfterAttached = params.cellStartedEdit;
            this.eInput = document.createElement('input');
            this.eInput.style.width = '100%';
            this.eInput.style.height = '100%';
            this.eInput.value = isCharNumeric(params.charPress) ? params.charPress : params.value;
            var that = this;
            this.eInput.addEventListener('keypress', function (event) {
                if (!isKeyPressedNumeric(event)) {
                    that.eInput.focus();
                    if (event.preventDefault) event.preventDefault();
                }
            });
        };
        NumericCellEditor.prototype.getGui = function () {
            return this.eInput;
        };
        NumericCellEditor.prototype.afterGuiAttached = function () {
            if (this.focusAfterAttached) {
                this.eInput.focus();
                this.eInput.select();
            }
        };
        NumericCellEditor.prototype.isCancelBeforeStart = function () {
            return this.cancelBeforeStart;
        };
        NumericCellEditor.prototype.isCancelAfterEnd = function () {
        };
        NumericCellEditor.prototype.getValue = function () {
            return this.eInput.value;
        };
        NumericCellEditor.prototype.focusIn = function () {
            var eInput = this.getGui();
            eInput.focus();
            eInput.select();
            console.log('NumericCellEditor.focusIn()');
        };
        NumericCellEditor.prototype.focusOut = function () {
            console.log('NumericCellEditor.focusOut()');
        };
        return NumericCellEditor;
    }

}
