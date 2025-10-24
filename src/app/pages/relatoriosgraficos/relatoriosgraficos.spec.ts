import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relatoriosgraficos } from './relatoriosgraficos';

describe('Relatoriosgraficos', () => {
  let component: Relatoriosgraficos;
  let fixture: ComponentFixture<Relatoriosgraficos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Relatoriosgraficos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Relatoriosgraficos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
