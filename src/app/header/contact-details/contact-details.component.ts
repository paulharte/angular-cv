import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  phone_number = "+353 87 9608090"

  email = "hartepaul"
  domain = "gmail.com"

  github = "github.com/paulharte"
  show_private_details = false;

  constructor() { }

  ngOnInit(): void {

    this.show_private_details =  environment.show_private_details
  }

  formEmail(): string {
    // This is purely to confuse spambots on github :)
    return this.email + '@' + this.domain
  }

}
