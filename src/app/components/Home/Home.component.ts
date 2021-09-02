import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { IStagingService } from 'src/app/interfaces/IStagingService';

@Component({
  selector: 'app-home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss']
})
export class HomeComponent implements OnInit {
  currentHealthService: IStagingService;
  constructor() { }

  ngOnInit() {
  }
  healthServiceSelected(healthService: IStagingService) {
    this.currentHealthService = healthService;
  }
}
