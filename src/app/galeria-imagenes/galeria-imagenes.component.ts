import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-galeria-imagenes',
  templateUrl: './galeria-imagenes.component.html',
  styleUrls: ['./galeria-imagenes.component.css'],
  standalone: true,
  imports: [CommonModule] // Añade CommonModule a las importaciones
})
export class GaleriaImagenesComponent implements OnInit {
  imagenes: any[] = [
    {
      titulo: 'Rias Gremory',
      descripcion: 'Es la hija y segundo hijo de la Familia Gremory. Se convirtió en la heredera después de que su hermano, Sirzechs, se convirtiera en Satanás Lucifer, perdiendo así su derecho como heredero de la casa. Después de ser anunciada como la heredera del Clan Gremory.',
      url: 'https://en.anmosugoi.com/wp-content/uploads/2024/04/High-School-DxD-Rias-Gremory-min-2.webp'
    },
    {
      titulo: 'Hatsune Miku',
      descripcion: 'Fue una voz, en sus inicios, hace ya más de 10 años, era el programa vocal que utilizaba Crypton Future Media para su programa VOCALOID (un programa de síntesis de voz). Para hablar de ella, la traducción de su nombre habla por sí sola “El primer sonido del futuro”.',
      url: 'https://somoskudasai.com/wp-content/uploads/2024/03/portada_-1.jpg'
    },
    {
      titulo: 'Shogun Raiden',
      descripcion: 'La Shogun Raiden (en japonés: 雷電 将軍 Raiden Shougun), cuyo nombre real es Ei, es un personaje jugable en Genshin Impact. Ella controla una marioneta mientras medita dentro del Plano de la eutimia. Ella es el recipiente de Beelzebul, la actual Arconte Electro de Inazuma.',
      url: 'https://images-ng.pixai.art/images/orig/61927af4-9199-41c1-8531-8bca1e8d9d00'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
