import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { GaleriaImagenesComponent } from './galeria-imagenes/galeria-imagenes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContadorComponent, GaleriaImagenesComponent], // Ensure RouterOutlet is correctly referenced here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-app-angular';
}
