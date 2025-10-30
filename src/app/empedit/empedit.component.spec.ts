import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpeditComponent } from './empedit.component';

describe('EmpeditComponent', () => {
  let component: EmpeditComponent;
  let fixture: ComponentFixture<EmpeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpeditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
