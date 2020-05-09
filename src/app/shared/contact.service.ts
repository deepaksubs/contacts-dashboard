import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/userList');
  }

  addContact(contact: any) {
    return this.http.post<User[]>('http://localhost:3000/userList', contact, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updateContact(user: User) {

  }

  deleteContact(id: number): Observable<void> {
    return this.http.delete<void>('http://localhost:3000/userList/' + id);
  }
}
