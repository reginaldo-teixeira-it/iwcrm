"use strict";(self.webpackChunkiwcrm=self.webpackChunkiwcrm||[]).push([[984],{4984:(B,c,o)=>{o.r(c),o.d(c,{NavigationModule:()=>T});var g=o(6814),l=o(1896),v=o(7694),t=o(5879),d=o(1088),h=o(7398),u=o(5869),p=o(5881),C=o(6593),f=o(4434),s=o(3814),m=o(617);let x=(()=>{var n;class a{constructor(e,i,U,Z){this.notificationService=e,this.authService=i,this.titleService=U,this.logger=Z,this.breakpointObserver=(0,t.f3M)(d.Yg),this.cards=this.breakpointObserver.observe(d.u3.Handset).pipe((0,h.U)(({matches:A})=>A?[{title:"Card 1",cols:1,rows:1},{title:"Card 2",cols:1,rows:1},{title:"Card 3",cols:1,rows:1},{title:"Card 4",cols:1,rows:1}]:[{title:"Card 1",cols:2,rows:1},{title:"Card 2",cols:1,rows:1},{title:"Card 3",cols:1,rows:2},{title:"Card 4",cols:1,rows:1}]))}ngOnInit(){this.currentUser=this.authService.getCurrentUser(),this.titleService.setTitle("IWCRM - Home"),this.logger.log("Home loaded"),setTimeout(()=>{this.notificationService.openSnackBar("Welcome!")})}}return(n=a).\u0275fac=function(e){return new(e||n)(t.Y36(u.g),t.Y36(p.$),t.Y36(C.Dx),t.Y36(f.Kf))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:12,vars:1,consts:[["fxLayout","row","fxLayoutAlign","center none",1,"container"],["fxFlex","95%"],["fxFlex","50%",1,"text-center","no-records","animate"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",0)(3,"h2"),t._uU(4),t.qZA()(),t.TgZ(5,"div",0)(6,"div",2)(7,"mat-icon"),t._uU(8,"dashboard"),t.qZA(),t.TgZ(9,"p"),t._uU(10,"This is the dashboard."),t.qZA()(),t._UZ(11,"mat-icon"),t.qZA()()()),2&e&&(t.xp6(4),t.hij("Welcome back, ",i.currentUser.fullName,"!"))},dependencies:[s.xw,s.Wh,s.yH,m.Hw],styles:[".single-cards[_ngcontent-%COMP%]{margin:20px 0}.single-card[_ngcontent-%COMP%]   .mat-card-avatar[_ngcontent-%COMP%]{width:50px;height:50px}.single-card[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:55px}.projects-card[_ngcontent-%COMP%] > mat-card-content[_ngcontent-%COMP%]{max-height:400px;overflow:auto}.example-card[_ngcontent-%COMP%]{max-width:400px}.grid-container[_ngcontent-%COMP%]{margin:20px}.dashboard-card[_ngcontent-%COMP%]{position:absolute;inset:15px}.more-button[_ngcontent-%COMP%]{position:absolute;top:5px;right:10px}.dashboard-card-content[_ngcontent-%COMP%]{text-align:center}"]}),a})();var M=o(7274);const O=[{path:"",component:v.$,children:[{path:"",component:x},{path:"dashboard",component:M.DashboardComponent}]}];let y=(()=>{var n;class a{}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild(O),l.Bz]}),a})();var P=o(2019),H=o(5195),S=o(7988),N=o(2296);let T=(()=>{var n;class a{}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.ez,y,P.m,H.QW,S.Tx,m.Ps,N.ot]}),a})()}}]);