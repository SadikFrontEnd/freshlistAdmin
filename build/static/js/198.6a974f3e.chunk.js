(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[198],{2329:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),r=t(1049),s=t(910),c=t(45),m=t(11),o=t(12),u=t(14),i=t(13),d=t(823),p=t(826),h=t(834),E=t(821),g=t(822),b=t(835),y=t(813),v=t(832),f=t(199),N=(t(861),t(855),t(866),t(22),t(830)),C=function(e){Object(u.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(m.a)(this,t),(l=a.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(c.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",l.state.name),a.append("sortorder",l.state.sortorder),a.append("desc",l.state.desc),a.append("status",l.state.status),null!==l.state.selectedFile&&a.append("brand_img",l.state.selectedFile,l.state.selectedName),N.a.post("/addbrand",a).then((function(e){console.log(e),l.props.history.push("/app/freshlist/house/HouseProductList")})).catch((function(e){console.log(e)}))},l.state={name:"",firstname:"",lastname:"",email:"",telephone:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",brand_img:"",status:""},l}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(d.a,null,n.a.createElement(p.a,null,n.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},n.a.createElement(E.a,{className:"mb-2"},n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"Store"),n.a.createElement(y.a,{type:"select",placeholder:"Select Type",name:"type",value:this.state.name,onChange:this.changeHandler},n.a.createElement("option",{value:"default"},"Default"),n.a.createElement("option",{value:"2"},"2"),n.a.createElement("option",{value:"3"},"3"))),n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"Currency"),n.a.createElement(y.a,{type:"select",placeholder:"Select Type",name:"type",value:this.state.name,onChange:this.changeHandler},n.a.createElement("option",{value:"default"},"Rupee"),n.a.createElement("option",{value:"2"},"2"),n.a.createElement("option",{value:"3"},"3"))),n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"Customer"),n.a.createElement(v.a,{type:"text",placeholder:"Customer",name:"name",value:this.state.name,onChange:this.changeHandler})),n.a.createElement("hr",null),n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"Customer Group"),n.a.createElement(y.a,{type:"select",placeholder:"Select Type",name:"type",value:this.state.customergroup,onChange:this.changeHandler},n.a.createElement("option",{value:"default"},"Default"),n.a.createElement("option",{value:"2"},"2"),n.a.createElement("option",{value:"3"},"3"))),n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"FirstName"),n.a.createElement(v.a,{type:"text",placeholder:"FirstName",name:"firstname",value:this.state.firstname,onChange:this.changeHandler})),n.a.createElement("hr",null),n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"LastName"),n.a.createElement(v.a,{type:"text",placeholder:"LastName",name:"lastname",value:this.state.lastname,onChange:this.changeHandler})),n.a.createElement("hr",null),n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"Email"),n.a.createElement(v.a,{type:"email",placeholder:"Email",name:"email",value:this.state.email,onChange:this.changeHandler})),n.a.createElement("hr",null),n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"Telephone"),n.a.createElement(v.a,{type:"number",placeholder:"Telephone",name:"telephone",value:this.state.telephone,onChange:this.changeHandler})),n.a.createElement("hr",null)),n.a.createElement(E.a,null,n.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 right"},"Continue"))))))}}]),t}(l.Component),H=t(31),S=t(882),j=function(e){Object(u.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(m.a)(this,t),(l=a.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(c.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",l.state.name),a.append("productName",l.state.productName),a.append("quantity",l.state.quantity),a.append("sortorder",l.state.sortorder),axiosConfig.post("/addbrand",a).then((function(e){console.log(e),l.props.history.push("/app/freshlist/house/HouseProductList")})).catch((function(e){console.log(e)}))},l.state={name:"",productlist:"",quantity:"",selectedFile:null,selectedName:"",sortorder:""},l}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(d.a,null,n.a.createElement("div",{style:{color:"#000000"}},"Add Vouchers(s)"),n.a.createElement(p.a,null,n.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},n.a.createElement(E.a,{className:"mb-2"},n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"Choose Vouchers"),n.a.createElement(y.a,{type:"select",placeholder:"Select Type",name:"type",value:this.state.productlist,onChange:this.changeHandler},n.a.createElement("option",{value:"1"},"1"),n.a.createElement("option",{value:"onion"},"2"),n.a.createElement("option",{value:"apple"},"3"))),n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"Quantity"),n.a.createElement(v.a,{type:"text",placeholder:"Quantity",name:"quantity",value:this.state.quantity,onChange:this.changeHandler})),n.a.createElement("hr",null)),n.a.createElement(E.a,null,n.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 right"},"Add Voucher")),n.a.createElement(E.a,null,n.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 right"},"Add Voucher"))))))}}]),t}(l.Component),q=function(e){Object(u.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(m.a)(this,t),(l=a.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(c.a)({},e.target.name,e.target.value))},l.handleremove=function(e){var a=Object(H.a)(l.state.inputlist);a.splice(e,1),l.setState({inputlist:a})},l.handleinputchange=function(e,a){var t=e.target,n=t.name,r=t.value,s=Object(H.a)(l.state.inputlist);s[a][n]=r,l.setState({inputlist:s}),console.log(l.state.inputlist)},l.handleClick=function(){l.setState({inputlist:[].concat(Object(H.a)(l.state.inputlist),[{selected:l.state.myvalue,attribute:"",quantity:""}])})},l.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",l.state.name),a.append("sortorder",l.state.sortorder),a.append("quantity",l.state.quantity),a.append("size",l.state.size),a.append("required",l.state.required),a.append("desc",l.state.desc),a.append("quant",l.state.quant),a.append("optValue",l.state.optValue),a.append("opValue",l.state.opValue),a.append("status",l.state.status),a.append("productName",l.state.productName),a.append("quant",l.state.quant),null!==l.state.selectedFile&&a.append("brand_img",l.state.selectedFile,l.state.selectedName)},l.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",brand_img:"",quantity:"",size:"",required:"",quant:"",optValue:"",opValue:"",status:"",inputlist:[{selected:"",attribute:"",quantity:""}]},l}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(d.a,null,n.a.createElement(p.a,null,n.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},n.a.createElement(E.a,null,n.a.createElement(g.a,{lg:"12",md:"12"},n.a.createElement(S.a,{bordered:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Product"),n.a.createElement("th",null,"Model"),n.a.createElement("th",null,"Quantity"),n.a.createElement("th",null,"Unit Price"),n.a.createElement("th",null,"Total"),n.a.createElement("th",null,"Action"))),n.a.createElement("tbody",null,this.state.inputlist.map((function(a,t){return n.a.createElement(n.a.Fragment,null,n.a.createElement("tr",{key:t},n.a.createElement("td",{className:"p-0"},"Vim Bar Tum Scruber-weght 250g"),n.a.createElement("td",null,"Detergent"),n.a.createElement("td",null,n.a.createElement(v.a,{type:"text",placeholder:"Quantity",name:"name",value:"1",onChange:e.changeHandler})),n.a.createElement("td",null,"Rs 26.00"),n.a.createElement("td",null,"Rs 26.00"),n.a.createElement("td",null,0!==e.state.inputlist.length&&n.a.createElement(f.a,{color:"danger",className:"mr-1 mt-2",style:{height:"40px"},onClick:function(){return e.handleremove(t)}},"-"))))}))))))),n.a.createElement("div",null,n.a.createElement(s.a,null,n.a.createElement(r.Tabs,{onSelect:function(e,a){return console.log(a+" selected")}},n.a.createElement(r.Tab,{label:"Product"},n.a.createElement("div",null,n.a.createElement(d.a,null,n.a.createElement("div",{style:{color:"#000000"}},"Add Products(s)"),n.a.createElement(p.a,null,n.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},n.a.createElement(E.a,{className:"mb-2"},n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"Choose Product"),n.a.createElement(y.a,{type:"select",placeholder:"Select Type",name:"type",value:this.state.productlist,onChange:this.changeHandler},n.a.createElement("option",{value:"tomato"},"tomato"),n.a.createElement("option",{value:"onion"},"onion"),n.a.createElement("option",{value:"apple"},"apple"))),n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"Quantity"),n.a.createElement(v.a,{type:"text",placeholder:"Quantity",name:"quant",value:this.state.quant,onChange:this.changeHandler})),n.a.createElement("hr",null)),n.a.createElement(E.a,null,n.a.createElement("div",{style:{textAlign:"right",width:"100%"}},n.a.createElement(f.a,{color:"primary",className:"mr-1 mb-1",onClick:this.handleClick},"Add Product"))),n.a.createElement(E.a,null,n.a.createElement(g.a,{className:"rrr"},n.a.createElement(f.a,{color:"secondary",type:"submit",className:"mr-1 mb-1"},"Back"),n.a.createElement(f.a,{color:"primary",type:"submit",className:"mr-1 mb-1 "},"Continue")))))))),n.a.createElement(r.Tab,{label:"Vouchers"},n.a.createElement(j,null))),n.a.createElement("hr",null))))))}}]),t}(l.Component),O=function(e){Object(u.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(m.a)(this,t),(l=a.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(c.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",l.state.name),a.append("firstname",l.state.firstname),a.append("lastname",l.state.lastname),a.append("company",l.state.company),a.append("sortorder",l.state.sortorder),a.append("status",l.state.status),null!==l.state.selectedFile&&a.append("brand_img",l.state.selectedFile,l.state.selectedName),N.a.post("/addbrand",a).then((function(e){console.log(e),l.props.history.push("/app/freshlist/house/HouseProductList")})).catch((function(e){console.log(e)}))},l.state={name:"",firstname:"",lastname:"",email:"",company:"",adreess:"",address1:"",address2:"",city:"",postCode:"",country:"",region:"",selectedFile:null,selectedName:"",sortorder:"",brand_img:"",status:""},l}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(d.a,null,n.a.createElement(p.a,null,n.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},n.a.createElement(E.a,{className:"mb-2"},n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"Choose Address"),n.a.createElement(y.a,{type:"select",placeholder:"Select Type",name:"address",value:this.state.address,onChange:this.changeHandler},n.a.createElement("option",{value:"default"},"...None..."),n.a.createElement("option",{value:"2"},"2"),n.a.createElement("option",{value:"3"},"3"))),n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"FirstName"),n.a.createElement(v.a,{type:"text",placeholder:"FirstName",name:"firstname",value:this.state.firstname,onChange:this.changeHandler})),n.a.createElement("hr",null),n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"LastName"),n.a.createElement(v.a,{type:"text",placeholder:"LastName",name:"lastname",value:this.state.lastname,onChange:this.changeHandler})),n.a.createElement("hr",null),n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"Company"),n.a.createElement(v.a,{type:"text",placeholder:"Company",name:"company",value:this.state.company,onChange:this.changeHandler})),n.a.createElement("hr",null),n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"Address1"),n.a.createElement(v.a,{type:"text",placeholder:"Address",name:"address1",value:this.state.address1,onChange:this.changeHandler})),n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"Address2"),n.a.createElement(v.a,{type:"text",placeholder:"Address",name:"address2",value:this.state.address2,onChange:this.changeHandler})),n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"City"),n.a.createElement(v.a,{type:"text",placeholder:"City",name:"city",value:this.state.city,onChange:this.changeHandler})),n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"PostCode"),n.a.createElement(v.a,{type:"text",placeholder:"PostCode",name:"postCode",value:this.state.postCode,onChange:this.changeHandler})),n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"Country"),n.a.createElement(y.a,{type:"select",placeholder:"Select Type",name:"country",value:this.state.country,onChange:this.changeHandler},n.a.createElement("option",{value:"India"},"India"),n.a.createElement("option",{value:"Japan"},"Japan"),n.a.createElement("option",{value:"BanglaDesh"},"BanglaDesh"))),n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"Region/State"),n.a.createElement(y.a,{type:"select",name:"region",value:this.state.region,onChange:this.changeHandler},n.a.createElement("option",{value:"Kerala"},"Kerala"),n.a.createElement("option",{value:"MadhyaPradesh"},"MadhyaPradesh"),n.a.createElement("option",{value:"Bihar"},"Bihar"),n.a.createElement("option",{value:"Gujrat"},"Gujrat")))),n.a.createElement(E.a,null,n.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 right"},"Continue"))))))}}]),t}(l.Component),T=t(841),F=(t(867),t(868)),x=function(e){Object(u.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(m.a)(this,t),(l=a.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(c.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",l.state.name),a.append("sortorder",l.state.sortorder),a.append("desc",l.state.desc),a.append("status",l.state.status),null!==l.state.selectedFile&&a.append("brand_img",l.state.selectedFile,l.state.selectedName),N.a.post("/addbrand",a).then((function(e){console.log(e),l.props.history.push("/app/freshlist/house/HouseProductList")})).catch((function(e){console.log(e)}))},l.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",brand_img:"",status:""},l}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(d.a,null,n.a.createElement(p.a,null,n.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},n.a.createElement(E.a,{className:"mb-2"},n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null," Product Name"),n.a.createElement(v.a,{type:"text",placeholder:"Product Name",name:"name",value:this.state.name,onChange:this.changeHandler})),n.a.createElement(g.a,{lg:"12",md:"12"},n.a.createElement(T.a,null,n.a.createElement(b.a,null,"Description"),n.a.createElement(F.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{image:{uploadCallback:this.uploadImageCallBack,previewImage:!0,alt:{present:!1,mandatory:!1},uploadEnabled:!0,inputAccept:"image/gif,image/jpeg,image/jpg,image/png,image/svg"}}}))),n.a.createElement("hr",null),n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null," Meta Tag Title"),n.a.createElement(v.a,{type:"text",placeholder:"Meta Tag",name:"name",value:this.state.name,onChange:this.changeHandler})),n.a.createElement("hr",null),n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-1"},n.a.createElement(b.a,null,"MetaData"),n.a.createElement("textarea",{type:"text",rows:4,className:"form-control",placeholder:"MetaData",name:"type",value:this.state.sortorder,onChange:this.changeHandler})),n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-1"},n.a.createElement(b.a,null,"Meta Tag Keywords"),n.a.createElement("textarea",{type:"text",rows:4,className:"form-control",placeholder:"Meta Tag Keywords",name:"type",value:this.state.sortorder,onChange:this.changeHandler})),n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null," Product Tag"),n.a.createElement(v.a,{type:"text",placeholder:"Product Tag",name:"name",value:this.state.name,onChange:this.changeHandler})))))))}}]),t}(l.Component),P=(l.Component,function(e){Object(u.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(m.a)(this,t),(l=a.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(c.a)({},e.target.name,e.target.value))},l.handleremove=function(e){var a=Object(H.a)(l.state.inputlist);a.splice(e,1),l.setState({inputlist:a})},l.handleinputchange=function(e,a){var t=e.target,n=t.name,r=t.value,s=Object(H.a)(l.state.inputlist);s[a][n]=r,l.setState({inputlist:s}),console.log(l.state.inputlist)},l.handleClick=function(){l.setState({inputlist:[].concat(Object(H.a)(l.state.inputlist),[{selected:l.state.myvalue,attribute:"",quantity:""}])})},l.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",l.state.name),a.append("sortorder",l.state.sortorder),a.append("quantity",l.state.quantity),a.append("size",l.state.size),a.append("required",l.state.required),a.append("desc",l.state.desc),a.append("quant",l.state.quant),a.append("optValue",l.state.optValue),a.append("opValue",l.state.opValue),a.append("status",l.state.status),a.append("productName",l.state.productName),a.append("quant",l.state.quant)},l.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",brand_img:"",quantity:"",size:"",required:"",quant:"",optValue:"",opValue:"",status:"",inputlist:[{selected:"",attribute:"",quantity:""}]},l}return Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(d.a,null,n.a.createElement(p.a,null,n.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},n.a.createElement(E.a,null,n.a.createElement(g.a,{lg:"12",md:"12"},n.a.createElement(S.a,{bordered:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Product"),n.a.createElement("th",null,"Model"),n.a.createElement("th",null,"Quantity"),n.a.createElement("th",null,"Unit Price"),n.a.createElement("th",null,"Total"))),n.a.createElement("tbody",null,n.a.createElement(n.a.Fragment,null,n.a.createElement("tr",null,n.a.createElement("td",{className:"p-0"},"Vim Liquid Yellow Bottle -ML:750ml"),n.a.createElement("td",null,"Detergent"),n.a.createElement("td",null,n.a.createElement(v.a,{type:"text",placeholder:"Quantity",name:"name",value:"1",onChange:this.changeHandler})),n.a.createElement("td",null,"Rs 115.00"),n.a.createElement("td",null,"Rs 115.00")),n.a.createElement("tr",null,n.a.createElement("td",{className:"p-0"},"Vim Bar Tum Scruber-weght 250g"),n.a.createElement("td",null,"Detergent"),n.a.createElement("td",null,n.a.createElement(v.a,{type:"text",placeholder:"Quantity",name:"name",value:"1",onChange:this.changeHandler})),n.a.createElement("td",null,"Rs 26.00"),n.a.createElement("td",null,"Rs 26.00")))))))),n.a.createElement("div",null,n.a.createElement(s.a,null,n.a.createElement(r.Tabs,{onSelect:function(e,a){return console.log(a+" selected")}},n.a.createElement(r.Tab,{label:"Product"},n.a.createElement("div",null,n.a.createElement(d.a,null,n.a.createElement("div",{style:{color:"#000000"}},"Add Products(s)"),n.a.createElement(p.a,null,n.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},n.a.createElement(E.a,{className:"mb-2"},n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"Choose Product"),n.a.createElement(y.a,{type:"select",placeholder:"Select Type",name:"type",value:this.state.productlist,onChange:this.changeHandler},n.a.createElement("option",{value:"tomato"},"tomato"),n.a.createElement("option",{value:"onion"},"onion"),n.a.createElement("option",{value:"apple"},"apple"))),n.a.createElement(g.a,{lg:"12",md:"12",className:"mb-2"},n.a.createElement(b.a,null,"Quantity"),n.a.createElement(v.a,{type:"text",placeholder:"Quantity",name:"quant",value:this.state.quant,onChange:this.changeHandler})),n.a.createElement("hr",null)),n.a.createElement(E.a,null,n.a.createElement("div",{style:{textAlign:"right",width:"100%"}},n.a.createElement(f.a,{color:"primary",className:"mr-1 mb-1",onClick:this.handleClick},"Add Product"))),n.a.createElement(E.a,null,n.a.createElement(g.a,{className:"rrr"},n.a.createElement(f.a,{color:"secondary",type:"submit",className:"mr-1 mb-1"},"Back"),n.a.createElement(f.a,{color:"primary",type:"submit",className:"mr-1 mb-1 "},"Continue")))))))),n.a.createElement(r.Tab,{label:"Vouchers"},n.a.createElement(j,null))),n.a.createElement("hr",null))))))}}]),t}(l.Component));a.default=function(){return n.a.createElement("div",null,n.a.createElement(s.a,null,n.a.createElement(r.Tabs,{onSelect:function(e,a){return console.log(a+" selected")}},n.a.createElement(r.Tab,{label:"Customer Details"},n.a.createElement(C,null)),n.a.createElement(r.Tab,{label:"Products"},n.a.createElement(q,null)),n.a.createElement(r.Tab,{label:"Payment Details"},n.a.createElement(O,null)),n.a.createElement(r.Tab,{label:"Shipping Details"},n.a.createElement(x,null)),n.a.createElement(r.Tab,{label:"Totals"},n.a.createElement(P,null))),n.a.createElement("hr",null)))}},830:function(e,a,t){"use strict";var l=t(44),n=t.n(l).a.create({baseURL:"http://3.6.37.16:8000"});a.a=n},855:function(e,a,t){}}]);
//# sourceMappingURL=198.6a974f3e.chunk.js.map