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

  clickSubMenuP(): void {
    const lista1 = document.getElementById("lista1");

      if(lista1 !== null){
      lista1.classList.toggle("lista1-active")
      }

  }
  clickSubMenuCa(): void {
    const lista2 = document.getElementById("lista2");

      if(lista2 !== null){
      lista2.classList.toggle("lista2-active")
      }

  }
  clickSubMenuCr(): void {
    const lista3 = document.getElementById("lista3");

      if(lista3 !== null){
      lista3.classList.toggle("lista3-active")
      }

  }
}


