import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticDialog } from './statistic-dialog';

describe('StatisticDialog', () => {
  let component: StatisticDialog;
  let fixture: ComponentFixture<StatisticDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatisticDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(StatisticDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
