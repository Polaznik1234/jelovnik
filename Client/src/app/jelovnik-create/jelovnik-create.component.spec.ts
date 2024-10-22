import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JelovnikCreateComponent } from './jelovnik-create.component';

describe('JelovnikCreateComponent', () => {
  let component: JelovnikCreateComponent;
  let fixture: ComponentFixture<JelovnikCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JelovnikCreateComponent]
    });
    fixture = TestBed.createComponent(JelovnikCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
