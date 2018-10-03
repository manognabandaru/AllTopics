import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application';
  parentprop='1.Sent from parent to child';
  name="Mano";
  greeting;
  showvalue;
  testif: boolean = false;
  array=['mano','kir'];
  testcsd: boolean= false;

  // greet(){
  // this.greeting= "Hello "+ this.name + ", This is Event Binding";
  // console.log(this.greeting);
  // }

//   Child to Parent Code
// onReceived(value:any){
// console.log(value + "parent");
// this.showvalue = value;
//   }

  getColor(){
 return this.name==='Mano'? 'blue':'red';
  }

}
