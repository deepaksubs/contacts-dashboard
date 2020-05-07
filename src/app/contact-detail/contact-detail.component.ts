import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  @Input() contactDetail = {};
  constructor() { }

  ngOnInit() {
  }
}
