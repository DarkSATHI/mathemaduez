(function(){"use strict";var e={2843:function(e,t,r){var i=r(9242),o=r(3396);function s(e,t,r,i,s,a){const n=(0,o.up)("Card_jeu");return null!=s.data?((0,o.wg)(),(0,o.j4)(n,{key:0,cathegorie:s.cathegorie,data:s.data},null,8,["cathegorie","data"])):(0,o.kq)("",!0)}r(7658);var a=r(7139),n=r.p+"img/personnageTemps.52c0e210.png";const c=e=>((0,o.dD)("data-v-7872d8af"),e=e(),(0,o.Cn)(),e),l=["src"],h={class:"clearfix"},u={class:"spinner-grow float-end",role:"status"},d=["aria-valuenow"],p={key:1,class:"alert alert-danger d-flex align-items-center",role:"alert"},_=c((()=>(0,o._)("img",{src:n,id:"maitre_temps",alt:"maître du temps"},null,-1))),f=c((()=>(0,o._)("div",null," Temps écoulé!!! Vous devez donner votre réponse!! ",-1))),m=[_,f],g={class:"card-body"},b={class:"card-title"},v={class:"card-text"},w=["src"],q=c((()=>(0,o._)("hr",null,null,-1))),k={key:0,class:"form-check"},y=["id"],C=["for"],j=["src"],x=c((()=>(0,o._)("hr",null,null,-1))),V=c((()=>(0,o._)("h4",null,"Tirer une carte",-1))),D=["onClick"],A={class:"mt-3"},O=c((()=>(0,o._)("label",{for:"carteAdverse",class:"form-label"},"Voir ma carte",-1)));function P(e,t,r,s,n,c){return(0,o.wg)(),(0,o.iD)("div",{class:(0,a.C_)(["card",n.card_color])},[(0,o._)("img",{src:`images/${n.card_color}.jpg`,class:"card-img-top",alt:"image"},null,8,l),(0,o._)("div",h,[(0,o._)("div",u,[(0,o._)("span",{class:(0,a.C_)(["visually",n.card_color])},(0,a.zw)(n.numero_carte),3)])]),n.chronometre?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"progress",role:"progressbar","aria-label":"Success example","aria-valuenow":n.chrono,"aria-valuemin":"0","aria-valuemax":"100"},[(0,o._)("div",{class:(0,a.C_)([`progress-bar bg-${n.color_chrono}`]),style:(0,a.j5)([`width: ${n.chrono}%`])},null,6)],8,d)):(0,o.kq)("",!0),!n.chronometre&&n.chrono>=100?((0,o.wg)(),(0,o.iD)("div",p,m)):(0,o.kq)("",!0),(0,o._)("div",g,[(0,o._)("h5",b,(0,a.zw)(n.card_titre),1),(0,o._)("p",v,(0,a.zw)(n.question["Énoncé"]),1),""!=n.question["Visuel_question"]?((0,o.wg)(),(0,o.iD)("img",{key:0,class:"question",src:`https://math-qcm.go.yj.fr/upload/images/${n.question["Visuel_question"]}`},null,8,w)):(0,o.kq)("",!0),(0,o._)("form",null,[q,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.indice_question,(e=>((0,o.wg)(),(0,o.iD)(o.HY,{key:e},[parseInt(n.question["Propositions"][e]["État_proposition"])||!n.isVisible_propositions?((0,o.wg)(),(0,o.iD)("div",k,[(0,o._)("input",{class:"form-check-input",type:"radio",name:"flexRadioDefault",id:`flexRadioDefault+${e}`},null,8,y),(0,o._)("label",{class:(0,a.C_)(["form-check-label"]),for:`flexRadioDefault+${e}`},(0,a.zw)(n.question["Propositions"][e]["Proposition"]),9,C),"Null"!=n.question["Propositions"][e]["Visuel_proposition"]?((0,o.wg)(),(0,o.iD)("img",{key:0,src:`https://math-qcm.go.yj.fr/upload/images/${n.question["Propositions"][e]["Visuel_proposition"]}`},null,8,j)):(0,o.kq)("",!0),x])):(0,o.kq)("",!0)],64)))),128))]),!n.isVisible_propositions&&n.isVisible_afficher_proposition_correcte?((0,o.wg)(),(0,o.iD)("a",{key:1,href:"#",class:"btn btn-success valide",onClick:t[0]||(t[0]=e=>n.isVisible_propositions=!n.isVisible_propositions)},"Cacher les fausses propositions")):(0,o.kq)("",!0),V,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.colors,(e=>((0,o.wg)(),(0,o.iD)("a",{key:e,href:"#",class:(0,a.C_)(["btn",e,"cat"]),onClick:t=>c.color(e)},null,10,D)))),128)),(0,o._)("div",A,[O,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"carteAdverse","onUpdate:modelValue":t[1]||(t[1]=e=>n.numero_carte_adverse=e),placeholder:"Le numéro de la carte de l'adversaire"},null,512),[[i.nr,n.numero_carte_adverse]])]),(0,o._)("a",{href:"#",class:"btn btn-success valide adverse",onClick:t[2]||(t[2]=e=>c.afficher_carte(n.numero_carte_adverse))},"Afficher la carte "+(0,a.zw)(n.numero_carte_adverse),1)])],2)}var z={name:"Card_jeu",data(){return{card_color:"jaune",card_titre:"Arithmétique et Calculs",question:this.data["75"],indice_question:[0,1,2,3],colors:["jaune","bleu","vert","rose","rouge"],numero_carte_adverse:"",numero_carte:"75",isVisible_propositions:!1,isVisible_afficher_proposition_correcte:!0,chrono:0,color_chrono:"success",chronometre:0,bruit:new Audio("wav/avertissement.wav"),temps_reponse:1e3}},props:{cathegorie:{type:Object},data:{type:Object}},methods:{chrono_timer(){this.chrono+=2,this.chrono<25?this.color_chrono="success":this.chrono<=50?this.color_chrono="info":this.chrono<=75?this.color_chrono="warning":this.chrono<=100&&(this.color_chrono="danger"),this.chrono>100&&(this.color_chrono="success",this.bruit.play(),clearInterval(this.chronometre),this.chronometre=0)},afficher_carte(e){let t=0;this.chrono=0,this.bruit.pause(),this.color_chrono="success";for(let r in this.cathegorie){if(this.cathegorie[r].includes(e)){this.question=this.data[e],this.card_titre=r,this.card_color=this.colors[t],this.numero_carte=e;break}t++}this.isVisible_propositions=!1,this.isVisible_afficher_proposition_correcte=!1,this.chronometre=setInterval(this.chrono_timer,this.temps_reponse)},color(e){switch(this.card_color=e,this.bruit.pause(),clearInterval(this.chronometre),this.chronometre=0,this.chrono=0,this.color_chrono="success",e){case"jaune":this.card_titre="Arithmétique et Calculs";break;case"bleu":this.card_titre="Les Fonctions";break;case"vert":this.card_titre="Géométrie";break;case"rose":this.card_titre="Statistiques et Probabilités";break;case"rouge":this.card_titre="Algèbre";break}this.numero_carte=this.cathegorie[this.card_titre][this.aleatoire(this.cathegorie[this.card_titre].length)],this.question=this.data[this.numero_carte],this.isVisible_propositions=!1,this.numero_carte_adverse="",this.isVisible_afficher_proposition_correcte=!0},aleatoire(e){return Math.floor(Math.random()*e)},latex(){window.MathJax.typesetPromise().then((()=>{window.MathJax.typeset()})).catch((function(e){return console.log(e.message)}))}},mounted(){this.latex()},afterMount(){this.latex()},updated(){this.latex()}},I=r(89);const M=(0,I.Z)(z,[["render",P],["__scopeId","data-v-7872d8af"]]);var $=M,F={name:"App",components:{Card_jeu:$},data(){return{data:null,cathegorie:{"Arithmétique et Calculs":[],"Les Fonctions":[],"Géométrie":[],"Statistiques et Probabilités":[],"Algèbre":[]}}},methods:{creer_cathegorie(e){for(let t in e)isNaN(parseInt(t))||("Ensemble de nombre"==e[t]["Chapitre"]||"Arithmétique"==e[t]["Chapitre"]?this.cathegorie["Arithmétique et Calculs"].push(t):"Fonctions de référence"==e[t]["Chapitre"]||"Étude des variations d'une fonction"==e[t]["Chapitre"]||"Étude graphique et algébrique de fonctions"==e[t]["Chapitre"]?this.cathegorie["Les Fonctions"].push(t):"Géométrie dans le plan"==e[t]["Chapitre"]||"Vecteurs"==e[t]["Chapitre"]||"Positions relatives de droites"==e[t]["Chapitre"]?this.cathegorie["Géométrie"].push(t):"Information chiffrée"==e[t]["Chapitre"]||"Probabilités et échantillonnage"==e[t]["Chapitre"]||"Statistique descriptive"==e[t]["Chapitre"]?this.cathegorie["Statistiques et Probabilités"].push(t):this.cathegorie["Algèbre"].push(t))}},beforeMount(){window.axios.get("https://math-qcm.go.yj.fr/api_math/lire.php").then((e=>this.data=e["data"])).then((e=>this.creer_cathegorie(e)))}};const S=(0,I.Z)(F,[["render",s]]);var T=S;(0,i.ri)(T).mount("#app")}},t={};function r(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,i,o,s){if(!i){var a=1/0;for(h=0;h<e.length;h++){i=e[h][0],o=e[h][1],s=e[h][2];for(var n=!0,c=0;c<i.length;c++)(!1&s||a>=s)&&Object.keys(r.O).every((function(e){return r.O[e](i[c])}))?i.splice(c--,1):(n=!1,s<a&&(a=s));if(n){e.splice(h--,1);var l=o();void 0!==l&&(t=l)}}return t}s=s||0;for(var h=e.length;h>0&&e[h-1][2]>s;h--)e[h]=e[h-1];e[h]=[i,o,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,s,a=i[0],n=i[1],c=i[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in n)r.o(n,o)&&(r.m[o]=n[o]);if(c)var h=c(r)}for(t&&t(i);l<a.length;l++)s=a[l],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(h)},i=self["webpackChunkmathemaduez"]=self["webpackChunkmathemaduez"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(2843)}));i=r.O(i)})();
//# sourceMappingURL=app.f2962419.js.map