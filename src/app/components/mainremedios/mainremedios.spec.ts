import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainremedios } from './mainremedios';

describe('Mainremedios', () => {
  let component: Mainremedios;
  let fixture: ComponentFixture<Mainremedios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mainremedios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mainremedios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
