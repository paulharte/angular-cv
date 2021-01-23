import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  github = 'http://github.com/paulharte/angular-cv'
  live_link = 'https://cv.paulspetprojects.net/'
  show_live_link = true

  constructor() { }

  ngOnInit(): void {
    this.show_live_link = environment.show_live_link;
  }

}
