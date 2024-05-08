import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Ensure this import is correct
import { SaludoComponent } from './saludo/saludo.component';
import { ContadorComponent } from './contador/contador.component';
import { GaleriaImagenesComponent } from './galeria-imagenes/galeria-imagenes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SaludoComponent, ContadorComponent, GaleriaImagenesComponent], // Ensure RouterOutlet is correctly referenced here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-app-angular';
}
