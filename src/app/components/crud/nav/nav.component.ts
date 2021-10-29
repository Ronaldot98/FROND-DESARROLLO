import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { CartService } from 'src/app/services/cart.service';

=======
>>>>>>> 681659f6004a85eab07669b989a7363909056d05

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

<<<<<<< HEAD

  
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
   
=======
  constructor() { }

  ngOnInit(): void {
>>>>>>> 681659f6004a85eab07669b989a7363909056d05
  }

}
