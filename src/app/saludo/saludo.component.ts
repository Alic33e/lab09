import { Component,  OnInit} from '@angular/core';

@Component({
  selector: 'app-saludo',
  standalone: true,
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {
  titulo: string = 'Hola mundo de Angular';
  mensaje: string = 'Este es un componente de Angular';

  constructor() { }
  ngOnInit(): void {
  }
}
