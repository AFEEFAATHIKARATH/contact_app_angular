import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/contacts';
  private groupUrl = 'http://localhost:3000/groups'; // Assuming the group endpoint is this

  constructor(private http: HttpClient) { }

  allContacts() {
    return this.http.get(this.baseUrl);
  }

  viewContact(contactId: string) {
    return this.http.get(`${this.baseUrl}/${contactId}`);
  }

  viewContactGroupName(groupId: string) {
    return this.http.get(`${this.groupUrl}/${groupId}`);
  }
  allGroups() {
    return this.http.get('http://localhost:3000/groups')
  }
  addContact(contact: any) {
    return this.http.post('http://localhost:3000/contacts',contact)
  }
}
