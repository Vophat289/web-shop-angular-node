import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnhkhoaComponent } from './anhkhoa.component';

describe('AnhkhoaComponent', () => {
  let component: AnhkhoaComponent;
  let fixture: ComponentFixture<AnhkhoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnhkhoaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnhkhoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
