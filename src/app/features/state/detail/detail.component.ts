import { Component, Input, inject, input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  @Input('id') stateId!: string;

  /* public stateId: string | null = '';
  private route = inject(ActivatedRoute); */

  ngOinit(){
    //this.stateId = this.route.snapshot.paramMap.get('id');
    //this.stateId = this.route.snapshot.params?.['id'];
  }
}
