import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Jelovnik } from '../_modeli/jelovnik';
import { JelaService } from '../_services/jela.service';
import { JelovniciService } from '../_services/jelovnici.service';

@Component({
  selector: 'app-jelo-create',
  templateUrl: './jelo-create.component.html',
  styleUrls: ['./jelo-create.component.css']
})
export class JeloCreateComponent {

  jelo: any = {
    id: 0,
    naziv: '',
    opis: '',
    jelovnikId: ''
  }

  jelovnici: Jelovnik[] = [];

  constructor(
    private jeloService: JelaService,
    private jelovniciService: JelovniciService,
    private toastr: ToastrService,
  ){}

  ngOnInit(){
    this.dohvatiJelovnike();
  }

  dohvatiJelovnike(){
    this.jelovniciService.dohvatiSve().subscribe({
      next: success => {
        console.log(success);
        const jelovniciData = success["$values"];

        jelovniciData.forEach((jelovnikItem: any) => {
          const jelovnik: Jelovnik = {
            id: jelovnikItem.id,
            naziv: jelovnikItem.naziv,
            razdoblje: jelovnikItem.razdoblje,
            opis: jelovnikItem.opis
          }

          this.jelovnici.push(jelovnik);
          console.log("jelovnici", this.jelovnici);
        });
      },
      error: error => {
        console.error(error);
      }
    })
  }

  spremi(){
    console.log("Jelo za spremiti", this.jelo);

    this.jeloService.spremiNovog(this.jelo).subscribe({
      next: response => {
          console.log(response);
          this.toastr.success("Jelo spremljeno");
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška");
      }
    });
  }

}
