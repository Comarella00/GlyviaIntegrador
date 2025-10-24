import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainconsultas } from './mainconsultas';

describe('Mainconsultas', () => {
  let component: Mainconsultas;
  let fixture: ComponentFixture<Mainconsultas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mainconsultas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mainconsultas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
