import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifCardComponentComponent } from './gif-card-component.component';

describe('GifCardComponentComponent', () => {
  let component: GifCardComponentComponent;
  let fixture: ComponentFixture<GifCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifCardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
