import { Component, OnInit } from '@angular/core';
import { faBinoculars, faBriefcase, faExclamation, faFlask, faGraduationCap, faWrench } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cv-content',
  templateUrl: './cv-content.component.html',
  styleUrls: ['./cv-content.component.css']
})
export class CvContentComponent implements OnInit {

  summaryIcon = faBinoculars;
  workExperienceIcon = faBriefcase;
  educationIcon = faGraduationCap;
  sideProjectIcon = faFlask;
  skillsIcon = faWrench;
  interestingIcon = faExclamation;

  constructor() { }

  ngOnInit(): void {
  }

}
