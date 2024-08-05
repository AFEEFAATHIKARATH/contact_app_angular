import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  contactId: string = '';
  contact: any = {};
  groupName: string = '';

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.contactId = params['id'];
      console.log(this.contactId);

      this.api.viewContact(this.contactId).subscribe(result => {
        this.contact = result;
        // Get group id from contact
        let groupId = this.contact.groupId;
        console.log(groupId);

        // API to get group details
        this.api.viewContactGroupName(groupId).subscribe((data: any) => {
          console.log(data);
          this.groupName = data.name; // assuming data has a 'name' property for group name
        });
      });
    });
  }
}
