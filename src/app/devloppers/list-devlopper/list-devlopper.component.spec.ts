import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDevlopperComponent } from './list-devlopper.component';

describe('ListDevlopperComponent', () => {
  let component: ListDevlopperComponent;
  let fixture: ComponentFixture<ListDevlopperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDevlopperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDevlopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
