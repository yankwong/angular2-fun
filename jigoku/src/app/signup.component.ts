import { Component } from '@angular/core';

@Component({
  selector: 'signup',
  template: `
  <form class="jigoku-form">
    <h1>Your grievance shall be avenged</h1>
    <input type="text" class="jigoku-text">
    <button class="jigoku-submit">Submit</button>
  </form>
  `,
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

}
