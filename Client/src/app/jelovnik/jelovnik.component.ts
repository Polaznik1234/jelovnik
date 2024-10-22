import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JelovniciService } from '../_services/jelovnici.service';

@Component({
  selector: 'app-jelovnik',
  templateUrl: './jelovnik.component.html',
  styleUrls: ['./jelovnik.component.css']
})
export class JelovnikComponent implements OnInit {

  jelovnikID: string = '';
  jelovnik: any = {
    id: '',
    naziv: '',
    razdoblje: '',
    opis: ''
  }

  constructor(private route: ActivatedRoute, private jelovniciService: JelovniciService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jelovnikID = params['id'];
      this.dohvatiJelovnikPoId();
    });
  }

  dohvatiJelovnikPoId(){
    this.jelovniciService.dohvatiPoId(this.jelovnikID).subscribe({
      next: response => {
        console.log(response);
        console.log(response.ime);
        


        this.jelovnik = {
          id: response.id,
          naziv: response.naziv,
          razdoblje: response.razdoblje,
          opis: response.opis
        }
        console.log(this.jelovnik);
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška");
      }
    });
  }

  uredi(){
    this.jelovnik.id = this.jelovnikID;

    this.jelovniciService.azuriraj(this.jelovnik).subscribe({
      next: response => {
          console.log(response);
          this.toastr.success("Spremljeni podaci jelovnika.");
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška");
      }
    });
  }


}
