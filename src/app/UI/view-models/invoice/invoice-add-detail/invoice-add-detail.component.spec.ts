import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceAddDetailComponent } from './invoice-add-detail.component';

describe('InvoiceAddDetailComponent', () => {
  let component: InvoiceAddDetailComponent;
  let fixture: ComponentFixture<InvoiceAddDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceAddDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceAddDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
