import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  @Input() contactDetail = {};
  @Input() toggleVisible = false;
  constructor(public contactService: ContactService) { }

  ngOnInit() {
  }

  deleteContact() {

  }
}
