import {AfterViewInit, Directive} from '@angular/core';
declare var componentHandler: any;

@Directive({
  selector: '[appMDL]'
})
export class MDLDirective implements AfterViewInit{
  ngAfterViewInit() {
    componentHandler.upgradeAllRegistered();
  }

}
