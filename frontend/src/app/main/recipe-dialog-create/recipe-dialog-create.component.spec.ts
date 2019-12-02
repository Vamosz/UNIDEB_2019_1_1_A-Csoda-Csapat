import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDialogCreateComponent } from './recipe-dialog-create.component';

describe('RecipeDialogCreateComponent', () => {
  let component: RecipeDialogCreateComponent;
  let fixture: ComponentFixture<RecipeDialogCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDialogCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDialogCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
