import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { CartService } from 'src/app/services/cart.service';

=======
>>>>>>> 681659f6004a85eab07669b989a7363909056d05
>>>>>>> c1986206bc7633b5cb7f811b55d53eb4c9166175

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
=======
<<<<<<< HEAD

  
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
   
=======
  constructor() { }

  ngOnInit(): void {
>>>>>>> 681659f6004a85eab07669b989a7363909056d05
>>>>>>> c1986206bc7633b5cb7f811b55d53eb4c9166175
  }

}
