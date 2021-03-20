import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferdataPageComponent } from './transferdata-page.component';

describe('TransferdataPageComponent', () => {
  let component: TransferdataPageComponent;
  let fixture: ComponentFixture<TransferdataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferdataPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferdataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
