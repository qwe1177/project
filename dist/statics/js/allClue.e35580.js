webpackJsonp([32],{1177:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=a(109),i=(a.n(o),a(110)),s=a.n(i),c=a(56),d=(a.n(c),a(57)),p=a.n(d),u=a(34),m=(a.n(u),a(35)),h=a.n(m),f=a(19),y=(a.n(f),a(18)),b=a.n(y),g=a(21),v=(a.n(g),a(22)),E=a.n(v),w=a(27),C=(a.n(w),a(33)),I=a.n(C),x=a(24),S=(a.n(x),a(25)),k=a.n(S),O=a(43),P=(a.n(O),a(44)),T=a.n(P),M=a(71),j=(a.n(M),a(72)),N=a.n(j),D=a(46),R=(a.n(D),a(47)),L=a.n(R),V=a(67),F=(a.n(V),a(65)),A=a.n(F),Y=a(28),_=(a.n(Y),a(29)),z=a.n(_),q=a(13),K=(a.n(q),a(14)),H=a.n(K),B=a(0),G=a.n(B),J=a(12),U=(a.n(J),a(5)),Q=a(2),$=a(302),W=a(1275),X=a(68),Z=a(1),ee=a.n(Z),te=a(30),ae=(a.n(te),a(1289)),ne=(a.n(ae),a(23)),re=a(10),le=a(15),oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},se=H.a.Item,ce=z.a.Option,de=(A.a.Button,A.a.Group,L.a.RangePicker),pe=N.a.Group,ue=function(e){function t(a){n(this,t);var l=r(this,e.call(this,a));return l.hasErrors=function(e){return Object.keys(e).some(function(t){return e[t]})},l.Modalshow=function(e,t,a){return function(e){var a=e.target.innerHTML;"分配负责人"==a?l.setState({personSelectorVisible:!0}):"移入公海"==a?l.props.modalmodelaction({visible:!0,ModalText:"确认移入公海分配吗？"}):"加入我的"==a&&l.props.modalmodelaction({visible:!0,ModalText:"确认加入我的线索吗？"}),l.props.tablemodelaction({selectaction:a,actkey:[t.key],supplierId:t.supplierId,userId:t.userId})}},l.Modalshow2=function(e){var t=e.target.innerHTML;t=t.replace(/<.*>(.*)<.*>/,"$1");var a=l.props.tablemodel.selectedRows||[];if(a.length){var n=a.map(function(e){return e.key}),r=a.map(function(e){return e.supplierId}).join(","),o=a.map(function(e){return e.userId}).join(",");"分配负责人"==t?l.setState({personSelectorVisible:!0}):"移入公海"==t?l.props.modalmodelaction({visible:!0,ModalText:"确认移入公海分配吗？"}):"加入我的"==t&&l.props.modalmodelaction({visible:!0,ModalText:"确认加入我的线索吗？"}),l.props.tablemodelaction({selectaction:t,actkey:n,supplierId:r,userId:o})}else T.a.error("请选择企业")},l.ModalhandleOk=function(){var e=([].concat(l.props.tablemodel.data),l.props.tablemodel.actkey,"移入公海"==l.props.tablemodel.selectaction?re.c+"/clue/editToPublic.do":re.c+"/clue/editPersonLiable.do"),t=l.props.tablemodel.supplierId,a=l.props.tablemodel.userId;ne.a.get(e,{params:{supplierId:t,responsibleSources:a,responsibleUserId:Object(le.a)().userId,responsiblRealName:Object(le.a)().realName}}).then(function(e){200==e.status&&1==e.data.code?(T.a.success(""+e.data.msg),l.props.tablemodelaction({selectedRowKeys:[],actkey:[]}),l.props.modalmodelaction({ModalText:"提交中···",confirmLoading:!0}),l.props.fetchPosts({key:"data",value:{isPass:"no",markToDistinguish:"all"}}),setTimeout(function(){l.props.modalmodelaction({visible:!1,confirmLoading:!1})},500)):T.a.error(""+e.data.msg)}).catch(function(e){})},l.ModalhandleCancel=function(e){return function(){var t;l.props.modalmodelaction((t={},t[e]=!1,t))}},l.formItemLayout={labelCol:{span:5},wrapperCol:{span:19}},l.handleSubmit=function(e){var t="object"==(void 0===e?"undefined":ie(e));t&&e.preventDefault();var a={};return l.props.form.validateFieldsAndScroll(function(e,n){if(!e){for(var r in n)if(n[r])if("range-time"==r){var o=n[r].map(function(e){return e.format("YYYY-MM-DD")});a.startTime=o[0]?o[0]:"",a.endTime=o[1]?o[1]:""}else a[r]="other"==r?n[r].join(","):"compNameOrAddressOrMobile"==r?n[r].key:n[r];a.isPass="no",a.markToDistinguish="all",t&&l.props.fetchPosts({key:"data",value:a})}}),a},l.handlePersonCancel=function(){l.setState({personSelectorVisible:!1,PersonSelectortype:"single",actionInfo:!0})},l.handleOpenChooseForCategory=function(){l.setState({personSelectorVisible:!0,PersonSelectortype:"multiple",actionInfo:!1})},l.handleChoosed=function(e,t,a){if(a){var n=([].concat(l.props.tablemodel.data),l.props.tablemodel.actkey,l.props.tablemodel.supplierId);ne.a.get(re.c+"/clue/editPersonLiable.do",{params:{supplierId:n,responsibleSources:l.props.tablemodel.userId,responsibleUserId:e,responsiblRealName:t}}).then(function(e){200==e.status&&1==e.data.code?(T.a.success(""+e.data.msg),l.props.tablemodelaction({actkey:[],selectedRowKeys:[]}),l.props.fetchPosts({key:"data",value:{isPass:"no",markToDistinguish:"all"}}),l.setState({personSelectorVisible:!1})):T.a.error(""+e.data.msg)}).catch(function(e){})}else l.setState({personSelectorVisible:!1,PersonSelectortype:"single",actionInfo:!0}),l.props.form.setFieldsValue({userIds:e,usernames:t})},l.rangeConfig={rules:[{type:"array",required:!1,message:"请选择"}]},l.onSelectChange=function(e,t){l.props.tablemodelaction({selectedRowKeys:e,selectedRows:t})},l.Paginatihandle=function(e,t){l.props.fetchPosts({key:"data",value:oe({},l.handleSubmit(),{pageSize:e,offset:t})}),l.props.tablemodelaction({selectedRowKeys:[]})},l.handleReset=function(){l.props.form.resetFields()},l.setDate=function(e){return function(){var t=ee()().add(1-e,"days").format("YYYY-MM-DD"),a=ee()().add(0,"days").format("YYYY-MM-DD");l.props.form.setFieldsValue({"range-time":[ee()(t),ee()(a)]})}},l.columns=[{title:"企业名称",dataIndex:"companyName",render:function(e,t,a){var n="";switch(t.type){case"my":n="myClueDetail";break;case"underling":n="underlingClueDetail";break;case"all":n="allClueDetail";break;case"theHighSeas":n="publicClueDetail";break;default:n="allClueDetail"}var r=Object(le.e)(),l=r.systemId?r.systemId:"",o=r.moduleId?r.moduleId:"",i="/"+n+"/?supplierId="+t.supplierId+"&systemId="+l+"&moduleId="+o;return"allClueDetail"!=n?G.a.createElement("a",{target:"_blank",href:i},e):G.a.createElement("span",null,e)}},{title:"来源",className:"",dataIndex:"source",width:80,render:l.addinputdata},{title:"线索级别",dataIndex:"clueLevel",render:l.addinputdata,width:80},{title:"企业性质",dataIndex:"enterpriseType",render:l.adduploaddata,width:80},{title:"主营类目",dataIndex:"varietyName",render:l.adduploaddata},{title:"主营品牌",dataIndex:"mainBrand",render:l.adduploaddata,width:80},{title:"联系人信息",dataIndex:"fullname",render:l.adduploaddata,width:80},{title:"跟进次数",dataIndex:"followupCount",render:l.adduploaddata,width:80},{title:"创建时间",dataIndex:"createTime1",render:l.adduploaddata,width:85},{title:"负责人",dataIndex:"realName",render:l.adduploaddata,width:70},{title:"操作",width:80,dataIndex:"Operation",render:function(e,t,a){var n=[];return"my"==t.type||"underling"==t.type?n=[G.a.createElement("p",{key:""+a,style:{marginBottom:"5px"}},"移入公海"),G.a.createElement("p",{key:"_"+a},"分配负责人")]:"theHighSeas"==t.type&&(n=[G.a.createElement("p",{key:""+a},"加入我的")]),G.a.createElement("div",null,G.a.createElement("a",{onClick:l.Modalshow(e,t,a)},n))}}],l.state={personSelectorVisible:!1,actionInfo:!0,PersonSelectortype:"single"},l}return l(t,e),t.prototype.componentDidMount=function(){this.props.fetchPosts({key:"data",value:{isPass:"no",markToDistinguish:"all"}})},t.prototype.render=function(){var e=this.props.form,t=e.getFieldDecorator,a=e.getFieldsError,n=(e.getFieldError,e.isFieldTouched,this.props.tablemodel.data),r=this.columns,l=this.props.Infos,o=(l.categoryChild,l.jsbutton,l.province,l.provinces,l.city,l.citys,l.county,l.countys,l.town,l.towns,l.registAddressCitys,[{label:"有营业执照",value:"1"},{label:"有跟进记录",value:"2"},{label:"询价单",value:"3"},{label:"报价单",value:"4"},{label:"开票点数",value:"5"}]),i={selectedRowKeys:this.props.tablemodel.selectedRowKeys,onChange:this.onSelectChange,getCheckboxProps:function(e){return{disabled:!0}}},c=this.props.form.getFieldValue("compNameOrAddressOrMobile")?this.props.form.getFieldValue("compNameOrAddressOrMobile").label:void 0;return G.a.createElement("div",{className:"newClue"},G.a.createElement("h2",null,"全部供应商线索"),G.a.createElement("div",{className:"newCluewk"},G.a.createElement(H.a,{layout:"inline",onSubmit:this.handleSubmit},G.a.createElement("div",{className:"newCluewk"},G.a.createElement("div",{className:"newCluenk"},G.a.createElement("div",{className:"content"},G.a.createElement(E.a,{style:{padding:"8px 0px"}},G.a.createElement(k.a,{span:3},G.a.createElement(se,oe({},oe({},this.formItemLayout,{wrapperCol:{span:24}}),{label:"",style:{width:"100%",paddingRight:"10px"}}),t("compNameOrAddressOrMobile",{rules:[{required:!1,message:"请选择名称"}],initialValue:{key:"companyName"}})(G.a.createElement(z.a,{labelInValue:!0,placeholder:"请选择名称"},G.a.createElement(ce,{value:"companyName"},"企业名称"),G.a.createElement(ce,{value:"address"},"企业地址"),G.a.createElement(ce,{value:"mobile"},"手机"))))),G.a.createElement(k.a,{span:5},G.a.createElement(se,oe({},oe({},this.formItemLayout,{wrapperCol:{span:24}}),{label:"",style:{width:"100%",paddingRight:"10px"}}),t("compNameOrAddressOrMobileValue",{rules:[{required:!1,message:"请输入"+c}]})(G.a.createElement(I.a,{placeholder:"请输入"+c,maxLength:"100"})))),G.a.createElement(k.a,{span:4},G.a.createElement(se,{label:"线索来源",style:{width:"100%"}},t("source",{rules:[{required:!1,message:"请选择来源"}],initialValue:""})(G.a.createElement(z.a,{style:{width:100},placeholder:"请选择来源"},G.a.createElement(ce,{value:""},"全部"),G.a.createElement(ce,{value:"自行开发"},"自行开发"),G.a.createElement(ce,{value:"来电咨询"},"来电咨询"),G.a.createElement(ce,{value:"网络推广"},"网络推广"),G.a.createElement(ce,{value:"CSC86"},"CSC86"),G.a.createElement(ce,{value:"buy5j"},"buy5j"),G.a.createElement(ce,{value:"网络爬取"},"网络爬取"))))),G.a.createElement(k.a,{span:4},G.a.createElement(se,{label:"线索级别",style:{width:"100%"}},t("clueLevel",{rules:[{required:!1,message:"请选择级别"}],initialValue:""})(G.a.createElement(z.a,{style:{width:100},placeholder:"请选择级别"},G.a.createElement(ce,{value:""},"全部"),G.a.createElement(ce,{value:"即将签约"},"即将签约"),G.a.createElement(ce,{value:"意向客户"},"意向客户"),G.a.createElement(ce,{value:"待培育客户"},"待培育客户"),G.a.createElement(ce,{value:"暂无兴趣"},"暂无兴趣"),G.a.createElement(ce,{value:"无效线索"},"无效线索"),G.a.createElement(ce,{value:"暂无"},"暂无"))))),G.a.createElement(k.a,{span:4},G.a.createElement(se,{label:"客户类型",style:{width:"100%"}},t("enterpriseType",{rules:[{required:!1,message:"请选择类型"}],initialValue:""})(G.a.createElement(z.a,{style:{width:100},placeholder:"请选择级别"},G.a.createElement(ce,{value:""},"全部"),G.a.createElement(ce,{value:"企业客户"},"企业客户"),G.a.createElement(ce,{value:"零售商"},"零售商"),G.a.createElement(ce,{value:"终端用户"},"终端用户"))))),G.a.createElement(k.a,{span:4},G.a.createElement(se,{label:"区域",style:{width:"100%"}},t("areaType",{rules:[{required:!1,message:"请选择区域"}],initialValue:""})(G.a.createElement(z.a,{style:{width:100},placeholder:"请选择区域"},G.a.createElement(ce,{value:""},"全部"),G.a.createElement(ce,{value:"1"},"城内商户"),G.a.createElement(ce,{value:"2"},"城外商户")))))),G.a.createElement(E.a,{style:{padding:"8px 0px"}},G.a.createElement(k.a,{span:3,style:{padding:"0px 10px 0px 0px"}},G.a.createElement(se,oe({label:"",style:{width:"100%"}},oe({},this.formItemLayout,{wrapperCol:{span:24}})),t("createOrResponsibleTime",{rules:[{required:!1,message:"请选择"}],initialValue:"createTime"})(G.a.createElement(z.a,{placeholder:"请选择"},G.a.createElement(ce,{key:"createTime"},"创建时间"),G.a.createElement(ce,{key:"responsibleTime"},"负责时间"))))),G.a.createElement(k.a,{span:21},G.a.createElement(se,{label:""},t("range-time",this.rangeConfig)(G.a.createElement(de,{style:{width:"50%"}})),G.a.createElement(b.a,{style:{marginLeft:"10px"},type:"primary",ghost:!0,onClick:this.setDate(1),disabled:this.hasErrors(a())},"今天"),G.a.createElement(b.a,{style:{marginLeft:"10px"},type:"primary",ghost:!0,onClick:this.setDate(7),disabled:this.hasErrors(a())},"近7天")),G.a.createElement(se,{label:"负责人"},t("usernames")(G.a.createElement(I.a,{onClick:this.handleOpenChooseForCategory,readOnly:!0,style:{width:"280px"},placeholder:"点击选择"})),t("userIds")(G.a.createElement(I.a,{type:"hidden"}))))),G.a.createElement(E.a,{style:{padding:"8px 0px"}},G.a.createElement(k.a,{span:12},G.a.createElement(se,{label:"其他条件",style:{width:"100%"}},t("other",this.rangeConfig)(G.a.createElement(pe,{options:o})))),G.a.createElement(k.a,{span:12},G.a.createElement("div",{style:{textAlign:"right"}},G.a.createElement(se,null,G.a.createElement(b.a,{type:"primary",style:{height:"35px",lineHeight:"35px",padding:"0px 30px"},htmlType:"submit",disabled:this.hasErrors(a())},"查询")),G.a.createElement(se,{style:{marginLeft:"20px"}},G.a.createElement(b.a,{type:"primary",style:{height:"35px",lineHeight:"35px",backgroundColor:"#f5f5f5",borderColor:"#e6e6e6",padding:"0px 30px",color:"#a8a8a8"},htmlType:"submit",onClick:this.handleReset},"重置"))))))),G.a.createElement("div",{className:"newCluenk"},G.a.createElement("div",{className:"title"},G.a.createElement(b.a,{type:"primary",style:{padding:"5px 15px",marginRight:"5px",border:"none"},ghost:!0,size:"large",onClick:this.handleSubmit},"刷新列表")),G.a.createElement("div",{className:"content"},G.a.createElement(p.a,{spinning:this.props.tablemodel.loading,delay:500,tip:"Loading..."},G.a.createElement(h.a,{rowSelection:i,columns:r,dataSource:n,bordered:!0,pagination:!1})),G.a.createElement(s.a,{style:{padding:"10px 0px",textAlign:"right"},showTotal:function(e){return"共 "+e+" 条"},pageSizeOptions:["20","30","40","50"],showSizeChanger:!0,showQuickJumper:!0,current:this.props.Paginationmodel.current,defaultCurrent:1,onShowSizeChange:this.Paginatihandle,total:this.props.Paginationmodel.total,pageSize:this.props.Paginationmodel.pageSize,onChange:this.Paginatihandle}),G.a.createElement(W.a,oe({},oe({},this.props.modalmodel,{visible:this.props.modalmodel.visible,ModalText:this.props.modalmodel.ModalText}),{onOk:this.ModalhandleOk,confirmLoading:this.props.modalmodel.confirmLoading,onCancel:this.ModalhandleCancel("visible")})),G.a.createElement(X.default,{onChoosed:this.handleChoosed,onCancel:this.handlePersonCancel,type:this.state.PersonSelectortype,visible:this.state.personSelectorVisible,actionInfo:this.state.actionInfo})))))))},t}(B.Component);t.a=Object(U.connect)(function(e){return oe({},e)},function(e){return Object(Q.bindActionCreators)($.c,e)})(H.a.create({mapPropsToFields:function(e){return e.Infos},onFieldsChange:function(e,t){e.baseInfoForm(t)}})(ue))},1275:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=a(31),i=(a.n(o),a(32)),s=a.n(i),c=a(0),d=a.n(c),p=(a(302),function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return d.a.createElement("div",null,d.a.createElement(s.a,this.props,d.a.createElement("div",{style:{textAlign:"center"}},this.props.ModalText)))},t}(d.a.Component));t.a=p},1289:function(e,t){},302:function(e,t,a){"use strict";a.d(t,"b",function(){return l}),a.d(t,"e",function(){return o}),a.d(t,"d",function(){return i}),a.d(t,"a",function(){return s});var n=a(10),r=a(23),l="baseInfo",o="tablemodelInfo",i="modalmodelInfo",s="PaginationmodelInfo",c=function(e){return{type:l,payload:e}},d=function(e){return{type:i,payload:e}},p=function(e){return{type:o,payload:e}},u=function(e){return{type:s,payload:e}},m=function(e){return function(t,a){return Object(r.a)("http://localhost:3333/testApi/bd").then(function(a){if(200==a.status){var n;t(p((n={},n[e]=a.data.data,n)))}}).catch(function(e){})}},h=function(e){var t=e.name,a=e.value,n=e.returnName;return function(e,l){return Object(r.a)("http://localhost:3333/testApi/citys?"+t+"="+a).then(function(t){if(200==t.status){var a;e(c((a={},a[n]=t.data.data,a)))}}).catch(function(e){})}},f=function(e){var t=e.key,a=e.value;return function(e,l){return e(p({loading:!0})),r.a.get(n.c+"/clue/viewSupplierClueList.do",{params:a}).then(function(n){if(200==n.status){var r,l=n.data.data.rowCount;e(u({current:a.pageSize||1,total:l,pageSize:a.offset||20})),e(p((r={},r[t]=n.data.data.data,r.loading=!1,r)))}}).catch(function(e){})}},y={baseInfoForm:c,modalmodelaction:d,tablemodelaction:p,Paginationmodelaction:u,fetchPosts2:m,fetchcitysPosts:h,fetchPosts:f};t.c=y},972:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(40),r=(a.n(n),a(0)),l=a.n(r),o=a(12),i=(a.n(o),a(2)),s=a(5),c=a(37),d=a.n(c),p=a(38),u=(a.n(p),a(973)),m=a(39),h=a(1177),f=[d.a],y=Object(i.createStore)(u.a,i.applyMiddleware.apply(void 0,f));Object(o.render)(l.a.createElement(s.Provider,{store:y},l.a.createElement(m.a,null,l.a.createElement(h.a,null))),document.getElementById("root"))},973:function(e,t,a){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case c.b:return d({},e,t.payload);default:return e}}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:"提示",ModalText:"内容",visible:!1},t=arguments[1];switch(t.type){case c.d:return d({},e,t.payload);default:return e}}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:[],count:0,selectedRowKeys:[],loading:!0},t=arguments[1];switch(t.type){case c.e:return d({},e,t.payload);default:return e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{current:1,total:0,pageSize:10},t=arguments[1];switch(t.type){case c.a:return d({},e,t.payload);default:return e}}var i=a(2),s=a(70),c=a(302),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p=Object(i.combineReducers)(d({},s.a,{Infos:n,modalmodel:r,tablemodel:l,Paginationmodel:o}));t.a=p}},[972]);