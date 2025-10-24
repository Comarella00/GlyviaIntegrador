import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addconsulta } from './addconsulta';

describe('Addconsulta', () => {
  let component: Addconsulta;
  let fixture: ComponentFixture<Addconsulta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addconsulta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addconsulta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
