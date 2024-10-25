import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile';

  constructor(private http: HttpClient) {}

  createContact(contactData: any): Observable<any> {
    return this.http.post(this.apiUrl, contactData);
  }
}
