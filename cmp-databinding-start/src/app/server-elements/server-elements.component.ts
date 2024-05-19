import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrl: './server-elements.component.css',
  //o tipo de encapsulação permite compartilhar ou não as mesmas classes de css
  // e outros detalhes tambem.
  // Compartilhar.
  // encapsulation: ViewEncapsulation.None,
  // Não compartilhar.
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementsComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // Uma variavel pode ter um pseudonimo (um segundo nome)
  // para ser chamada em outro componente
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('constructor called!!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!!', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!!');
    console.log('Text content: ', this.header.nativeElement.textContent);
    console.log(
      'Text Content of paragraph: ',
      this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!!');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!!');
    console.log('Text content: ', this.header.nativeElement.textContent);
    console.log(
      'Text Content of paragraph: ',
      this.paragraph.nativeElement.textContent
    );
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!!');
  }
}
