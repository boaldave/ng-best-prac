import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CqSharedComponent } from './cq-shared.component';

describe('CqSharedComponent', () => {
  let component: CqSharedComponent;
  let fixture: ComponentFixture<CqSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CqSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CqSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
