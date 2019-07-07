import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtudoComponent } from './protudo.component';

describe('ProtudoComponent', () => {
  let component: ProtudoComponent;
  let fixture: ComponentFixture<ProtudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
