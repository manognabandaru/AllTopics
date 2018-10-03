import { Component, Input, Output, EventEmitter } from '@angular/core';

import {DetailsService} from './details.service';

@Component ({
selector : 'app-child',
templateUrl : './child.component.html',
styleUrls : ['./child.component.css'],
providers: [DetailsService]
})


export class ChildComponent
{
app='App';

// @Input() recievedfromparent;


//  Child to Parent:
// @Output() ctop = new EventEmitter();
// SendToParent(){
// this.ctop.emit('Child to Parent');
// console.log(this.ctop);
// }

// Service Code:
constructor (private detailService:DetailsService){} 
public employees=[];
nameService() {
    this.employees=this.detailService.detailsService();
    console.log(this.employees);
    
    }

}