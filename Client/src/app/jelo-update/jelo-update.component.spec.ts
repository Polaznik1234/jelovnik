import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeloUpdateComponent } from './jelo-update.component';

describe('JeloUpdateComponent', () => {
  let component: JeloUpdateComponent;
  let fixture: ComponentFixture<JeloUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JeloUpdateComponent]
    });
    fixture = TestBed.createComponent(JeloUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
