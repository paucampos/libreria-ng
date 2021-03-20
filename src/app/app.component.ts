import { Component } from '@angular/core';
import { ICardItem } from 'projects/cards/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elements: Array<ICardItem> = [
    {
      title: 'Titulo 1',
      description: 'Descripcion 1',
      image: 'https://picsum.photos/500/300/?image=12'
    },
    {
      title: 'Titulo 2',
      description: 'Descripcion 2',
      image: 'https://picsum.photos/500/300/?image=8'
    },
    {
      title: 'Titulo 3',
      description: 'Descripcion 3',
      image: 'https://picsum.photos/500/300/?image=20'
    },
    {
      title: 'Titulo 4',
      description: 'Descripcion 4',
      image: 'https://picsum.photos/500/300/?image=56'
    },
    {
      title: 'Titulo 5',
      description: 'Descripcion 5',
      image: 'https://picsum.photos/500/300/?image=33'
    },
    {
      title: 'Titulo 6',
      description: 'Descripcion 6',
      image: 'https://picsum.photos/500/300/?image=22'
    },
  ];

}
