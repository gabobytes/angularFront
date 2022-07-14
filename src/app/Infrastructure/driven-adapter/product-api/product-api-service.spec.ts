import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductApiService } from './product-api-service';

describe('ProductApiService', () => {
  let component: ProductApiService;
  let fixture: ComponentFixture<ProductApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductApiService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductApiService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
