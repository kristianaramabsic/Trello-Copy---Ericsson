import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListboardsComponent } from './listboards.component';

describe('ListboardsComponent', () => {
  let component: ListboardsComponent;
  let fixture: ComponentFixture<ListboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListboardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
