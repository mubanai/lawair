"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4711],{4711:(F,g,s)=>{s.r(g),s.d(g,{Tab1PageModule:()=>N});var r=s(4742),u=s(177),d=s(4341),f=s(1307),m=s(7791),h=s(467),e=s(4438),_=s(3656),b=s(4796),x=s(9885),v=s(529);function P(o,l){if(1&o){const a=e.RV6();e.j41(0,"ion-content")(1,"div",2)(2,"h1",3),e.EFF(3,"Welcome to LawAIr, powerd by MuBan AI Lab."),e.k0s(),e.j41(4,"p",4),e.EFF(5,"AI LawAIr, your Instant legal Advisor. Get started with our application or watch the introduction video."),e.k0s(),e.j41(6,"div",5)(7,"ion-button",6),e.bIt("click",function(){e.eBV(a);const n=e.XpG();return e.Njj(n.startApplication())}),e.EFF(8,"Start Application"),e.k0s(),e.j41(9,"ion-button",7),e.bIt("click",function(){e.eBV(a);const n=e.XpG();return e.Njj(n.openVideo())}),e.EFF(10,"Watch Video"),e.k0s()()()()}}function w(o,l){if(1&o){const a=e.RV6();e.j41(0,"ion-content")(1,"div",2)(2,"h1",3),e.EFF(3,"Welcome to LawAIr, powerd by MuBan AI Lab."),e.k0s(),e.j41(4,"p",4),e.EFF(5,"We want to know your First Name."),e.k0s(),e.j41(6,"div",8)(7,"ion-item",9)(8,"ion-input",10),e.mxI("ngModelChange",function(n){e.eBV(a);const i=e.XpG();return e.DH7(i.firstname,n)||(i.firstname=n),e.Njj(n)}),e.bIt("ngModelChange",function(){e.eBV(a);const n=e.XpG();return e.Njj(n.validateName(n.firstname))}),e.k0s()(),e.j41(9,"div",11),e.bIt("click",function(){e.eBV(a);const n=e.XpG();return e.Njj(n.nextLastName())}),e.EFF(10,"\u2192"),e.k0s()()()()}if(2&o){const a=e.XpG();e.R7$(7),e.AVh("invalid",!a.isValidFirstName),e.R7$(),e.R50("ngModel",a.firstname)}}function C(o,l){if(1&o){const a=e.RV6();e.j41(0,"ion-content")(1,"div",2)(2,"h1",3),e.EFF(3,"Welcome to LawAIr, powerd by MuBan AI Lab."),e.k0s(),e.j41(4,"p",4),e.EFF(5,"Great! We want to know your Last Name."),e.k0s(),e.j41(6,"div",8)(7,"ion-item",9)(8,"ion-input",12),e.mxI("ngModelChange",function(n){e.eBV(a);const i=e.XpG();return e.DH7(i.lastname,n)||(i.lastname=n),e.Njj(n)}),e.bIt("ngModelChange",function(){e.eBV(a);const n=e.XpG();return e.Njj(n.validateName(n.lastname,2))}),e.k0s()(),e.j41(9,"div",11),e.bIt("click",function(){e.eBV(a);const n=e.XpG();return e.Njj(n.nextEmail())}),e.EFF(10,"\u2192"),e.k0s()()()()}if(2&o){const a=e.XpG();e.R7$(7),e.AVh("invalid",!a.isValidLastName),e.R7$(),e.R50("ngModel",a.lastname)}}function I(o,l){if(1&o){const a=e.RV6();e.j41(0,"ion-content")(1,"div",2)(2,"h1",3),e.EFF(3,"Welcome to LawAIr, powerd by MuBan AI Lab."),e.k0s(),e.j41(4,"p",4),e.EFF(5,"Almost Done! We need your email id."),e.k0s(),e.j41(6,"div",8)(7,"ion-item",9)(8,"ion-input",13),e.mxI("ngModelChange",function(n){e.eBV(a);const i=e.XpG();return e.DH7(i.email,n)||(i.email=n),e.Njj(n)}),e.bIt("ngModelChange",function(){e.eBV(a);const n=e.XpG();return e.Njj(n.validateEmail())}),e.k0s()(),e.j41(9,"div",11),e.bIt("click",function(){e.eBV(a);const n=e.XpG();return e.Njj(n.next())}),e.EFF(10,"\u2192"),e.k0s()()()()}if(2&o){const a=e.XpG();e.R7$(7),e.AVh("invalid",!a.isValidEmail),e.R7$(),e.R50("ngModel",a.email)}}function T(o,l){if(1&o){const a=e.RV6();e.j41(0,"ion-content")(1,"div",2)(2,"h1",3),e.EFF(3,"Welcome to LawAIr, powerd by MuBan AI Lab."),e.k0s(),e.j41(4,"p",4),e.EFF(5,"Well Done! you are yet to complete, please provide the password."),e.k0s(),e.j41(6,"div",8)(7,"ion-item",9)(8,"ion-input",14),e.mxI("ngModelChange",function(n){e.eBV(a);const i=e.XpG();return e.DH7(i.password,n)||(i.password=n),e.Njj(n)}),e.bIt("ngModelChange",function(){e.eBV(a);const n=e.XpG();return e.Njj(n.validatePassword())}),e.k0s()(),e.j41(9,"div",11),e.bIt("click",function(){e.eBV(a);const n=e.XpG();return e.Njj(n.login())}),e.EFF(10,"\u2192"),e.k0s()()()()}if(2&o){const a=e.XpG();e.R7$(7),e.AVh("invalid",!a.isValidEmail),e.R7$(),e.R50("ngModel",a.password)}}const M=[{path:"",component:(()=>{var o;class l{constructor(t,n,i,c){this.navCtrl=t,this.authService=n,this.userService=i,this.appService=c,this.email="",this.password="",this.firstname="",this.lastname="",this.landingPageInd=!0,this.isValidEmail=!1,this.emailCollectionInd=!1,this.isValidPassword=!1,this.passwordCollectionInd=!1,this.isValidFirstName=!1,this.firstNameCollectionInd=!1,this.isValidLastName=!1,this.lastNameCollectionInd=!1}startApplication(){this.landingPageInd=!1,this.authService.isAuthenticated()&&this.authService.getUserToken()&&this.appService.getUserObj()&&this.appService.getSessionId()?(this.firstNameCollectionInd=!1,this.navCtrl.navigateForward("/tabs/tab3")):this.firstNameCollectionInd=!0,this.lastNameCollectionInd=!1,this.emailCollectionInd=!1,this.passwordCollectionInd=!1}openVideo(){window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ","_blank")}validateName(t,n=1){const i=/^[A-Za-z\s]{3,}$/;1!==n?this.isValidLastName=i.test(t):this.isValidFirstName=i.test(t)}validateEmail(){this.isValidEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)}validatePassword(){this.isValidPassword=/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(this.password)}nextLastName(){this.landingPageInd=!1,this.firstNameCollectionInd=!1,this.lastNameCollectionInd=!0,this.emailCollectionInd=!1,this.passwordCollectionInd=!1}nextEmail(){this.landingPageInd=!1,this.firstNameCollectionInd=!1,this.lastNameCollectionInd=!1,this.emailCollectionInd=!0,this.passwordCollectionInd=!1}next(){this.isValidEmail?(this.landingPageInd=!1,this.emailCollectionInd=!1,this.passwordCollectionInd=!0,console.log("Email entered:",this.email)):alert("Please enter a valid email address.")}login(){if(!(this.isValidFirstName&&this.isValidLastName&&this.isValidEmail&&this.isValidPassword))return void alert("You can not proceed further, you need to refersh the page");const t={firstName:this.firstname,lastName:this.lastname,username:this.email,password:this.password};this.userService.signup(t).subscribe(n=>{var i,c;n.message&&this.userService.login(null!==(i=t.username)&&void 0!==i?i:"",null!==(c=t.password)&&void 0!==c?c:"").subscribe(p=>{p.access_token?(this.authService.login(p.access_token),this.appService.setUserObj(t),this.passwordCollectionInd=!1,this.landingPageInd=!0,this.navCtrl.navigateForward("/tabs/tab3")):this.resetPage()},p=>{console.log("caught error {}",p)})},n=>{console.log("caught error {}",n)})}ngOnDestroy(){console.log("Getting destroyed the landing page!!!")}ngOnInit(){var t=this;return(0,h.A)(function*(){t.resetPage(),console.log("got it 1")})()}resetPage(){var t=this;return(0,h.A)(function*(){t.firstname="",t.lastname="",t.email="",t.password="",t.landingPageInd=!0,t.firstNameCollectionInd=!1,t.lastNameCollectionInd=!1,t.emailCollectionInd=!1,t.passwordCollectionInd=!1,t.isValidFirstName=!1,t.isValidLastName=!1,t.isValidEmail=!1,t.isValidPassword=!1,t.authService.logout()})()}}return(o=l).\u0275fac=function(t){return new(t||o)(e.rXU(_.q9),e.rXU(b.u),e.rXU(x.D),e.rXU(v.d))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-tab1"]],standalone:!1,decls:13,vars:7,consts:[[3,"translucent"],[4,"ngIf"],[1,"content-container"],[1,"title"],[1,"description"],[1,"button-container"],["fill","clear",1,"custom-button",3,"click"],["fill","clear",1,"custom-button","secondary",3,"click"],[1,"login-container"],[1,"custom-input"],["fill","solid","label","Frist Name","labelPlacement","floating","placeholder","firstname","helperText","Enter First Name","errorText","Please enter a valid First Name","required","",3,"ngModelChange","ngModel"],[1,"arrow-button",3,"click"],["fill","solid","label","Last Name","labelPlacement","floating","placeholder","lastname","helperText","Enter Last Name","errorText","Please enter a valid Last Name","required","",3,"ngModelChange","ngModel"],["type","email","fill","solid","label","Email","labelPlacement","floating","placeholder","email@domain.com","helperText","Enter a valid email","errorText","Please enter a valid email","required","",3,"ngModelChange","ngModel"],["type","password","fill","solid","label","Password","labelPlacement","floating","helperText","Enter a valid password","errorText","Please enter a valid password","required","",3,"ngModelChange","ngModel"]],template:function(t,n){1&t&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e.EFF(3," User Briefing "),e.k0s()()(),e.DNE(4,P,11,0,"ion-content",1)(5,w,11,3,"ion-content",1)(6,C,11,3,"ion-content",1)(7,I,11,3,"ion-content",1)(8,T,11,3,"ion-content",1),e.j41(9,"ion-footer",0)(10,"ion-toolbar")(11,"ion-title"),e.EFF(12,"Founder Wrijula Mukherjee"),e.k0s()()()),2&t&&(e.Y8G("translucent",!0),e.R7$(4),e.Y8G("ngIf",n.landingPageInd),e.R7$(),e.Y8G("ngIf",n.firstNameCollectionInd),e.R7$(),e.Y8G("ngIf",n.lastNameCollectionInd),e.R7$(),e.Y8G("ngIf",n.emailCollectionInd),e.R7$(),e.Y8G("ngIf",n.passwordCollectionInd),e.R7$(),e.Y8G("translucent",!0))},dependencies:[r.Jm,r.W9,r.M0,r.eU,r.$w,r.uz,r.BC,r.ai,r.Gw,u.bT,d.BC,d.YS,d.vS],styles:[".content-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;text-align:center;padding:20px}.title[_ngcontent-%COMP%]{font-size:36px;font-weight:700;color:#000;letter-spacing:2px;text-shadow:3px 3px 0px rgba(0,0,0,.5);transition:all .3s ease}.description[_ngcontent-%COMP%]{font-size:18px;color:#333;max-width:75%;line-height:1.6;font-weight:500;padding:15px;background:#0000000d;border-left:4px solid black;border-right:4px solid black;box-shadow:inset 3px 3px 5px #0000001a;transition:all .3s ease}.button-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:60vh;gap:20px}.custom-button[_ngcontent-%COMP%]{font-size:18px;padding:15px 30px;border-radius:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;background:transparent;color:#000;border:2px solid black;box-shadow:4px 4px #000;transition:all .3s ease}.custom-button[_ngcontent-%COMP%]:hover{background:#0000001a;transform:translateY(-3px);box-shadow:6px 6px #000}.custom-button[_ngcontent-%COMP%]:active{transform:translateY(2px);box-shadow:2px 2px #000}.secondary[_ngcontent-%COMP%]{color:#000;border:2px solid black}.login-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;width:100%;gap:20px;flex-wrap:wrap}.custom-input[_ngcontent-%COMP%]{width:250px;background:transparent;border-bottom:2px solid black;box-shadow:none;transition:all .3s ease}.custom-input[_ngcontent-%COMP%]:hover{border-bottom-color:#0009}.custom-input[_ngcontent-%COMP%]:focus-within{border-bottom-color:#000;box-shadow:0 2px 5px #0003}.arrow-button[_ngcontent-%COMP%]{font-size:32px;font-weight:700;color:#000;cursor:pointer;background:transparent;padding:10px 15px;border-radius:10px;box-shadow:3px 3px 6px #0000004d;transition:transform .2s ease-in-out,box-shadow .2s ease-in-out}.arrow-button[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:5px 5px 10px #0006}.arrow-button[_ngcontent-%COMP%]:active{transform:translateY(2px);box-shadow:1px 1px 3px #0003}@media (max-width: 500px){.login-container[_ngcontent-%COMP%]{flex-direction:column;gap:10px}}.error-message[_ngcontent-%COMP%]{color:red;font-size:14px;margin-top:-10px}"]}),l})()}];let j=(()=>{var o;class l{}return(o=l).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[m.iI.forChild(M),m.iI]}),l})(),N=(()=>{var o;class l{}return(o=l).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[r.bv,u.MD,d.YN,f.S,j]}),l})()}}]);