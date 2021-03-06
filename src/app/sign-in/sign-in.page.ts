import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(private menuCtrl: MenuController) {
    
   }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }

  
  ionViewDidLeave(): void {
    this.menuCtrl.enable(true);
  }

}
