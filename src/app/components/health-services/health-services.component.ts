import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IStagingService } from 'src/app/interfaces/IStagingService';
import { HealthserviceService } from 'src/app/Services/healthservice.service';

@Component({
  selector: 'app-health-services',
  templateUrl: './health-services.component.html',
  styleUrls: ['./health-services.component.css']
})
export class HealthServicesComponent implements OnInit {

  constructor(private service: HealthserviceService) { }
  services: IStagingService[];
  selectedService: IStagingService;
  @Output() onServiceSelect = new EventEmitter<IStagingService>();
  ngOnInit() {
    this.service.getServices().subscribe(m => {
      this.services = m.data;
    });
  }
  onRowSelect(event) {
    this.onServiceSelect.emit(this.selectedService);
  }

  onRowUnselect(event) {
    this.onServiceSelect.emit(null);
  }
}
