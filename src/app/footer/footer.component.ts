import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  github = 'http://github.com/paulharte/angular-cv'
  live_link = 'http://angular-cv.s3-website-eu-west-1.amazonaws.com/'

  constructor() { }

  ngOnInit(): void {
  }

}
