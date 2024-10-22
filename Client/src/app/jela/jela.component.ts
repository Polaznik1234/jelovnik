import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Jelo } from '../_modeli/jelo';
import { JelaService } from '../_services/jela.service';

@Component({
  selector: 'app-jela',
  templateUrl: './jela.component.html',
  styleUrls: ['./jela.component.css']
})
export class JelaComponent implements OnInit{

  jela: Jelo[] = [];

  constructor(private jelaService: JelaService, private toastr: ToastrService){}

  ngOnInit(): void {
    console.log("init");
    this.dohvatiJela();
  }

  dohvatiJela(){
    this.jelaService.dohvatiSve().subscribe({
      next: response => {
       
        let jelaData = response["$values"];
      
        console.log("Data");
        console.log(jelaData);
      
        jelaData.forEach((item: any) => {
          const jelo: Jelo = {
            id: item.id,
            naziv: item.naziv,
            opis: item.opis,
            jelovnik: item.jelovnik
          }

          this.jela.push(jelo);
          console.log("jela", this.jela);
        });
      },
      error: error => {
        console.error(error);
      }
    });
  }

  obrisi(jelo: any){
    this.jelaService.obrisi(jelo.id).subscribe({
      next: response => {
        console.log(response);
        const index = this.jela.indexOf(jelo);
        this.jela.splice(index, 1);
        this.toastr.success("Jelo obrisano");
      },
      error: error => {
        this.toastr.error("Dogodila se greška");
      }
    })
  }

}
