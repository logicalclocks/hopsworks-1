import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-settings',
  templateUrl: './change-settings.component.html',
  styleUrls: ['./change-settings.component.scss']
})
export class ChangeSettingsComponent implements OnInit {
    private gridApi;
    private gridColumnApi;
    private rowData;
    private columnDefs;
    private domLayout;
    private defaultColDef;
    private components;

    constructor() {
        this.columnDefs = [
            {
                headerName: 'Add Role',
                field: 'add',
                cellEditor: 'agSelectCellEditor',
                cellEditorParams: {
                    values: ['AUDITOR', 'HOPS_USER', 'HOPS_ADMIN']
                }
            },
            {
                headerName: 'Remove Role',
                field: 'remove',
                cellEditor: 'agSelectCellEditor',
                cellEditorParams: {
                    values: ['AUDITOR', 'HOPS_USER', 'HOPS_ADMIN']
                }
            },
            {
                headerName: 'Change Status',
                field: 'change',
                cellEditor: 'agSelectCellEditor',
                cellEditorParams: {
                    values: ['VERIFIED_ACCOUNT', 'ACTIVATED_ACCOUNT', 'DEACTIVATED_ACCOUNT', 'BLOCKED_ACCOUNT', 'LOST_MOBILE', 'SPAM_ACCOUNT']
                }
            },
            {
                headerName: 'MaxNumProjects',
                field: 'maxNumProjects',
                editable: true,
                cellEditor: 'numericCellEditor'
            }
        ];
        this.defaultColDef = { editable: true };
        this.domLayout = 'autoHeight';
        this.components = { numericCellEditor: this.getNumericCellEditor() };
    }

    ngOnInit() {
    }

    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.rowData = [
            { add: '', remove: '', change: '', maxNumProjects: '' }
        ];
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
            return typeof event.which === "undefined" ? event.keyCode : event.which;
        }
        function NumericCellEditor() {}
        NumericCellEditor.prototype.init = function(params) {
            this.focusAfterAttached = params.cellStartedEdit;
            this.eInput = document.createElement("input");
            this.eInput.style.width = "100%";
            this.eInput.style.height = "100%";
            this.eInput.value = isCharNumeric(params.charPress) ? params.charPress : params.value;
            var that = this;
            this.eInput.addEventListener("keypress", function(event) {
                if (!isKeyPressedNumeric(event)) {
                    that.eInput.focus();
                    if (event.preventDefault) event.preventDefault();
                }
            });
        };
        NumericCellEditor.prototype.getGui = function() {
            return this.eInput;
        };
        NumericCellEditor.prototype.afterGuiAttached = function() {
            if (this.focusAfterAttached) {
                this.eInput.focus();
                this.eInput.select();
            }
        };
        NumericCellEditor.prototype.isCancelBeforeStart = function() {
            return this.cancelBeforeStart;
        };
        NumericCellEditor.prototype.isCancelAfterEnd = function() {};
        NumericCellEditor.prototype.getValue = function() {
            return this.eInput.value;
        };
        NumericCellEditor.prototype.focusIn = function() {
            var eInput = this.getGui();
            eInput.focus();
            eInput.select();
            console.log("NumericCellEditor.focusIn()");
        };
        NumericCellEditor.prototype.focusOut = function() {
            console.log("NumericCellEditor.focusOut()");
        };
        return NumericCellEditor;
    }

}
