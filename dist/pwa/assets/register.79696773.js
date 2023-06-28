import{c as x,h as w,g as D,j as C,r as d,_ as I,k as o,l as f,d as j,m as $,n as v,p,F as m,q as g,s as b,t as S,u as q,v as _,x as B,y as N,f as O}from"./index.aae40a94.js";import{Q as P}from"./Ripple.b0cf0a5f.js";import{Q as T}from"./QBtn.76e0b290.js";import{u as Q,a as F}from"./use-dark.8c4d1404.js";import{c as z,h as E}from"./render.52eb7b4d.js";const A=["horizontal","vertical","cell","none"];var V=z({name:"QMarkupTable",props:{...Q,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>A.includes(e)}},setup(e,{slots:s}){const n=D(),l=F(e,n.proxy.$q),a=x(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(l.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>w("div",{class:a.value},[w("table",{class:"q-table"},E(s.default))])}});const L=C({name:"QHierarchy",props:["data","columns","separator","dense","dark","flat","bordered","square","classes","defaultExpandAll","filter"],setup(){return{leftDrawerOpen:d(!1),isExpanded:d(!0),selectedRowID:d({}),itemId:d(null),temp_data:d([]),temp_index:d(1),first_call:d(!1)}},watch:{selectedIDRow:function(e){this.selectedRowID!=null&&this.$set(this.selectedRowID,"_index",e)}},methods:{recursive(e,s,n,l,a,i){let t=this;e.forEach(function(r){if(r.children&&r.children.length!=0)r.level=n,r.leaf=!1,r.sortDirection="none",r.sorted=d(!1),r._index=t.temp_index,t.temp_index=t.temp_index+1,i&&(r.expend=!0),s.push(r),r._index==l&&(r.expend=a),r.expend==!0&&t.recursive(r.children,s,r.level+1,l,a,i);else return r.level=n,r.leaf=d(!0),r.sortDirection="none",r.sorted=d(!1),r._index=t.temp_index,t.temp_index=t.temp_index+1,s.push(r),!1})},iconName(e){return e.expend==!0?"remove":e.children&&e.children.length>0?"add":"done"},toggle(e){let s=this;s.itemId=e._index,e.leaf=d(!1),e.leaf==!1&&e.expend==null&&e.children!=null&&e.children.length!=0&&s.recursive(e.children,[],e.level+1,e._index,e.expend,!1),e.expend==!0&&e.children!=null&&(e.children.forEach(function(n){n.expend=void 0,s.setUndefined(n)}),e.expend=d(void 0),e.leaf=d(!1),s.itemId=null)},setPadding(e){return`padding-left: ${e.level*30}px;`},setUndefined(e){let s=this;e.hasOwnProperty("children")&&e.children&&e.children.forEach(function(n){n.expend=d(void 0),s.setUndefined(n)})},sortBy(e){e.sortDirection==="asc"?(this.sort_recursive(this.data,e,!0),e.sortDirection="desc",e.arrow_downward="arrow_downward"):(this.sort_recursive(this.data,e,!1),e.sortDirection="asc"),e.sorted=!0,this.$emit("sort_column",e),this.resetSorting(e)},sort_recursive(e,s,n){e.sort(this.sort_by(s,n));for(let l=0;l<e.length;l++)e[l].hasOwnProperty("children")&&this.sort_recursive(e[l].children,s,n)},sort_by(e,s){let n=s?-1:1;if(e.sortingType==="custom"&&typeof e.sortingFunc=="function")return function(a,i){return e.sortingFunc(a,i)*n};let l=function(a){return a.hasOwnProperty(e.field)?a[e.field]===null?"":a[e.field].toLowerCase():""};switch(e.sortingType){case"number":l=function(a){return parseFloat(a[e.field])};break;case"date":l=function(a){return new Date(a[e.field])};break}return function(a,i){return a=l(a),i=l(i),n*((a>i)-(i>a))}},resetSorting(e){let s=this.columns.length;for(let n=0;n<s;n++){let l=this.columns[n];l.field!=e.field&&(l.sorted=d(!1),l.sortDirection="none")}},filter_data(e,s,n,l,a){let i=[];if(!s||s.length<3)for(let t=0;t<e.length;t++){let r=e[t];r.visible&&i.push(r)}else{let t=[],r=0;for(let u=0;u<e.length;u++){let c=e[u];for(;r>=c.level;)t.pop(),r--;if(t.push(c),r=c.level,this.include(c,s,n,l)){for(let h=0;h<t.length;h++){let y=t[h];y.expend&&(a&&(y.expend=!0),i.push(y))}i.push(c),t=[]}}}return console.log(i),i},include(e,s,n,l){let a=!1,i=!1;i=!0,this.checkItem(e,s,n)&&(a=!0);let t=l.length;for(let r=0;r<t;r++){let u=l[r];u.filterable&&(i=!0,this.checkItem(e,s,u)&&(a=!0))}return i?a:!0},checkItem(e,s,n){if(n.sortingType==="number"){if(e[n.field]!=null&&parseFloat(e[n.field])===parseFloat(s))return!0}else if(e[n.field]!=null&&e[n.field].toLowerCase().indexOf(s.toLowerCase())!==-1)return!0}},computed:{arrayTreeObj(){let e=this,s=[];return this.temp_data=[],e.temp_index=1,e.recursive(e.data,s,0,e.itemId,e.isExpanded,e.first_call),e.first_call=d(!1),this.filter&&this.filter.length>=3?this.filter_data(s,this.filter,!0,this.columns):s},hasDefaultSlot(){return this.$slots.hasOwnProperty("body")}},created(){this.defaultExpandAll&&(this.first_call=d(!0))}}),H=["onClick"],M={class:"q-ml-sm"};function R(e,s,n,l,a,i){return o(),f("span",null,[j(V,{separator:e.separator,dense:e.dense,dark:e.dark,flat:e.flat,bordered:e.bordered,square:e.square,class:v(e.classes)},{default:$(()=>[p("thead",null,[p("tr",null,[(o(!0),f(m,null,g(e.columns,t=>(o(),f("th",{onClick:r=>t.sortable?e.sortBy(t):null,class:v("text-"+t.align)},[S(q(t.label)+" ",1),t.sorted?(o(),_(P,{key:0,name:t.sortDirection=="asc"?"arrow_upward":"arrow_downward"},null,8,["name"])):b("",!0)],10,H))),256))])]),p("tbody",null,[e.hasDefaultSlot?(o(!0),f(m,{key:0},g(e.arrayTreeObj,(t,r)=>(o(),f("tr",{key:r},[B(e.$slots,"body",{item:t,toggle:e.toggle,setPadding:e.setPadding,iconName:e.iconName})]))),128)):b("",!0),e.hasDefaultSlot?b("",!0):(o(!0),f(m,{key:1},g(e.arrayTreeObj,(t,r)=>(o(),f("tr",{key:r},[(o(!0),f(m,null,g(e.columns,(u,c)=>(o(),f("td",{"data-th":"Name",class:v("text-"+u.align)},[p("div",{style:N(c==0?e.setPadding(t):{"padding-left":"30px"}),class:v(e.iconName(t)!="done"?"q-pl-lg":"")},[e.iconName(t)!="done"&&c==0?(o(),_(T,{key:0,onClick:h=>c==0?e.toggle(t):{},icon:e.iconName(t),flat:"",dense:""},null,8,["onClick","icon"])):b("",!0),p("span",M,q(t[u.field]),1)],6)],2))),256))]))),128))])]),_:3},8,["separator","dense","dark","flat","bordered","square","class"])])}var k=I(L,[["render",R]]);const U="quasar-ui-qhierarchy",G="1.0.12",J="pratikpatelpp802@gmail.com",K="QHierarchy",W="MIT",X="dist/index.esm.js",Y="dist/index.common.js",Z={dev:"cd dev && yarn dev && cd ..","dev:umd":"yarn build && node build/script.open-umd.js","dev:ssr":"cd dev && yarn 'dev:ssr' && cd ..","dev:ios":"cd dev && yarn 'dev:ios' && cd ..","dev:android":"cd dev && yarn 'dev:android' && cd ..","dev:electron":"cd dev && yarn 'dev:electron' && cd ..",build:"node build/index.js","build:js":"node build/script.javascript.js"},ee="https://next-quasar-qhierarchy.netlify.app/",re={type:"git",url:"git+https://github.com/pratik227/quasar-qhierarchy.git"},te={type:"github",url:"https://github.com/sponsors/pratik227"},se="",ne={"@rollup/plugin-buble":"^0.21.3","@rollup/plugin-json":"^4.0.0","@rollup/plugin-node-resolve":"^11.2.1","@rollup/plugin-replace":"^2.4.2",chalk:"^4.1.0","fs-extra":"^8.1.0",open:"^7.3.0",quasar:"^2.0.0-beta.12",rimraf:"^3.0.0",rollup:"^2.45.0","uglify-js":"^3.13.3",zlib:"^1.0.5"},ae=["last 4 Chrome versions","last 4 Firefox versions","last 2 Edge versions","last 4 Safari versions","last 4 Android versions","last 4 ChromeAndroid versions","last 4 FirefoxAndroid versions","last 4 iOS versions"];var le={name:U,version:G,author:J,description:K,license:W,module:X,main:Y,scripts:Z,homepage:ee,repository:re,funding:te,bugs:se,devDependencies:ne,browserslist:ae};const{version:ie}=le;function de(e){e.component(k.name,k)}var oe=Object.freeze(Object.defineProperty({__proto__:null,version:ie,QHierarchy:k,install:de},Symbol.toStringTag,{value:"Module"})),ve=O(({app:e})=>{e.use(oe)});export{ve as default};
