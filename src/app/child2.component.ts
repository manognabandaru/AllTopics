import { Component, Input, Output, EventEmitter } from '@angular/core';

import {DetailsService} from './details.service';

@Component ({
selector : 'app-child2',
templateUrl : './child2.component.html',
styleUrls : ['./child2.component.css'],
providers: [DetailsService]
})


export class ChildComponent2
{
// Service with a child
constructor (private detailService:DetailsService){} 

public employees=[];

TechService() {
    this.employees=this.detailService.detailsService();
    console.log(this.employees);
    
    }

}