import  { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive ({
    selector : '[customAttribute]'
})

export class CustomAttributeDirective implements AfterViewInit{
constructor(private elementref:ElementRef){}

ngAfterViewInit(){
this.elementref.nativeElement.style.backgroundColor="red";    
}

}