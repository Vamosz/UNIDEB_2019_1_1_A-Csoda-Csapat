import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { recipesmanagerComponent } from './recipesmanager.component';

describe('recipesmanagerComponent', () => {
  let component: recipesmanagerComponent;
  let fixture: ComponentFixture<recipesmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ recipesmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(recipesmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
