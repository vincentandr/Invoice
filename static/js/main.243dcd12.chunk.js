(this["webpackJsonpinvoice-app"]=this["webpackJsonpinvoice-app"]||[]).push([[0],{146:function(e,t,a){},147:function(e,t,a){},224:function(e,t,a){"use strict";a.r(t);var n=a(30),c=a.n(n),i=(a(146),a(147),a(138)),l=a(15),s=a(111),r=a(0),o=a.n(r),d=a(229),b=a(71),j=a(41),u=a(230),m=a(231),h=a(228),p=a(31),O=a(227),y=a(232),g=a(45),x=a(123),I=a(72),f=function(e){var t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,"."),t[0]},N=function(e){var t=Object.keys(e),a=new RegExp("^code|^qty|^name|^price");return t.filter((function(e){return a.test(e)}))},M=function(e){return e.reduce((function(e,t){return e+t.qty*t.price}),0)},v=function(e,t){switch(t.type){case"ADD_ITEM":var a=t.payload,n=Object(I.a)(e.data).length,c=e.pagination.pageSize,i=Math.ceil((n+1)/c);return Object(l.a)(Object(l.a)({},e),{},{data:[].concat(Object(I.a)(e.data),[a]),pagination:Object(l.a)(Object(l.a)({},e.pagination),{},{current:i})});case"REMOVE_ITEM":for(var s=t.payload,r=Object(I.a)(e.data),o=Math.ceil(r.length/e.pagination.pageSize),d=r.filter((function(e){return e.id!==s})),b=s-1;b<d.length;b++)d[b].id=d[b].id-1;var j=M(d),u=e.pagination.current;return d.length%e.pagination.pageSize===0&&o===u&&(u-=1),Object(l.a)(Object(l.a)({},e),{},{data:d,pagination:Object(l.a)(Object(l.a)({},e.pagination),{},{current:u}),buyerInfo:Object(l.a)(Object(l.a)({},e.buyerInfo),{},{subtotal:j})});case"REMOVE_ALL":return Object(l.a)(Object(l.a)({},e),{},{data:[{id:1,count:1,code:"",name:"",qty:1,price:0}],buyerInfo:Object(l.a)(Object(l.a)({},e.buyerInfo),{},{subtotal:0}),pagination:Object(l.a)(Object(l.a)({},e.pagination),{},{current:1})});case"UPDATE_FORM_INPUT_VALUE":var m=t.payload.value,h=t.payload.name,p=Object(l.a)({},e.buyerInfo);return p[h]=m,Object(l.a)(Object(l.a)({},e),{},{buyerInfo:Object(l.a)({},p)});case"UPDATE_TABLE_INPUT_VALUE":var O=t.payload.index,y=t.payload.val,g=t.payload.column,x=Object(I.a)(e.data),f=Object(l.a)({},x[O]);f[g]=y,x[O]=f;var N=M(x);return Object(l.a)(Object(l.a)({},e),{},{data:Object(I.a)(x),buyerInfo:Object(l.a)(Object(l.a)({},e.buyerInfo),{},{subtotal:N})});case"CHANGE_PAGE":var v=t.payload;return Object(l.a)(Object(l.a)({},e),{},{pagination:Object(l.a)(Object(l.a)({},e.pagination),{},{current:v})});default:throw new Error("No matching case found")}},A=a(33),T=a.n(A),w=a(124),D=a(125),E=a(139),k=a(135),Y=a(6),G=function(e){Object(E.a)(a,e);var t=Object(k.a)(a);function a(){return Object(w.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){for(var e=this.props.state.data.length,t=Math.ceil(e/10),a=[],n=0;n<t;n++){var c=10*n,i=c+10,s=e%10;n===t-1&&0!==s&&(i=c+s),a.push(Object(Y.jsxs)("div",{className:"invoice page-break",children:[Object(Y.jsx)(Z,Object(l.a)(Object(l.a)({},this.props.state.buyerInfo),{},{page:n+1,pageCount:t})),Object(Y.jsx)(R,Object(l.a)({},this.props.state.buyerInfo)),Object(Y.jsx)(F,Object(l.a)({},this.props.state.buyerInfo)),Object(Y.jsx)(U,Object(l.a)(Object(l.a)({},this.props),{},{start:c,end:i})),Object(Y.jsx)(B,Object(l.a)({},this.props.state))]},"page".concat(n+1)))}return Object(Y.jsx)("div",{children:a})}}]),a}(o.a.PureComponent),Z=function(e){return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("div",{className:"column",children:Object(Y.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAAAbCAYAAAAnO/CsAAAACXBIWXMAAAsTAAALEwEAmpwYAAALLGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNS0xMlQyMTozMDozNiswNzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNS0xMlQyMTozOTo0MiswNzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDUtMTJUMjE6Mzk6NDIrMDc6MDAiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmZlNDBiNDA2LTJmZjAtNDU0ZC1hNWU3LTQwMDhmMTM0NmI1MSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVlNWZiNmFhLWM0NzItZjc0Ni05YmRmLThjOGE0ZmRhNzc0NSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjY4MTMyOGJlLWRhMjYtMzk0ZS1iMTViLTg3NWY1YWY3NTJhYSI+IDxwaG90b3Nob3A6VGV4dExheWVycz4gPHJkZjpCYWc+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iVUQuIE1BSlUgSkFZQSBESUVTRUwiIHBob3Rvc2hvcDpMYXllclRleHQ9IlVELiBNQUpVIEpBWUEgRElFU0VMIi8+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iU1BBUkUgUEFSVCBESUVTRUwgJmFtcDsgQUxBVC1BTEFUIFRFS05JSyIgcGhvdG9zaG9wOkxheWVyVGV4dD0iU1BBUkUgUEFSVCBESUVTRUwgJmFtcDsgQUxBVC1BTEFUIFRFS05JSyIvPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOlRleHRMYXllcnM+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3YmVkNGMzMi1lZjk0LWFhNDEtOGZkYS1mMDk5NGYwNDM5ZjQ8L3JkZjpsaT4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo2ODEzMjhiZS1kYTI2LTM5NGUtYjE1Yi04NzVmNWFmNzUyYWEiIHN0RXZ0OndoZW49IjIwMjEtMDUtMTJUMjE6MzA6MzYrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6Mzk5ODViZTktNmNkNC0zNTRmLTllOWUtNTczZjRlOTg4YmNiIiBzdEV2dDp3aGVuPSIyMDIxLTA1LTEyVDIxOjM1OjQ5KzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjIwM2NlZDBmLTkxYTktYmE0OS05NzU5LWJlYzNjNTcxYzU4YyIgc3RFdnQ6d2hlbj0iMjAyMS0wNS0xMlQyMTozOTo0MiswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmZTQwYjQwNi0yZmYwLTQ1NGQtYTVlNy00MDA4ZjEzNDZiNTEiIHN0RXZ0OndoZW49IjIwMjEtMDUtMTJUMjE6Mzk6NDIrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjAzY2VkMGYtOTFhOS1iYTQ5LTk3NTktYmVjM2M1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",alt:"logo"})}),Object(Y.jsx)("h1",{id:"title",className:"column",children:"FAKTUR PENJUALAN"}),Object(Y.jsxs)("h3",{id:"pageNo",className:"column",children:["Page ",e.page," of ",e.pageCount]})]})},R=function(e){return Object(Y.jsxs)("div",{id:"buyerCompany",className:"column",children:[Object(Y.jsx)("h3",{children:"Kepada Yth."}),Object(Y.jsx)("h3",{children:e.name}),Object(Y.jsx)("h3",{children:e.address}),Object(Y.jsx)("h3",{children:e.city})]})},F=function(e){return Object(Y.jsx)("div",{className:"column",children:Object(Y.jsxs)("div",{className:"info",children:[Object(Y.jsxs)("h3",{children:[Object(Y.jsx)("span",{children:"No. faktur"}),": ",e.number]}),Object(Y.jsxs)("h3",{children:[Object(Y.jsx)("span",{children:"Tanggal dokumen"}),": ",e.date]}),Object(Y.jsxs)("h3",{children:[Object(Y.jsx)("span",{children:"Jatuh tempo (30 hari)"}),": ",e.due]})]})})},U=function(e){var t=e.start,a=e.end,n=e.state.data.slice(t,a);return Object(Y.jsxs)("table",{id:"innerTable",children:[Object(Y.jsxs)("colgroup",{children:[Object(Y.jsx)("col",{span:"1",style:{width:"5%"}}),Object(Y.jsx)("col",{span:"1",style:{width:"20%"}}),Object(Y.jsx)("col",{span:"1",style:{width:"45%"}}),Object(Y.jsx)("col",{span:"1",style:{width:"5%"}}),Object(Y.jsx)("col",{span:"1",style:{width:"10%"}}),Object(Y.jsx)("col",{span:"1",style:{width:"15%"}})]}),Object(Y.jsx)("thead",{children:Object(Y.jsx)("tr",{children:e.state.columns.map((function(e,t){return Object(Y.jsx)("th",Object(l.a)(Object(l.a)({},("harga"===e.toLowerCase()||"total"===e.toLowerCase()||"qty"===e.toLowerCase())&&{className:"numeric"}),{},{children:e}),t)}))})}),Object(Y.jsx)("tbody",{children:n.map((function(e,t){return Object(Y.jsxs)("tr",{className:"items",children:[Object.keys(e).map((function(t,a){if("count"!==t)return Object(Y.jsx)("td",Object(l.a)(Object(l.a)({},("price"===t||"qty"===t)&&{className:"numeric"}),{},{children:"price"===t?Object(Y.jsx)(g.a,{format:f,displayType:"text",value:isNaN(e[t])?0:e[t]}):"qty"===t&&isNaN(e[t])?0:e[t]}),a)})),Object(Y.jsx)("td",{className:"numeric",children:Object(Y.jsx)(g.a,{format:f,displayType:"text",value:isNaN(e.qty)||isNaN(e.price)?0:e.qty*e.price})})]},t)}))}),Object(Y.jsxs)("tfoot",{children:[Object(Y.jsxs)("tr",{className:"numeric",id:"subtotal",children:[Object(Y.jsx)("td",{colSpan:"5",children:"Subtotal"}),Object(Y.jsx)("td",{children:f(e.state.buyerInfo.subtotal)})]}),Object(Y.jsxs)("tr",{className:"numeric",id:"discount",children:[Object(Y.jsx)("td",{colSpan:"5",children:"Discount (".concat(f(e.state.buyerInfo.discount),"%)")}),Object(Y.jsx)("td",{children:f(e.state.buyerInfo.subtotal*e.state.buyerInfo.discount/100)})]}),Object(Y.jsxs)("tr",{className:"numeric",id:"grandTotal",children:[Object(Y.jsx)("td",{colSpan:"5",children:"Grand total"}),Object(Y.jsx)("td",{children:f(e.state.buyerInfo.subtotal-e.state.buyerInfo.subtotal*e.state.buyerInfo.discount/100)})]}),Object(Y.jsx)("tr",{children:Object(Y.jsx)("td",{colSpan:"6",children:Object(Y.jsxs)("div",{id:"note",children:["Keterangan:\xa0",e.state.buyerInfo.note]})})})]})]})},B=function(e){return Object(Y.jsxs)("footer",{children:[Object(Y.jsx)(z,{person:"Penerima"}),Object(Y.jsx)(z,{person:"Penjual"}),Object(Y.jsx)(z,{person:"Checklist"})]})},z=function(e){var t=e.person;e.className;return Object(Y.jsxs)("div",{className:"sign",children:[Object(Y.jsx)("h3",{children:t}),Object(Y.jsx)("span",{children:"________________"})]})},V=function(e){var t=e.editable,a=(e.record,e.children),n=e.dataIndex,c=e.rowIndex,s=e.title,r=e.state,o=e.dispatch,b=Object(i.a)(e,["editable","record","children","dataIndex","rowIndex","title","state","dispatch"]),j=a;if(t){var u=Object(l.a)({},r.pagination),h=c+(u.current-1)*u.pageSize;j="qty"===n||"price"===n?Object(Y.jsx)(d.a.Item,{name:"".concat(n).concat(h),rules:[{required:!0,message:"".concat(s," tidak boleh kosong")}],initialValue:r.data[h][n],preserve:!1,style:{marginBottom:0},children:Object(Y.jsx)(g.a,Object(l.a)(Object(l.a)({},"price"===n?{format:f,allowNegative:!0}:{allowNegative:!1}),{},{value:r.data[h][n],displayType:"input",customInput:m.a,style:{width:"100%",textAlign:"end"},onValueChange:function(e){var t=e.value;o({type:"UPDATE_TABLE_INPUT_VALUE",payload:{val:parseInt(t),index:h,column:n}})}}))}):Object(Y.jsx)(d.a.Item,{name:"".concat(n).concat(h),rules:[{required:!0,message:"".concat(s," tidak boleh kosong")}],initialValue:r.data[h][n],preserve:!1,style:{marginBottom:0},children:Object(Y.jsx)(m.a,{maxLength:60,onBlur:function(e){return o({type:"UPDATE_TABLE_INPUT_VALUE",payload:{val:e.target.value,index:h,column:n}})}})})}return Object(Y.jsx)("td",Object(l.a)(Object(l.a)({},b),{},{children:j}))},W=function(e){var t={body:{cell:V}},a=[{title:e.state.columns[0],dataIndex:"id",width:"5%"},{title:e.state.columns[1],dataIndex:"code",editable:!0,width:"15%"},{title:e.state.columns[2],dataIndex:"name",editable:!0,width:"25%"},{title:e.state.columns[3],dataIndex:"qty",editable:!0,width:"10%",align:"right"},{title:e.state.columns[4],dataIndex:"price",editable:!0,width:"15%",align:"right"},{title:e.state.columns[5],dataIndex:"total",align:"right",render:function(t,a,n){var c=n+(e.state.pagination.current-1)*e.state.pagination.pageSize;return Object(Y.jsx)(g.a,{format:f,displayType:"text",value:isNaN(e.state.data[c].qty)||isNaN(e.state.data[c].price)?0:e.state.data[c].qty*e.state.data[c].price})}},{title:"Hapus",dataIndex:"remove",render:function(t,a){return e.state.data.length>1?Object(Y.jsx)(p.a,{type:"default",danger:!0,onClick:function(){return n(a.id)},children:"Hapus"}):null}}].map((function(t){return t.editable?Object(l.a)(Object(l.a)({},t),{},{onCell:function(a,n){return{record:a,rowIndex:n,editable:t.editable,dataIndex:t.dataIndex,title:t.title,state:e.state,dispatch:e.dispatch}}}):t})),n=function(t){e.dispatch({type:"REMOVE_ITEM",payload:t})};return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(b.a,{children:Object(Y.jsx)(j.a,{span:"23",children:Object(Y.jsx)(O.a,{components:t,dataSource:e.state.data,columns:a,pagination:e.state.pagination,onChange:function(t){return function(t){var a=N(e.form.getFieldsValue());e.form.validateFields(a).then((function(a){e.dispatch({type:"CHANGE_PAGE",payload:t.current})})).catch((function(e){console.log("form values are missing")}))}(t)},rowKey:"count",footer:function(){return Object(Y.jsxs)("div",{style:{fontWeight:"bold"},children:[Object(Y.jsxs)(b.a,{children:[Object(Y.jsx)(j.a,{offset:"15",span:"3",children:"Subtotal"}),Object(Y.jsx)(j.a,{span:"3",offset:"3",style:{textAlign:"end"},children:Object(Y.jsx)(g.a,{displayType:"text",format:f,value:isNaN(e.state.buyerInfo.subtotal)?0:e.state.buyerInfo.subtotal})})]}),Object(Y.jsxs)(b.a,{align:"middle",children:[Object(Y.jsx)(j.a,{offset:"15",span:"3",children:"Discount"}),Object(Y.jsx)(j.a,{span:"2",children:Object(Y.jsx)(d.a.Item,{name:"discount",rules:[{required:!0,message:"Discount tidak boleh kosong"}],initialValue:e.state.buyerInfo.discount,style:{marginBottom:0,fontWeight:"normal"},children:Object(Y.jsx)(g.a,{suffix:"%",customInput:m.a,displayType:"input",allowNegative:!1,value:e.state.buyerInfo.discount,style:{textAlign:"end"},onValueChange:function(t){var a=t.value;e.dispatch({type:"UPDATE_FORM_INPUT_VALUE",payload:{name:"discount",value:parseInt(a)}})}})})}),Object(Y.jsx)(j.a,{span:"3",offset:"1",style:{textAlign:"end"},children:Object(Y.jsx)(g.a,{displayType:"text",format:f,value:isNaN(e.state.buyerInfo.discount)||isNaN(e.state.buyerInfo.subtotal)?0:e.state.buyerInfo.subtotal*e.state.buyerInfo.discount/100})})]}),Object(Y.jsxs)(b.a,{children:[Object(Y.jsx)(j.a,{offset:"15",span:"3",children:"Grand Total"}),Object(Y.jsx)(j.a,{span:"3",offset:"3",style:{textAlign:"end"},children:Object(Y.jsx)(g.a,{displayType:"text",format:f,value:isNaN(e.state.buyerInfo.discount)||isNaN(e.state.buyerInfo.subtotal)?0:e.state.buyerInfo.subtotal-e.state.buyerInfo.subtotal*e.state.buyerInfo.discount/100})})]})]})}})})}),Object(Y.jsxs)(b.a,{justify:"start",children:[Object(Y.jsx)(j.a,{children:Object(Y.jsx)(p.a,{type:"default",size:"large",htmlType:"button",hidden:e.isButtonDisabled,onClick:function(){var t=N(e.form.getFieldsValue()),a={id:e.state.data.length+1,count:e.state.data[e.state.data.length-1].count+1,code:"",name:"",qty:1,price:0};e.state.data.length%e.state.pagination.pageSize===0?e.form.validateFields(t).then((function(t){e.dispatch({type:"ADD_ITEM",payload:a})})).catch((function(e){console.log("form values are missing")})):e.dispatch({type:"ADD_ITEM",payload:a})},children:"Tambah Barang Baru"})}),Object(Y.jsx)(j.a,{children:Object(Y.jsx)(j.a,{offset:"3",children:Object(Y.jsx)(y.a,{title:"Yakin ingin hapus semua barang?",onConfirm:function(){e.dispatch({type:"REMOVE_ALL",payload:e.form}),e.form.setFieldsValue({code0:"",name0:"",qty0:1,price0:0})},okText:"Yes",cancelText:"No",children:Object(Y.jsx)(p.a,{type:"default",size:"large",htmlType:"button",danger:!0,children:"Hapus Semua Barang"})})})}),Object(Y.jsx)(j.a,{offset:"12",children:Object(Y.jsx)(d.a.Item,{style:{marginBottom:0},children:Object(Y.jsx)(p.a,{type:"primary",size:"large",htmlType:"submit",hidden:e.isButtonDisabled,children:"Generate"})})})]})]})},L=function(){var e={labelCol:{span:22},wrapperCol:{span:22}},t={data:[{id:1,count:1,code:"",name:"",qty:1,price:0}],buyerInfo:{name:"",number:"",address:"",date:T()(new Date).format("DD-MM-YYYY"),due:T()(new Date).add(30,"days").format("DD-MM-YYYY"),city:"",note:"",discount:0,subtotal:0},columns:["No.","Kode Barang","Nama Barang","Qty","Harga","Total"],pagination:{current:1,pageSize:5},isShowModal:!1},a=d.a.useForm(),n=Object(s.a)(a,1)[0],c=Object(r.useReducer)(v,t),i=Object(s.a)(c,2),o=i[0],p=i[1],O=Object(r.useRef)(),y=Object(x.useReactToPrint)({content:function(){return O.current},pageStyle:'\n @media print {  \n   html *{\n      font-family: "Trebuchet MS";\n    }\n      @page { \n      size: 21.59cm 13.97cm;\n    } \n    .numeric{\n      text-align:right;\n    }\n    .page-break{\n      page-break-before: always;\n      page-break-after: always;\n      display: block;\n    }\n    .invoice{\n      font-size: 0.7em;\n    }\n    \n    #pageNo{\n      padding-left: 10%;\n    }\n    #buyerCompany{\n      width: 66%;\n    }\n    .column{\n      display: inline-block;\n      width: 33%;\n      margin-bottom: 0.5em;\n    }\n    \n    .info {\n      display: table;\n    }\n    .info h3 {\n      display: table-row;\n    }\n    .info span{\n      display: table-cell;\n      padding-right: 2mm;\n      padding-top: 1.5mm;\n    }\n     table{\n        width: 100%;\n        height:21.5em;\n        font-size: 1.2em;\n        border-top: solid 1px black;\n      }\n      table tr{\n        height:1em;\n      }\n      table tr:last-child{\n        height:auto;\n        border-bottom: solid 1px black;\n      }\n      table td, table th{\n        border-left: solid 1px black;\n        border-right: solid 1px black;\n        padding-left: 1mm;\n        padding-right: 1mm;\n        vertical-align:text-top; \n      }\n      table, table th{\n        border-bottom: solid 1px black;\n      }\n      table, table th{\n        border: solid 1px black;\n      }\n      table #note td, table #subtotal td, table #discount td{\n        border-top: none;\n        border-bottom: none;\n      }\n       table #grandTotal td{\n         border-bottom: solid 1px black;\n         font-weight: bold;\n       }\n      table #note{\n        height: 1.5em;\n        overflow: hidden;\n      }\n\n      h3 {\n        line-height:1em;\n      }\n      footer {\n        display: flex;\n        position:fixed;\n        bottom: 0;\n        left: 30%;\n        text-align:center;\n      }\n      .sign:nth-child(2){\n        margin-left: 5em;\n      }\n      \n      .sign:last-child{\n        margin-left: 5em;\n      }\n      .sign h3{\n        padding-bottom: 3em;\n      }\n  }\n  '});return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)("div",{style:{overflow:"hidden",height:0},children:Object(Y.jsx)(G,{ref:O,state:o})}),Object(Y.jsx)(b.a,{justify:"center",children:Object(Y.jsx)("h2",{children:"Info Faktur"})}),Object(Y.jsx)(b.a,{children:Object(Y.jsx)(j.a,{offset:"4",span:"16",children:Object(Y.jsx)(u.a,{children:Object(Y.jsxs)(d.a,Object(l.a)(Object(l.a)({},{labelCol:{span:10},wrapperCol:{span:22}}),{},{form:n,layout:"vertical",validateMessages:{required:null},onFinish:y,scrollToFirstError:!0,children:[Object(Y.jsxs)(b.a,{children:[Object(Y.jsx)(j.a,{span:"11",offset:"1",children:Object(Y.jsx)(d.a.Item,{name:"companyName",rules:[{required:!0,message:"Nama perusahaan tidak boleh kosong"}],label:"Nama Perusahaan",initialValue:o.buyerInfo.name,children:Object(Y.jsx)(m.a,{onBlur:function(e){return p({type:"UPDATE_FORM_INPUT_VALUE",payload:{name:"name",value:e.target.value}})}})})}),Object(Y.jsx)(j.a,{span:"11",children:Object(Y.jsx)(d.a.Item,{name:"number",label:"Nomor Faktur Jual",rules:[{required:!0,message:"Nomor faktur jual tidak boleh kosong"}],initialValue:o.buyerInfo.number,children:Object(Y.jsx)(m.a,{onBlur:function(e){return p({type:"UPDATE_FORM_INPUT_VALUE",payload:{name:"number",value:e.target.value}})}})})})]}),Object(Y.jsx)(b.a,{children:Object(Y.jsx)(j.a,{span:"23",offset:"1",children:Object(Y.jsx)(d.a.Item,Object(l.a)(Object(l.a)({name:"address",label:"Alamat Perusahaan",rules:[{required:!0,message:"Alamat perusahaan tidak boleh kosong"}],initialValue:o.buyerInfo.address},e),{},{children:Object(Y.jsx)(m.a,{maxLength:80,onBlur:function(e){return p({type:"UPDATE_FORM_INPUT_VALUE",payload:{name:"address",value:e.target.value}})}})}))})}),Object(Y.jsxs)(b.a,{children:[Object(Y.jsx)(j.a,{span:"7",offset:"1",children:Object(Y.jsx)(d.a.Item,{name:"date",label:"Tanggal",rules:[{required:!0,message:"Tanggal tidak boleh kosong"}],initialValue:T()(o.buyerInfo.date,"DD-MM-YYYY"),children:Object(Y.jsx)(h.a,{format:"DD-MM-YYYY",onBlur:function(e){return p({type:"UPDATE_FORM_INPUT_VALUE",payload:{name:"date",value:e.target.value}})}})})}),Object(Y.jsx)(j.a,{span:"7",children:Object(Y.jsx)(d.a.Item,{name:"due",label:"Jatuh Tempo",rules:[{required:!0,message:"Jatuh tempo tidak boleh kosong"}],initialValue:T()(o.buyerInfo.due,"DD-MM-YYYY"),children:Object(Y.jsx)(h.a,{format:"DD-MM-YYYY",onBlur:function(e){return p({type:"UPDATE_FORM_INPUT_VALUE",payload:{name:"due",value:e.target.value}})}})})}),Object(Y.jsx)(j.a,{span:"9",children:Object(Y.jsx)(d.a.Item,{name:"city",label:"Kota",rules:[{required:!0,message:"Kota tidak boleh kosong"}],initialValue:o.buyerInfo.city,wrapperCol:{span:"19"},children:Object(Y.jsx)(m.a,{onBlur:function(e){return p({type:"UPDATE_FORM_INPUT_VALUE",payload:{name:"city",value:e.target.value}})}})})})]}),Object(Y.jsx)(b.a,{children:Object(Y.jsx)(j.a,{span:"23",offset:"1",children:Object(Y.jsx)(d.a.Item,Object(l.a)(Object(l.a)({label:"Keterangan"},e),{},{name:"note",initialValue:o.buyerInfo.note,children:Object(Y.jsx)(m.a.TextArea,{maxLength:120,onBlur:function(e){return p({type:"UPDATE_FORM_INPUT_VALUE",payload:{name:"note",value:e.target.value}})}})}))})}),Object(Y.jsx)(W,{dispatch:p,state:o,form:n,isButtonDisabled:Math.ceil(o.data.length/o.pagination.pageSize)!==o.pagination.current})]}))})})})]})},P=function(){return Object(Y.jsx)(L,{})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,233)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),i(e),l(e)}))};c.a.render(Object(Y.jsx)(P,{}),document.getElementById("root")),S()}},[[224,1,2]]]);
//# sourceMappingURL=main.243dcd12.chunk.js.map