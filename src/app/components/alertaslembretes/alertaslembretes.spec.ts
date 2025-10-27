import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alertaslembretes } from './alertaslembretes';

describe('Alertaslembretes', () => {
  let component: Alertaslembretes;
  let fixture: ComponentFixture<Alertaslembretes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Alertaslembretes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Alertaslembretes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
