import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaItemFormComponent } from './edit-item-form.component';

describe('MediaItemFormComponent', () => {
  let component: MediaItemFormComponent;
  let fixture: ComponentFixture<MediaItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
