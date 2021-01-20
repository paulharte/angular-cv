import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetailsComponent } from './contact-details.component';

describe('ContactDetailsComponent', () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create without private details', () => {
    component.show_private_details = true;
    expect(component).toBeTruthy();
    component.show_private_details = false;
    expect(component).toBeTruthy();
  });
});
