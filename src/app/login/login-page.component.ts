import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  nickname: string;
  show = true;

  constructor() { }

  ngOnInit() {
  }

  setName() {
    this.show = false;
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('nickname', this.nickname);
    } else {
      console.log('no local storage support');
    }
  }

}
