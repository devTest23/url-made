import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from '../Services/api.service';

import { UrlShortnerComponent } from './url-shortner.component';

describe('UrlShortnerComponent', () => {
  let component: UrlShortnerComponent;
  let fixture: ComponentFixture<UrlShortnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UrlShortnerComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        FormsModule,
      ],
      providers: [ApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlShortnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
