import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

// tells Angular to register this media service class at the root level
// to give access from anywhere in the app
@Injectable({
  providedIn: 'root'
})
export class MediaItemService {

  constructor(private http: HttpClient) { }

  get(medium) {
    const getOptions = {
      params: { medium }
    }
    // url is 'mediaitems'
    return this.http.get<MediaItemsResponse>('mediaitems', getOptions)
      .pipe(
        map((response: MediaItemsResponse) => {
          return response.mediaItems;
        }),
        catchError(this.handleError)
      );
  }

  getById(id) {
    // url is 'mediaitems/{id}'
    return this.http.get<MediaItemsResponse>(`mediaitems/${id}`)
      .pipe(
        map((response: MediaItemsResponse) => {
          return response.mediaItems;
        }),
        catchError(this.handleError)
      );
  }

  add(mediaItem: MediaItem) {
    // mediaItem is the body
    return this.http.post('mediaitems', mediaItem)
      .pipe(
        catchError(this.handleError)
      );
  }

  update(mediaItem: MediaItem) {
    // mediaItem is the body
    return this.http.put('mediaitems', mediaItem)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(mediaItem: MediaItem) {
    return this.http.delete(`mediaitems/${mediaItem.id}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
       console.log(error.message);
       return throwError('A data error occurred, please try again.');
  }

}

interface MediaItemsResponse {
  mediaItems: MediaItem[];
}

export interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}