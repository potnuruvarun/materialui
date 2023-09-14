import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideberComponent } from './sideber.component';

describe('SideberComponent', () => {
  let component: SideberComponent;
  let fixture: ComponentFixture<SideberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideberComponent]
    });
    fixture = TestBed.createComponent(SideberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
