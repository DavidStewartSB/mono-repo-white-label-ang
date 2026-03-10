import { InputPhotoMode } from "./input-photo-mode.types";

export interface InputPhotoValue {
  file: File | null;
  previewUrl: string | null;
  remoteUrl: string | null;
  fileName: string | null;
  sizeBytes: number | null;
  mimeType: string | null;
  changed: boolean;
}


export interface InputPhotoConfig {
  label?: string;
  helperText?: string;
  buttonText?: string;
  accept?: string;
  maxSizeBytes?: number;
  disabled?: boolean;
  required?: boolean;
  mode?: InputPhotoMode;
}