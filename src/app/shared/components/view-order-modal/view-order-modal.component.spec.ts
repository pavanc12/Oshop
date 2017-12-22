import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrderModalComponent } from './view-order-modal.component';

describe('ViewOrderModalComponent', () => {
  let component: ViewOrderModalComponent;
  let fixture: ComponentFixture<ViewOrderModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrderModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
