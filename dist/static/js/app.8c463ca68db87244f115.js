webpackJsonp([1],{"0hh5":function(t,a){},"0rRr":function(t,a){},D0sz:function(t,a){},Ep1D:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("7+uW"),i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("span",[this._v("Showing "+this._s(this.$store.state.startIndex)+"-"+this._s(parseInt(this.$store.state.startIndex,10)-1+parseInt(this.$store.state.perPage,10))+" of "+this._s(this.$store.state.data.length)+" entries")])])},staticRenderFns:[]};var r=e("VU/8")({name:"Info",data:function(){}},i,!1,function(t){e("Ep1D")},null,null).exports,s={name:"Pagination",data:function(){return{pageAmount:0,currentPage:1}},computed:{pageCount:function(){return this.$store.state.data&&(this.pageAmount=Math.ceil(1*this.$store.state.data.length/this.$store.state.perPage)),this.pageAmount}},methods:{changePage:function(t){this.currentPage=t,this.$store.commit("setStartIndex",(t-1)*this.$store.state.perPage+1)},changePageToPrev:function(){this.currentPage--,this.$store.commit("setStartIndex",(this.currentPage-1)*this.$store.state.perPage+1)},changePageToNext:function(){this.currentPage++,this.$store.commit("setStartIndex",(this.currentPage-1)*this.$store.state.perPage+1)},empty:function(){}}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",[e("ul",[e("li",[e("span",t._g({class:{available:1!=this.$store.state.startIndex}},{click:1!=this.$store.state.startIndex?t.changePageToPrev:t.empty}),[t._v("Previous")])]),t._v(" "),t._l(t.pageCount,function(a){return e("li",{key:a},[e("span",{staticClass:"available",class:{current:a==t.currentPage}},[e("a",{on:{click:function(e){t.changePage(a)}}},[t._v(t._s(a))])])])}),t._v(" "),e("li",[e("span",t._g({class:{available:this.$store.state.startIndex+this.$store.state.perPage<this.$store.state.data.length}},{click:this.$store.state.startIndex+this.$store.state.perPage<this.$store.state.data.length?t.changePageToNext:t.empty}),[t._v("Next")])])],2)])},staticRenderFns:[]};var l=e("VU/8")(s,o,!1,function(t){e("jwb1")},null,null).exports,c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"search-items"},[t._v("\n  Search: "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],attrs:{type:"search"},domProps:{value:t.searchText},on:{input:function(a){a.target.composing||(t.searchText=a.target.value)}}})])},staticRenderFns:[]};var d=e("VU/8")({name:"SearchItems",data:function(){return{searchText:""}},watch:{searchText:function(t,a){this.$store.commit("find",t)}}},c,!1,function(t){e("D0sz")},"data-v-079ef21d",null).exports,m={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._v("\n  Show \n  "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.perPage,expression:"perPage"}],on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.perPage=a.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"5"}},[t._v("5")]),t._v(" "),e("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),e("option",{attrs:{value:"15"}},[t._v("15")]),t._v(" "),e("option",{attrs:{value:"25"}},[t._v("25")])]),t._v("\n  entries per page\n")])},staticRenderFns:[]};var f=e("VU/8")({computed:{perPage:{get:function(){return this.$store.state.perPage},set:function(t){this.$store.commit("setPerPage",t)}}}},m,!1,function(t){e("0rRr")},"data-v-3d435411",null).exports,u=e("NYxO"),g={name:"TableData",data:function(){return{defRows:this.$store.state.data.slice(this.$store.state.startIndex-1),ascFlags:[]}},computed:{rows:function(){var t=this.$store.state.data.slice(this.$store.state.startIndex-1,this.$store.state.startIndex-1+this.$store.state.perPage);return null==t?defRows:t},ascSort:function(){if(this.ascFlags!==[])return this.ascFlags;for(var t=0;t<rows[0].length;t++)return this.ascFlags={key:rows[0].keys()[t],value:!0},this.ascFlags}},methods:{sortData:function(t){this.ascSort[t]?(this.$store.commit("sort",t),this.ascSort[t]=!1):(this.$store.commit("sortDesc",t),this.ascSort[t]=!0)}}},S={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("table",[e("tr",t._l(t.rows[0],function(a,n){return e("th",{key:n},[e("a",{on:{click:function(a){t.sortData(n)}}},[t._v(t._s(n))])])}),0),t._v(" "),t._l(t.rows,function(a,n){return e("tr",{key:{index:n}},t._l(a,function(a,n){return e("td",{key:n},[t._v(t._s(a))])}),0)})],2)])},staticRenderFns:[]};var h={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.dataLink,expression:"dataLink"}],attrs:{placeholder:"insert link to json",rows:"1"},domProps:{value:t.dataLink},on:{input:function(a){a.target.composing||(t.dataLink=a.target.value)}}}),t._v(" "),e("button",{on:{click:function(a){t.loadData()}}},[t._v("GET DATA\n\t\t")])])},staticRenderFns:[]};var E={name:"App",components:{Info:r,Pagination:l,SearchItems:d,ShowItems:f,TableData:e("VU/8")(g,S,!1,function(t){e("0hh5")},null,null).exports,Upload:e("VU/8")({name:"Upload",data:function(){return{dataLink:""}},methods:{loadData:function(){this.$store.dispatch("loadAsync",this.dataLink)}}},h,!1,function(t){e("hReb")},null,null).exports}},p={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{staticClass:"app-upload"},[a("Upload")],1),this._v(" "),a("div",{staticClass:"app-header"},[a("ShowItems"),this._v(" "),a("SearchItems")],1),this._v(" "),a("TableData"),this._v(" "),a("div",{staticClass:"app-footer"},[a("Info"),this._v(" "),a("Pagination")],1)],1)},staticRenderFns:[]};var v=e("VU/8")(E,p,!1,function(t){e("bdcT")},null,null).exports,y=e("/ocq");n.a.use(y.a);var P=new y.a({routes:[{path:"/",name:"App",component:v}]}),x=e("gRE1"),$=e.n(x),b=e("ZTUR"),D=e.n(b),F=e("mtWM"),I=e.n(F);n.a.use(u.a);var A=new u.a.Store({state:{startIndex:1,perPage:5,data:D.a},mutations:{setPerPage:function(t,a){return t.perPage=a},setStartIndex:function(t,a){return t.startIndex=a},load:function(t,a){return t.data=a},find:function(t,a){if(""===a)t.data=D.a;else{for(var e=[],n=0;n<t.data.length;n++)$()(t.data[n]).join().search(a)>0&&e.push(t.data[n]);t.data=e}},sort:function(t,a){t.data=t.data.sort(function(t,e){var n=t[a],i=e[a];return n<i?-1:n>i?1:0})},sortDesc:function(t,a){t.data=t.data.sort(function(t,e){var n=t[a],i=e[a];return n<i?1:n>i?-1:0})}},actions:{loadAsync:function(t,a){I()(a).then(function(a){t.commit("load",a.data)}).catch(function(t){console.log(t)})}}});n.a.config.productionTip=!1,new n.a({el:"#app",router:P,store:A,components:{App:v},template:"<App/>"})},ZTUR:function(t,a){t.exports=[{ID:1,"First name":"Tiger","Last name":"Nixon",Position:"System Architect",Office:"Edinburgh",Age:61,"Start date":"2011/04/25",Salary:"$320,800","Extn.":5421,"E-mail":"t.nixon@datatables.net"},{ID:2,"First name":"Garrett","Last name":"Winters",Position:"Accountant",Office:"Tokyo",Age:63,"Start date":"2011/07/25",Salary:"$170,750","Extn.":8422,"E-mail":"g.winters@datatables.net"},{ID:3,"First name":"Ashton","Last name":"Cox",Position:"Junior Technical Author",Office:"San Francisco",Age:66,"Start date":"2009/01/12",Salary:"$86,000","Extn.":1562,"E-mail":"a.cox@datatables.net"},{ID:4,"First name":"Cedric","Last name":"Kelly",Position:"Senior Javascript Developer",Office:"Edinburgh",Age:22,"Start date":"2012/03/29",Salary:"$433,060","Extn.":6224,"E-mail":"c.kelly@datatables.net"},{ID:5,"First name":"Airi","Last name":"Satou",Position:"Accountant",Office:"Tokyo",Age:33,"Start date":"2008/11/28",Salary:"$162,700","Extn.":5407,"E-mail":"a.satou@datatables.net"},{ID:6,"First name":"Brielle","Last name":"Williamson",Position:"Integration Specialist",Office:"New York",Age:61,"Start date":"2012/12/02",Salary:"$372,000","Extn.":4804,"E-mail":"b.williamson@datatables.net"},{ID:7,"First name":"Herrod","Last name":"Chandler",Position:"Sales Assistant",Office:"San Francisco",Age:59,"Start date":"2012/08/06",Salary:"$137,500","Extn.":9608,"E-mail":"h.chandler@datatables.net"},{ID:8,"First name":"Rhona","Last name":"Davidson",Position:"Integration Specialist",Office:"Tokyo",Age:55,"Start date":"2010/10/14",Salary:"$327,900","Extn.":6200,"E-mail":"r.davidson@datatables.net"},{ID:9,"First name":"Colleen","Last name":"Hurst",Position:"Javascript Developer",Office:"San Francisco",Age:39,"Start date":"2009/09/15",Salary:"$205,500","Extn.":2360,"E-mail":"c.hurst@datatables.net"},{ID:10,"First name":"Sonya","Last name":"Frost",Position:"Software Engineer",Office:"Edinburgh",Age:23,"Start date":"2008/12/13",Salary:"$103,600","Extn.":1667,"E-mail":"s.frost@datatables.net"},{ID:11,"First name":"Jena","Last name":"Gaines",Position:"Office Manager",Office:"London",Age:30,"Start date":"2008/12/19",Salary:"$90,560","Extn.":3814,"E-mail":"j.gaines@datatables.net"},{ID:12,"First name":"Quinn","Last name":"Flynn",Position:"Support Lead",Office:"Edinburgh",Age:22,"Start date":"2013/03/03",Salary:"$342,000","Extn.":9497,"E-mail":"q.flynn@datatables.net"},{ID:13,"First name":"Charde","Last name":"Marshall",Position:"Regional Director",Office:"San Francisco",Age:36,"Start date":"2008/10/16",Salary:"$470,600","Extn.":6741,"E-mail":"c.marshall@datatables.net"},{ID:14,"First name":"Haley","Last name":"Kennedy",Position:"Senior Marketing Designer",Office:"London",Age:43,"Start date":"2012/12/18",Salary:"$313,500","Extn.":3597,"E-mail":"h.kennedy@datatables.net"},{ID:15,"First name":"Tatyana","Last name":"Fitzpatrick",Position:"Regional Director",Office:"London",Age:19,"Start date":"2010/03/17",Salary:"$385,750","Extn.":1965,"E-mail":"t.fitzpatrick@datatables.net"},{ID:16,"First name":"Michael","Last name":"Silva",Position:"Marketing Designer",Office:"London",Age:66,"Start date":"2012/11/27",Salary:"$198,500","Extn.":1581,"E-mail":"m.silva@datatables.net"},{ID:17,"First name":"Paul","Last name":"Byrd",Position:"Chief Financial Officer (CFO)",Office:"New York",Age:64,"Start date":"2010/06/09",Salary:"$725,000","Extn.":3059,"E-mail":"p.byrd@datatables.net"},{ID:18,"First name":"Gloria","Last name":"Little",Position:"Systems Administrator",Office:"New York",Age:59,"Start date":"2009/04/10",Salary:"$237,500","Extn.":1721,"E-mail":"g.little@datatables.net"},{ID:19,"First name":"Bradley","Last name":"Greer",Position:"Software Engineer",Office:"London",Age:41,"Start date":"2012/10/13",Salary:"$132,000","Extn.":2558,"E-mail":"b.greer@datatables.net"},{ID:20,"First name":"Dai","Last name":"Rios",Position:"Personnel Lead",Office:"Edinburgh",Age:35,"Start date":"2012/09/26",Salary:"$217,500","Extn.":2290,"E-mail":"d.rios@datatables.net"},{ID:21,"First name":"Jenette","Last name":"Caldwell",Position:"Development Lead",Office:"New York",Age:30,"Start date":"2011/09/03",Salary:"$345,000","Extn.":1937,"E-mail":"j.caldwell@datatables.net"},{ID:22,"First name":"Yuri","Last name":"Berry",Position:"Chief Marketing Officer (CMO)",Office:"New York",Age:40,"Start date":"2009/06/25",Salary:"$675,000","Extn.":6154,"E-mail":"y.berry@datatables.net"},{ID:23,"First name":"Caesar","Last name":"Vance",Position:"Pre-Sales Support",Office:"New York",Age:21,"Start date":"2011/12/12",Salary:"$106,450","Extn.":8330,"E-mail":"c.vance@datatables.net"},{ID:24,"First name":"Doris","Last name":"Wilder",Position:"Sales Assistant",Office:"Sidney",Age:23,"Start date":"2010/09/20",Salary:"$85,600","Extn.":3023,"E-mail":"d.wilder@datatables.net"},{ID:25,"First name":"Angelica","Last name":"Ramos",Position:"Chief Executive Officer (CEO)",Office:"London",Age:47,"Start date":"2009/10/09",Salary:"$1,200,000","Extn.":5797,"E-mail":"a.ramos@datatables.net"},{ID:26,"First name":"Gavin","Last name":"Joyce",Position:"Developer",Office:"Edinburgh",Age:42,"Start date":"2010/12/22",Salary:"$92,575","Extn.":8822,"E-mail":"g.joyce@datatables.net"},{ID:27,"First name":"Jennifer","Last name":"Chang",Position:"Regional Director",Office:"Singapore",Age:28,"Start date":"2010/11/14",Salary:"$357,650","Extn.":9239,"E-mail":"j.chang@datatables.net"},{ID:28,"First name":"Brenden","Last name":"Wagner",Position:"Software Engineer",Office:"San Francisco",Age:28,"Start date":"2011/06/07",Salary:"$206,850","Extn.":1314,"E-mail":"b.wagner@datatables.net"},{ID:29,"First name":"Fiona","Last name":"Green",Position:"Chief Operating Officer (COO)",Office:"San Francisco",Age:48,"Start date":"2010/03/11",Salary:"$850,000","Extn.":2947,"E-mail":"f.green@datatables.net"},{ID:30,"First name":"Shou","Last name":"Itou",Position:"Regional Marketing",Office:"Tokyo",Age:20,"Start date":"2011/08/14",Salary:"$163,000","Extn.":8899,"E-mail":"s.itou@datatables.net"},{ID:31,"First name":"Michelle","Last name":"House",Position:"Integration Specialist",Office:"Sidney",Age:37,"Start date":"2011/06/02",Salary:"$95,400","Extn.":2769,"E-mail":"m.house@datatables.net"},{ID:32,"First name":"Suki","Last name":"Burks",Position:"Developer",Office:"London",Age:53,"Start date":"2009/10/22",Salary:"$114,500","Extn.":6832,"E-mail":"s.burks@datatables.net"},{ID:33,"First name":"Prescott","Last name":"Bartlett",Position:"Technical Author",Office:"London",Age:27,"Start date":"2011/05/07",Salary:"$145,000","Extn.":3606,"E-mail":"p.bartlett@datatables.net"},{ID:34,"First name":"Gavin","Last name":"Cortez",Position:"Team Leader",Office:"San Francisco",Age:22,"Start date":"2008/10/26",Salary:"$235,500","Extn.":2860,"E-mail":"g.cortez@datatables.net"},{ID:35,"First name":"Martena","Last name":"Mccray",Position:"Post-Sales support",Office:"Edinburgh",Age:46,"Start date":"2011/03/09",Salary:"$324,050","Extn.":8240,"E-mail":"m.mccray@datatables.net"},{ID:36,"First name":"Unity","Last name":"Butler",Position:"Marketing Designer",Office:"San Francisco",Age:47,"Start date":"2009/12/09",Salary:"$85,675","Extn.":5384,"E-mail":"u.butler@datatables.net"},{ID:37,"First name":"Howard","Last name":"Hatfield",Position:"Office Manager",Office:"San Francisco",Age:51,"Start date":"2008/12/16",Salary:"$164,500","Extn.":7031,"E-mail":"h.hatfield@datatables.net"},{ID:38,"First name":"Hope","Last name":"Fuentes",Position:"Secretary",Office:"San Francisco",Age:41,"Start date":"2010/02/12",Salary:"$109,850","Extn.":6318,"E-mail":"h.fuentes@datatables.net"},{ID:39,"First name":"Vivian","Last name":"Harrell",Position:"Financial Controller",Office:"San Francisco",Age:62,"Start date":"2009/02/14",Salary:"$452,500","Extn.":9422,"E-mail":"v.harrell@datatables.net"},{ID:40,"First name":"Timothy","Last name":"Mooney",Position:"Office Manager",Office:"London",Age:37,"Start date":"2008/12/11",Salary:"$136,200","Extn.":7580,"E-mail":"t.mooney@datatables.net"},{ID:41,"First name":"Jackson","Last name":"Bradshaw",Position:"Director",Office:"New York",Age:65,"Start date":"2008/09/26",Salary:"$645,750","Extn.":1042,"E-mail":"j.bradshaw@datatables.net"},{ID:42,"First name":"Olivia","Last name":"Liang",Position:"Support Engineer",Office:"Singapore",Age:64,"Start date":"2011/02/03",Salary:"$234,500","Extn.":2120,"E-mail":"o.liang@datatables.net"},{ID:43,"First name":"Bruno","Last name":"Nash",Position:"Software Engineer",Office:"London",Age:38,"Start date":"2011/05/03",Salary:"$163,500","Extn.":6222,"E-mail":"b.nash@datatables.net"},{ID:44,"First name":"Sakura","Last name":"Yamamoto",Position:"Support Engineer",Office:"Tokyo",Age:37,"Start date":"2009/08/19",Salary:"$139,575","Extn.":9383,"E-mail":"s.yamamoto@datatables.net"},{ID:45,"First name":"Thor","Last name":"Walton",Position:"Developer",Office:"New York",Age:61,"Start date":"2013/08/11",Salary:"$98,540","Extn.":8327,"E-mail":"t.walton@datatables.net"},{ID:46,"First name":"Finn","Last name":"Camacho",Position:"Support Engineer",Office:"San Francisco",Age:47,"Start date":"2009/07/07",Salary:"$87,500","Extn.":2927,"E-mail":"f.camacho@datatables.net"},{ID:47,"First name":"Serge","Last name":"Baldwin",Position:"Data Coordinator",Office:"Singapore",Age:64,"Start date":"2012/04/09",Salary:"$138,575","Extn.":8352,"E-mail":"s.baldwin@datatables.net"},{ID:48,"First name":"Zenaida","Last name":"Frank",Position:"Software Engineer",Office:"New York",Age:63,"Start date":"2010/01/04",Salary:"$125,250","Extn.":7439,"E-mail":"z.frank@datatables.net"},{ID:49,"First name":"Zorita","Last name":"Serrano",Position:"Software Engineer",Office:"San Francisco",Age:56,"Start date":"2012/06/01",Salary:"$115,000","Extn.":4389,"E-mail":"z.serrano@datatables.net"},{ID:50,"First name":"Jennifer","Last name":"Acosta",Position:"Junior Javascript Developer",Office:"Edinburgh",Age:43,"Start date":"2013/02/01",Salary:"$75,650","Extn.":3431,"E-mail":"j.acosta@datatables.net"},{ID:51,"First name":"Cara","Last name":"Stevens",Position:"Sales Assistant",Office:"New York",Age:46,"Start date":"2011/12/06",Salary:"$145,600","Extn.":3990,"E-mail":"c.stevens@datatables.net"},{ID:52,"First name":"Hermione","Last name":"Butler",Position:"Regional Director",Office:"London",Age:47,"Start date":"2011/03/21",Salary:"$356,250","Extn.":1016,"E-mail":"h.butler@datatables.net"},{ID:53,"First name":"Lael","Last name":"Greer",Position:"Systems Administrator",Office:"London",Age:21,"Start date":"2009/02/27",Salary:"$103,500","Extn.":6733,"E-mail":"l.greer@datatables.net"},{ID:54,"First name":"Jonas","Last name":"Alexander",Position:"Developer",Office:"San Francisco",Age:30,"Start date":"2010/07/14",Salary:"$86,500","Extn.":8196,"E-mail":"j.alexander@datatables.net"},{ID:55,"First name":"Shad","Last name":"Decker",Position:"Regional Director",Office:"Edinburgh",Age:51,"Start date":"2008/11/13",Salary:"$183,000","Extn.":6373,"E-mail":"s.decker@datatables.net"},{ID:56,"First name":"Michael","Last name":"Bruce",Position:"Javascript Developer",Office:"Singapore",Age:29,"Start date":"2011/06/27",Salary:"$183,000","Extn.":5384,"E-mail":"m.bruce@datatables.net"},{ID:57,"First name":"Donna","Last name":"Snider",Position:"Customer Support",Office:"New York",Age:27,"Start date":"2011/01/25",Salary:"$112,000","Extn.":4226,"E-mail":"d.snider@datatables.net"}]},bdcT:function(t,a){},hReb:function(t,a){},jwb1:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.8c463ca68db87244f115.js.map