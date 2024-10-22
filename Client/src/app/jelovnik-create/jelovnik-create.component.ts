import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JelovniciService } from '../_services/jelovnici.service';

@Component({
  selector: 'app-jelovnik-create',
  templateUrl: './jelovnik-create.component.html',
  styleUrls: ['./jelovnik-create.component.css']
})
export class JelovnikCreateComponent {

  jelovnik = {
    id: '',
    naziv: '',
    razdoblje: '',
    opis: ''
  }

  constructor(private jelovniciService: JelovniciService, private toastr: ToastrService){}

  ngOnInit(): void {
    
  }



  spremi(){

    this.jelovniciService.spremiNovog(this.jelovnik).subscribe({
      next: response => {
          console.log(response);
          this.toastr.success("Jelovnik spremljen");
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška");
      }
    });
  }

}
