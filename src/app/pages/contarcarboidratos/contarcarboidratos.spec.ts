import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contarcarboidratos } from './contarcarboidratos';

describe('Contarcarboidratos', () => {
  let component: Contarcarboidratos;
  let fixture: ComponentFixture<Contarcarboidratos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contarcarboidratos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contarcarboidratos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
