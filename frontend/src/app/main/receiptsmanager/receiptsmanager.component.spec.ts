import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptsmanagerComponent } from './receiptsmanager.component';

describe('ReceiptsmanagerComponent', () => {
  let component: ReceiptsmanagerComponent;
  let fixture: ComponentFixture<ReceiptsmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptsmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptsmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
