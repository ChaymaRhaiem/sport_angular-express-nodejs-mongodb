import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtcileComponent } from './artcile.component';

describe('ArtcileComponent', () => {
  let component: ArtcileComponent;
  let fixture: ComponentFixture<ArtcileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtcileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtcileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
