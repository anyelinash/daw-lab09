import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  images: { title: string, description: string, url: string }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.images = [
      {
        title: 'La noche estrellada (1889)',
        description: ' es posiblemente la obra más famosa de van Gogh, con un cielo nocturno lleno de remolinos y estrellas brillantes sobre un pequeño pueblo, destacando por su expresivo uso del color y la textura, transmitiendo una sensación de movimiento y emoción intensa.​​​',
        url: 'https://i.pinimg.com/564x/86/0c/7a/860c7a25a46f8a3360e25c3413f3f0c7.jpg'
      },
      {
        title: 'Trigal con cuervos (1890)',
        description: 'Obra sombría que muestra un campo de trigo bajo un cielo turbulento con cuervos volando, reflejando el estado emocional turbulento de van Gogh en sus últimos días.',
        url: 'https://i.pinimg.com/564x/9d/ee/06/9dee06dba537169d490a0ef90d57b1bd.jpg'
      },
      {
        title: 'Lirios (1889)',
        description: 'Presenta una vibrante representación de flores en un jardín, con una paleta rica en tonos de azul, púrpura y verde, reflejando la fascinación de van Gogh por la naturaleza y su habilidad para capturar su belleza y vitalidad.',
        url: 'https://i.pinimg.com/564x/d9/d5/d1/d9d5d11077dc76753c5242d5c7331d01.jpg'
      }
    ];
  }
}