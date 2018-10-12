import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrognozaComponent } from './prognoza.component';

describe('PrognozaComponent', () => {
  let component: PrognozaComponent;
  let fixture: ComponentFixture<PrognozaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrognozaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrognozaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
