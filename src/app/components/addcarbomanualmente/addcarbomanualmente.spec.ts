import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addcarbomanualmente } from './addcarbomanualmente';

describe('Addcarbomanualmente', () => {
  let component: Addcarbomanualmente;
  let fixture: ComponentFixture<Addcarbomanualmente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addcarbomanualmente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addcarbomanualmente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
