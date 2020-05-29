import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { MapService } from 'src/app/shared/services/map.service';
import { tap } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comparator',
  templateUrl: './comparator.component.html',
  styleUrls: ['./comparator.component.scss']
})
export class ComparatorComponent implements OnInit {

  stateForm: FormGroup;
  stateFormTwo: FormGroup;
  valueCityOne = '';
  valueCityTwo = '';
  valueCountryOne = '';
  valueCountryTwo = '';

  cityDataOne = [];
  cityDataTwo = [];

  showDropDown = false;
  showDropDownTwo = false;
  states = [];

  longitudeOne = 0;
  longitudeTwo = 0;
  latitudeOne = 0;
  latitudeTwo = 0;

  aux = '';
  aux2 = '';

  citySal1 = 0;
  citySal2 = 0;
  factor = 1;
  selected = 'USD';
  currentCurrencie = 'USD';
  currencies = ['USD','EUR'];
  disabled = true;

  constructor(private actRoute: ActivatedRoute, private fb: FormBuilder, private api: ApiService, private map: MapService) {
    this.initForm()
    this.initFormTwo()
    const localStorageFactor = JSON.parse(localStorage.getItem('changedFactor'))
    const localStorageCurrencie = JSON.parse(localStorage.getItem('changedCurrencie'))
    if(localStorageCurrencie !== null && localStorageFactor !== null){
      if(localStorageCurrencie !== 'USD'){
        this.factor = localStorageFactor;
      } else {
        this.factor = 1;
      }
      this.currentCurrencie = localStorageCurrencie;
      this.selected = localStorageCurrencie;
    }
  }

  initForm(): FormGroup {
    return this.stateForm = this.fb.group({
      search: [null]
    })
  }

  initFormTwo(): FormGroup {
    return this.stateFormTwo = this.fb.group({
      searchTwo: [null]
    })
  }

  ngOnInit() {
    this.api.getAllCities().subscribe(x => this.states = x);
    this.api.getCurrencies().subscribe(x => this.currencies = [...this.currencies, ...x]);
  }

  toggleDropDown(){
    this.showDropDown = !this.showDropDown;
  }

  toggleDropDownTwo(){
    this.showDropDownTwo = !this.showDropDownTwo;
  }

  selectValueOne(value) {
    this.aux = value.CITY_NAME + ', ' + value.COUNTRY_NAME;
    this.stateForm.patchValue({"search": this.aux});
    this.valueCityOne = value.CITY_NAME;
    this.valueCountryOne = value.COUNTRY_NAME;
    this.showDropDown = false;
  }

  selectValueTwo(value) {
    this.aux2 = value.CITY_NAME + ', ' + value.COUNTRY_NAME;
    this.stateFormTwo.patchValue({"searchTwo": this.aux2});
    this.valueCityTwo = value.CITY_NAME;
    this.valueCountryTwo = value.COUNTRY_NAME;
    this.showDropDownTwo = false;
  }

  getSearchValue() {
    return this.stateForm.value.search;
  }

  getSearchValueTwo() {
    return this.stateFormTwo.value.searchTwo;
  }

  compare(){
    if(this.valueCityOne !== '' && this.valueCityTwo !== ''){
      this.api.getCityData(this.valueCityOne, this.valueCountryOne).pipe(
        tap((x) => this.cityDataOne = x),
        tap(() =>
        this.api.getCityData(this.valueCityTwo, this.valueCountryTwo).pipe(
          tap((x) => this.cityDataTwo = x),
          tap(() => this.comparison(this.cityDataOne, this.cityDataTwo))
        ).subscribe())
      ).subscribe();
    }
  }

  comparison(cityOne, cityTwo){

    this.disabled = false;

    this.latitudeOne = cityOne.Latitude;
    this.longitudeOne = cityOne.Longitude;

    this.latitudeTwo = cityTwo.Latitude;
    this.longitudeTwo = cityTwo.Longitude;

    document.getElementById('comparison').innerHTML = '';
    const targetDiv = document.getElementById('comparison');
    const cities = document.createElement('h2');
    const rent = document.createElement('p');
    const diversity = document.createElement('p');
    const employment = document.createElement('p');
    const environment = document.createElement('p');
    const health = document.createElement('p');
    const infraestructure = document.createElement('p');
    const pollution = document.createElement('p');
    const qli = document.createElement('p');
    const safety = document.createElement('p');
    const traffic = document.createElement('p');

    cities.textContent = cityOne[this.aux].City_name + ' Vs ' + cityTwo[this.aux2].City_name;
    rent.textContent = 'Rent index ' + cityOne[this.aux].Rent + ' Vs ' + cityTwo[this.aux2].Rent;
    diversity.textContent = 'Diversity index ' + cityOne[this.aux].Diversity + ' Vs ' + cityTwo[this.aux2].Diversity;
    employment.textContent = 'Employment index ' + cityOne[this.aux].Employment + ' Vs ' + cityTwo[this.aux2].Employment;
    environment.textContent = 'Environment index ' + cityOne[this.aux].Environment + ' Vs ' + cityTwo[this.aux2].Environment;
    health.textContent = 'Health index ' + cityOne[this.aux].Health + ' Vs ' + cityTwo[this.aux2].Health;
    infraestructure.textContent = 'Infraestructure index ' + cityOne[this.aux].Infraestructure + ' Vs ' + cityTwo[this.aux2].Infraestructure;
    pollution.textContent = 'Pollution free index ' + cityOne[this.aux].Pollution + ' Vs ' + cityTwo[this.aux2].Pollution;
    qli.textContent = 'Quality of life index ' + cityOne[this.aux].Qli + ' Vs ' + cityTwo[this.aux2].Qli;
    safety.textContent = 'Safety index ' + cityOne[this.aux].Safety + ' Vs ' + cityTwo[this.aux2].Safety;
    traffic.textContent = 'Traffic index ' + cityOne[this.aux].Traffic + ' Vs ' + cityTwo[this.aux2].Traffic;

    targetDiv.append(cities); 

    if(cityOne[this.aux].Salary !== 0 && cityTwo[this.aux2].Salary !== 0){ 
      const salary = document.createElement('p');
      salary.id = 'salary';
      salary.textContent = 'Salary ' + Math.round((cityOne[this.aux].Salary*this.factor)*100)/100 + ' ' + this.currentCurrencie 
      + ' Vs ' + Math.round((cityTwo[this.aux2].Salary*this.factor)*100)/100 + ' ' + this.currentCurrencie;
      this.citySal1 = Math.round((cityOne[this.aux].Salary*this.factor)*100)/100;
      this.citySal2 = Math.round((cityTwo[this.aux2].Salary*this.factor)*100)/100;
      targetDiv.append(salary);
    }

    targetDiv.append(rent);
    targetDiv.append(health);
    targetDiv.append(infraestructure);
    targetDiv.append(environment);
    targetDiv.append(safety);
    targetDiv.append(pollution);
    targetDiv.append(diversity);
    targetDiv.append(employment);
    targetDiv.append(traffic);
    targetDiv.append(qli);

    document.getElementById('comparisonAdvanced').innerHTML = '';
    const targetDivAdvanced = document.getElementById('comparisonAdvanced');
    const title = document.createElement('h2');
    title.textContent = "Related data"
    targetDivAdvanced.append(title)

    if(cityOne[this.aux].Cpi !== 0 && cityTwo[this.aux2].Cpi !== 0){
      let percentaje = Math.round((cityTwo[this.aux2].Cpi/cityOne[this.aux].Cpi)*100);
      const cpi = document.createElement('p');
      if(percentaje-100 >= 0){
        percentaje = percentaje - 100;
        cpi.textContent = 'Life in ' + cityTwo[this.aux2].City_name + ' is ' + percentaje + '% more expensive than in ' + cityOne[this.aux].City_name;
      } else {
        percentaje = 100 - percentaje;
        cpi.textContent = 'Life in ' + cityTwo[this.aux2].City_name + ' is ' + percentaje + '% cheaper than in ' + cityOne[this.aux].City_name;
      }
      targetDivAdvanced.append(cpi);
    }

    if(cityOne[this.aux].Salary !== 0 && cityTwo[this.aux2].Salary !== 0){
      let percentaje = Math.round((cityTwo[this.aux2].Salary/cityOne[this.aux].Salary)*100);
      const salaries = document.createElement('p');
      if(percentaje-100 >= 0){
        percentaje = percentaje - 100;
        salaries.textContent = 'The average salary in ' + cityTwo[this.aux2].City_name + ' is ' + percentaje + '% bigger than in ' + cityOne[this.aux].City_name;
      } else {
        percentaje = 100 - percentaje;
        salaries.textContent = 'The average salary in ' + cityTwo[this.aux2].City_name + ' is ' + percentaje + '% lower than in ' + cityOne[this.aux].City_name;
      }
      targetDivAdvanced.append(salaries);
    }

    if(cityOne[this.aux].Purchasing !== 0 && cityTwo[this.aux2].Purchasing !== 0){
      let percentaje = Math.round((cityTwo[this.aux2].Purchasing/cityOne[this.aux].Purchasing)*100);
      const purchasing = document.createElement('p');
      if(percentaje-100 >= 0){
        percentaje = percentaje - 100;
        purchasing.textContent = 'The local purchasing power in ' + cityTwo[this.aux2].City_name + ' is ' + percentaje + '% bigger than in ' + cityOne[this.aux].City_name;
      } else {
        percentaje = 100 - percentaje;
        purchasing.textContent = 'The local purchasing power in ' + cityTwo[this.aux2].City_name + ' is ' + percentaje + '% lower than in ' + cityOne[this.aux].City_name;
      }
      targetDivAdvanced.append(purchasing);
    }

    const searchJobOne = document.createElement('button');
    const searchJobLinkOne = document.createElement('a');
    searchJobOne.className = "mat-menu-item btn --half";
    searchJobOne.textContent = 'Search Job in ' + cityOne[this.aux].City_name;
    searchJobLinkOne.href = 'https://www.linkedin.com/jobs/search?keywords=&location=' + cityOne[this.aux].City_name;
    searchJobLinkOne.target = '_blank';
    searchJobOne.classList.add('btn')
    searchJobLinkOne.append(searchJobOne);
    targetDivAdvanced.append(searchJobLinkOne);

    const searchJobTwo = document.createElement('button');
    const searchJobLinkTwo = document.createElement('a');
    searchJobTwo.className = "mat-menu-item btn --half";
    searchJobTwo.textContent = 'Search Job in ' + cityTwo[this.aux2].City_name;
    searchJobLinkTwo.href = 'https://www.linkedin.com/jobs/search?keywords=&location=' + cityTwo[this.aux2].City_name;
    searchJobLinkTwo.target = '_blank';
    searchJobLinkTwo.append(searchJobTwo);
    targetDivAdvanced.append(searchJobLinkTwo);

    const weatherComparison = document.createElement('button');
    const weatherComparisonLink = document.createElement('a');
    weatherComparison.className = "mat-menu-item btn --half";
    weatherComparison.textContent = 'Weather comparison between: ' + cityOne[this.aux].City_name + ' and ' + cityTwo[this.aux2].City_name;
    weatherComparisonLink.href = 'https://weather-averages.co.uk/compare-climate/' + this.valueCityOne.toLocaleLowerCase()
    + '%2C-' + this.valueCountryOne.toLocaleLowerCase() + "/" + this.valueCityTwo.toLocaleLowerCase() + '%2C-' 
    + this.valueCountryTwo.toLocaleLowerCase();
    weatherComparisonLink.target = '_blank';
    weatherComparisonLink.append(weatherComparison);
    targetDivAdvanced.append(weatherComparisonLink);
  }

  currencieChange(): void{
    this.api.getCurrencyChange(this.currentCurrencie, this.selected).pipe(
      tap((x) => this.changeCurrencieValues(x, this.selected))
    ).subscribe();
  }

  changeCurrencieValues(factorChange, newCurrencie){
    this.factor = factorChange;
    this.currentCurrencie = newCurrencie;
    let citySal = document.getElementById('salary');
    if(citySal){
      citySal.innerHTML = "";
      citySal.innerHTML = 'Salary ' + Math.round((this.citySal1*this.factor)*100)/100 + ' ' + this.currentCurrencie + ' Vs ' + Math.round((this.citySal2*this.factor)*100)/100 + ' ' + this.currentCurrencie;
      this.citySal1 = Math.round((this.citySal1*this.factor)*100)/100;
      this.citySal2 = Math.round((this.citySal2*this.factor)*100)/100;
    }
    localStorage.setItem('changedCurrencie', JSON.stringify(this.currentCurrencie))
    if(this.currentCurrencie !== 'USD'){
      localStorage.setItem('changedFactor', JSON.stringify(this.factor))
    } else {
      this.factor = 1;
      localStorage.setItem('changedFactor', JSON.stringify(this.factor))
    }
  }
}
