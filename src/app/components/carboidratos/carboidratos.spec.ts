import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carboidratos } from './carboidratos';

describe('Carboidratos', () => {
  let component: Carboidratos;
  let fixture: ComponentFixture<Carboidratos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carboidratos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carboidratos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
