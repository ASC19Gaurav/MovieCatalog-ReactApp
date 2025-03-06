import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchRegistrationComponent } from './match-registration.component';

describe('MatchRegistrationComponent', () => {
  let component: MatchRegistrationComponent;
  let fixture: ComponentFixture<MatchRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchRegistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
