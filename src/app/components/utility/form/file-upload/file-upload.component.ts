import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../../services/api.service';
import { MatTooltip } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { FilePreviewDialogComponent } from '../../file-preview-dialog/file-preview-dialog.component';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule, MatTooltip],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss',
})
export class FileUploadComponent {
  @Input() label: string = 'Upload Files';
  @Input() multiple: boolean = true;
  @Input() accept: string = '.pdf,.doc,.docx,.ppt,.pptx';
  @Input() maxSizeMB: number = 10;
  @Input() required: boolean = false;
  @Input() tooltip: string = '';

  @Output() attachmentsChange = new EventEmitter<any[]>();

  attachments: { name: string; url: string }[] = [];
  isUploading = false;

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  previewFile(file: { name: string; url: string }) {
    this.dialog.open(FilePreviewDialogComponent, {
      width: '90%',
      height: '90%',
      data: file,
      panelClass: 'custom-dialog',
    });
  }

  onFileSelected(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (!files) return;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file.size > this.maxSizeMB * 1024 * 1024) {
        alert(`File "${file.name}" exceeds ${this.maxSizeMB}MB limit.`);
        continue;
      }

      this.uploadFile(file);
    }

    (event.target as HTMLInputElement).value = '';
  }

  uploadFile(file: File) {
    this.isUploading = true;

    const formData = new FormData();
    formData.append('files', file);

    this.apiService.uploadFiles(formData).subscribe({
      next: (res: { url: string }) => {
        if (res?.url) {
          this.attachments.push({ name: file.name, url: res.url });
          this.attachmentsChange.emit(this.attachments);
        } else {
          console.warn(`No URL returned for file "${file.name}"`);
        }
        this.isUploading = false;
      },
      error: () => {
        alert(`Failed to upload "${file.name}".`);
        this.isUploading = false;
      },
    });
  }

  removeAttachment(index: number) {
    this.attachments.splice(index, 1);
    this.attachmentsChange.emit(this.attachments);
  }
}
