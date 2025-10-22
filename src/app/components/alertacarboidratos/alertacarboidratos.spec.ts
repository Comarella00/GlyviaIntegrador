import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alertacarboidratos } from './alertacarboidratos';

describe('Alertacarboidratos', () => {
  let component: Alertacarboidratos;
  let fixture: ComponentFixture<Alertacarboidratos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alertacarboidratos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alertacarboidratos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
