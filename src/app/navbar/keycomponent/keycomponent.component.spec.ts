import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeycomponentComponent } from './keycomponent.component';

describe('KeycomponentComponent', () => {
  let component: KeycomponentComponent;
  let fixture: ComponentFixture<KeycomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeycomponentComponent]
    });
    fixture = TestBed.createComponent(KeycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
