import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  clickMenu(): void{
    const navbar = document.getElementById("navbar");
    const login = document.getElementById("buttonHeader");


      if(navbar !== null && login !== null){
      navbar.classList.toggle("navbar-active")
      login.classList.toggle("buttonHeader-active")

      }
  }
}


