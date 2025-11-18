import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlimentosRefeicao } from './lista-alimentos-refeicao';

describe('ListaAlimentosRefeicao', () => {
  let component: ListaAlimentosRefeicao;
  let fixture: ComponentFixture<ListaAlimentosRefeicao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaAlimentosRefeicao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAlimentosRefeicao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
