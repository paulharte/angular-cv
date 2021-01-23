import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  github = 'http://github.com/paulharte/angular-cv'
  live_link = 'https://cv.paulspetprojects.net/'

  constructor() { }

  ngOnInit(): void {
  }

}
