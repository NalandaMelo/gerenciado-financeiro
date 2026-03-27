import { Dialog, DIALOG_DATA } from "@angular/cdk/dialog";
import { Component, ChangeDetectionStrategy, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DialogData } from "../interfaces/dialog-data";

@Component({
  selector: 'app-confirmation-dialog',
  template: `<h2 mat-dialog-title>{{ DialogData.title }}</h2>
<mat-dialog-content>
  {{ DialogData.message }}
</mat-dialog-content>
<mat-dialog-actions>
  <button matButton [mat-dialog-close]= "false">{{ DialogData.noBtnText }}</button>
  <button matButton [mat-dialog-close]= "true" cdkFocusInitial>{{ DialogData.ysBtnText }}</button>
</mat-dialog-actions>`,

  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmationDialogComponent {
  readonly dialogRef = inject(MatDialogRef<ConfirmationDialogComponent>);
  readonly DialogData = inject<DialogData>(MAT_DIALOG_DATA)
}