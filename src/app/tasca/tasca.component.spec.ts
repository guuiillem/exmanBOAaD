import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TascaComponent } from './tasca.component';

describe('TascaComponent', () => {
  let component: TascaComponent;
  let fixture: ComponentFixture<TascaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TascaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TascaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
