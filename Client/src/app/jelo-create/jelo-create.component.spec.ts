import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeloCreateComponent } from './jelo-create.component';

describe('JeloCreateComponent', () => {
  let component: JeloCreateComponent;
  let fixture: ComponentFixture<JeloCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JeloCreateComponent]
    });
    fixture = TestBed.createComponent(JeloCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
