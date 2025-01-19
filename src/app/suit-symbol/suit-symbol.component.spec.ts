import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitSymbolComponent } from './suit-symbol.component';

describe('SuitSymbolComponent', () => {
  let component: SuitSymbolComponent;
  let fixture: ComponentFixture<SuitSymbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuitSymbolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuitSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
