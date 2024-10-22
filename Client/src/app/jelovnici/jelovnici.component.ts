import { Component, OnInit } from '@angular/core';
import { Jelovnik } from '../_modeli/jelovnik';
import { ToastrService } from 'ngx-toastr';
import { JelovniciService } from '../_services/jelovnici.service';

@Component({
  selector: 'app-jelovnici',
  templateUrl: './jelovnici.component.html',
  styleUrls: ['./jelovnici.component.css']
})
export class JelovniciComponent implements OnInit{

  jelovnici: Jelovnik[] = [];

  constructor(private jelovniciService: JelovniciService, private toastrService: ToastrService
  ){}

  ngOnInit(): void {
    this.dohvatiJelovnike();
  }

  dohvatiJelovnike(){
    this.jelovnici = [];
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


  obrisi(id: number){
    this.jelovniciService.obrisi(id).subscribe({
      next: success => {
        this.toastrService.success("Jelovnik obrisan");
        this.dohvatiJelovnike();
      },
      error: error => {
        console.error(error);
        this.toastrService.error("Dogodila se greška");
      }
    })
  }

 
}
