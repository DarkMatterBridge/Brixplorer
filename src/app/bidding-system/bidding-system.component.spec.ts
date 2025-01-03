import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingSystemComponent } from './bidding-system.component';

describe('BiddingSystemComponent', () => {
  let component: BiddingSystemComponent;
  let fixture: ComponentFixture<BiddingSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiddingSystemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiddingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
