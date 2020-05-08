import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-body',
  templateUrl: './contact-body.component.html',
  styleUrls: ['./contact-body.component.css']
})
export class ContactBodyComponent implements OnInit {

  @Input() userDetail = {};
  contact = {
    name: '',
    email: '',
    age: '',
    gender: '',
    phone: '',
    company: '',
    role: '',
    address: ''
  };
  constructor(public contactService: ContactService) {
   }

  ngOnInit() {
  }

  checkBoxChange(userDetail: any, event: any) {
    if (event.target.checked) {
      this.contact = userDetail;
    }
  }

  saveContact(contact: any) {
    console.log(contact);
  }
}
