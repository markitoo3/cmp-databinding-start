import { AfterContentChecked, AfterContentInit, AfterViewInit, Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class ServerElementComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewInit,
OnDestroy {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('constructor called')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!')
  }

  ngDoCheck() {
    console.log('ngDoCheck called')
  }

  ngAfterContentInit() {
    console.log('ngAfterContent Init called')
  }

  ngAfterContentChecked() {
    console.log('ngAfterConentChecked called!')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called')
  }
}
