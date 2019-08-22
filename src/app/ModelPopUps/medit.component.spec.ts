import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MEditComponent } from './medit.component';

describe('MEditComponent', () => {
  let component: MEditComponent;
  let fixture: ComponentFixture<MEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
