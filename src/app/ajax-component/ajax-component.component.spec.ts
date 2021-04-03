import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxComponentComponent } from './ajax-component.component';

describe('AjaxComponentComponent', () => {
  let component: AjaxComponentComponent;
  let fixture: ComponentFixture<AjaxComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjaxComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
