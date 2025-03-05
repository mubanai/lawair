"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 9885:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.service */ 529);
var _UserService;



class UserService {
  constructor(http, configService) {
    this.http = http;
    this.configService = configService;
  }
  login(username, password) {
    var _this$configService$c;
    const params = {
      username,
      password
    };
    return this.http.post(`${(_this$configService$c = this.configService.config()) === null || _this$configService$c === void 0 ? void 0 : _this$configService$c.apiUrl}/login`, params);
  }
  signup(user) {
    var _this$configService$c2;
    return this.http.post(`${(_this$configService$c2 = this.configService.config()) === null || _this$configService$c2 === void 0 ? void 0 : _this$configService$c2.apiUrl}/register`, user);
  }
  getUsers() {
    return this.http.get(`localhost:5000/api/v1/users/`);
  }
}
_UserService = UserService;
_UserService.ɵfac = function UserService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_service__WEBPACK_IMPORTED_MODULE_0__.AppService));
};
_UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _UserService,
  factory: _UserService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2396:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab1PageRoutingModule: () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 710);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _Tab1PageRoutingModule;




const routes = [{
  path: '',
  component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page
}];
class Tab1PageRoutingModule {}
_Tab1PageRoutingModule = Tab1PageRoutingModule;
_Tab1PageRoutingModule.ɵfac = function Tab1PageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab1PageRoutingModule)();
};
_Tab1PageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _Tab1PageRoutingModule
});
_Tab1PageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Tab1PageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2637:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab1PageModule: () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 710);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 1307);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
var _Tab1PageModule;







class Tab1PageModule {}
_Tab1PageModule = Tab1PageModule;
_Tab1PageModule.ɵfac = function Tab1PageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab1PageModule)();
};
_Tab1PageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _Tab1PageModule
});
_Tab1PageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](Tab1PageModule, {
    declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule]
  });
})();

/***/ }),

/***/ 710:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab1Page: () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var D_llm_RAG_new_ionicapp_ai_chat_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ 9885);
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/app.service */ 529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);

var _Tab1Page;







function Tab1Page_ion_content_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content")(1, "div", 2)(2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Welcome to LawAIr, powerd by MuBan AI Lab.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "AI LawAIr, your Instant legal Advisor. Get started with our application or watch the introduction video.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5)(7, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function Tab1Page_ion_content_4_Template_ion_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.startApplication());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Start Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function Tab1Page_ion_content_4_Template_ion_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.openVideo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Watch Video");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function Tab1Page_ion_content_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content")(1, "div", 2)(2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Welcome to LawAIr, powerd by MuBan AI Lab.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "We want to know your First Name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 8)(7, "ion-item", 9)(8, "ion-input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function Tab1Page_ion_content_5_Template_ion_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.firstname, $event) || (ctx_r1.firstname = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function Tab1Page_ion_content_5_Template_ion_input_ngModelChange_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.validateName(ctx_r1.firstname));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function Tab1Page_ion_content_5_Template_div_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.nextLastName());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("invalid", !ctx_r1.isValidFirstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.firstname);
  }
}
function Tab1Page_ion_content_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content")(1, "div", 2)(2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Welcome to LawAIr, powerd by MuBan AI Lab.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Great! We want to know your Last Name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 8)(7, "ion-item", 9)(8, "ion-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function Tab1Page_ion_content_6_Template_ion_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.lastname, $event) || (ctx_r1.lastname = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function Tab1Page_ion_content_6_Template_ion_input_ngModelChange_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.validateName(ctx_r1.lastname, 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function Tab1Page_ion_content_6_Template_div_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.nextEmail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("invalid", !ctx_r1.isValidLastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.lastname);
  }
}
function Tab1Page_ion_content_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content")(1, "div", 2)(2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Welcome to LawAIr, powerd by MuBan AI Lab.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Almost Done! We need your email id.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 8)(7, "ion-item", 9)(8, "ion-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function Tab1Page_ion_content_7_Template_ion_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.email, $event) || (ctx_r1.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function Tab1Page_ion_content_7_Template_ion_input_ngModelChange_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.validateEmail());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function Tab1Page_ion_content_7_Template_div_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("invalid", !ctx_r1.isValidEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.email);
  }
}
function Tab1Page_ion_content_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content")(1, "div", 2)(2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Welcome to LawAIr, powerd by MuBan AI Lab.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Well Done! you are yet to complete, please provide the password.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 8)(7, "ion-item", 9)(8, "ion-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function Tab1Page_ion_content_8_Template_ion_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.password, $event) || (ctx_r1.password = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function Tab1Page_ion_content_8_Template_ion_input_ngModelChange_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.validatePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function Tab1Page_ion_content_8_Template_div_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("invalid", !ctx_r1.isValidEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.password);
  }
}
class Tab1Page {
  constructor(navCtrl, authService, userService, appService) {
    this.navCtrl = navCtrl;
    this.authService = authService;
    this.userService = userService;
    this.appService = appService;
    this.email = '';
    this.password = '';
    this.firstname = '';
    this.lastname = '';
    this.landingPageInd = true;
    this.isValidEmail = false;
    this.emailCollectionInd = false;
    this.isValidPassword = false;
    this.passwordCollectionInd = false;
    this.isValidFirstName = false;
    this.firstNameCollectionInd = false;
    this.isValidLastName = false;
    this.lastNameCollectionInd = false;
  }
  startApplication() {
    this.landingPageInd = false;
    if (this.authService.isAuthenticated() && this.authService.getUserToken() && this.appService.getUserObj() && this.appService.getSessionId()) {
      this.firstNameCollectionInd = false;
      this.navCtrl.navigateForward('/tabs/tab3');
    } else {
      this.firstNameCollectionInd = true;
    }
    this.lastNameCollectionInd = false;
    this.emailCollectionInd = false;
    this.passwordCollectionInd = false;
  }
  openVideo() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // Replace with your video link
  }
  validateName(name, nameType = 1) {
    const nameRegex = /^[A-Za-z\s]{3,}$/;
    if (nameType === 1) {
      this.isValidFirstName = nameRegex.test(name);
      return;
    }
    this.isValidLastName = nameRegex.test(name);
  }
  validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.isValidEmail = emailPattern.test(this.email);
  }
  validatePassword() {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    this.isValidPassword = passwordRegex.test(this.password);
  }
  nextLastName() {
    this.landingPageInd = false;
    this.firstNameCollectionInd = false;
    this.lastNameCollectionInd = true;
    this.emailCollectionInd = false;
    this.passwordCollectionInd = false;
  }
  nextEmail() {
    this.landingPageInd = false;
    this.firstNameCollectionInd = false;
    this.lastNameCollectionInd = false;
    this.emailCollectionInd = true;
    this.passwordCollectionInd = false;
  }
  next() {
    if (!this.isValidEmail) {
      alert('Please enter a valid email address.');
      return;
    }
    this.landingPageInd = false;
    this.emailCollectionInd = false;
    this.passwordCollectionInd = true;
    console.log('Email entered:', this.email);
  }
  login() {
    if (!this.isValidFirstName || !this.isValidLastName || !this.isValidEmail || !this.isValidPassword) {
      alert('You can not proceed further, you need to refersh the page');
      return;
    }
    const user = {
      firstName: this.firstname,
      lastName: this.lastname,
      username: this.email,
      password: this.password
    };
    this.userService.signup(user).subscribe(res => {
      if (res.message) {
        var _user$username, _user$password;
        this.userService.login((_user$username = user.username) !== null && _user$username !== void 0 ? _user$username : '', (_user$password = user.password) !== null && _user$password !== void 0 ? _user$password : '').subscribe(res => {
          if (res.access_token) {
            this.authService.login(res.access_token); // Store the token
            this.appService.setUserObj(user);
            this.passwordCollectionInd = false;
            this.landingPageInd = true;
            this.navCtrl.navigateForward('/tabs/tab3'); // Change to your desired page
          } else {
            this.resetPage();
          }
        }, err => {
          console.log("caught error {}", err);
        });
      }
    }, err => {
      console.log("caught error {}", err);
    });
  }
  ngOnDestroy() {
    console.log("Getting destroyed the landing page!!!");
  }
  ngOnInit() {
    var _this = this;
    return (0,D_llm_RAG_new_ionicapp_ai_chat_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.resetPage();
      console.log('got it 1');
    })();
  }
  resetPage() {
    var _this2 = this;
    return (0,D_llm_RAG_new_ionicapp_ai_chat_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.firstname = '';
      _this2.lastname = '';
      _this2.email = '';
      _this2.password = '';
      _this2.landingPageInd = true;
      _this2.firstNameCollectionInd = false;
      _this2.lastNameCollectionInd = false;
      _this2.emailCollectionInd = false;
      _this2.passwordCollectionInd = false;
      _this2.isValidFirstName = false;
      _this2.isValidLastName = false;
      _this2.isValidEmail = false;
      _this2.isValidPassword = false;
      _this2.authService.logout();
    })();
  }
}
_Tab1Page = Tab1Page;
_Tab1Page.ɵfac = function Tab1Page_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab1Page)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService));
};
_Tab1Page.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _Tab1Page,
  selectors: [["app-tab1"]],
  standalone: false,
  decls: 13,
  vars: 7,
  consts: [[3, "translucent"], [4, "ngIf"], [1, "content-container"], [1, "title"], [1, "description"], [1, "button-container"], ["fill", "clear", 1, "custom-button", 3, "click"], ["fill", "clear", 1, "custom-button", "secondary", 3, "click"], [1, "login-container"], [1, "custom-input"], ["fill", "solid", "label", "Frist Name", "labelPlacement", "floating", "placeholder", "firstname", "helperText", "Enter First Name", "errorText", "Please enter a valid First Name", "required", "", 3, "ngModelChange", "ngModel"], [1, "arrow-button", 3, "click"], ["fill", "solid", "label", "Last Name", "labelPlacement", "floating", "placeholder", "lastname", "helperText", "Enter Last Name", "errorText", "Please enter a valid Last Name", "required", "", 3, "ngModelChange", "ngModel"], ["type", "email", "fill", "solid", "label", "Email", "labelPlacement", "floating", "placeholder", "email@domain.com", "helperText", "Enter a valid email", "errorText", "Please enter a valid email", "required", "", 3, "ngModelChange", "ngModel"], ["type", "password", "fill", "solid", "label", "Password", "labelPlacement", "floating", "helperText", "Enter a valid password", "errorText", "Please enter a valid password", "required", "", 3, "ngModelChange", "ngModel"]],
  template: function Tab1Page_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " User Briefing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, Tab1Page_ion_content_4_Template, 11, 0, "ion-content", 1)(5, Tab1Page_ion_content_5_Template, 11, 3, "ion-content", 1)(6, Tab1Page_ion_content_6_Template, 11, 3, "ion-content", 1)(7, Tab1Page_ion_content_7_Template, 11, 3, "ion-content", 1)(8, Tab1Page_ion_content_8_Template, 11, 3, "ion-content", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-footer", 0)(10, "ion-toolbar")(11, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Founder Wrijula Mukherjee");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.landingPageInd);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.firstNameCollectionInd);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.lastNameCollectionInd);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.emailCollectionInd);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.passwordCollectionInd);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("translucent", true);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel],
  styles: [".content-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  text-align: center;\n  padding: 20px;\n}\n\n\n\n.title[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: bold;\n  color: black;\n  letter-spacing: 2px;\n  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.5);\n  transition: all 0.3s ease;\n}\n\n\n\n.description[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #333;\n  max-width: 75%;\n  line-height: 1.6;\n  font-weight: 500;\n  padding: 15px;\n  background: rgba(0, 0, 0, 0.05);\n  border-left: 4px solid black;\n  border-right: 4px solid black;\n  box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 60vh;\n  gap: 20px;\n}\n\n\n\n.custom-button[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding: 15px 30px;\n  border-radius: 12px;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  background: transparent;\n  color: black;\n  border: 2px solid black;\n  box-shadow: 4px 4px 0px black;\n  transition: all 0.3s ease;\n}\n\n\n\n.custom-button[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.1);\n  transform: translateY(-3px);\n  box-shadow: 6px 6px 0px black;\n}\n\n\n\n.custom-button[_ngcontent-%COMP%]:active {\n  transform: translateY(2px);\n  box-shadow: 2px 2px 0px black;\n}\n\n\n\n.secondary[_ngcontent-%COMP%] {\n  color: black;\n  border: 2px solid black;\n}\n\n.login-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100%;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n\n\n\n.custom-input[_ngcontent-%COMP%] {\n  width: 250px;\n  background: transparent;\n  border-bottom: 2px solid black; \n\n  box-shadow: none;\n  transition: all 0.3s ease;\n}\n\n\n\n.custom-input[_ngcontent-%COMP%]:hover {\n  border-bottom-color: rgba(0, 0, 0, 0.6);\n}\n\n\n\n.custom-input[_ngcontent-%COMP%]:focus-within {\n  border-bottom-color: black;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n\n\n.arrow-button[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: bold;\n  color: black;\n  cursor: pointer;\n  background: transparent;\n  padding: 10px 15px;\n  border-radius: 10px;\n  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3); \n\n  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n}\n\n\n\n.arrow-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px); \n\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4); \n\n}\n\n\n\n.arrow-button[_ngcontent-%COMP%]:active {\n  transform: translateY(2px); \n\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); \n\n}\n\n\n\n@media (max-width: 500px) {\n  .login-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n  }\n}\n\n\n.error-message[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 14px;\n  margin-top: -10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUEsdUNBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQSxnQ0FBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnREFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUEseUNBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUEsaUJBQUE7QUFDQTtFQUNFLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUVBLGlCQUFBO0FBQ0E7RUFDRSwwQkFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUEsMkJBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUEsdUJBQUE7QUFDQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBLEVBQUEsb0NBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUEsMkJBQUE7QUFDQTtFQUNFLHVDQUFBO0FBQ0Y7O0FBRUEsc0JBQUE7QUFDQTtFQUNFLDBCQUFBO0VBQ0Esd0NBQUE7QUFDRjs7QUFFQSxvQkFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQSxFQUFBLGNBQUE7RUFDQSxtRUFBQTtBQUNGOztBQUVBLGlCQUFBO0FBQ0E7RUFDRSwyQkFBQSxFQUFBLGdCQUFBO0VBQ0EsMkNBQUEsRUFBQSxvQkFBQTtBQUNGOztBQUVBLGlCQUFBO0FBQ0E7RUFDRSwwQkFBQSxFQUFBLHNCQUFBO0VBQ0EsMENBQUEsRUFBQSxrQkFBQTtBQUNGOztBQUVBLGtEQUFBO0FBQ0E7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsU0FBQTtFQUNGO0FBQ0Y7QUFFQSxrQkFBQTtBQUNBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFGIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4vKiBNb2Rlcm4gVGl0bGUgd2l0aCAzRCBTaGFkb3cgRWZmZWN0ICovXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLyogRWxlZ2FudCBEZXNjcmlwdGlvbiBTdHlsaW5nICovXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIG1heC13aWR0aDogNzUlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCBibGFjaztcclxuICBib3gtc2hhZG93OiBpbnNldCAzcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmJ1dHRvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDYwdmg7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4vKiBUcmFuc3BhcmVudCBCdXR0b24gd2l0aCBCbGFjayBCb3JkZXIgKi9cclxuLmN1c3RvbS1idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIGJveC1zaGFkb3c6IDRweCA0cHggMHB4IGJsYWNrO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi8qIEhvdmVyIEVmZmVjdCAqL1xyXG4uY3VzdG9tLWJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICBib3gtc2hhZG93OiA2cHggNnB4IDBweCBibGFjaztcclxufVxyXG5cclxuLyogQ2xpY2sgRWZmZWN0ICovXHJcbi5jdXN0b20tYnV0dG9uOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAwcHggYmxhY2s7XHJcbn1cclxuXHJcbi8qIFNlY29uZGFyeSBCdXR0b24gU3R5bGUgKi9cclxuLnNlY29uZGFyeSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBnYXA6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwOyAvLyBSZXNwb25zaXZlIGZvciBzbWFsbCBzY3JlZW5zXHJcbn1cclxuXHJcbi8qIEN1c3RvbSBJbnB1dCBGaWVsZCAqL1xyXG4uY3VzdG9tLWlucHV0IHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrOyAvKiBPbmx5IGJvdHRvbSBib3JkZXIgbGlrZSBDaGF0R1BUICovXHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4vKiBIb3ZlciBFZmZlY3QgZm9yIElucHV0ICovXHJcbi5jdXN0b20taW5wdXQ6aG92ZXIge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxufVxyXG5cclxuLyogSW5wdXQgRmllbGQgRm9jdXMgKi9cclxuLmN1c3RvbS1pbnB1dDpmb2N1cy13aXRoaW4ge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IGJsYWNrO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi8qIDNEIEFycm93IEJ1dHRvbiAqL1xyXG4uYXJyb3ctYnV0dG9uIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7IC8qIDNEIHNoYWRvdyAqL1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi8qIEhvdmVyIEVmZmVjdCAqL1xyXG4uYXJyb3ctYnV0dG9uOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7IC8qIExpZnQgZWZmZWN0ICovXHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KTsgLyogU3Ryb25nZXIgc2hhZG93ICovXHJcbn1cclxuXHJcbi8qIENsaWNrIEVmZmVjdCAqL1xyXG4uYXJyb3ctYnV0dG9uOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7IC8qIFByZXNzIGRvd24gZWZmZWN0ICovXHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvKiBTb2Z0ZXIgc2hhZG93ICovXHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmU6IFN0YWNrIGVsZW1lbnRzIG9uIHNtYWxsZXIgc2NyZWVucyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAubG9naW4tY29udGFpbmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBFcnJvciBNZXNzYWdlICovXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map