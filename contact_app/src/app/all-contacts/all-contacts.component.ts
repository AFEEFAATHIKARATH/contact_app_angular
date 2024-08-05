import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ResolveStart } from '@angular/router';

@Component({
  selector: 'app-all-contacts',
  templateUrl: './all-contacts.component.html',
  styleUrls: ['./all-contacts.component.css']
})
export class AllContactsComponent implements OnInit {
//  to hold all contacts data from api
 
  allContacts: any = []
  loginDetails: any;
  searchKey:string=''
  constructor(private api: ApiService) {
  this.loginDetails=new Date  ()
  
  }
  ngOnInit(): void {
    // api call to get all contacts 
    this.api.allContacts()
      .subscribe((result: any) => {
        // result is all contacts array from api
        console.log(result);
        this.allContacts=result
        
      
    })
  }
}
