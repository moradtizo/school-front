import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDevlopperComponent } from './add-devlopper.component';

describe('AddDevlopperComponent', () => {
  let component: AddDevlopperComponent;
  let fixture: ComponentFixture<AddDevlopperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDevlopperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDevlopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
