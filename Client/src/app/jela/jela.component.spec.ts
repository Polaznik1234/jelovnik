import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JelaComponent } from './jela.component';

describe('JelaComponent', () => {
  let component: JelaComponent;
  let fixture: ComponentFixture<JelaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JelaComponent]
    });
    fixture = TestBed.createComponent(JelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
