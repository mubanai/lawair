"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 4694:
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   User: () => (/* binding */ User)
/* harmony export */ });
class User {
  constructor(_id, username, password, firstName, lastName, createdAt, updatedAt) {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

/***/ }),

/***/ 6044:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab3PageRoutingModule: () => (/* binding */ Tab3PageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 38);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var _Tab3PageRoutingModule;




const routes = [{
  path: '',
  component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page
}];
class Tab3PageRoutingModule {}
_Tab3PageRoutingModule = Tab3PageRoutingModule;
_Tab3PageRoutingModule.ɵfac = function Tab3PageRoutingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab3PageRoutingModule)();
};
_Tab3PageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _Tab3PageRoutingModule
});
_Tab3PageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Tab3PageRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5837:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab3PageModule: () => (/* binding */ Tab3PageModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 38);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 1307);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 6044);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
var _Tab3PageModule;







class Tab3PageModule {}
_Tab3PageModule = Tab3PageModule;
_Tab3PageModule.ɵfac = function Tab3PageModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab3PageModule)();
};
_Tab3PageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _Tab3PageModule
});
_Tab3PageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](Tab3PageModule, {
    declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page],
    imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule]
  });
})();

/***/ }),

/***/ 38:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tab3Page: () => (/* binding */ Tab3Page)
/* harmony export */ });
/* harmony import */ var D_llm_RAG_new_ionicapp_ai_chat_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user */ 4694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1507);
/* harmony import */ var _services_conversation_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/conversation-messages.service */ 2652);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/app.service */ 529);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);

var _Tab3Page;








const _c0 = ["content"];
const _c1 = ["chatInput"];
function Tab3Page_div_7_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " pending ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function Tab3Page_div_7_div_8_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " sent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function Tab3Page_div_7_div_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, Tab3Page_div_7_div_8_ng_template_2_div_0_Template, 3, 0, "div", 20);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const seen_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
    const message_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", message_r3.status === "sent")("ngIfElse", seen_r2);
  }
}
function Tab3Page_div_7_div_8_ng_template_4_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " seen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function Tab3Page_div_7_div_8_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, Tab3Page_div_7_div_8_ng_template_4_div_0_Template, 3, 0, "div", 13);
  }
  if (rf & 2) {
    const message_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", message_r3.status === "seen");
  }
}
function Tab3Page_div_7_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, Tab3Page_div_7_div_8_div_1_Template, 3, 0, "div", 20)(2, Tab3Page_div_7_div_8_ng_template_2_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"])(4, Tab3Page_div_7_div_8_ng_template_4_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sent_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    const message_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", message_r3.status === "pending")("ngIfElse", sent_r4);
  }
}
function Tab3Page_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 17)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, Tab3Page_div_7_div_8_Template, 6, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("right", message_r3.userIsSender === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", message_r3.senderFullName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](message_r3.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", message_r3.userIsSender);
  }
}
function Tab3Page_ion_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function Tab3Page_ion_button_13_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.sendMessage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function Tab3Page_ion_spinner_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-spinner");
  }
}
class Tab3Page {
  constructor(navCtrl, conversationMessagesService, activatedRoute, loadingController, appService) {
    this.navCtrl = navCtrl;
    this.conversationMessagesService = conversationMessagesService;
    this.activatedRoute = activatedRoute;
    this.loadingController = loadingController;
    this.appService = appService;
    this.messages = [];
    this.conversationId = '';
    this.receiverFullName = '';
    this.isCalled = false;
    this.listenToSocketUpdateListMessagesEvent();
  }
  ngOnInit() {
    var _this = this;
    return (0,D_llm_RAG_new_ionicapp_ai_chat_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingController.create({
        spinner: 'bubbles',
        cssClass: 'custom-loader-class',
        showBackdrop: false
      });
      yield loading.present();
      yield _this.loadingController.dismiss();
      // this.socket.on('connect', () => {
      _this.getConversationMessages();
      // this.socket.emit('conversationRoomNumber', this.conversationId);
      // });
      _this.conversationMessagesService.generateSessionId().subscribe(res => {
        if (res.session_id) {
          _this.appService.setSessionId(res.session_id);
        }
      }, err => {
        console.log("caught error {}", err);
        _this.isCalled = false;
      }
      // err => this.purchaseMessageProvider.storeRequest(message),
      );
    })();
  }
  onFocus() {
    if (this.messageInput && this.messageInput.nativeElement) {
      this.messageInput.nativeElement.focus();
    }
  }
  getConversationMessages(resObj) {
    const dummyUserSender = this.appService.getUserObj();
    const dummyUserReceiver = new _models_user__WEBPACK_IMPORTED_MODULE_1__.User();
    dummyUserReceiver._id = "2";
    dummyUserReceiver.username = "driod@gmail.com";
    dummyUserReceiver.firstName = "LawAir";
    dummyUserReceiver.lastName = "";
    dummyUserReceiver.password = "driod@gmail.com";
    const user = dummyUserSender;
    user._id = "1";
    const queryParams = this.activatedRoute.snapshot.queryParams;
    const receiver = dummyUserReceiver; //JSON.parse(queryParams['receiver']);
    this.receiverFullName = receiver.firstName + ' ' + receiver.lastName;
    console.log('----->');
    this.receiverId = receiver._id;
    if (user) {
      var _receiver$_id, _user$_id;
      const participants = [(_receiver$_id = receiver._id) !== null && _receiver$_id !== void 0 ? _receiver$_id : '', (_user$_id = user._id) !== null && _user$_id !== void 0 ? _user$_id : ''];
      // this.conversationMessagesService
      //   .getConversationMessages(participants)
      //   .subscribe((res) => {
      if (resObj) {
        if (typeof user === 'string') {
          this.conversationId = user;
        } else {
          const message = {
            message: resObj.response,
            sender: receiver,
            session_id: '710ec67d-4ee1-4179-a97a-02022210fde4',
            receivers: [{
              receiverId: this.receiverId,
              isRead: true
            }],
            receiversIds: [this.receiverId],
            userIsSender: false,
            createdAt: new Date()
          };
          this.pushNewMessage(message);
          this.messages = this.messages.map(message => {
            return this.filterMessageAndUpdateStatus(message, user);
          });
          this.scrollToBottom();
        }
      }
      // });
    }
  }
  filterMessageAndUpdateStatus(message, user) {
    var _ref, _message$sender$first, _message$sender, _message$sender2, _message$sender3, _message$receivers;
    message.senderFullName = (_ref = (_message$sender$first = (_message$sender = message.sender) === null || _message$sender === void 0 ? void 0 : _message$sender.firstName) !== null && _message$sender$first !== void 0 ? _message$sender$first : '' + ' ' + ((_message$sender2 = message.sender) === null || _message$sender2 === void 0 ? void 0 : _message$sender2.lastName)) !== null && _ref !== void 0 ? _ref : '';
    if (((_message$sender3 = message.sender) === null || _message$sender3 === void 0 ? void 0 : _message$sender3._id) === (user === null || user === void 0 ? void 0 : user.id)) {
      message.userIsSender = true;
    }
    (_message$receivers = message.receivers) === null || _message$receivers === void 0 || _message$receivers.forEach(receiver => {
      if (message.userIsSender) {
        if (receiver.isRead) {
          message.status = 'seen';
        } else {
          message.status = 'sent';
        }
      }
    });
    return message;
  }
  sendMessage() {
    var _this$editorMsg, _this$appService$getS;
    if (!((_this$editorMsg = this.editorMsg) !== null && _this$editorMsg !== void 0 && _this$editorMsg.trim())) {
      return;
    }
    this.isCalled = true;
    const message = {
      message: this.editorMsg,
      session_id: (_this$appService$getS = this.appService.getSessionId()) !== null && _this$appService$getS !== void 0 ? _this$appService$getS : '',
      db_folder: 'health_supplements',
      receiversIds: [this.receiverId],
      userIsSender: true,
      createdAt: new Date()
    };
    this.editorMsg = '';
    this.onFocus();
    this.pushNewMessage(message);
    this.conversationMessagesService.sendMessage(message).subscribe(res => {
      this.isCalled = false;
      this.messages.forEach(element => {
        if (element.message === message.message && element.userIsSender) {
          element.status = 'sent';
        }
      });
      this.getConversationMessages(res);
    }, err => {
      console.log("caught error {}", err);
      this.isCalled = false;
    }
    // err => this.purchaseMessageProvider.storeRequest(message),
    );
  }
  listenToSocketUpdateListMessagesEvent() {
    // this.socket.on('new-message', () => {
    this.getConversationMessages();
    this.scrollToBottom();
    // });
  }
  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 200);
  }
  pushNewMessage(message) {
    message.status = 'pending';
    this.messages.push(message);
    this.scrollToBottom();
  }
  ngOnDestroy() {
    console.log("Getting destroyed the message component!!!");
  }
}
_Tab3Page = Tab3Page;
_Tab3Page.ɵfac = function Tab3Page_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Tab3Page)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_conversation_messages_service__WEBPACK_IMPORTED_MODULE_2__.ConversationMessagesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService));
};
_Tab3Page.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _Tab3Page,
  selectors: [["app-tab3"]],
  viewQuery: function Tab3Page_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.messageInput = _t.first);
    }
  },
  standalone: false,
  decls: 15,
  vars: 5,
  consts: [["content", ""], ["chatInput", ""], ["sent", ""], ["seen", ""], [3, "translucent"], [1, "three-d-title"], ["id", "content", 1, "ion-padding"], [1, "message-wrap"], ["class", "message", 3, "right", 4, "ngFor", "ngForOf"], ["id", "bottom"], ["lines", "none"], ["clearInput", "true", "placeholder", "Type something here", 3, "ngModelChange", "focusin", "ngModel"], ["size", "large", "slot", "end", "fill", "outline", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "message"], [1, "msg-detail"], [1, "msg-info"], [1, "msg-content"], ["class", "msg-status", 4, "ngIf"], [1, "msg-status"], [4, "ngIf", "ngIfElse"], ["name", "checkmark-circle"], ["name", "checkmark-circle-outline"], ["name", "checkmark"], ["size", "large", "slot", "end", "fill", "outline", 3, "click"], ["name", "send-outline", "slot", "icon-only"]],
  template: function Tab3Page_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 4)(1, "ion-toolbar")(2, "ion-title", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " LawAIr, Your Legal Advisor ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-content", 6, 0)(6, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, Tab3Page_div_7_Template, 9, 5, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-footer")(10, "ion-item", 10)(11, "ion-textarea", 11, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function Tab3Page_Template_ion_textarea_ngModelChange_11_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.editorMsg, $event) || (ctx.editorMsg = $event);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("focusin", function Tab3Page_Template_ion_textarea_focusin_11_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.onFocus());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, Tab3Page_ion_button_13_Template, 2, 0, "ion-button", 12)(14, Tab3Page_ion_spinner_14_Template, 1, 0, "ion-spinner", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.messages);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.editorMsg);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isCalled === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isCalled === true);
    }
  },
  dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel],
  styles: [".three-d-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #333;\n  line-height: 1.6;\n  font-weight: 500;\n  padding: 15px;\n  background: rgba(0, 0, 0, 0.05);\n  border-left: 4px solid black;\n  border-right: 4px solid black;\n  box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n\nion-content[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}\n\nion-footer[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%] {\n  position: relative;\n  --padding-end: 0;\n  --padding-start: 0;\n  --background-activated: rgba(0, 0, 0, 0);\n  --background-focused: rgba(0, 0, 0, 0);\n  --background-hover: rgba(0, 0, 0, 0);\n}\nion-footer[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-custom);\n}\n\n.header[_ngcontent-%COMP%] {\n  height: 45%;\n  background: var(--ion-color-primary);\n}\n\nion-card[_ngcontent-%COMP%] {\n  bottom: 50px;\n  width: 80%;\n  height: 40%;\n  --background: white;\n  left: 7.5%;\n}\n\n.sign-up[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n  position: relative;\n}\n.sign-up[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  color: #d42d0f;\n}\n\n.message-wrap[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  min-height: 100%;\n  position: relative;\n  padding: 7px 0;\n}\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n}\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-size: 0.8em;\n  color: #888;\n}\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  position: relative;\n  float: left;\n  margin-top: 2px;\n  border-radius: 10px;\n  padding: 10px;\n  border: 2px solid #ddd;\n  width: auto;\n  max-width: 70%;\n  background-color: #fff;\n}\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-status[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-size: 0.8em;\n  font-weight: bold;\n  color: #888;\n  padding-left: 1%;\n}\n.message-wrap[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .msg-status[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  position: relative;\n  top: 3px;\n  font-size: 15px;\n}\n.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%] {\n  min-height: 100%;\n  position: relative;\n  padding: 7px 0;\n}\n.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-block;\n}\n.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: right;\n  text-transform: capitalize;\n  font-size: 0.8em;\n  color: #888;\n}\n.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-detail[_ngcontent-%COMP%]   .msg-content[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  color: black;\n  background-color: var(--ion-color-custom);\n  float: right;\n  position: relative;\n  margin-top: 2px;\n  border-radius: 10px;\n  padding: 10px;\n  width: auto;\n  max-width: 70%;\n}\n.message-wrap[_ngcontent-%COMP%]   .message.right[_ngcontent-%COMP%]   .msg-status[_ngcontent-%COMP%] {\n  text-align: right;\n  text-transform: capitalize;\n  font-size: 0.8em;\n  font-weight: bold;\n  color: #888;\n  padding-right: 1%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnREFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBR0U7RUFDSSx5QkFBQTtBQUFOOztBQU1FO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQ0FBQTtFQUNBLG9DQUFBO0FBSE47QUFNRTtFQUNJLDhCQUFBO0FBSk47O0FBU0E7RUFDRSxXQUFBO0VBQ0Esb0NBQUE7QUFORjs7QUFTQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQU5GOztBQVNBO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQU5GO0FBT0U7RUFDSSxjQUFBO0FBTE47O0FBVUE7RUFDRSxlQUFBO0FBUEY7QUFTRTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBUE47QUFTTTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBQVBWO0FBU1U7RUFDSSxTQUFBO0FBUGQ7QUFXYztFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBVGxCO0FBYVU7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFYZDtBQWdCTTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQWRWO0FBZ0JVO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQWRkO0FBbUJFO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFqQk47QUFtQk07RUFDSSxXQUFBO0VBQ0EscUJBQUE7QUFqQlY7QUFvQmM7RUFDSSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBbEJsQjtBQXVCVTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBckJkO0FBeUJNO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUF2QlYiLCJzb3VyY2VzQ29udGVudCI6WyIudGhyZWUtZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCBibGFjaztcclxuICBib3gtc2hhZG93OiBpbnNldCAzcHggM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC5zY3JvbGwtY29udGVudCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuXHJcbiAgLnNlbmQtYnV0dG9uIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1mb2N1c2VkOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgICAtLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoMCwgMCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItY3VzdG9tKTtcclxuICB9XHJcblxyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBoZWlnaHQ6IDQ1JTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICBib3R0b206IDUwcHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDQwJTtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGxlZnQ6IDcuNSU7XHJcbn1cclxuXHJcbi5zaWduLXVwIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC5saW5rIHtcclxuICAgICAgY29sb3I6ICNkNDJkMGY7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLm1lc3NhZ2Utd3JhcCB7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG5cclxuICAubWVzc2FnZSB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZzogN3B4IDA7XHJcblxyXG4gICAgICAubXNnLWRldGFpbCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLm1zZy1pbmZvIHtcclxuICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICM4ODg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tc2ctY29udGVudCB7XHJcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tc2ctc3RhdHVzIHtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBjb2xvcjogIzg4ODtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMSU7XHJcblxyXG4gICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC5tZXNzYWdlLnJpZ2h0IHtcclxuICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nOiA3cHggMDtcclxuXHJcbiAgICAgIC5tc2ctZGV0YWlsIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICAgICAgIC5tc2ctaW5mbyB7XHJcbiAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOGVtO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzg4ODtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5tc2ctY29udGVudCB7XHJcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItY3VzdG9tKTtcclxuICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tc2ctc3RhdHVzIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGNvbG9yOiAjODg4O1xyXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMSU7XHJcbiAgICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map