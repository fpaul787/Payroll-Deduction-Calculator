(this["webpackJsonppayroll-deduction-calculator"]=this["webpackJsonppayroll-deduction-calculator"]||[]).push([[0],{64:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(5),c=a(0),o=a.n(c),i=a(10),s=a.n(i),r=(a(64),a(122)),l=a(123),d=a(51),u=Object(d.a)({typography:{useNextVariants:!0,h6:{color:"#d59f00 !important",fontWeight:"bold"}},palette:{background:{default:"#001530"}}}),m=a(53),b=a(116),p=a(114),j=a(112),h=Object(j.a)({root:{},appBar:{position:"relative",backgroundColor:"#002c63"}});function g(){var e=h();return Object(n.jsx)(p.a,{className:e.appBar,position:"absolute",color:"default",elevation:4,children:Object(n.jsx)(b.a,{children:Object(n.jsx)(m.a,{variant:"h6",color:"inherit",noWrap:!0,children:"Panther Tech Payroll Deduction Calculator"})})})}var x=a(26),O=a(72),f=a(124),y=a(119),P=a(117),v=a(125),w=a(127),k=a(120),N=a(128),$=a(118),C=a(121),D=a(126);function F(e,t,a){var n=e-t,c=n/a;return n=(c=Math.floor(c))*a,{calculatedDownPayment:t=Math.round(100*(e-n))/100,paymentPerPeriod:c,remainingAmt:n}}function S(e,t,a,n){var c=e-t+Number(a),o=c/n,i=(o=Math.floor(o))*n;return c=i-a,{calculatedDownPayment:t=Math.round(100*(e-c))/100,paymentPerPeriod:o,remainingAmt:c,remaining_existing:i}}var A=a(34),R=Object(j.a)((function(e){var t;return{paper:(t={marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},Object(A.a)(t,e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),Object(A.a)(t,"background","#00459a"),Object(A.a)(t,"color","#d59f00"),t),title:{marginBottom:e.spacing(2)},layout:Object(A.a)({width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),form:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}},textField:{margin:e.spacing(1),"& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":{display:"none"},"&[type=number]":{"-moz-appearance":"textfield"},"&::-webkit-outer-spin-button":{"-webkit-appearance":"none",margin:0},"&::-webkit-inner-spin-button":{"-webkit-appearance":"none",margin:0},color:"#fff"},labelRoot:{fontSize:25},input:{height:60},cssOutlinedInput:{"&$cssFocused $notchedOutline":{borderColor:"black !important"}},notchedOutline:{borderWidth:"1px",borderColor:"#d59f00 !important"},cssFocused:{},button:{background:"#d59f00"},copyButton:{background:"#d59f00",width:100},colorHighlight:{color:"#d59f00","&.Mui-focused":{color:"#d59f00"}},textArea:{height:150,width:325,resize:"none",background:"#fff",fontSize:20},radio:{"&$checked":{color:"#d59f00"}},checked:{},link:{fontSize:"20px",marginTop:"10px"},nameStyle:{"&:visited":{color:"#d59f00"}}}}));function T(){var e=R(),t=Object(c.useState)(0),a=Object(x.a)(t,2),o=a[0],i=a[1],s=Object(c.useState)(12),r=Object(x.a)(s,2),l=r[0],d=r[1],u=Object(c.useState)(0),b=Object(x.a)(u,2),p=b[0],j=b[1],h=Object(c.useState)(0),g=Object(x.a)(h,2),A=g[0],T=g[1],I=Object(c.useState)(!1),L=Object(x.a)(I,2),B=L[0],M=L[1],z=Object(c.useState)("Please make some calculations"),E=Object(x.a)(z,2),H=E[0],q=E[1],W=function(e){var t=e.toString();return/^\d+(\.\d{1,2})?$/.test(t)};return Object(n.jsx)("main",{className:e.layout,children:Object(n.jsxs)(O.a,{elevation:1,className:e.paper,children:[Object(n.jsx)(m.a,{component:"h1",variant:"h4",align:"center",className:e.title,children:"New Payroll Deduction"}),Object(n.jsxs)(P.a,{container:!0,spacing:3,children:[Object(n.jsxs)(P.a,{item:!0,xs:12,children:[Object(n.jsx)(f.a,{id:"total",variant:"outlined",label:"Total",type:"number",className:e.textField,onChange:function(e){i(e.target.value)},InputProps:{className:e.input,startAdornment:Object(n.jsx)(y.a,{position:"start",children:Object(n.jsx)("span",{className:e.colorHighlight,children:"$"})}),classes:{root:e.cssOutlinedInput,focused:e.cssFocused,notchedOutline:e.notchedOutline}},InputLabelProps:{style:{color:"#d59f00"},classes:{root:e.labelRoot,focused:e.labelFocused}}}),Object(n.jsx)(k.a,{control:Object(n.jsx)(D.a,{checked:B,onChange:function(){M(!B)},name:"checkedA",style:{color:"#d59f00"}}),label:"Existing Payroll"})]}),B?Object(n.jsx)(P.a,{item:!0,xs:12,children:Object(n.jsx)(f.a,{id:"existing",variant:"outlined",label:"Existing",type:"number",className:e.textField,onChange:function(e){T(e.target.value)},InputProps:{className:e.input,startAdornment:Object(n.jsx)(y.a,{position:"start",children:Object(n.jsx)("span",{className:e.colorHighlight,children:"$"})}),classes:{root:e.cssOutlinedInput,focused:e.cssFocused,notchedOutline:e.notchedOutline}},InputLabelProps:{style:{color:"#d59f00"},classes:{root:e.labelRoot,focused:e.labelFocused}}})}):Object(n.jsx)("div",{}),Object(n.jsx)(P.a,{style:{marginLeft:"10px"},item:!0,xs:12,sm:8,children:Object(n.jsxs)(N.a,{component:"fieldset",className:e.form,children:[Object(n.jsx)($.a,{className:e.colorHighlight,component:"legend",children:"Periods"}),Object(n.jsxs)(w.a,{row:!0,"aria-label":"period",name:"period",value:l.toString(),onChange:function(e){d(e.target.value)},children:[Object(n.jsx)(k.a,{value:"12",control:Object(n.jsx)(v.a,{disableRipple:!0,classes:{root:e.radio,checked:e.checked}}),label:"12"}),Object(n.jsx)(k.a,{value:"16",control:Object(n.jsx)(v.a,{classes:{root:e.radio,checked:e.checked}}),label:"16"}),Object(n.jsx)(k.a,{value:"20",control:Object(n.jsx)(v.a,{classes:{root:e.radio,checked:e.checked}}),label:"20"})]})]})}),Object(n.jsx)(P.a,{style:{marginLeft:"10px"},item:!0,xs:12,sm:8,children:Object(n.jsx)(C.a,{className:e.button,onClick:function(){if(W(o))if(B){var e=.1*o,t=S(o,e,A,l),a=t.calculatedDownPayment,n=t.paymentPerPeriod,c=t.remainingAmt,i=t.remaining_existing;q("Total: $".concat(o,"\nDown Payment: $").concat(a,"\nRemaining: ").concat(c,"\nRemaining + Existing: $").concat(i,"\nPayment Per ").concat(l," Periods: $").concat(n))}else{var s=F(o,e=.1*o,l),r=s.calculatedDownPayment,d=s.paymentPerPeriod,u=s.remainingAmt;q("Total: $".concat(o,"\nDown Payment: $").concat(r,"\nRemaining: $").concat(u,"\nPayment Per ").concat(l," Periods: $").concat(d))}else alert("Total must be greater or equal to 0")},variant:"contained",children:"Calculate From Total"})}),Object(n.jsx)(P.a,{item:!0,xs:12,sm:8,children:Object(n.jsx)(f.a,{id:"downPayment",variant:"outlined",label:"Down Payment",type:"number",onChange:function(e){j(e.target.value)},className:e.textField,InputProps:{className:e.input,startAdornment:Object(n.jsx)(y.a,{position:"start",children:Object(n.jsx)("span",{className:e.colorHighlight,children:"$"})}),classes:{root:e.cssOutlinedInput,focused:e.cssFocused,notchedOutline:e.notchedOutline}},InputLabelProps:{style:{color:"#d59f00"},classes:{root:e.labelRoot,focused:e.labelFocused}}})}),Object(n.jsx)(P.a,{style:{marginLeft:"10px"},item:!0,xs:12,sm:8,children:Object(n.jsx)(C.a,{className:e.button,onClick:function(){if(W(o))if(W(p))if(p<.1*o)alert("Down Payment must be greater or equal to 10% of total");else if(B){var e=S(o,p,A,l),t=e.calculatedDownPayment,a=e.paymentPerPeriod,n=e.remainingAmt,c=e.remaining_existing;q("Total: $".concat(o,"\nDown Payment: $").concat(t,"\nRemaining: ").concat(n,"\nRemaining + Existing: $").concat(c,"\nPayment Per ").concat(l," Periods: $").concat(a))}else{var i=F(o,p,l),s=i.calculatedDownPayment,r=i.paymentPerPeriod,d=i.remainingAmt;q("Total: $".concat(o,"\nDown Payment: $").concat(s,"\nRemaining: $").concat(d,"\nPayment Per ").concat(l," Periods: $").concat(r))}else alert("Down Payment must be greater equal to 0");else alert("Total must be greater or equal to 0")},variant:"contained",children:"Calculate From Down Payment"})}),Object(n.jsx)(P.a,{style:{marginLeft:"10px"},item:!0,xs:12,sm:8,children:Object(n.jsx)("textarea",{className:e.textArea,disabled:!0,value:H})}),Object(n.jsx)(P.a,{style:{marginLeft:"10px"},item:!0,xs:12,sm:8,children:Object(n.jsx)(C.a,{onClick:function(){var e=document.createElement("textarea");e.value=H,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)},className:e.copyButton,variant:"contained",children:"Copy"})})]}),Object(n.jsx)(P.a,{style:{marginLeft:"20%"},item:!0,xs:12,sm:8,children:Object(n.jsxs)(m.a,{className:e.link,children:["Made with \u2764 by",Object(n.jsx)("a",{className:e.nameStyle,href:"https://www.frantzpaul.tech/",children:" Frantz Paul"})]})})]})})}var I=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(r.a,{theme:u,children:[Object(n.jsx)(l.a,{}),Object(n.jsx)(g,{}),Object(n.jsx)(T,{})]})})};s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(I,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.7b01aa8f.chunk.js.map