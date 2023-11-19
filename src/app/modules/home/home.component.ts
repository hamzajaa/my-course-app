import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable, of, Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  title = 'my-course-app';
  headerTitle = 'This is a sent header';
  isHeaderVisible = true;

  firstName: string | undefined;
  lastName: string | undefined;

  formGroup: FormGroup | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
  }

  // this is publisher
  observable$: Observable<number> = of(1, 2, 3, 4, 5);
  subscription: Subscription | undefined;
  formSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.displayObservableNumbers();
    this.formGroup = this.formBuilder.group({
      firstName: [undefined, [Validators.required, Validators.minLength(3)]],
      lastName: [undefined, Validators.required]
    });
    this.observeFormChanges();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe(); // we must do that because when go to another page the subscription stay than the performance of our app will be low
    this.formSubscription?.unsubscribe();
  }

  private displayObservableNumbers(): void {
    this.subscription = this.observable$.subscribe((value) => {
      console.log('Here I am!');
      console.log(value);
    })
  }

  private observeFormChanges(): void { // every change of values
    this.formSubscription = this.formGroup?.valueChanges.subscribe((value) => {
      console.log(value);
    })
  }

  onFormSubmit(): void {
    console.log(this.formGroup);
    console.log(this.formGroup?.value);
    console.log(this.formGroup?.valid);
  }

  goToProfileAndLogCabbage(): void {
    console.log('Cabbage');
    this.router.navigate(['/profile']);
  }


}
