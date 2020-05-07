import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  users: User[];
  user: any;
  constructor(public contactService: ContactService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.contactService.getContacts()
    .subscribe((users: User[]) => {
      this.users = users;
    });
  }

  getUserById(id: number) {
    this.contactService.getContacts()
    .subscribe((users: User[]) => {
      this.users = users;
    }).unsubscribe();
    this.users.forEach((user: any) => {
      if (user.id === id) {
        this.user = user;
      }
    });
  }

}
