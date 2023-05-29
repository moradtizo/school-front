import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDevelopperComponent } from './about-developper.component';

describe('AboutDevelopperComponent', () => {
  let component: AboutDevelopperComponent;
  let fixture: ComponentFixture<AboutDevelopperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDevelopperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutDevelopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
