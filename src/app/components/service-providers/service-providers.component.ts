import { OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { IProviderAttribute } from 'src/app/interfaces/IProviderAttribute';
import { IStagingProvider } from 'src/app/interfaces/IStagingProvider';
import { IStagingService } from 'src/app/interfaces/IStagingService';
import { ServiceproviderService } from 'src/app/Services/serviceprovider.service';

@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.css']
})
export class ServiceProvidersComponent implements OnInit, OnChanges {

  constructor(private service: ServiceproviderService) { }
  @Input() healthService: IStagingService;
  areProvidersLoading = false;
  providers: IStagingProvider<IProviderAttribute>[];
  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.healthService.currentValue) {
      this.areProvidersLoading = true;
      const serviceName = changes.healthService.currentValue.attributes.name;
      this.service.getProviders().subscribe(m => {
        if (m) {
          this.providers = m.data
          .filter(p => m.included?.some(i => i.attributes.service === serviceName && 
              i.relationships?.provider?.data?.id === p.id));
        }
        else {
          this.providers = [];
        }
        this.areProvidersLoading = false;
      });
    }

  }


}
