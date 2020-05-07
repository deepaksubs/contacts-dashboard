import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-contact-body',
  templateUrl: './contact-body.component.html',
  styleUrls: ['./contact-body.component.css']
})
export class ContactBodyComponent implements OnInit {

  @Input() userDetail = {};
  contact: any;
  constructor() { }

  ngOnInit() {
  }

  checkBoxChange(userDetail: any, event: any) {
    if (event.target.checked) {
      this.contact = userDetail;
    }
  }

}
