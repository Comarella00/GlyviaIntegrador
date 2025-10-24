import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lembretes } from './lembretes';

describe('Lembretes', () => {
  let component: Lembretes;
  let fixture: ComponentFixture<Lembretes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lembretes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lembretes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
