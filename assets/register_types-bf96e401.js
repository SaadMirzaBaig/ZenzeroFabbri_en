var h=Object.defineProperty;var O=(r,t,e)=>t in r?h(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var c=(r,t,e)=>(O(r,typeof t!="symbol"?t+"":t,e),e);import{serializable as i,GameObject as v,Behaviour as a,TypeStore as n}from"./needle-engine-2f8ed1a9.js";import"./three.module-634817c1.js";import"./index-63e0d8c7.js";var b=Object.defineProperty,j=Object.getOwnPropertyDescriptor,m=(r,t,e,s)=>{for(var p=s>1?void 0:s?j(t,e):t,o=r.length-1,l;o>=0;o--)(l=r[o])&&(p=(s?l(t,e,p):l(p))||p);return s&&p&&b(t,e,p),p};class u extends a{constructor(){super(...arguments);c(this,"currentPopup")}closePopup(e){e.visible=!1,this.currentPopup=e}openPopup(e){this.currentPopup!=null&&this.currentPopup!=e&&this.closePopup(this.currentPopup),e.visible?this.closePopup(e):(e.visible=!0,this.currentPopup=e)}}m([i(v)],u.prototype,"currentPopup",2);var d=Object.defineProperty,w=Object.getOwnPropertyDescriptor,_=(r,t,e,s)=>{for(var p=s>1?void 0:s?w(t,e):t,o=r.length-1,l;o>=0;o--)(l=r[o])&&(p=(s?l(t,e,p):l(p))||p);return s&&p&&d(t,e,p),p};class P extends a{constructor(){super(...arguments);c(this,"popup");c(this,"_allPopups",new u)}onPointerClick(e){e.use(),console.log("you clicked the object "+this.gameObject.name),this._allPopups.openPopup(this.popup)}}_([i(v)],P.prototype,"popup",2);_([i(u)],P.prototype,"_allPopups",2);var C=Object.defineProperty,g=Object.getOwnPropertyDescriptor,y=(r,t,e,s)=>{for(var p=s>1?void 0:s?g(t,e):t,o=r.length-1,l;o>=0;o--)(l=r[o])&&(p=(s?l(t,e,p):l(p))||p);return s&&p&&C(t,e,p),p};class f extends a{constructor(){super(...arguments);c(this,"speed",1)}start(){console.log(this)}update(){this.gameObject.rotateY(this.context.time.deltaTime*this.speed)}}y([i()],f.prototype,"speed",2);n.add("ClickObjects",P);n.add("PopupManager",u);n.add("RotateObject",f);
