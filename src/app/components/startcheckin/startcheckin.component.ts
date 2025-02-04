import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckinService } from '../../services/checkin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startcheckin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './startcheckin.component.html',
  styleUrl: './startcheckin.component.css'
})
export class StartcheckinComponent {
  
  reservationId: number = 0;

  constructor(private service: CheckinService, private router: Router){}

  onClick(){
    this.service.getReservationById(this.reservationId).subscribe(
      data => {
        console.log(data);
        //Inject the data
        this.service.reservationData = data;

        if(data != null){
          this.router.navigate(['/checkin']);
        }else{
          this.router.navigate(['/error-page']);
        }


      },      
    )
  }
}
