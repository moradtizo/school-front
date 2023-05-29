import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevlopperDialogComponent } from './devlopper-dialog.component';

describe('DevlopperDialogComponent', () => {
  let component: DevlopperDialogComponent;
  let fixture: ComponentFixture<DevlopperDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevlopperDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevlopperDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
