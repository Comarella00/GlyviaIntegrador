import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bemvindo } from './bemvindo';

describe('Bemvindo', () => {
  let component: Bemvindo;
  let fixture: ComponentFixture<Bemvindo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bemvindo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bemvindo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
