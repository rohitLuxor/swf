import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TortoiseHareComponent } from './tortoise-hare.component';

describe('TortoiseHareComponent', () => {
  let component: TortoiseHareComponent;
  let fixture: ComponentFixture<TortoiseHareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TortoiseHareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TortoiseHareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
