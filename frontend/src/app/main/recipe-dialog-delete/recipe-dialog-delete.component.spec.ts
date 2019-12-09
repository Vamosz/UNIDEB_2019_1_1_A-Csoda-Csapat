import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDialogDeleteComponent } from './recipe-dialog-delete.component';

describe('RecipeDialogDeleteComponent', () => {
  let component: RecipeDialogDeleteComponent;
  let fixture: ComponentFixture<RecipeDialogDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDialogDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
