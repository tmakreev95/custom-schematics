import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSchematicsUiLibComponent } from './custom-schematics-ui-lib.component';

describe('CustomSchematicsUiLibComponent', () => {
  let component: CustomSchematicsUiLibComponent;
  let fixture: ComponentFixture<CustomSchematicsUiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSchematicsUiLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomSchematicsUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
