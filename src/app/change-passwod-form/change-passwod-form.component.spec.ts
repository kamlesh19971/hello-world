import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswodFormComponent } from './change-passwod-form.component';

describe('ChangePasswodFormComponent', () => {
  let component: ChangePasswodFormComponent;
  let fixture: ComponentFixture<ChangePasswodFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswodFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswodFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
