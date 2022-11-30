import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDesDialogComponent } from './product-des-dialog.component';

describe('ProductDesDialogComponent', () => {
  let component: ProductDesDialogComponent;
  let fixture: ComponentFixture<ProductDesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
