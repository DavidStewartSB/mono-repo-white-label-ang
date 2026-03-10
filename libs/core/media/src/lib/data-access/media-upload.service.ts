import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MediaUploadRequest, MediaUploadResponse } from '../models/media-upload.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaUploadService {
 constructor(private readonly http: HttpClient) {}

  uploadImage(request: MediaUploadRequest): Observable<MediaUploadResponse> {
    const formData = new FormData();
    formData.append(request.fieldName ?? 'file', request.file);

    return this.http.post<MediaUploadResponse>(request.endpoint, formData);
  }
}
