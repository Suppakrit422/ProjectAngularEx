import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabkupDataPageComponent } from './babkup-data-page.component';

describe('BabkupDataPageComponent', () => {
  let component: BabkupDataPageComponent;
  let fixture: ComponentFixture<BabkupDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabkupDataPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabkupDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
