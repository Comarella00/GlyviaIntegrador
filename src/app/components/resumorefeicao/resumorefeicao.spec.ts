import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resumorefeicao } from './resumorefeicao';

describe('Resumorefeicao', () => {
  let component: Resumorefeicao;
  let fixture: ComponentFixture<Resumorefeicao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resumorefeicao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resumorefeicao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
