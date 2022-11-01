import { Component } from '@angular/core';
import { AvoidDirective } from '../avoid.directive';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css'],
  // hostDirectives: [AvoidDirective]
  hostDirectives: [{
    directive: AvoidDirective,
    inputs: ['delay: avoidDelay'],
    outputs: ['avoided']
  }]

})
export class DiscountComponent {

}
