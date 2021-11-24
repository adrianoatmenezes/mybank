import { TransferenciasService } from './services/transferencias.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-bank';
  constructor(private service: TransferenciasService) {

  }

  transferir($event: any) {
    this.service.adicionar($event);
  }
}
