import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipeDialogComponent } from './receipe-dialog.component';

describe('ReceipeDialogComponent', () => {
  let component: ReceipeDialogComponent;
  let fixture: ComponentFixture<ReceipeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
