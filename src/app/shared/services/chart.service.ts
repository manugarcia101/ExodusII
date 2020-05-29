import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ChartService {
    
    barChartLabelsQli = ['Bern, Switzerland','Aalborg, Danemark','Trondheim, Norway','Arhus, Danemark', 'Heidelberg, Germany','Zurich, Switzerland','Basel, Switzerland','Aachen, Germany','Vienna, Austria','Dundee, United Kingdom'];
    barChartDataQli = [{data: ['85.00','85.00','84.89','84.22','83.56','83.33','83.22', '82.89', '82.89', '82.89'], label: 'Quality of life Index'}];

    barChartLabelsHealth = ['Palma de Mallorca, Spain','Liverpool, United Kingdom','Dundee, United Kingdom','Lille, France', 'NewCastle upon Tyne, United Kingdom','Montpellier, France','Grand rapids, United States','Ostrava, Czech Republic','Mérida, Mexico','Newcastle, Australia'];
    barChartDataHealth = [{data: ['91','88','88','87','86','86','86','86','86','85.1'], label: 'Health Index'}];

    barChartLabelsInfraestructure = ['Bern, Switzerland','Aalborg, Danemark','Trondheim, Norway','Arhus, Danemark', 'Heidelberg, Germany','Zurich, Switzerland','Basel, Switzerland','Aachen, Germany','Vienna, Austria','Dundee, United Kingdom'];
    barChartDataInfraestructure = [{data: ['100','100','100','100','100','100','100', '100', '100', '100'], label: 'Infraestructure Index'}];

    barChartLabelsEnvironment = ['Katmandu, Nepal','Nairobi, Kenya','Addis Ababa, Ethiopia','San Jose, Costa rica', 'Tirana, Albania','Osijek, Croatia','Zadar, Croatia','Dubrovnik, Croatia','Rijeka, Croatia','Zagreb, Croatia'];
    barChartDataEnvironment = [{data: ['72','64','64','64','60.1','60.1','60.1', '60.1', '60.1', '60.1'], label: 'Environment Index'}];

    barChartLabelsPollution = ['Bern, Switzerland','Aalborg, Danemark','Trondheim, Norway', 'Heidelberg, Germany','Zurich, Switzerland','Vienna, Austria','Dundee, United Kingdom','Stavanger, Norway','Uppsala, Sweden','Canberra, Australia'];
    barChartDataPollution = [{data: ['100','100','100','100','100','100','100', '100', '100', '100'], label: 'Pollution Index'}];

    barChartLabelsSafety = ['Jakarta, Indonesia','Alain, United Arab Emirates','Abu Dhabi, United Arab Emirates','Doha, Qatar', 'Espoo, Finland','Quebec city, Canada','Dubrovnik, Croatia','Osijek, Croatia','Olomouc, Czech Republic','Dubai, United Arab Emirates'];
    barChartDataSafety = [{data: ['92','91','89.','89','87','86','85', '84.1', '84.1', '84.1'], label: 'Safety Index'}];

    barChartLabelsRent = ['Aalborg, Danemark', 'Bern, Switzerland','Arhus, Danemark', 'Aachen, Germany', 'Uppsala, Sweden','Dresden, Germany','Hanover, Germany','Eindhoven, Netherlands','Karlsruhe, Germany','Gothenburg, Sweden'];
    barChartDataRent = [{data: ['88','84.1','84.1','84.1','84.1','84.1','84.1', '84.1', '84.1', '84.1'], label: 'Rent Index'}];

    barChartLabelsEmployment= ['Bern, Switzerland','Trondheim, Norway', 'Heidelberg, Germany','Zurich, Switzerland','Basel, Switzerland','Aachen, Germany','Stavanger, Norway','Dresden, Germany', 'Reykjavik, Iceland', 'Bergen, Norway'];
    barChartDataEmployment = [{data: ['100','100','100','100','100','100','100', '100', '100', '100'], label: 'Employment Index'}];

    barChartLabelsDiversity = ['Bern, Switzerland','Aalborg, Danemark','Trondheim, Norway','Arhus, Danemark', 'Heidelberg, Germany','Zurich, Switzerland','Basel, Switzerland','Aachen, Germany','Vienna, Austria','Dundee, United Kingdom'];
    barChartDataDiversity = [{data: ['100','100','100','100','100','100','100', '100', '100', '100'], label: 'Diversity Index'}];

    barChartLabelsTraffic = ['York, United Kingdom','Las Palmas de Gran Canaria, Spain','Dundee, United Kingdom','Uppsala, Sweden', 'Hanover, Germany','Tartu, Estonia','Osijek, Croatia','Debrecen, Hungary','Szeget, Hungary','Brasov, Romania'];
    barChartDataTraffic = [{data: ['100','100','90.1','90.1','90.1','90.1','90.1', '90.1', '90.1', '90.1'], label: 'Traffic Index'}];


    constructor(){}

    dataChart(index){
        switch(index){
            case 'Qli':
                return this.barChartDataQli;
            case 'Health':
                return this.barChartDataHealth;
            case 'Infraestructure':
                return this.barChartDataInfraestructure;
            case 'Environment':
                return this.barChartDataInfraestructure;
            case 'Pollution':
                return this.barChartDataPollution;
            case 'Safety':
                return this.barChartDataSafety;
            case 'Rent':
                return this.barChartDataRent;
            case 'Employment':
                return this.barChartDataEmployment;
            case 'Diversity':
                return this.barChartDataDiversity;
            case 'Traffic':
                return this.barChartDataTraffic;
        }
    }

    labelsChart(index){
        switch(index){
            case 'Qli':
                return this.barChartLabelsQli;
            case 'Health':
                return this.barChartLabelsHealth;
            case 'Infraestructure':
                return this.barChartLabelsInfraestructure;
            case 'Environment':
                return this.barChartLabelsEnvironment;
            case 'Pollution':
                return this.barChartLabelsPollution;
            case 'Safety':
                return this.barChartLabelsSafety;
            case 'Rent':
                return this.barChartLabelsRent;
            case 'Employment':
                return this.barChartLabelsEmployment;
            case 'Diversity':
                return this.barChartLabelsDiversity;
            case 'Traffic':
                return this.barChartLabelsTraffic;
        }
    }
}