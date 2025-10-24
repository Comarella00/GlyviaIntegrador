import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addremedio } from './addremedio';

describe('Addremedio', () => {
  let component: Addremedio;
  let fixture: ComponentFixture<Addremedio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addremedio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addremedio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
