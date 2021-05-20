(this["webpackJsonpinvoice-app"]=this["webpackJsonpinvoice-app"]||[]).push([[0],{153:function(e,t,a){},154:function(e,t,a){},231:function(e,t,a){"use strict";a.r(t);var n=a(31),r=a.n(n),s=(a(153),a(74)),i=(a(154),a(75)),c=a(41),l=a(105),o=a(237),d=a(134),u=a(0),j=a.n(u),b=a(29),p=a.n(b),h=a(15),m=a(146),O=a(236),f=a(238),x=a(235),g=a(32),y=a(234),v=a(239),N=a(45),I=function(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,"."),t[0]},k=function(e){var t=Object.keys(e),a=new RegExp("^code|^qty|^name|^price");return t.filter((function(e){return a.test(e)}))},_=function(e){return e.reduce((function(e,t){return e+t.qty*t.price}),0)},T=a(6),w=function(e){var t=e.editable,a=(e.record,e.children),n=e.dataIndex,r=e.rowIndex,s=e.title,i=e.state,c=e.dispatch,l=(e.formState,Object(m.a)(e,["editable","record","children","dataIndex","rowIndex","title","state","dispatch","formState"])),o=a;if(t){var d=Object(h.a)({},i.pagination),u=r+(d.current-1)*d.pageSize;o="qty"===n||"price"===n?Object(T.jsx)(O.a.Item,{name:"".concat(n).concat(u),rules:[{required:!0,message:"".concat(s," tidak boleh kosong")}],initialValue:i.data[u][n],preserve:!1,style:{marginBottom:0},children:Object(T.jsx)(N.a,Object(h.a)(Object(h.a)({},"price"===n?{format:I,allowNegative:!0}:{allowNegative:!1}),{},{value:i.data[u][n],displayType:"input",customInput:f.a,style:{width:"100%",textAlign:"end"},onValueChange:function(e){var t=e.value;c({type:"UPDATE_TABLE_INPUT_VALUE",payload:{val:parseInt(t),index:u,column:n}})}}))}):Object(T.jsx)(O.a.Item,{name:"".concat(n).concat(u),rules:[{required:!0,message:"".concat(s," tidak boleh kosong")}],initialValue:i.data[u][n],preserve:!1,style:{marginBottom:0},children:Object(T.jsx)(f.a,{maxLength:60,onBlur:function(e){return c({type:"UPDATE_TABLE_INPUT_VALUE",payload:{val:e.target.value,index:u,column:n}})}})})}return Object(T.jsx)("td",Object(h.a)(Object(h.a)({},l),{},{children:o}))},A=function(e){var t={body:{cell:w}},a=[];"faktur"===e.formState?a=[{title:e.state.columns[0],dataIndex:"id",width:"5%"},{title:e.state.columns[1],dataIndex:"code",editable:!0,width:"15%"},{title:e.state.columns[2],dataIndex:"name",editable:!0,width:"25%"},{title:e.state.columns[3],dataIndex:"qty",editable:!0,width:"10%",align:"right"},{title:e.state.columns[4],dataIndex:"price",editable:!0,width:"15%",align:"right"},{title:e.state.columns[5],dataIndex:"total",align:"right",render:function(t,a,n){var r=n+(e.state.pagination.current-1)*e.state.pagination.pageSize;return Object(T.jsx)(N.a,{format:I,displayType:"text",value:isNaN(e.state.data[r].qty)||isNaN(e.state.data[r].price)?0:e.state.data[r].qty*e.state.data[r].price})}},{title:"Hapus",dataIndex:"remove",render:function(t,a){return e.state.data.length>1?Object(T.jsx)(g.a,{type:"default",danger:!0,onClick:function(){return r(a.id)},children:"Hapus"}):null}}]:"surat"===e.formState&&(a=[{title:e.state.columns[0],dataIndex:"id",width:"5%"},{title:e.state.columns[1],dataIndex:"code",editable:!0,width:"15%"},{title:e.state.columns[2],dataIndex:"name",editable:!0,width:"50%"},{title:e.state.columns[3],dataIndex:"qty",editable:!0,width:"10%",align:"right"},{title:"Hapus",dataIndex:"remove",render:function(t,a){return e.state.data.length>1?Object(T.jsx)(g.a,{type:"default",danger:!0,onClick:function(){return r(a.id)},children:"Hapus"}):null}}]);var n=a.map((function(t){return t.editable?Object(h.a)(Object(h.a)({},t),{},{onCell:function(a,n){return{record:a,rowIndex:n,editable:t.editable,dataIndex:t.dataIndex,title:t.title,state:e.state,dispatch:e.dispatch,formState:e.formState}}}):t})),r=function(t){e.dispatch({type:"REMOVE_ITEM",payload:t})},s=function(){return Math.ceil(e.state.data.length/e.state.pagination.pageSize)!==e.state.pagination.current&&"kwitansi"!==e.formState};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(i.a,{children:Object(T.jsx)(c.a,{span:"22",offset:"1",children:Object(T.jsx)(y.a,Object(h.a)({components:t,dataSource:e.state.data,columns:n,pagination:e.state.pagination,onChange:function(t){return function(t){var a=k(e.form.getFieldsValue());e.form.validateFields(a).then((function(a){e.dispatch({type:"CHANGE_PAGE",payload:t.current})})).catch((function(e){console.log("form values are missing")}))}(t)},rowKey:"count"},"faktur"===e.formState&&{footer:function(){return Object(T.jsxs)("div",{style:{fontWeight:"bold"},children:[Object(T.jsxs)(i.a,{children:[Object(T.jsx)(c.a,{offset:"15",span:"3",children:"Subtotal"}),Object(T.jsx)(c.a,{span:"3",offset:"3",style:{textAlign:"end"},children:Object(T.jsx)(N.a,{displayType:"text",format:I,value:isNaN(e.state.buyerInfo.subtotal)?0:e.state.buyerInfo.subtotal})})]}),Object(T.jsxs)(i.a,{align:"middle",children:[Object(T.jsx)(c.a,{offset:"15",span:"3",children:"Discount"}),Object(T.jsx)(c.a,{span:"2",children:Object(T.jsx)(O.a.Item,{name:"discount",rules:[{required:!0,message:"Discount tidak boleh kosong"}],initialValue:e.state.buyerInfo.discount,style:{marginBottom:0,fontWeight:"normal"},children:Object(T.jsx)(N.a,{suffix:"%",customInput:f.a,displayType:"input",allowNegative:!1,value:e.state.buyerInfo.discount,style:{textAlign:"end"},onValueChange:function(t){var a=t.value;e.dispatch({type:"UPDATE_FORM_INPUT_VALUE",payload:{name:"discount",value:parseInt(a)}})}})})}),Object(T.jsx)(c.a,{span:"3",offset:"1",style:{textAlign:"end"},children:Object(T.jsx)(N.a,{displayType:"text",format:I,value:isNaN(e.state.buyerInfo.discount)||isNaN(e.state.buyerInfo.subtotal)?0:e.state.buyerInfo.subtotal*e.state.buyerInfo.discount/100})})]}),Object(T.jsxs)(i.a,{children:[Object(T.jsx)(c.a,{offset:"15",span:"3",children:"Grand Total"}),Object(T.jsx)(c.a,{span:"3",offset:"3",style:{textAlign:"end"},children:Object(T.jsx)(N.a,{displayType:"text",format:I,value:isNaN(e.state.buyerInfo.discount)||isNaN(e.state.buyerInfo.subtotal)?0:e.state.buyerInfo.subtotal-parseInt(e.state.buyerInfo.subtotal*e.state.buyerInfo.discount/100)})})]})]})}}))})}),Object(T.jsxs)(i.a,{justify:"start",children:[Object(T.jsx)(c.a,{children:Object(T.jsx)(g.a,{type:"default",size:"large",htmlType:"button",hidden:s(),onClick:function(){var t=k(e.form.getFieldsValue()),a={id:e.state.data.length+1,count:e.state.data[e.state.data.length-1].count+1,code:"",name:"",qty:1,price:0};e.state.data.length%e.state.pagination.pageSize===0?e.form.validateFields(t).then((function(t){e.dispatch({type:"ADD_ITEM",payload:a})})).catch((function(e){console.log("form values are missing")})):e.dispatch({type:"ADD_ITEM",payload:a})},children:"Tambah Barang Baru"})}),Object(T.jsx)(c.a,{children:Object(T.jsx)(c.a,{offset:"3",children:Object(T.jsx)(v.a,{title:"Yakin ingin hapus semua barang?",onConfirm:function(){e.dispatch({type:"REMOVE_ALL",payload:e.form}),e.form.setFieldsValue({code0:"",name0:"",qty0:1,price0:0})},okText:"Yes",cancelText:"No",children:Object(T.jsx)(g.a,{type:"default",size:"large",htmlType:"button",danger:!0,children:"Hapus Semua Barang"})})})}),Object(T.jsx)(c.a,{offset:"12",children:Object(T.jsx)(O.a.Item,{style:{marginBottom:0},children:Object(T.jsx)(g.a,{type:"primary",size:"large",htmlType:"submit",hidden:s(),children:"Generate"})})})]})]})},S=function(e){var t=O.a.useForm(),a=Object(s.a)(t,1)[0];return Object(T.jsxs)(O.a,{form:a,layout:"vertical",onFinish:e.submitHandler,scrollToFirstError:!0,children:[Object(T.jsxs)(i.a,{children:[Object(T.jsx)(c.a,{span:"13",offset:"1",children:Object(T.jsx)(O.a.Item,{name:"companyName",rules:[{required:!0,message:"Nama perusahaan tidak boleh kosong"}],label:"Nama Perusahaan",initialValue:e.state.buyerInfo.name,children:Object(T.jsx)(f.a,{onBlur:function(t){return e.dispatch({type:"UPDATE_FORM_INPUT_VALUE",payload:{name:"name",value:t.target.value}})}})})}),Object(T.jsx)(c.a,{span:"8",offset:"1",children:Object(T.jsx)(O.a.Item,{name:"city",label:"Kota",rules:[{required:!0,message:"Kota tidak boleh kosong"}],initialValue:e.state.buyerInfo.city,children:Object(T.jsx)(f.a,{onBlur:function(t){return e.dispatch({type:"UPDATE_FORM_INPUT_VALUE",payload:{name:"city",value:t.target.value}})}})})})]}),Object(T.jsx)(i.a,{children:Object(T.jsx)(c.a,{span:"22",offset:"1",children:Object(T.jsx)(O.a.Item,{name:"address",label:"Alamat Perusahaan",rules:[{required:!0,message:"Alamat perusahaan tidak boleh kosong"}],initialValue:e.state.buyerInfo.address,children:Object(T.jsx)(f.a,{maxLength:80,onBlur:function(t){return e.dispatch({type:"UPDATE_FORM_INPUT_VALUE",payload:{name:"address",value:t.target.value}})}})})})}),Object(T.jsxs)(i.a,{children:[Object(T.jsx)(c.a,{span:"6",offset:"1",children:Object(T.jsx)(O.a.Item,{name:"date",label:"Tanggal",rules:[{required:!0,message:"Tanggal tidak boleh kosong"}],initialValue:p()(e.state.buyerInfo.date,"DD-MM-YYYY"),children:Object(T.jsx)(x.a,{format:"DD-MM-YYYY",onBlur:function(t){return e.dispatch({type:"UPDATE_FORM_INPUT_VALUE",payload:{name:"date",value:t.target.value}})}})})}),"faktur"===e.formState&&Object(T.jsx)(c.a,{span:"7",children:Object(T.jsx)(O.a.Item,{name:"due",label:"Jatuh Tempo",rules:[{required:!0,message:"Jatuh tempo tidak boleh kosong"}],initialValue:p()(e.state.buyerInfo.due,"DD-MM-YYYY"),children:Object(T.jsx)(x.a,{format:"DD-MM-YYYY",onBlur:function(t){return e.dispatch({type:"UPDATE_FORM_INPUT_VALUE",payload:{name:"due",value:t.target.value}})}})})}),Object(T.jsx)(c.a,{flex:"auto",pull:"1",children:Object(T.jsx)(O.a.Item,{name:"number",label:"faktur"===e.formState?"Nomor Faktur Jual":"Nomor Surat Jalan",rules:[{required:!0,message:"Nomor faktur jual tidak boleh kosong"}],initialValue:e.state.buyerInfo.number,children:Object(T.jsx)(f.a,{onBlur:function(t){return e.dispatch({type:"UPDATE_FORM_INPUT_VALUE",payload:{name:"number",value:t.target.value}})}})})})]}),Object(T.jsx)(i.a,{children:Object(T.jsx)(c.a,{span:"22",offset:"1",children:Object(T.jsx)(O.a.Item,{label:"Keterangan",name:"note",initialValue:e.state.buyerInfo.note,children:Object(T.jsx)(f.a.TextArea,{maxLength:120,onBlur:function(t){return e.dispatch({type:"UPDATE_FORM_INPUT_VALUE",payload:{name:"note",value:t.target.value}})}})})})}),Object(T.jsx)(A,{dispatch:e.dispatch,state:e.state,form:a,formState:e.formState,isButtonHidden:e.isButtonHidden})]})},E=a(102),U=a(103),D=a(108),P=a(104),M=a.p+"static/media/logo_with_text.def95dbe.png",V=function(e){Object(D.a)(a,e);var t=Object(P.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(U.a)(a,[{key:"render",value:function(){var e=10;"surat"===this.props.formState&&(e=14);for(var t=this.props.state.data.length,a=Math.ceil(t/e),n=[],r=0;r<a;r++){var s=r*e,i=s+e,c=t%e;r===a-1&&0!==c&&(i=s+c),n.push(Object(T.jsxs)("div",{className:"invoice page-break",children:[Object(T.jsx)(C,Object(h.a)(Object(h.a)({},this.props.state.buyerInfo),{},{formState:this.props.formState,page:r+1,pageCount:a})),Object(T.jsx)(F,Object(h.a)({},this.props.state.buyerInfo)),Object(T.jsx)(B,Object(h.a)(Object(h.a)({},this.props.state.buyerInfo),{},{formState:this.props.formState})),Object(T.jsx)(Y,Object(h.a)(Object(h.a)({},this.props),{},{start:s,end:i})),Object(T.jsx)(L,Object(h.a)({},this.props.state))]},"page".concat(r+1)))}return Object(T.jsx)("div",{children:n})}}]),a}(j.a.PureComponent),C=function(e){return Object(T.jsxs)("div",{children:[Object(T.jsx)("div",{className:"column",children:Object(T.jsx)("img",{src:M,alt:"logo"})}),Object(T.jsxs)("h1",{id:"title",className:"column",children:["faktur"===e.formState&&"FAKTUR PENJUALAN","surat"===e.formState&&"SURAT JALAN"]}),Object(T.jsxs)("h3",{id:"pageNo",className:"column",children:["Page ",e.page," of ",e.pageCount]})]})},F=function(e){return Object(T.jsxs)("div",{id:"buyerCompany",className:"column",children:[Object(T.jsx)("h3",{children:"Kepada Yth."}),Object(T.jsx)("h3",{children:e.name}),Object(T.jsx)("h3",{children:e.address}),Object(T.jsx)("h3",{children:e.city})]})},B=function(e){return Object(T.jsx)("div",{className:"column",children:Object(T.jsxs)("div",{className:"info",children:[Object(T.jsxs)("h3",{children:[Object(T.jsxs)("span",{children:["No. ",e.formState]}),": ",e.number]}),Object(T.jsxs)("h3",{children:[Object(T.jsx)("span",{children:"Tanggal dokumen"}),": ",e.date]}),"faktur"===e.formState&&Object(T.jsxs)("h3",{children:[Object(T.jsx)("span",{children:"Jatuh tempo (30 hari)"}),": ",e.due]})]})})},Y=function(e){var t=e.start,a=e.end,n=e.state.data.slice(t,a);return Object(T.jsxs)("table",{id:"innerTable",children:["faktur"===e.formState?Object(T.jsxs)("colgroup",{children:[Object(T.jsx)("col",{span:"1",style:{width:"5%"}}),Object(T.jsx)("col",{span:"1",style:{width:"20%"}}),Object(T.jsx)("col",{span:"1",style:{width:"45%"}}),Object(T.jsx)("col",{span:"1",style:{width:"5%"}}),Object(T.jsx)("col",{span:"1",style:{width:"10%"}}),Object(T.jsx)("col",{span:"1",style:{width:"15%"}})]}):Object(T.jsxs)("colgroup",{children:[Object(T.jsx)("col",{span:"1",style:{width:"5%"}}),Object(T.jsx)("col",{span:"1",style:{width:"20%"}}),Object(T.jsx)("col",{span:"1",style:{width:"70%"}}),Object(T.jsx)("col",{span:"1",style:{width:"5%"}})]}),Object(T.jsx)("thead",{children:Object(T.jsx)("tr",{children:e.state.columns.map((function(e,t){return Object(T.jsx)("th",Object(h.a)(Object(h.a)({},("harga"===e.toLowerCase()||"total"===e.toLowerCase()||"qty"===e.toLowerCase())&&{className:"numeric"}),{},{children:e}),t)}))})}),Object(T.jsx)("tbody",{children:n.map((function(t,a){return Object(T.jsxs)("tr",{className:"items",children:[Object.keys(t).map((function(a,n){if("count"!==a&&("price"!==a&&"surat"===e.formState||"faktur"===e.formState))return Object(T.jsx)("td",Object(h.a)(Object(h.a)({},("price"===a||"qty"===a)&&{className:"numeric"}),{},{children:"price"===a?Object(T.jsx)(N.a,{format:I,displayType:"text",value:isNaN(t[a])?0:t[a]}):"qty"===a&&isNaN(t[a])?0:t[a]}),n)})),"faktur"===e.formState&&Object(T.jsx)("td",{className:"numeric",children:Object(T.jsx)(N.a,{format:I,displayType:"text",value:isNaN(t.qty)||isNaN(t.price)?0:t.qty*t.price})})]},a)}))}),Object(T.jsxs)("tfoot",{children:["faktur"===e.formState&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("tr",{className:"numeric",id:"subtotal",children:[Object(T.jsx)("td",{colSpan:"5",children:"Subtotal"}),Object(T.jsx)("td",{children:I(e.state.buyerInfo.subtotal)})]}),Object(T.jsxs)("tr",{className:"numeric",id:"discount",children:[Object(T.jsx)("td",{colSpan:"5",children:"Discount (".concat(I(e.state.buyerInfo.discount),"%)")}),Object(T.jsx)("td",{children:I(e.state.buyerInfo.subtotal*e.state.buyerInfo.discount/100)})]}),Object(T.jsxs)("tr",{className:"numeric",id:"grandTotal",children:[Object(T.jsx)("td",{colSpan:"5",children:"Grand total"}),Object(T.jsx)("td",{children:I(e.state.buyerInfo.subtotal-parseInt(e.state.buyerInfo.subtotal*e.state.buyerInfo.discount/100))})]})]}),Object(T.jsx)("tr",{children:Object(T.jsx)("td",{colSpan:"faktur"===e.formState?6:4,children:Object(T.jsxs)("div",{id:"note",children:["Keterangan:\xa0",e.state.buyerInfo.note]})})})]})]})},L=function(e){return Object(T.jsxs)("footer",{children:[Object(T.jsx)(q,{person:"Penerima"}),Object(T.jsx)(q,{person:"faktur"===e.formState?"Penjual":"Hormat kami"}),Object(T.jsx)(q,{person:"Checklist"})]})},q=function(e){var t=e.person;return Object(T.jsxs)("div",{className:"sign",children:[Object(T.jsx)("h3",{children:t}),Object(T.jsx)("span",{children:"________________"})]})},R=a.p+"static/media/logo_with_text_rotated.0b99caeb.png",z=a(233),H=a(240),J=z.a.Header,K=z.a.Sider,G=z.a.Content,W=function(e){Object(D.a)(a,e);var t=Object(P.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(U.a)(a,[{key:"render",value:function(){return Object(T.jsxs)(z.a,{style:{backgroundColor:"transparent",height:"99%",fontSize:"1.2em"},children:[Object(T.jsx)(K,{width:"20%",style:{backgroundColor:"transparent",border:"solid 4px black",borderStyle:"double"},children:Object(T.jsx)("div",{id:"logo",children:Object(T.jsx)("img",{src:R,alt:"logo"})})}),Object(T.jsxs)(z.a,{style:{backgroundColor:"transparent",border:"solid 1px black"},children:[Object(T.jsx)(J,{style:{backgroundColor:"transparent",border:"solid 1px black"},children:Object(T.jsx)("h1",{children:"Kwitansi"})}),Object(T.jsx)(G,{style:{backgroundColor:"transparent",border:"solid 1px black",height:"40%"},children:Object(T.jsxs)(H.b,{direction:"vertical",size:"small",style:{width:"100%"},children:[Object(T.jsxs)(i.a,{style:{marginTop:"1em"},children:[Object(T.jsx)(c.a,{span:"6",offset:"1",children:"No. kwitansi"}),Object(T.jsx)(c.a,{span:"1",children:":"}),Object(T.jsx)(c.a,{className:"field",span:"14",children:this.props.state.data.receiptNumber})]}),Object(T.jsxs)(i.a,{align:"bottom",children:[Object(T.jsx)(c.a,{span:"6",offset:"1",children:"Sudah terima dari"}),Object(T.jsx)(c.a,{span:"1",children:":"}),Object(T.jsx)(c.a,{className:"field",span:"14",children:this.props.state.data.name})]}),Object(T.jsxs)(i.a,{children:[Object(T.jsx)(c.a,{span:"6",offset:"1",children:"Banyaknya uang"}),Object(T.jsx)(c.a,{span:"1",children:":"}),Object(T.jsx)(c.a,{className:"field",span:"14",children:this.props.state.data.amountWritten})]}),Object(T.jsxs)(i.a,{children:[Object(T.jsx)(c.a,{span:"6",offset:"1",children:"Untuk pembayaran"}),Object(T.jsx)(c.a,{span:"1",children:":"}),Object(T.jsx)(c.a,{className:"field ",span:"14",children:Object(T.jsx)("div",{id:"textarea",children:this.props.state.data.matter})})]}),Object(T.jsx)(i.a,{children:Object(T.jsx)(c.a,{className:"field textarea",offset:"8",span:"14",children:"\xa0"})}),Object(T.jsx)(i.a,{children:Object(T.jsx)(c.a,{className:"field textarea",offset:"8",span:"14",children:"\xa0"})}),Object(T.jsx)(i.a,{children:Object(T.jsx)(c.a,{children:"\xa0"})}),Object(T.jsx)(i.a,{children:Object(T.jsx)(c.a,{className:"field",offset:"15",span:"7",style:{textAlign:"center"},children:this.props.state.data.date})}),Object(T.jsxs)(i.a,{className:"footer",children:[Object(T.jsx)(c.a,{offset:"1",span:"4",children:"Cek / Giro No."}),Object(T.jsx)(c.a,{className:"field",span:"8",children:this.props.state.data.giroNumber})]}),Object(T.jsxs)(i.a,{className:"footer",children:[Object(T.jsx)(c.a,{offset:"1",span:"4",children:"Jumlah"}),Object(T.jsxs)(c.a,{className:"field",span:"8",children:["Rp.\xa0",this.props.state.data.amount]}),Object(T.jsx)(c.a,{className:"field",offset:"16",span:"5"})]})]})})]})]})}}]),a}(j.a.PureComponent),Q=a(76),X=function(e,t){switch(t.type){case"ADD_ITEM":var a=t.payload,n=Object(Q.a)(e.data).length,r=e.pagination.pageSize,s=Math.ceil((n+1)/r);return Object(h.a)(Object(h.a)({},e),{},{data:[].concat(Object(Q.a)(e.data),[a]),pagination:Object(h.a)(Object(h.a)({},e.pagination),{},{current:s})});case"REMOVE_ITEM":for(var i=t.payload,c=Object(Q.a)(e.data),l=Math.ceil(c.length/e.pagination.pageSize),o=c.filter((function(e){return e.id!==i})),d=i-1;d<o.length;d++)o[d].id=o[d].id-1;var u=_(o),j=e.pagination.current;return o.length%e.pagination.pageSize===0&&l===j&&(j-=1),Object(h.a)(Object(h.a)({},e),{},{data:o,pagination:Object(h.a)(Object(h.a)({},e.pagination),{},{current:j}),buyerInfo:Object(h.a)(Object(h.a)({},e.buyerInfo),{},{subtotal:u})});case"REMOVE_ALL":return Object(h.a)(Object(h.a)({},e),{},{data:[{id:1,count:1,code:"",name:"",qty:1,price:0}],buyerInfo:Object(h.a)(Object(h.a)({},e.buyerInfo),{},{subtotal:0}),pagination:Object(h.a)(Object(h.a)({},e.pagination),{},{current:1})});case"UPDATE_FORM_INPUT_VALUE":var b=t.payload.value,p=t.payload.name,m=Object(h.a)({},e.buyerInfo);return m[p]=b,Object(h.a)(Object(h.a)({},e),{},{buyerInfo:Object(h.a)({},m)});case"UPDATE_TABLE_INPUT_VALUE":var O=t.payload.index,f=t.payload.val,x=t.payload.column,g=Object(Q.a)(e.data),y=Object(h.a)({},g[O]);y[x]=f,g[O]=y;var v=_(g);return Object(h.a)(Object(h.a)({},e),{},{data:Object(Q.a)(g),buyerInfo:Object(h.a)(Object(h.a)({},e.buyerInfo),{},{subtotal:v})});case"CHANGE_PAGE":var N=t.payload;return Object(h.a)(Object(h.a)({},e),{},{pagination:Object(h.a)(Object(h.a)({},e.pagination),{},{current:N})});case"CHANGE_FORM":var I="faktur"===t.payload?["No.","Kode Barang","Nama Barang","Qty","Harga","Total"]:["No.","Kode Barang","Nama Barang","Qty"];return Object(h.a)(Object(h.a)({},e),{},{columns:I});default:throw new Error("No matching case found")}},Z=function(e,t){switch(t.type){case"UPDATE_FORM_INPUT_VALUE":var a=t.payload.value,n=t.payload.name,r=Object(h.a)({},e.data);return r[n]=a,Object(h.a)(Object(h.a)({},e),{},{data:r});default:throw new Error("No matching case found")}},$=function(){var e=Object(u.useContext)(le).handleFinish;return Object(T.jsx)("div",{id:"kwitansi",children:Object(T.jsxs)(O.a,{layout:"vertical",scrollToFirstError:!0,onFinish:e,children:[Object(T.jsxs)(i.a,{children:[Object(T.jsx)(c.a,{offset:"1",span:"13",children:Object(T.jsx)(ee,{})}),Object(T.jsx)(c.a,{offset:"1",span:"8",children:Object(T.jsx)(te,{})})]}),Object(T.jsxs)(i.a,{children:[Object(T.jsx)(c.a,{offset:"1",span:"7",children:Object(T.jsx)(ae,{})}),Object(T.jsx)(c.a,{flex:"auto",pull:"1",children:Object(T.jsx)(ne,{})})]}),Object(T.jsxs)(i.a,{children:[Object(T.jsx)(c.a,{offset:"1",span:"5",children:Object(T.jsx)(re,{})}),Object(T.jsx)(c.a,{offset:"1",span:"16",children:Object(T.jsx)(se,{})})]}),Object(T.jsx)(i.a,{children:Object(T.jsx)(c.a,{offset:"1",span:"22",children:Object(T.jsx)(ie,{})})}),Object(T.jsx)(i.a,{justify:"end",children:Object(T.jsx)(c.a,{pull:"1",children:Object(T.jsx)(ce,{})})})]})})},ee=function(){var e=Object(u.useContext)(le);return Object(T.jsx)(O.a.Item,{name:"name",label:"Nama Pembayar",rules:[{required:!0,message:"Nama pembayar tidak boleh kosong"}],initialValue:e.receiptState.data.name,children:Object(T.jsx)(f.a,{onBlur:function(t){return e.receiptDispatch({type:"UPDATE_FORM_INPUT_VALUE",payload:{name:"name",value:t.target.value}})}})})},te=function(){var e=Object(u.useContext)(le);return Object(T.jsx)(O.a.Item,{name:"receiptNumber",label:"Nomor Kwitansi",rules:[{required:!0,message:"Nomor kwitansi tidak boleh kosong"}],initialValue:e.receiptState.data.receiptNumber,children:Object(T.jsx)(f.a,{onBlur:function(t){return e.receiptDispatch({type:"UPDATE_FORM_INPUT_VALUE",payload:{name:"receiptNumber",value:t.target.value}})}})})},ae=function(){var e=Object(u.useContext)(le);return Object(T.jsx)(O.a.Item,{name:"date",label:"Tanggal",rules:[{required:!0,message:"Tanggal tidak boleh kosong"}],initialValue:p()(e.receiptState.data.date,"DD-MM-YYYY"),children:Object(T.jsx)(x.a,{format:"DD-MM-YYYY",onBlur:function(t){return e.receiptDispatch({type:"UPDATE_FORM_INPUT_VALUE",payload:{name:"date",value:t.target.value}})}})})},ne=function(){var e=Object(u.useContext)(le);return Object(T.jsx)(O.a.Item,{name:"giroNumber",label:"Nomor cek / giro",rules:[{required:!0,message:"Nomor cek / giro tidak boleh kosong"}],initialValue:e.receiptState.data.giroNumber,children:Object(T.jsx)(f.a,{onBlur:function(t){return e.receiptDispatch({type:"UPDATE_FORM_INPUT_VALUE",payload:{name:"giroNumber",value:t.target.value}})}})})},re=function(){var e=Object(u.useContext)(le);return Object(T.jsx)(O.a.Item,{name:"amount",label:"Jumlah Uang",rules:[{required:!0,message:"Jumlah uang tidak boleh kosong"}],initialValue:e.receiptState.data.amount,children:Object(T.jsx)(f.a,{onBlur:function(t){return e.receiptDispatch({type:"UPDATE_FORM_INPUT_VALUE",payload:{name:"amount",value:t.target.value}})}})})},se=function(){var e=Object(u.useContext)(le);return Object(T.jsx)(O.a.Item,{name:"amountWritten",label:"Jumlah Uang (Terbilang)",rules:[{required:!0,message:"Jumlah uang (terbilang) tidak boleh kosong"}],initialValue:e.receiptState.data.amountWritten,children:Object(T.jsx)(f.a,{onBlur:function(t){return e.receiptDispatch({type:"UPDATE_FORM_INPUT_VALUE",payload:{name:"amountWritten",value:t.target.value}})}})})},ie=function(){var e=Object(u.useContext)(le);return Object(T.jsx)(O.a.Item,{name:"matter",label:"Untuk Kepentingan",rules:[{required:!0,message:"Kepentingan tidak boleh kosong"}],initialValue:e.receiptState.data.matter,children:Object(T.jsx)(f.a.TextArea,{maxLength:120,onBlur:function(t){return e.receiptDispatch({type:"UPDATE_FORM_INPUT_VALUE",payload:{name:"matter",value:t.target.value}})}})})},ce=function(){return Object(T.jsx)(O.a.Item,{style:{marginBottom:0},children:Object(T.jsx)(g.a,{type:"primary",size:"large",htmlType:"submit",children:"Generate"})})},le=j.a.createContext(),oe=function(){var e={data:[{id:1,count:1,code:"",name:"",qty:1,price:0}],buyerInfo:{name:"",number:"",address:"",date:p()(new Date).format("DD-MM-YYYY"),due:p()(new Date).add(30,"days").format("DD-MM-YYYY"),city:"",note:"",discount:0,subtotal:0},columns:["No.","Kode Barang","Nama Barang","Qty","Harga","Total"],pagination:{current:1,pageSize:5}},t={data:{name:"",receiptNumber:"",date:p()(new Date).format("DD-MM-YYYY"),giroNumber:"",amount:"",amountWritten:"",matter:""}},a=Object(u.useState)("faktur"),n=Object(s.a)(a,2),r=n[0],j=n[1],b=Object(u.useReducer)(X,e),h=Object(s.a)(b,2),m=h[0],O=h[1],f=Object(u.useReducer)(Z,t),x=Object(s.a)(f,2),g=x[0],y=x[1],v=Object(u.useRef)(),N=Object(u.useRef)(),I=Object(d.useReactToPrint)("kwitansi"!==r?{content:function(){return v.current},pageStyle:'\n @media print {  \n   html *{\n      font-family: "Trebuchet MS";\n    }\n      @page { \n      size: 21.59cm 13.97cm portrait;\n    } \n    .numeric{\n      text-align:right;\n    }\n    .page-break{\n      page-break-before: always;\n      page-break-after: always;\n      display: block;\n    }\n\n    #title{\n      text-align: center;\n    }\n\n    .invoice{\n      font-size: 0.7em;\n    }\n    \n    #pageNo{\n      padding-left: 10%;\n    }\n    #buyerCompany{\n      width: 66%;\n    }\n    .column{\n      display: inline-block;\n      width: 33%;\n      margin-bottom: 0.5em;\n    }\n    \n    .info {\n      display: table;\n    }\n    .info h3 {\n      display: table-row;\n    }\n    .info span{\n      display: table-cell;\n      padding-right: 2mm;\n      padding-top: 1.5mm;\n    }\n     table{\n        width: 100%;\n        height:21.5em;\n        font-size: 1.2em;\n        border-top: solid 1px black;\n      }\n      table tr{\n        height:1em;\n      }\n      table tr:last-child{\n        height:auto;\n        border-bottom: solid 1px black;\n      }\n      table td, table th{\n        border-left: solid 1px black;\n        border-right: solid 1px black;\n        padding-left: 1mm;\n        padding-right: 1mm;\n        vertical-align:text-top; \n      }\n      table, table th{\n        border-bottom: solid 1px black;\n      }\n      table, table th{\n        border: solid 1px black;\n      }\n      table #note td, table #subtotal td, table #discount td{\n        border-top: none;\n        border-bottom: none;\n      }\n       table #grandTotal td{\n         border-bottom: solid 1px black;\n         font-weight: bold;\n       }\n      table #note{\n        height: 1.5em;\n        overflow: hidden;\n      }\n\n      h3 {\n        line-height:1em;\n      }\n      footer {\n        display: flex;\n        position:fixed;\n        bottom: 0;\n        left: 30%;\n        text-align:center;\n      }\n      .sign:nth-child(2){\n        margin-left: 5em;\n      }\n      \n      .sign:last-child{\n        margin-left: 5em;\n      }\n      .sign h3{\n        padding-bottom: 3em;\n      }\n  }\n  '}:{content:function(){return N.current},pageStyle:'\n    @media print{\n      html *{\n        font-family: "Trebuchet MS";\n      }\n      \n      @page { \n        size: 21.59cm 13.97cm portrait;\n      }\n\n      h1 {\n        font-size: 2em;\n      }\n\n      #logo{\n        position: absolute;\n        bottom: 5%;\n        text-align: center; \n        left: 30%;\n      }\n\n      .field {\n        border-bottom: solid 2px black;\n      }\n\n      #textarea{\n        position: absolute;\n        word-wrap: break-word;\n        word-break: break-all;\n        line-height: 2.1em;\n        top: -1mm;\n      }\n\n      .footer{\n        font-size: 0.8em;\n      }\n    }\n'});return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("div",{style:{overflow:"hidden",height:0},children:"kwitansi"!==r?Object(T.jsx)(V,{ref:v,state:m,formState:r}):Object(T.jsx)(W,{ref:N,state:g})}),Object(T.jsxs)(i.a,{style:{marginTop:"1vw"},children:[Object(T.jsx)(c.a,{offset:"4",children:Object(T.jsxs)(l.a.Group,{defaultValue:"faktur",buttonStyle:"solid",onChange:function(e){var t=e.target.value;j(t),O({type:"CHANGE_FORM",payload:t})},children:[Object(T.jsx)(l.a.Button,{value:"faktur",children:"Faktur Penjualan"}),Object(T.jsx)(l.a.Button,{value:"surat",children:"Surat Jalan"}),Object(T.jsx)(l.a.Button,{value:"kwitansi",children:"Kwitansi"})]})}),Object(T.jsx)(c.a,{offset:"2",children:Object(T.jsxs)("h2",{children:["faktur"===r&&"Info Faktur","surat"===r&&"Info Surat Jalan","kwitansi"===r&&"Info Kwitansi"]})})]}),Object(T.jsx)(i.a,{children:Object(T.jsx)(c.a,{offset:"4",span:"16",children:Object(T.jsx)(o.a,{children:"kwitansi"!==r?Object(T.jsx)(S,{submitHandler:I,state:m,dispatch:O,formState:r}):Object(T.jsx)(le.Provider,{value:{receiptState:g,receiptDispatch:y,handleFinish:I},children:Object(T.jsx)($,{})})})})})]})},de=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,241)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),s(e),i(e)}))};r.a.render(Object(T.jsx)(oe,{}),document.getElementById("root")),de()}},[[231,1,2]]]);
//# sourceMappingURL=main.b0682ed8.chunk.js.map