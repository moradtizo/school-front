import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDevlopperComponent } from './edit-devlopper.component';

describe('EditDevlopperComponent', () => {
  let component: EditDevlopperComponent;
  let fixture: ComponentFixture<EditDevlopperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDevlopperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDevlopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
