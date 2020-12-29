(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detailed-detailed-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detailed/detailed.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detailed/detailed.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ cCountry.Country }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-item>\n      <ion-text>\n        Зарегистрировано: {{ cCountry.Confirmed + ' ' }} <ion-text *ngIf=\"newConfirmed > 0\" color=\"primary\">{{ '+' + newConfirmed }}</ion-text>\n      </ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-text>\n        Выздоровело: {{ cCountry.Recovered + ' ' }} <ion-text *ngIf=\"newConfirmed > 0\" color=\"success\">{{ '+' + newRecovered }}</ion-text>\n      </ion-text>\n    </ion-item>\n    <ion-item>\n      <ion-text>\n        Смертей: {{ cCountry.Deaths + ' ' }} <ion-text *ngIf=\"newConfirmed > 0\" color=\"danger\">{{ '+' + newDeaths }}</ion-text>\n      </ion-text>\n    </ion-item>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/detailed/detailed-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/detailed/detailed-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: DetailedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailedPageRoutingModule", function() { return DetailedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detailed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detailed.page */ "./src/app/detailed/detailed.page.ts");




const routes = [
    {
        path: '',
        component: _detailed_page__WEBPACK_IMPORTED_MODULE_3__["DetailedPage"]
    }
];
let DetailedPageRoutingModule = class DetailedPageRoutingModule {
};
DetailedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailedPageRoutingModule);



/***/ }),

/***/ "./src/app/detailed/detailed.module.ts":
/*!*********************************************!*\
  !*** ./src/app/detailed/detailed.module.ts ***!
  \*********************************************/
/*! exports provided: DetailedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailedPageModule", function() { return DetailedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detailed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detailed-routing.module */ "./src/app/detailed/detailed-routing.module.ts");
/* harmony import */ var _detailed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detailed.page */ "./src/app/detailed/detailed.page.ts");







let DetailedPageModule = class DetailedPageModule {
};
DetailedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detailed_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailedPageRoutingModule"]
        ],
        declarations: [_detailed_page__WEBPACK_IMPORTED_MODULE_6__["DetailedPage"]]
    })
], DetailedPageModule);



/***/ }),

/***/ "./src/app/detailed/detailed.page.scss":
/*!*********************************************!*\
  !*** ./src/app/detailed/detailed.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbGVkL2RldGFpbGVkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/detailed/detailed.page.ts":
/*!*******************************************!*\
  !*** ./src/app/detailed/detailed.page.ts ***!
  \*******************************************/
/*! exports provided: DetailedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailedPage", function() { return DetailedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");




let DetailedPage = class DetailedPage {
    constructor(route, httpService) {
        this.route = route;
        this.httpService = httpService;
        this.cCountry = {};
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.httpService.getCountryInfo(params.id)
                .subscribe((country) => {
                this.cCountry = country[country.length - 1];
                this.newConfirmed = +this.cCountry.Confirmed - +country[country.length - 2].Confirmed;
                this.newDeaths = +this.cCountry.Deaths - +country[country.length - 2].Deaths;
                this.newRecovered = +this.cCountry.Recovered - +country[country.length - 2].Recovered;
            });
        });
    }
};
DetailedPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"] }
];
DetailedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detailed',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detailed.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detailed/detailed.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detailed.page.scss */ "./src/app/detailed/detailed.page.scss")).default]
    })
], DetailedPage);



/***/ })

}]);
//# sourceMappingURL=detailed-detailed-module-es2015.js.map