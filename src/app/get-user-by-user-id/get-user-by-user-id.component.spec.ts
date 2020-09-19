import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserByUserIdComponent } from './get-user-by-user-id.component';

describe('GetUserByUserIdComponent', () => {
  let component: GetUserByUserIdComponent;
  let fixture: ComponentFixture<GetUserByUserIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetUserByUserIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUserByUserIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
