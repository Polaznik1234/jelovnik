import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JelovniciComponent } from './jelovnici.component';

describe('JelovniciComponent', () => {
  let component: JelovniciComponent;
  let fixture: ComponentFixture<JelovniciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JelovniciComponent]
    });
    fixture = TestBed.createComponent(JelovniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
