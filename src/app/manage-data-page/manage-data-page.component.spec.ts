import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDataPageComponent } from './manage-data-page.component';

describe('ManageDataPageComponent', () => {
  let component: ManageDataPageComponent;
  let fixture: ComponentFixture<ManageDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDataPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
