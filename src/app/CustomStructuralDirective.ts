import  { Directive,Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive ({
    selector : '[customStructural]'
})

export class CustomStructuralDirective{
@Input() set customStructural (condition:boolean){
if(!condition){
this.vcref.createEmbeddedView(this.templateref);
}
else{
this.vcref.clear();
    }
}
constructor(private templateref:TemplateRef<any>, private vcref : ViewContainerRef){}

}