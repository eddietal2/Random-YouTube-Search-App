import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxComponentComponent } from './search-box-component.component';

describe('SearchBoxComponentComponent', () => {
  let component: SearchBoxComponentComponent;
  let fixture: ComponentFixture<SearchBoxComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBoxComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
