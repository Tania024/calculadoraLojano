import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesComponent } from './operaciones.component';

describe('OperacionesComponent', () => {
  let component: OperacionesComponent;
  let fixture: ComponentFixture<OperacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
