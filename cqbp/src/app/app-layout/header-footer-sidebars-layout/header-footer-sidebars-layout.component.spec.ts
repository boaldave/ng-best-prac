import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFooterSidebarsLayoutComponent } from './header-footer-sidebars-layout.component';

describe('HeaderFooterSidebarsLayoutComponent', () => {
  let component: HeaderFooterSidebarsLayoutComponent;
  let fixture: ComponentFixture<HeaderFooterSidebarsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFooterSidebarsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFooterSidebarsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
