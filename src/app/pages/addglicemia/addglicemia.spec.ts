import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addglicemia } from './addglicemia';

describe('Addglicemia', () => {
  let component: Addglicemia;
  let fixture: ComponentFixture<Addglicemia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addglicemia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addglicemia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
