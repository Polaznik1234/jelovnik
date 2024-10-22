import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Jelovnik } from '../_modeli/jelovnik';
import { JelaService } from '../_services/jela.service';
import { JelovniciService } from '../_services/jelovnici.service';

@Component({
  selector: 'app-jelo-update',
  templateUrl: './jelo-update.component.html',
  styleUrls: ['./jelo-update.component.css']
})
export class JeloUpdateComponent implements OnInit{

  jelo: any = {
    id: 0,
    naziv: '',
    opis: '',
    jelovnikId: ''
  }

  jelovnici: Jelovnik[] = [];


  jeloID: string = "";

  constructor(
    private route: ActivatedRoute, 
    private jelaService: JelaService,
    private jelovniciService: JelovniciService,
     private toastr: ToastrService,
    ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jeloID = params['id'];
      this.dohvatiJeloPoId();
      this.dohvatiJelovnike();
    });
  }

  dohvatiJeloPoId(){
    this.jelaService.dohvatiPoId(this.jeloID).subscribe({
      next: response => {
        console.log("Response", response);

        this.jelo = {
          id: response.id,
          naziv: response.naziv,
          opis: response.opis,
          jelovnikId: response.jelovnik.id
        }

        console.log("Jelo data", this.jelo);
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška");
      }
    }
    )
  }

  spremi(){
    console.log(this.jelo);

    this.jelaService.azuriraj(this.jelo).subscribe({
      next: response => {
        console.log(response);
        this.toastr.success("Spremljeni podaci jela.");
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška.");
      }
    })
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

}
