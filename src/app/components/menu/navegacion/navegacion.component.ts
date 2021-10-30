import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { CartService } from 'src/app/services/cart.service';

=======
>>>>>>> 681659f6004a85eab07669b989a7363909056d05
>>>>>>> c1986206bc7633b5cb7f811b55d53eb4c9166175

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

<<<<<<< HEAD
=======
<<<<<<< HEAD
  public totalItem : number = 0;

  public searchTerm : string = ''; 

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()

    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

 

  

=======
>>>>>>> c1986206bc7633b5cb7f811b55d53eb4c9166175
  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
>>>>>>> 681659f6004a85eab07669b989a7363909056d05
>>>>>>> c1986206bc7633b5cb7f811b55d53eb4c9166175
}
