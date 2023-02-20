import { Component, HostListener } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService } from './app.service';

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

  carsData: any;

  constructor(private fb: FormBuilder, private appService: AppService) {}

  ngOnInit() {
    this.appService.getDate().subscribe(carsData => this.carsData = carsData);
  }

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

    this.appService.sendQuery(this.reservForm.value)
      .subscribe(
        {
          next: (response: any) => {
            alert(response.message);
            this.reservForm.reset();
          },
          error: (response) => {
            alert(response.error.message);
          }
        }
      );
    }
  }
}
