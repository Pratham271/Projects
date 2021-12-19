import { Component } from '@angular/core';
import { books } from './Books'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstPrj';
  i = 2000;
  imgURL = "data:image/jpeg;base64,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"
  ht = 200;
  wd = 300;
  disp = "none";
  myFunction(e: any) {
    console.log("Hello_World");
    console.log(e);
    this.addPrice();
    this.addQty();
  }
  divClick() {
    console.log("Hello Universe...");
  }
  fullName: string = "Rahul";
  b = books;

  TotPrice = 0;
  TotQty = 0;
  bt = true;
  btp = true;
  addPrice() {
    for (let i = 0; i < (this.b.length); i++) {
      this.TotPrice = this.TotPrice + this.b[i].price;
    }
  }
  addQty() {
    for (let i = 0; i < (this.b.length); i++) {
      this.TotQty = this.TotQty + this.b[i].qty
    }
  }
  myStyle() {
    let styles = {
      'height': this.ht + "px",
      'width': this.wd + "px",
      'background-color': "red",
      'dispaly': this.disp

    };
    return styles;
  }
  increaseSize() {
    this.ht += 1;
    this.wd += 1;

  }
  labelDisplay() {
    this.disp == "none" ? this.disp = "flex" : this.disp = "none";

  }
  applyClass() {
    let myclass = {
      btn: true,
      'btn-primary': this.btp
    }
    return myclass;

  }
  AddRemoveClass() {
    if (this.bt == true) {
      this.bt = false;
      this.btp = false;

    }
    else {
      this.bt = true;
      this.btp = true;
    }
  }
}
