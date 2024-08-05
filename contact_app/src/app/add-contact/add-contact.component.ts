import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { myContact } from 'src/models/myContact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  groups: any[] = [];
  contact: myContact = { groupId: 'select a group' };

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.allGroups()
      .subscribe(
        (result: any) => {
          console.log(result);
          this.groups = result;
        },
        (error) => {
          console.error('Error fetching groups:', error);
          // Handle the error appropriately
        }
      );
  }
}
