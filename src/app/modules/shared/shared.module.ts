import {NgModule} from "@angular/core";
import {HeaderComponent} from "./layout/header/header.component";
import {FooterComponent} from './layout/footer/footer.component';
import {CommonModule} from "@angular/common";
import {BirthdayPipe} from "./pipes/birthday.pipe";

const components = [
  HeaderComponent,
  FooterComponent,
]

const pipes = [
  BirthdayPipe,
]

@NgModule({
  declarations: [
    ...components,
    ...pipes
  ],
  imports: [
    CommonModule // ngStyle....
  ],
  exports: [...components]
})
export class SharedModule {
}
