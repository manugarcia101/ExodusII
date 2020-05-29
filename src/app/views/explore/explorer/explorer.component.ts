import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { MapService } from 'src/app/shared/services/map.service';
import { tap, startWith, map } from 'rxjs/operators';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['Sevilla', 'Segovia', 'Soria'];
  filteredOptions: Observable<string[]>;

  zoom = 5;
  container = 'mapExplorer';

  stateForm: FormGroup;
  apiS: ApiService;
  valueCity = '';
  valueCountry = '';
  cityData = [];
  countryData = [];
  showDropDown = false;

  states = [];
  currencies = ['USD','EUR'];
  currentCurrencie = 'USD';
  selected = "USD";

  longitude = 0;
  latitude = 0;

  aux = '';
  cityDataSal = 0;
  countryDataSal = 0;
  factorChange = 1;
  disabled = true;
  mySubscriptionExplore: any;

  id = '';

  constructor(private actRoute: ActivatedRoute, private router: Router, private fb: FormBuilder, private api: ApiService, private map: MapService) {
    this.initCityData(this.actRoute.snapshot.params.id);
    this.mySubscriptionExplore = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
    const localStorageFactor = JSON.parse(localStorage.getItem('changedFactor'))
    const localStorageCurrencie = JSON.parse(localStorage.getItem('changedCurrencie'))
    if(localStorageCurrencie !== null && localStorageFactor !== null){
      if(localStorageCurrencie !== 'USD'){
        this.factorChange = localStorageFactor;
      } else {
        this.factorChange = 1;
      }
      this.currentCurrencie = localStorageCurrencie;
      this.selected = localStorageCurrencie;
    }
  }

  initCityData(cityId){
    let x = typeof cityId;
    if(x === 'undefined'){
      this.initForm();
    } else {
      this.initForm()
      this.aux = cityId;
      let element = cityId.split(", ");
      this.valueCity = element[0];
      this.valueCountry = element[1];
      this.explore();
    }
  }

  ngOnInit(): void {
    this.api.getAllCities().subscribe(x => this.states = x);
    this.api.getCurrencies().subscribe(x => this.currencies = [...this.currencies, ...x]);
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  initForm(): FormGroup {
    return this.stateForm = this.fb.group({
      search: [null]
    })
  }

  toggleDropDown(){
    this.showDropDown = !this.showDropDown;
  }

  selectValue(value) {
    this.aux = value.CITY_NAME + ', ' + value.COUNTRY_NAME;
    this.stateForm.patchValue({"search": this.aux});
    this.valueCity = value.CITY_NAME;
    this.valueCountry = value.COUNTRY_NAME;
    this.showDropDown = false;
  }

  getSearchValue() {
    return this.stateForm.value.search;
  }

  initExplore(){
    if(this.aux !== ''){
      this.router.navigate(['/explorer/city/', this.aux]);
      this.initCityData(this.aux)
    }
  }

  explore(){
    if(this.valueCity !== ''){
      this.api.getCityData(this.valueCity, this.valueCountry).pipe(
        tap((x) => this.cityData = x),
        tap(() => 
        this.api.getCountryData(this.valueCountry).pipe(
          tap((x) => this.countryData = x),
          tap(() => this.exploration(this.cityData, this.countryData))
        ).subscribe())
      ).subscribe();
    }
  }

  exploration(cityData, countryData){

    this.disabled = false;

    document.getElementById('explorecity').innerHTML = '';
    document.getElementById('explorecountry').innerHTML = '';
    document.getElementById('cityweather').innerHTML = '';
    document.getElementById('pqli').innerHTML = '';
    const targetDivCity = document.getElementById('explorecity');
    const targetDivCountry = document.getElementById('explorecountry');

    this.latitude = cityData[this.aux].Latitude;
    this.longitude = cityData[this.aux].Longitude;

    const cityDiv = document.createElement('div')
    const countryDiv = document.createElement('div');

    const city = document.createElement('h2');
    const cityCpi = document.createElement('p');
    const cityHealth = document.createElement('p');
    const cityPollution = document.createElement('p');
    const cityPurchasing = document.createElement('p');
    const cityQli = document.createElement('h2');
    const cityRent = document.createElement('p');
    const citySafety = document.createElement('p');
    const cityTraffic = document.createElement('p');

    city.textContent = cityData[this.aux].City_name;
    if(cityData[this.aux].Cpi === 0){
      cityCpi.textContent = 'Cost of life index: No data';
    } else {
      cityCpi.textContent = 'Cost of life index ' + Math.round(cityData[this.aux].Cpi*100)/100;
    }
    cityHealth.textContent = 'Health index ' + cityData[this.aux].Health;
    cityPollution.textContent = 'Pollution free index ' + cityData[this.aux].Pollution;
    if(cityData[this.aux].Purchasing === 0){
      cityPurchasing.textContent = 'Local purchasing power index: No data';
    } else {
      cityPurchasing.textContent = 'Local purchasing power index ' + Math.round(cityData[this.aux].Purchasing*100)/100;
    }
    cityQli.textContent = 'Global Quality life index in ' + cityData[this.aux].City_name + ': ' + cityData[this.aux].Qli;
    cityRent.textContent = 'Rent index ' + cityData[this.aux].Rent;
    citySafety.textContent = 'Safety index ' + (100 - cityData[this.aux].Safety);
    cityTraffic.textContent = 'Traffic index ' + cityData[this.aux].Traffic;

    cityDiv.append(city);

    const citySalary = document.createElement('p');
    this.cityDataSal = Math.round((cityData[this.aux].Salary*this.factorChange)*100)/100;
    if(cityData[this.aux].Salary === 0){
      citySalary.textContent = 'Average city salary: No data ';
      this.cityDataSal = -1;
    } else {
      citySalary.textContent = 'Average city salary ' + Math.round((cityData[this.aux].Salary*this.factorChange)*100)/100 + ' ' + this.currentCurrencie;
      this.cityDataSal = Math.round((cityData[this.aux].Salary*this.factorChange)*100)/100;
    }
    citySalary.id = 'citySalary';
    cityDiv.append(citySalary);


    cityDiv.append(cityCpi);
    cityDiv.append(cityHealth);
    cityDiv.append(cityPollution);
    cityDiv.append(cityPurchasing);
    cityDiv.append(cityRent);
    cityDiv.append(citySafety);
    cityDiv.append(cityTraffic);
    targetDivCity.append(cityDiv);

    const country = document.createElement('h2');
    const countryCpi = document.createElement('p');
    const countryDiversity = document.createElement('p');
    const countryEmployment = document.createElement('p');
    const countryEnvironment = document.createElement('p');
    const countryInfraestructure = document.createElement('p');
    const countryHealth = document.createElement('p');
    const countryPollution = document.createElement('p');
    const countryPurchasing = document.createElement('p');
    const countrySafety = document.createElement('p');
    const countrySalary = document.createElement('p');
    const countryTraffic = document.createElement('p');

    country.textContent = countryData[this.valueCountry].Country;
    countryCpi.textContent = 'Cost of life index ' + Math.round(countryData[this.valueCountry].Cpi*100)/100;
    countryDiversity.textContent = 'Diversity index ' + cityData[this.aux].Diversity;
    if(cityData[this.aux].Employment === 0){
      countryEmployment.textContent = 'Employment index: No data';
    } else {
      countryEmployment.textContent = 'Employment index ' + cityData[this.aux].Employment;
    }
    if(cityData[this.aux].Diversity === 0){
      countryDiversity.textContent = 'Diversity index: No data';
    } else {
      countryDiversity.textContent = 'Diversity index ' + cityData[this.aux].Diversity;
    }
    if(cityData[this.aux].Environment === 0){
      countryEnvironment.textContent = 'Environment index: No data';
    } else {
      countryEnvironment.textContent = 'Environment index ' + cityData[this.aux].Environment;
    }
    countryInfraestructure.textContent = 'Infraestructure index ' + cityData[this.aux].Infraestructure;
    countryHealth.textContent = 'Health index ' + Math.round(countryData[this.valueCountry].Health);
    countryPollution.textContent = 'Pollution free index ' + Math.round(countryData[this.valueCountry].Pollution);
    countryPurchasing.textContent = 'Purchasing power index ' + Math.round(countryData[this.valueCountry].Purchasing_power*100)/100;
    countrySafety.textContent = 'Safety index ' + Math.round(countryData[this.valueCountry].Safety);
    if(countryData[this.valueCountry].Salary === 0){
      countrySalary.textContent = 'Average national salary: No data';
    } else {
      countrySalary.textContent = 'Average national salary ' + Math.round((countryData[this.valueCountry].Salary*this.factorChange)*100)/100 + ' ' + this.currentCurrencie;
    }
    countrySalary.id = 'countrySalary';
    this.countryDataSal = Math.round((countryData[this.valueCountry].Salary*this.factorChange)*100)/100;
    countryTraffic.textContent = 'Traffic index ' + Math.round(countryData[this.valueCountry].Traffic);

    countryDiv.append(country);
    countryDiv.append(countryCpi);
    countryDiv.append(countryDiversity);
    countryDiv.append(countryEmployment);
    countryDiv.append(countryEnvironment);
    countryDiv.append(countryInfraestructure);
    countryDiv.append(countryHealth);
    countryDiv.append(countryPollution);
    countryDiv.append(countryPurchasing);
    countryDiv.append(countrySafety);
    countryDiv.append(countrySalary);
    countryDiv.append(countryTraffic);
    targetDivCountry.append(countryDiv);
    document.getElementById('cityweather').append(cityQli);

    const weather = document.createElement('button');
    const weatherLink = document.createElement('a');
    weather.className = "mat-menu-item btn --half";
    weather.textContent = 'Climate data of: ' + this.cityData[this.aux].City_name;
    weatherLink.href = "https://www.timeanddate.com/weather/" + this.valueCountry.toLocaleLowerCase() +
    '/' + this.valueCity.toLocaleLowerCase() + '/climate';
    weatherLink.target = '_blank';
    weatherLink.append(weather);
    document.getElementById('cityweather').append(weatherLink);

    //Mapa
    this.onMapChange('Qli');
  }

  currencieChange(): void{
    this.api.getCurrencyChange(this.currentCurrencie,this.selected).pipe(
      tap((x) => this.changeCurrencieValues(x, this.selected))
    ).subscribe();
  }

  changeCurrencieValues(factor, newCurrencie){
    this.factorChange = factor;
    let citySal = document.getElementById('citySalary');
    if(this.cityDataSal !== -1){
      citySal.innerHTML = "";
      citySal.innerHTML = 'Average city salary ' + Math.round((this.cityDataSal*factor)*100)/100 + ' ' + newCurrencie;
      this.cityDataSal = Math.round((this.cityDataSal*factor)*100)/100;
    }
    let countrySal = document.getElementById('countrySalary');
    countrySal.innerHTML = "";
    countrySal.innerHTML = 'Average country salary ' + Math.round((this.countryDataSal*factor)*100)/100 + ' ' + newCurrencie;
    this.currentCurrencie = newCurrencie;
    this.countryDataSal = Math.round((this.countryDataSal*factor)*100)/100;
    localStorage.setItem('changedCurrencie', JSON.stringify(this.currentCurrencie))
    if(this.currentCurrencie !== 'USD'){
      localStorage.setItem('changedFactor', JSON.stringify(this.factorChange))
    } else {
      this.factorChange = 1;
      localStorage.setItem('changedFactor', JSON.stringify(this.factorChange))
    }
  }

  onMapChange(index): void {
    document.getElementById(this.container).innerHTML="";
    this.api.getMapCities(index)
    .pipe(
      tap(data => this.map.buildMap(index, data, this.zoom, this.container, this.latitude, this.longitude, this.cityData[this.aux])),
      tap(data => localStorage.setItem('Data', JSON.stringify(data))),
    )
    .subscribe();
  }

  personalIndex(){
    const vec = ['Health','Infraestructure','Environment','Pollution','Safety','Rent','Employment','Diversity','Traffic']
    let count = 0;
    let sum = 0;
    for(let i=0; i<vec.length; i++){
      let element = (<HTMLInputElement>document.getElementById(vec[i])).checked;
      if(element){
        count++;
        if(vec[i] === 'Safety'){
          sum += (100 - this.cityData[this.aux][vec[i]])
        } else {
          sum += this.cityData[this.aux][vec[i]]
        }
      }
    }
    document.getElementById("pqli").innerHTML = "";
    if(count > 0){
      const pqli = Math.round((sum/count)*100)/100;
      document.getElementById("pqli").innerText = "" + this.cityData[this.aux].City_name + ": " + pqli;
    } else {
      document.getElementById("pqli").innerText = "No values checked";
    }
  }

  ngOnDestroy() {
    if (this.mySubscriptionExplore) {
      this.mySubscriptionExplore.unsubscribe();
    }
  }
}
