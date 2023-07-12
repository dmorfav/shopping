import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: ComponentFixture<CarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: []
    });
    component = TestBed.createComponent(CarouselComponent);
    component.componentInstance.imageUrls = [
      'https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1519327232521-1ea2c736d34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80'
    ];
    component.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render the correct number of slides', () => {
    const slides = component.nativeElement.querySelectorAll('.carousel-item');
    expect(slides.length).toBe(component.componentInstance.imageUrls.length);
  });

  it('should navigate to the next slide on "next" button click', () => {
    const nextButton = component.nativeElement.querySelector('.next');
    const initialCheckedRadioId = component.nativeElement.querySelector('input.carousel-open:checked').id;

    nextButton.click();
    component.detectChanges();

    const currentCheckedRadioId = component.nativeElement.querySelector('input.carousel-open:checked').id;
    const expectedRadioId = initialCheckedRadioId === 'carousel-3' ? 'carousel-1' : `carousel-${parseInt(initialCheckedRadioId.split('-')[1]) + 1}`;
    expect(currentCheckedRadioId).toBe(expectedRadioId);
  });

  it('should navigate to the previous slide on "prev" button click', () => {
    const prevButton = component.nativeElement.querySelector('.prev');
    const initialCheckedRadioId = component.nativeElement.querySelector('input.carousel-open:checked').id;

    prevButton.click();
    component.detectChanges();

    const currentCheckedRadioId = component.nativeElement.querySelector('input.carousel-open:checked').id;
    const expectedRadioId = initialCheckedRadioId === 'carousel-1' ? 'carousel-3' : `carousel-${parseInt(initialCheckedRadioId.split('-')[1]) - 1}`;
    expect(currentCheckedRadioId).toBe(expectedRadioId);
  });

  it('should navigate to the correct slide on indicator bullet click', () => {
    const bullets = component.nativeElement.querySelectorAll('.carousel-bullet');
    const initialCheckedRadioId = component.nativeElement.querySelector('input.carousel-open:checked').id;
    const targetBulletIndex = 1; // Index of the bullet to click

    bullets[targetBulletIndex].click();
    component.detectChanges();

    const currentCheckedRadioId = component.nativeElement.querySelector('input.carousel-open:checked').id;
    const expectedRadioId = `carousel-${targetBulletIndex + 1}`;
    expect(currentCheckedRadioId).toBe(expectedRadioId);
    expect(currentCheckedRadioId).not.toBe(initialCheckedRadioId);
  });
});
