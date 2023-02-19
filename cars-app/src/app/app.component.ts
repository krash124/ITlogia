import { Component, HostListener } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  reservForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    car: ['', Validators.required]
  })

  carsData = [
    {
      image: 'car-1.png',
      name: 'Lamborghini Huracan Spyder',
      gear: 'Полный',
      engine: 5.2,
      places: 2,
      transmission: 'Автомат',
      year: 2019
    },
    {
      image: 'car-2.png',
      name: 'Chevrolet Corvette',
      gear: 'Полный',
      engine: 6.2,
      places: 2,
      transmission: 'Автомат',
      year: 2017
    },
    {
      image: 'car-3.png',
      name: 'Ferrari California',
      gear: 'Полный',
      engine: 3.9,
      places: 4,
      transmission: 'Автомат',
      year: 2010
    },
    {
      image: 'car-4.png',
      name: 'Lamborghini Urus',
      gear: 'Полный',
      engine: 4.0,
      places: 5,
      transmission: 'Автомат',
      year: 2019
    },
    {
      image: 'car-5.png',
      name: 'Audi R8',
      gear: 'Полный',
      engine: 5.2,
      places: 2,
      transmission: 'Автомат',
      year: 2018
    },
    {
      image: 'car-6.png',
      name: 'Chevrolet Camaro',
      gear: 'Полный',
      engine: 2.0,
      places: 4,
      transmission: 'Автомат',
      year: 2019
    },
    {
      image: 'car-7.png',
      name: 'Maserati Quattroporte',
      gear: 'Полный',
      engine: 3.0,
      places: 5,
      transmission: 'Автомат',
      year: 2018
    },
    {
      image: 'car-8.png',
      name: 'Dodge Challenger',
      gear: 'Задний',
      engine: 6.4,
      places: 2,
      transmission: 'Автомат',
      year: 2019
    },
    {
      image: 'car-9.png',
      name: 'Nissan GT-R',
      gear: 'Полный',
      engine: 3.8,
      places: 2,
      transmission: 'Автомат',
      year: 2019
    }
  ]

  constructor(private fb: FormBuilder) {}

  goScroll(target: HTMLElement, car?: any) {
    target.scrollIntoView({behavior: 'smooth'});
    if (car) {
      this.reservForm.patchValue({car: car.name})
    }
  };

  trans: any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.trans = {transform: 'translate3d(' + ((e.clientX * 0.3) / 8) + 'px,' + ((e.clientY * 0.3) / 8) + 'px,0px)'};
  }
    bgPos: any;
    @HostListener('document:scroll', ['$event'])
    onscroll() {
      this.bgPos = {backgroundPositionX: '0' + (0.3 * window.scrollY) + 'px'};
    }
  

  onSubmit() {
    if (this.reservForm.valid) {
      alert('OK');
      this.reservForm.reset();
    }
  }
}
