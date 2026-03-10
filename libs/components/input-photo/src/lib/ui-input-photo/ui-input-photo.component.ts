import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { InputPhotoMode } from '../models/input-photo-mode.types';

@Component({
  selector: 'lib-ui-input-photo',
  templateUrl: './ui-input-photo.component.html',
  styleUrl: './ui-input-photo.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiInputPhotoComponent implements OnChanges, OnDestroy {
  @Input() label = 'Imagem';
  @Input() helperText = 'PNG, JPG ou WEBP';
  @Input() buttonText = 'Selecionar imagem';
  @Input() accept = 'image/png,image/jpeg,image/webp';
  @Input() maxSizeBytes = 5_000_000;
  @Input() disabled = false;
  @Input() required = false;
  @Input() loading = false;
  @Input() errorMessage: string | null = null;
  @Input() remoteUrl: string | null = null;
  @Input() mode: InputPhotoMode = 'cover';

  @Output() fileSelected = new EventEmitter<File>();
  @Output() fileRemoved = new EventEmitter<void>();
  @Output() invalidFile = new EventEmitter<string>();

  protected isDragOver = false;
  protected localPreviewUrl: string | null = null;
  protected selectedFileName: string | null = null;
  protected selectedFileSize: number | null = null;
  protected selectedMimeType: string | null = null;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['remoteUrl'] && !this.localPreviewUrl) {
      this.cdr.markForCheck();
    }
  }

  ngOnDestroy(): void {
    this.revokeLocalPreview();
  }

  protected get hasImage(): boolean {
    return Boolean(this.localPreviewUrl || this.remoteUrl);
  }

  protected get previewUrl(): string | null {
    return this.localPreviewUrl || this.remoteUrl;
  }

  protected get sizeLabel(): string | null {
    if (!this.selectedFileSize) return null;
    const kb = this.selectedFileSize / 1024;

    if (kb < 1024) {
      return `${kb.toFixed(0)} KB`;
    }

    return `${(kb / 1024).toFixed(2)} MB`;
  }

  protected onInputChange(event: Event): void {
    if (this.disabled || this.loading) return;

    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;

    if (!file) return;

    this.processFile(file);
    input.value = '';
  }

  protected onDragOver(event: DragEvent): void {
    event.preventDefault();
    if (this.disabled || this.loading) return;
    this.isDragOver = true;
    this.cdr.markForCheck();
  }

  protected onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;
    this.cdr.markForCheck();
  }

  protected onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragOver = false;

    if (this.disabled || this.loading) {
      this.cdr.markForCheck();
      return;
    }

    const file = event.dataTransfer?.files?.[0] ?? null;
    if (!file) {
      this.cdr.markForCheck();
      return;
    }

    this.processFile(file);
  }

  protected removeImage(): void {
    this.revokeLocalPreview();
    this.localPreviewUrl = null;
    this.selectedFileName = null;
    this.selectedFileSize = null;
    this.selectedMimeType = null;
    this.fileRemoved.emit();
    this.cdr.markForCheck();
  }

  private processFile(file: File): void {
    const validationError = this.validateFile(file);

    if (validationError) {
      this.invalidFile.emit(validationError);
      this.cdr.markForCheck();
      return;
    }

    this.revokeLocalPreview();
    this.localPreviewUrl = URL.createObjectURL(file);
    this.selectedFileName = file.name;
    this.selectedFileSize = file.size;
    this.selectedMimeType = file.type;

    this.fileSelected.emit(file);
    this.cdr.markForCheck();
  }

  private validateFile(file: File): string | null {
    const allowedMimeTypes = this.accept
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);

    if (allowedMimeTypes.length && !allowedMimeTypes.includes(file.type)) {
      return 'Formato de imagem inválido.';
    }

    if (file.size > this.maxSizeBytes) {
      return `A imagem deve ter no máximo ${(this.maxSizeBytes / 1024 / 1024).toFixed(0)} MB.`;
    }

    return null;
  }

  private revokeLocalPreview(): void {
    if (this.localPreviewUrl?.startsWith('blob:')) {
      URL.revokeObjectURL(this.localPreviewUrl);
    }
  }
}
