import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perguntas } from './perguntas';

describe('Perguntas', () => {
  let component: Perguntas;
  let fixture: ComponentFixture<Perguntas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Perguntas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Perguntas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
