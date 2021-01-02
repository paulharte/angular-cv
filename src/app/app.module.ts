import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CvContentComponent } from './cv-content/cv-content.component';
import { ContactDetailsComponent } from './header/contact-details/contact-details.component';
import { SectionComponent } from './cv-content/section/section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LifePeriodComponent } from './cv-content/life-period/life-period.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CvContentComponent,
    ContactDetailsComponent,
    SectionComponent,
    LifePeriodComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
