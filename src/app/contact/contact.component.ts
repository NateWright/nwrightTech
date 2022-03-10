import { Component, OnInit } from '@angular/core';
import { GithubService, user } from '../github.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  user?: user;

  personalEmail = "nathanwrightbusiness@gmail.com";
  showPersonalEmail = false;
  schoolEmail = "Nathan_Wright1@student.uml.edu";
  showSchoolEmail = false;

  linkedInURL = 'https://www.linkedin.com/in/nathan-wright-4827b31a2/';

  constructor(private github: GithubService) {
    this.github.getUser().subscribe(
      (user) => {
        this.user = user;
      }
    );
  }

  ngOnInit(): void {
  }

  copyPersonalEmail() {
    navigator.clipboard.writeText(this.personalEmail);
    this.showPersonalEmail = !this.showPersonalEmail;
  }

  copySchoolEmail() {
    navigator.clipboard.writeText(this.schoolEmail);
    this.showSchoolEmail = !this.showSchoolEmail;
  }

}
