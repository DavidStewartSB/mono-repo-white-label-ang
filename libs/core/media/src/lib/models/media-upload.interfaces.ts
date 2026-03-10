export interface MediaUploadRequest {
  endpoint: string;
  file: File;
  fieldName?: string;
}

export interface MediaUploadResponse {
  image: {
    id: string;
    url: string;
    key: string;
    isPrimary: boolean;
    mime?: string;
    sizeBytes?: number;
  };
}