(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-index-index-module"],{

/***/ "./src/app/shared/services/chart.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/chart.service.ts ***!
  \**************************************************/
/*! exports provided: ChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartService", function() { return ChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ChartService {
    constructor() {
        this.barChartLabelsQli = ['Bern, Switzerland', 'Aalborg, Danemark', 'Trondheim, Norway', 'Arhus, Danemark', 'Heidelberg, Germany', 'Zurich, Switzerland', 'Basel, Switzerland', 'Aachen, Germany', 'Vienna, Austria', 'Dundee, United Kingdom'];
        this.barChartDataQli = [{ data: ['85.00', '85.00', '84.89', '84.22', '83.56', '83.33', '83.22', '82.89', '82.89', '82.89'], label: 'Quality of life Index' }];
        this.barChartLabelsHealth = ['Palma de Mallorca, Spain', 'Liverpool, United Kingdom', 'Dundee, United Kingdom', 'Lille, France', 'NewCastle upon Tyne, United Kingdom', 'Montpellier, France', 'Grand rapids, United States', 'Ostrava, Czech Republic', 'Mérida, Mexico', 'Newcastle, Australia'];
        this.barChartDataHealth = [{ data: ['91', '88', '88', '87', '86', '86', '86', '86', '86', '85.1'], label: 'Health Index' }];
        this.barChartLabelsInfraestructure = ['Bern, Switzerland', 'Aalborg, Danemark', 'Trondheim, Norway', 'Arhus, Danemark', 'Heidelberg, Germany', 'Zurich, Switzerland', 'Basel, Switzerland', 'Aachen, Germany', 'Vienna, Austria', 'Dundee, United Kingdom'];
        this.barChartDataInfraestructure = [{ data: ['100', '100', '100', '100', '100', '100', '100', '100', '100', '100'], label: 'Infraestructure Index' }];
        this.barChartLabelsEnvironment = ['Katmandu, Nepal', 'Nairobi, Kenya', 'Addis Ababa, Ethiopia', 'San Jose, Costa rica', 'Tirana, Albania', 'Osijek, Croatia', 'Zadar, Croatia', 'Dubrovnik, Croatia', 'Rijeka, Croatia', 'Zagreb, Croatia'];
        this.barChartDataEnvironment = [{ data: ['72', '64', '64', '64', '60.1', '60.1', '60.1', '60.1', '60.1', '60.1'], label: 'Environment Index' }];
        this.barChartLabelsPollution = ['Bern, Switzerland', 'Aalborg, Danemark', 'Trondheim, Norway', 'Heidelberg, Germany', 'Zurich, Switzerland', 'Vienna, Austria', 'Dundee, United Kingdom', 'Stavanger, Norway', 'Uppsala, Sweden', 'Canberra, Australia'];
        this.barChartDataPollution = [{ data: ['100', '100', '100', '100', '100', '100', '100', '100', '100', '100'], label: 'Pollution Index' }];
        this.barChartLabelsSafety = ['Jakarta, Indonesia', 'Alain, United Arab Emirates', 'Abu Dhabi, United Arab Emirates', 'Doha, Qatar', 'Espoo, Finland', 'Quebec city, Canada', 'Dubrovnik, Croatia', 'Osijek, Croatia', 'Olomouc, Czech Republic', 'Dubai, United Arab Emirates'];
        this.barChartDataSafety = [{ data: ['92', '91', '89.', '89', '87', '86', '85', '84.1', '84.1', '84.1'], label: 'Safety Index' }];
        this.barChartLabelsRent = ['Aalborg, Danemark', 'Bern, Switzerland', 'Arhus, Danemark', 'Aachen, Germany', 'Uppsala, Sweden', 'Dresden, Germany', 'Hanover, Germany', 'Eindhoven, Netherlands', 'Karlsruhe, Germany', 'Gothenburg, Sweden'];
        this.barChartDataRent = [{ data: ['88', '84.1', '84.1', '84.1', '84.1', '84.1', '84.1', '84.1', '84.1', '84.1'], label: 'Rent Index' }];
        this.barChartLabelsEmployment = ['Bern, Switzerland', 'Trondheim, Norway', 'Heidelberg, Germany', 'Zurich, Switzerland', 'Basel, Switzerland', 'Aachen, Germany', 'Stavanger, Norway', 'Dresden, Germany', 'Reykjavik, Iceland', 'Bergen, Norway'];
        this.barChartDataEmployment = [{ data: ['100', '100', '100', '100', '100', '100', '100', '100', '100', '100'], label: 'Employment Index' }];
        this.barChartLabelsDiversity = ['Bern, Switzerland', 'Aalborg, Danemark', 'Trondheim, Norway', 'Arhus, Danemark', 'Heidelberg, Germany', 'Zurich, Switzerland', 'Basel, Switzerland', 'Aachen, Germany', 'Vienna, Austria', 'Dundee, United Kingdom'];
        this.barChartDataDiversity = [{ data: ['100', '100', '100', '100', '100', '100', '100', '100', '100', '100'], label: 'Diversity Index' }];
        this.barChartLabelsTraffic = ['York, United Kingdom', 'Las Palmas de Gran Canaria, Spain', 'Dundee, United Kingdom', 'Uppsala, Sweden', 'Hanover, Germany', 'Tartu, Estonia', 'Osijek, Croatia', 'Debrecen, Hungary', 'Szeget, Hungary', 'Brasov, Romania'];
        this.barChartDataTraffic = [{ data: ['100', '100', '90.1', '90.1', '90.1', '90.1', '90.1', '90.1', '90.1', '90.1'], label: 'Traffic Index' }];
    }
    dataChart(index) {
        switch (index) {
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
    labelsChart(index) {
        switch (index) {
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
ChartService.ɵfac = function ChartService_Factory(t) { return new (t || ChartService)(); };
ChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChartService, factory: ChartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/index/index-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/index/index-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: IndexRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexRoutingModule", function() { return IndexRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _indexes_indexes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexes/indexes.component */ "./src/app/views/index/indexes/indexes.component.ts");





const routes = [
    { path: 'index/:id', component: _indexes_indexes_component__WEBPACK_IMPORTED_MODULE_2__["IndexesComponent"] }
];
class IndexRoutingModule {
}
IndexRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IndexRoutingModule });
IndexRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IndexRoutingModule_Factory(t) { return new (t || IndexRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IndexRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/index/index.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/index/index.module.ts ***!
  \*********************************************/
/*! exports provided: IndexModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexModule", function() { return IndexModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-routing.module */ "./src/app/views/index/index-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _indexes_indexes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./indexes/indexes.component */ "./src/app/views/index/indexes/indexes.component.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
















class IndexModule {
}
IndexModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IndexModule });
IndexModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IndexModule_Factory(t) { return new (t || IndexModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _index_routing_module__WEBPACK_IMPORTED_MODULE_2__["IndexRoutingModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IndexModule, { declarations: [_indexes_indexes_component__WEBPACK_IMPORTED_MODULE_4__["IndexesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _index_routing_module__WEBPACK_IMPORTED_MODULE_2__["IndexRoutingModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _indexes_indexes_component__WEBPACK_IMPORTED_MODULE_4__["IndexesComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _index_routing_module__WEBPACK_IMPORTED_MODULE_2__["IndexRoutingModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/index/indexes/indexes.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/index/indexes/indexes.component.ts ***!
  \**********************************************************/
/*! exports provided: IndexesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexesComponent", function() { return IndexesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var _shared_services_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/map.service */ "./src/app/shared/services/map.service.ts");
/* harmony import */ var _shared_services_chart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/chart.service */ "./src/app/shared/services/chart.service.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");










class IndexesComponent {
    constructor(router, actRoute, apiService, mapService, chartService) {
        this.router = router;
        this.actRoute = actRoute;
        this.apiService = apiService;
        this.mapService = mapService;
        this.chartService = chartService;
        this.zoom = 1.5;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = [];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [];
        this.barChartColors = [{
                backgroundColor: 'rgba(51, 51, 255, 0.6)',
                borderColor: 'rgba(51, 51, 255, 0.3)'
            }];
        this.aux = '';
        this.barChartData = this.chartService.dataChart('Qli');
        this.barChartLabels = this.chartService.labelsChart('Qli');
        this.aux = this.actRoute.snapshot.params.id;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.mySubscription = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.router.navigated = false;
            }
        });
    }
    ngOnInit() {
        this.onMapChange();
    }
    onMapChange() {
        if (typeof this.aux === 'undefined') {
            this.index = 'Qli';
        }
        else {
            this.index = this.aux;
        }
        document.getElementById('map').innerHTML = "";
        this.apiService.getMapCities(this.index)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(data => this.mapService.buildMap(this.index, data, this.zoom)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => this.barChartData = this.chartService.dataChart(this.index)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => this.barChartLabels = this.chartService.labelsChart(this.index)))
            .subscribe();
    }
    ngOnDestroy() {
        if (this.mySubscription) {
            this.mySubscription.unsubscribe();
        }
    }
}
IndexesComponent.ɵfac = function IndexesComponent_Factory(t) { return new (t || IndexesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_chart_service__WEBPACK_IMPORTED_MODULE_5__["ChartService"])); };
IndexesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexesComponent, selectors: [["app-indexes"]], decls: 20, vars: 8, consts: [[1, "--mt"], [1, "--centered"], [1, "wrapper"], ["id", "map", 1, "map-container", "wrapper__map"], [1, "wrapper__chart", "chart"], ["baseChart", "", 3, "datasets", "labels", "options", "legend", "chartType", "colors"], ["routerLinkActive", "active", "routerLink", "/comparator/compare", 1, "no_decoration"], ["mat-menu-item", "", 1, "btn"], ["routerLinkActive", "active", "routerLink", "/explorer/city/", 1, "no_decoration"]], template: function IndexesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Exodus is a large database system that provides general information about the living parameter indexes around hundreds of cities on earth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "We account with information from more than 5.000 cities around the world!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "canvas", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Compare two cities");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Explore a city");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Current index displayed: ", ctx.index, " index");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("legend", ctx.barChartLegend)("chartType", ctx.barChartType)("colors", ctx.barChartColors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ranking of the ten cities with best ", ctx.index, " index");
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_6__["BaseChartDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"]], styles: [".map-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 66vw;\n}\n@media screen and (min-width: 1000px) {\n  .map-container[_ngcontent-%COMP%] {\n    height: 33vw;\n    min-width: 50%;\n  }\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  display: grid;\n  margin: 0 auto;\n  grid-template-areas: \"map\" \"chart\";\n}\n@media screen and (min-width: 1000px) {\n  .wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas: \"map chart\";\n  }\n}\n.wrapper__map[_ngcontent-%COMP%] {\n  grid-area: map;\n}\n.wrapper__chart[_ngcontent-%COMP%] {\n  grid-area: chart;\n}\n.chart[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  padding-top: 5%;\n}\n.btn[_ngcontent-%COMP%] {\n  width: 50%;\n  display: inline-block;\n  text-align: center;\n  color: white;\n  background: #f76f00;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  background: rgba(247, 111, 0, 0.9);\n}\n.--mt[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\n.--centered[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3%;\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hbnUvRXNjcml0b3Jpby9VT0MvQXNpZ25hdHVyYXMvVEZNL1BlYzQgKEVudHJlZ2EgZmluYWwpL1BBQ19GSU5BTF9HYXJjw61hX0zDs3Blel9NYW51ZWwvUEFDX0ZJTkFMX3Byal9HYXJjw61hX0zDs3Blel9NYW51ZWwvRXhvZHVzLWZyb250ZW5kL3NyYy9hcHAvdmlld3MvaW5kZXgvaW5kZXhlcy9pbmRleGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9pbmRleC9pbmRleGVzL2luZGV4ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0RGO0FER0U7RUFKRjtJQUtJLFlBQUE7SUFDQSxjQUFBO0VDQUY7QUFDRjtBREdBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0FDQUY7QURDRTtFQU5GO0lBT0ksV0FBQTtJQUNBLGVBQUE7SUFDQSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxnQ0FBQTtFQ0VGO0FBQ0Y7QURDQTtFQUNFLGNBQUE7QUNFRjtBRENBO0VBQ0UsZ0JBQUE7QUNFRjtBRENBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDRUY7QURHQTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDQUY7QURFRTtFQUNFLGtDQUFBO0FDQUo7QURNQTtFQUNFLGlCQUFBO0FDSEY7QURNQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2luZGV4L2luZGV4ZXMvaW5kZXhlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbnRhaW5lcnNcblxuLm1hcC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2NnZ3O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAgIGhlaWdodDogMzN2dztcbiAgICBtaW4td2lkdGg6IDUwJTtcbiAgfVxufVxuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnbWFwJyAnY2hhcnQnO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnbWFwIGNoYXJ0JztcbiAgfVxufVxuXG4ud3JhcHBlcl9fbWFwIHtcbiAgZ3JpZC1hcmVhOiBtYXA7XG59XG5cbi53cmFwcGVyX19jaGFydCB7XG4gIGdyaWQtYXJlYTogY2hhcnQ7XG59XG5cbi5jaGFydCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA1JTtcbn1cblxuLy9DbGFzc2VzXG5cbi5idG4ge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjQ3LCAxMTEsIDApO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAxMTEsIDAsIDAuOSk7XG4gIH1cbn1cblxuLy9Nb2RpZmllcnNcblxuLi0tbXQge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLi0tY2VudGVyZWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4iLCIubWFwLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY2dnc7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLm1hcC1jb250YWluZXIge1xuICAgIGhlaWdodDogMzN2dztcbiAgICBtaW4td2lkdGg6IDUwJTtcbiAgfVxufVxuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm1hcFwiIFwiY2hhcnRcIjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAud3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibWFwIGNoYXJ0XCI7XG4gIH1cbn1cblxuLndyYXBwZXJfX21hcCB7XG4gIGdyaWQtYXJlYTogbWFwO1xufVxuXG4ud3JhcHBlcl9fY2hhcnQge1xuICBncmlkLWFyZWE6IGNoYXJ0O1xufVxuXG4uY2hhcnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogNSU7XG59XG5cbi5idG4ge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjZjc2ZjAwO1xufVxuLmJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAxMTEsIDAsIDAuOSk7XG59XG5cbi4tLW10IHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi4tLWNlbnRlcmVkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
IndexesComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IndexesComponent, factory: IndexesComponent.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-indexes',
                templateUrl: './indexes.component.html',
                styleUrls: ['./indexes.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _shared_services_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"] }, { type: _shared_services_chart_service__WEBPACK_IMPORTED_MODULE_5__["ChartService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=views-index-index-module-es2015.js.map