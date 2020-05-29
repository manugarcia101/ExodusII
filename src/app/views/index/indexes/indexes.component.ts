import { NgModule, Component, OnInit, Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { tap } from 'rxjs/operators';
import { MapService } from '../../../shared/services/map.service';
import { ChartService } from '../../../shared/services/chart.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-indexes',
  templateUrl: './indexes.component.html',
  styleUrls: ['./indexes.component.scss']
})
export class IndexesComponent implements OnInit {

  zoom = 1.5;
  index;

  public citiesData: any;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [];
  public barChartColors = [{ 
    backgroundColor: 'rgba(51, 51, 255, 0.6)',
    borderColor: 'rgba(51, 51, 255, 0.3)'
  }]

  aux = '';
  mySubscription: any;
  token:any;

  constructor(private router: Router, private actRoute: ActivatedRoute, private apiService: ApiService, 
    private mapService: MapService, private chartService: ChartService) {
    this.barChartData = this.chartService.dataChart('Qli');
    this.barChartLabels = this.chartService.labelsChart('Qli');
    this.aux = this.actRoute.snapshot.params.id;
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
  }

  ngOnInit(): void {
    this.onMapChange();
  }

  onMapChange(): void {
    if(typeof this.aux === 'undefined'){
      this.index = 'Qli'
    } else {
      this.index = this.aux
    }
    document.getElementById('map').innerHTML="";
    this.apiService.getMapCities(this.index)
    .pipe(
      tap(data => this.mapService.buildMap(this.index, data, this.zoom)),
      tap(() => this.barChartData = this.chartService.dataChart(this.index)),
      tap(() => this.barChartLabels = this.chartService.labelsChart(this.index)),
    )
    .subscribe();
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
}
