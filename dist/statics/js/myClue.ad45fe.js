webpackJsonp([30],{1411:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(40),r=(a.n(n),a(0)),o=a.n(r),l=a(12),i=(a.n(l),a(2)),s=a(5),c=a(37),d=a.n(c),p=a(38),u=(a.n(p),a(1412)),m=a(39),h=a(1413),f=[d.a],y=Object(i.createStore)(u.a,i.applyMiddleware.apply(void 0,f));Object(l.render)(o.a.createElement(s.Provider,{store:y},o.a.createElement(m.a,null,o.a.createElement(h.a,null))),document.getElementById("root"))},1412:function(e,t,a){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];switch(t.type){case c.b:return d({},e,t.payload);default:return e}}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:"提示",ModalText:"内容",visible:!1},t=arguments[1];switch(t.type){case c.d:return d({},e,t.payload);default:return e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:[],count:0,selectedRowKeys:[],loading:!0},t=arguments[1];switch(t.type){case c.e:return d({},e,t.payload);default:return e}}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{current:1,total:0,pageSize:10},t=arguments[1];switch(t.type){case c.a:return d({},e,t.payload);default:return e}}var i=a(2),s=a(70),c=a(328),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p=Object(i.combineReducers)(d({},s.a,{Infos:n,modalmodel:r,tablemodel:o,Paginationmodel:l}));t.a=p},1413:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=a(109),i=(a.n(l),a(110)),s=a.n(i),c=a(56),d=(a.n(c),a(57)),p=a.n(d),u=a(34),m=(a.n(u),a(35)),h=a.n(m),f=a(19),y=(a.n(f),a(18)),b=a.n(y),g=a(21),v=(a.n(g),a(22)),E=a.n(v),w=a(27),x=(a.n(w),a(33)),I=a.n(x),C=a(24),S=(a.n(C),a(25)),O=a.n(S),k=a(43),P=(a.n(k),a(44)),T=a.n(P),M=a(71),j=(a.n(M),a(72)),N=a.n(j),R=a(46),L=(a.n(R),a(47)),V=a.n(L),D=a(67),F=(a.n(D),a(65)),A=a.n(F),z=a(28),Y=(a.n(z),a(29)),_=a.n(Y),q=a(13),K=(a.n(q),a(14)),B=a.n(K),H=a(0),G=a.n(H),J=a(12),U=(a.n(J),a(5)),Q=a(2),$=a(328),W=a(1414),X=a(68),Z=a(1),ee=a.n(Z),te=a(30),ae=(a.n(te),a(1415)),ne=(a.n(ae),a(23)),re=a(10),oe=a(15),le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},se=B.a.Item,ce=_.a.Option,de=(A.a.Button,A.a.Group,V.a.RangePicker),pe=N.a.Group,ue=function(e){function t(a){n(this,t);var o=r(this,e.call(this,a));return o.hasErrors=function(e){return Object.keys(e).some(function(t){return e[t]})},o.Modalshow=function(e,t,a){return function(e){var a=e.target.innerHTML;"分配负责人"==a?o.setState({personSelectorVisible:!0}):"移入公海"==a?o.props.modalmodelaction({visible:!0,ModalText:"确认移入公海分配吗？"}):"加入我的"==a&&o.props.modalmodelaction({visible:!0,ModalText:"确认加入我的线索吗？"}),o.props.tablemodelaction({selectaction:a,actkey:[t.key],supplierId:t.supplierId,userId:t.userId})}},o.Modalshow2=function(e){var t=e.target.innerHTML;t=t.replace(/<.*>(.*)<.*>/,"$1");var a=o.props.tablemodel.selectedRows||[];if(a.length){var n=a.map(function(e){return e.key}),r=a.map(function(e){return e.supplierId}).join(","),l=a.map(function(e){return e.userId}).join(",");"分配负责人"==t?o.setState({personSelectorVisible:!0}):"移入公海"==t?o.props.modalmodelaction({visible:!0,ModalText:"确认移入公海分配吗？"}):"加入我的"==t&&o.props.modalmodelaction({visible:!0,ModalText:"确认加入我的线索吗？"}),o.props.tablemodelaction({selectaction:t,actkey:n,supplierId:r,userId:l})}else T.a.error("请选择企业")},o.ModalhandleOk=function(){var e=([].concat(o.props.tablemodel.data),o.props.tablemodel.actkey,"移入公海"==o.props.tablemodel.selectaction?re.c+"/clue/editToPublic.do":re.c+"/clue/editPersonLiable.do"),t=o.props.tablemodel.supplierId,a=o.props.tablemodel.userId;ne.a.get(e,{params:{supplierId:t,responsibleSources:a,responsibleUserId:Object(oe.a)().userId,responsiblRealName:Object(oe.a)().realName}}).then(function(e){200==e.status&&1==e.data.code?(T.a.success(""+e.data.msg),o.props.tablemodelaction({selectedRowKeys:[],actkey:[]}),o.props.modalmodelaction({ModalText:"提交中···",confirmLoading:!0}),o.props.fetchPosts({key:"data",value:{isPass:"no",markToDistinguish:"my"}}),setTimeout(function(){o.props.modalmodelaction({visible:!1,confirmLoading:!1})},500)):T.a.error(""+e.data.msg)}).catch(function(e){})},o.ModalhandleCancel=function(e){return function(){var t;o.props.modalmodelaction((t={},t[e]=!1,t))}},o.formItemLayout={labelCol:{span:5},wrapperCol:{span:19}},o.handleSubmit=function(e){var t="object"==(void 0===e?"undefined":ie(e));t&&e.preventDefault();var a={};return o.props.form.validateFieldsAndScroll(function(e,n){if(!e){for(var r in n)if(n[r])if("range-time"==r){var l=n[r].map(function(e){return e.format("YYYY-MM-DD")});a.startTime=l[0]?l[0]:"",a.endTime=l[1]?l[1]:""}else a[r]="other"==r?n[r].join(","):"compNameOrAddressOrMobile"==r?n[r].key:n[r];a.isPass="no",a.markToDistinguish="my",t&&o.props.fetchPosts({key:"data",value:a})}}),a},o.handlePersonCancel=function(){o.setState({personSelectorVisible:!1,PersonSelectortype:"single",actionInfo:!0})},o.handleOpenChooseForCategory=function(){o.setState({personSelectorVisible:!0,PersonSelectortype:"multiple",actionInfo:!1})},o.handleChoosed=function(e,t,a){if(a){var n=([].concat(o.props.tablemodel.data),o.props.tablemodel.actkey,o.props.tablemodel.supplierId);ne.a.get(re.c+"/clue/editPersonLiable.do",{params:{supplierId:n,responsibleSources:o.props.tablemodel.userId,responsibleUserId:e,responsiblRealName:t}}).then(function(e){200==e.status&&1==e.data.code?(T.a.success(""+e.data.msg),o.props.tablemodelaction({actkey:[],selectedRowKeys:[]}),o.props.fetchPosts({key:"data",value:{isPass:"no",markToDistinguish:"my"}}),o.setState({personSelectorVisible:!1})):T.a.error(""+e.data.msg)}).catch(function(e){})}else o.setState({personSelectorVisible:!1,PersonSelectortype:"single",actionInfo:!0}),o.props.form.setFieldsValue({userIds:e,usernames:t})},o.rangeConfig={rules:[{type:"array",required:!1,message:"请选择"}]},o.onSelectChange=function(e,t){o.props.tablemodelaction({selectedRowKeys:e,selectedRows:t})},o.Paginatihandle=function(e,t){o.props.fetchPosts({key:"data",value:le({},o.handleSubmit(),{pageSize:e,offset:t})}),o.props.tablemodelaction({selectedRowKeys:[]})},o.handleReset=function(){o.props.form.resetFields()},o.setDate=function(e){return function(){var t=ee()().add(1-e,"days").format("YYYY-MM-DD"),a=ee()().add(0,"days").format("YYYY-MM-DD");o.props.form.setFieldsValue({"range-time":[ee()(t),ee()(a)]})}},o.columns=[{title:"企业名称",dataIndex:"companyName",render:function(e,t,a){var n=Object(oe.e)(),r=n.systemId?n.systemId:"",o=n.moduleId?n.moduleId:"",l="/myClueDetail/?supplierId="+t.supplierId+"&systemId="+r+"&moduleId="+o;return G.a.createElement("a",{target:"_blank",href:l},e)}},{title:"来源",className:"",dataIndex:"source",render:o.addinputdata,width:80},{title:"线索级别",dataIndex:"clueLevel",render:o.addinputdata,width:80},{title:"企业性质",dataIndex:"enterpriseType",render:o.adduploaddata,width:80},{title:"主营类目",dataIndex:"varietyName",render:o.adduploaddata},{title:"主营品牌",dataIndex:"mainBrand",render:o.adduploaddata,width:80},{title:"联系人信息",dataIndex:"fullname",render:o.adduploaddata,width:80},{title:"跟进次数",dataIndex:"followupCount",render:o.adduploaddata,width:80},{title:"创建时间",dataIndex:"createTime1",render:o.adduploaddata,width:85},{title:"负责人",dataIndex:"realName",render:o.adduploaddata,width:70},{title:"操作",width:80,dataIndex:"Operation",render:function(e,t,a){var n=[];return"my"==t.type&&(n=[G.a.createElement("p",{key:""+a,style:{marginBottom:"5px"}},"移入公海"),G.a.createElement("p",{key:"_"+a},"分配负责人")]),G.a.createElement("div",null,G.a.createElement("a",{onClick:o.Modalshow(e,t,a)},n))}}],o.state={personSelectorVisible:!1,actionInfo:!0,PersonSelectortype:"single"},o}return o(t,e),t.prototype.componentDidMount=function(){this.props.fetchPosts({key:"data",value:{isPass:"no",markToDistinguish:"my"}})},t.prototype.render=function(){var e=this.props.form,t=e.getFieldDecorator,a=e.getFieldsError,n=(e.getFieldError,e.isFieldTouched,this.props.tablemodel.data),r=this.columns,o=this.props.Infos,l=(o.categoryChild,o.jsbutton,o.province,o.provinces,o.city,o.citys,o.county,o.countys,o.town,o.towns,o.registAddressCitys,[{label:"有营业执照",value:"1"},{label:"有跟进记录",value:"2"},{label:"询价单",value:"3"},{label:"报价单",value:"4"},{label:"开票点数",value:"5"}]),i={selectedRowKeys:this.props.tablemodel.selectedRowKeys,onChange:this.onSelectChange},c=this.props.form.getFieldValue("compNameOrAddressOrMobile")?this.props.form.getFieldValue("compNameOrAddressOrMobile").label:void 0;return G.a.createElement("div",{className:"newClue"},G.a.createElement("h2",null,"我的线索"),G.a.createElement("div",{className:"newCluewk"},G.a.createElement(B.a,{layout:"inline",onSubmit:this.handleSubmit},G.a.createElement("div",{className:"newCluewk"},G.a.createElement("div",{className:"newCluenk"},G.a.createElement("div",{className:"content"},G.a.createElement(E.a,{style:{padding:"8px 0px"}},G.a.createElement(O.a,{span:3},G.a.createElement(se,le({},le({},this.formItemLayout,{wrapperCol:{span:24}}),{label:"",style:{width:"100%",paddingRight:"10px"}}),t("compNameOrAddressOrMobile",{rules:[{required:!1,message:"请选择名称"}],initialValue:{key:"companyName"}})(G.a.createElement(_.a,{labelInValue:!0,placeholder:"请选择名称"},G.a.createElement(ce,{value:"companyName"},"企业名称"),G.a.createElement(ce,{value:"address"},"企业地址"),G.a.createElement(ce,{value:"mobile"},"手机"))))),G.a.createElement(O.a,{span:5},G.a.createElement(se,le({},le({},this.formItemLayout,{wrapperCol:{span:24}}),{label:"",style:{width:"100%",paddingRight:"10px"}}),t("compNameOrAddressOrMobileValue",{rules:[{required:!1,message:"请输入"+c}]})(G.a.createElement(I.a,{placeholder:"请输入"+c,maxLength:"100"})))),G.a.createElement(O.a,{span:4},G.a.createElement(se,{label:"线索来源",style:{width:"100%"}},t("source",{rules:[{required:!1,message:"请选择来源"}],initialValue:""})(G.a.createElement(_.a,{style:{width:100},placeholder:"请选择来源"},G.a.createElement(ce,{value:""},"全部"),G.a.createElement(ce,{value:"自行开发"},"自行开发"),G.a.createElement(ce,{value:"来电咨询"},"来电咨询"),G.a.createElement(ce,{value:"网络推广"},"网络推广"),G.a.createElement(ce,{value:"CSC86"},"CSC86"),G.a.createElement(ce,{value:"buy5j"},"buy5j"),G.a.createElement(ce,{value:"网络爬取"},"网络爬取"))))),G.a.createElement(O.a,{span:4},G.a.createElement(se,{label:"线索级别",style:{width:"100%"}},t("clueLevel",{rules:[{required:!1,message:"请选择级别"}],initialValue:""})(G.a.createElement(_.a,{style:{width:100},placeholder:"请选择级别"},G.a.createElement(ce,{value:""},"全部"),G.a.createElement(ce,{value:"即将签约"},"即将签约"),G.a.createElement(ce,{value:"意向客户"},"意向客户"),G.a.createElement(ce,{value:"待培育客户"},"待培育客户"),G.a.createElement(ce,{value:"暂无兴趣"},"暂无兴趣"),G.a.createElement(ce,{value:"无效线索"},"无效线索"),G.a.createElement(ce,{value:"暂无"},"暂无"))))),G.a.createElement(O.a,{span:4},G.a.createElement(se,{label:"客户类型",style:{width:"100%"}},t("enterpriseType",{rules:[{required:!1,message:"请选择类型"}],initialValue:""})(G.a.createElement(_.a,{style:{width:100},placeholder:"请选择级别"},G.a.createElement(ce,{value:""},"全部"),G.a.createElement(ce,{value:"企业客户"},"企业客户"),G.a.createElement(ce,{value:"零售商"},"零售商"),G.a.createElement(ce,{value:"终端用户"},"终端用户"))))),G.a.createElement(O.a,{span:4},G.a.createElement(se,{label:"区域",style:{width:"100%"}},t("areaType",{rules:[{required:!1,message:"请选择区域"}],initialValue:""})(G.a.createElement(_.a,{style:{width:100},placeholder:"请选择区域"},G.a.createElement(ce,{value:""},"全部"),G.a.createElement(ce,{value:"1"},"城内商户"),G.a.createElement(ce,{value:"2"},"城外商户")))))),G.a.createElement(E.a,{style:{padding:"8px 0px"}},G.a.createElement(O.a,{span:3,style:{padding:"0px 10px 0px 0px"}},G.a.createElement(se,le({label:"",style:{width:"100%"}},le({},this.formItemLayout,{wrapperCol:{span:24}})),t("createOrResponsibleTime",{rules:[{required:!1,message:"请选择"}],initialValue:"createTime"})(G.a.createElement(_.a,{placeholder:"请选择"},G.a.createElement(ce,{key:"createTime"},"创建时间"),G.a.createElement(ce,{key:"responsibleTime"},"负责时间"))))),G.a.createElement(O.a,{span:21},G.a.createElement(se,{label:""},t("range-time",this.rangeConfig)(G.a.createElement(de,{style:{width:"50%"}})),G.a.createElement(b.a,{style:{marginLeft:"10px"},type:"primary",ghost:!0,onClick:this.setDate(1),disabled:this.hasErrors(a())},"今天"),G.a.createElement(b.a,{style:{marginLeft:"10px"},type:"primary",ghost:!0,onClick:this.setDate(7),disabled:this.hasErrors(a())},"近7天")))),G.a.createElement(E.a,{style:{padding:"8px 0px"}},G.a.createElement(O.a,{span:12},G.a.createElement(se,{label:"其他条件",style:{width:"100%"}},t("other",this.rangeConfig)(G.a.createElement(pe,{options:l})))),G.a.createElement(O.a,{span:12},G.a.createElement("div",{style:{textAlign:"right"}},G.a.createElement(se,null,G.a.createElement(b.a,{type:"primary",style:{height:"35px",lineHeight:"35px",padding:"0px 30px"},htmlType:"submit",disabled:this.hasErrors(a())},"查询")),G.a.createElement(se,{style:{marginLeft:"20px"}},G.a.createElement(b.a,{type:"primary",style:{height:"35px",lineHeight:"35px",backgroundColor:"#f5f5f5",borderColor:"#e6e6e6",padding:"0px 30px",color:"#a8a8a8"},htmlType:"submit",onClick:this.handleReset},"重置"))))))),G.a.createElement("div",{className:"newCluenk"},G.a.createElement("div",{className:"title"},G.a.createElement(b.a,{type:"primary",style:{padding:"5px 15px",marginRight:"5px",border:"none"},ghost:!0,size:"large",onClick:this.handleSubmit},"刷新列表"),G.a.createElement(b.a,{type:"primary",style:{padding:"5px 15px",marginRight:"5px",border:"none",color:"#666"},ghost:!0,size:"large",onClick:this.Modalshow2},"移入公海"),G.a.createElement(b.a,{type:"primary",style:{padding:"5px 15px",marginRight:"5px",border:"none",color:"#666"},ghost:!0,size:"large",onClick:this.Modalshow2},"分配负责人")),G.a.createElement("div",{className:"content"},G.a.createElement(p.a,{spinning:this.props.tablemodel.loading,delay:500,tip:"Loading..."},G.a.createElement(h.a,{rowSelection:i,columns:r,dataSource:n,bordered:!0,pagination:!1})),G.a.createElement(s.a,{style:{padding:"10px 0px",textAlign:"right"},showTotal:function(e){return"共 "+e+" 条"},pageSizeOptions:["20","30","40","50"],showSizeChanger:!0,showQuickJumper:!0,current:this.props.Paginationmodel.current,defaultCurrent:1,onShowSizeChange:this.Paginatihandle,total:this.props.Paginationmodel.total,pageSize:this.props.Paginationmodel.pageSize,onChange:this.Paginatihandle}),G.a.createElement(W.a,le({},le({},this.props.modalmodel,{visible:this.props.modalmodel.visible,ModalText:this.props.modalmodel.ModalText}),{onOk:this.ModalhandleOk,confirmLoading:this.props.modalmodel.confirmLoading,onCancel:this.ModalhandleCancel("visible")})),G.a.createElement(X.default,{onChoosed:this.handleChoosed,onCancel:this.handlePersonCancel,type:this.state.PersonSelectortype,visible:this.state.personSelectorVisible,actionInfo:this.state.actionInfo})))))))},t}(H.Component);t.a=Object(U.connect)(function(e){return le({},e)},function(e){return Object(Q.bindActionCreators)($.c,e)})(B.a.create({mapPropsToFields:function(e){return e.Infos},onFieldsChange:function(e,t){e.baseInfoForm(t)}})(ue))},1414:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=a(31),i=(a.n(l),a(32)),s=a.n(i),c=a(0),d=a.n(c),p=(a(328),function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return d.a.createElement("div",null,d.a.createElement(s.a,this.props,d.a.createElement("div",{style:{textAlign:"center"}},this.props.ModalText)))},t}(d.a.Component));t.a=p},1415:function(e,t){},328:function(e,t,a){"use strict";a.d(t,"b",function(){return o}),a.d(t,"e",function(){return l}),a.d(t,"d",function(){return i}),a.d(t,"a",function(){return s});var n=a(10),r=a(23),o="baseInfo",l="tablemodelInfo",i="modalmodelInfo",s="PaginationmodelInfo",c=function(e){return{type:o,payload:e}},d=function(e){return{type:i,payload:e}},p=function(e){return{type:l,payload:e}},u=function(e){return{type:s,payload:e}},m=function(e){return function(t,a){return Object(r.a)("http://localhost:3333/testApi/bd").then(function(a){if(200==a.status){var n;t(p((n={},n[e]=a.data.data,n)))}}).catch(function(e){})}},h=function(e){var t=e.name,a=e.value,n=e.returnName;return function(e,o){return Object(r.a)("http://localhost:3333/testApi/citys?"+t+"="+a).then(function(t){if(200==t.status){var a;e(c((a={},a[n]=t.data.data,a)))}}).catch(function(e){})}},f=function(e){var t=e.key,a=e.value;return function(e,o){return e(p({loading:!0})),r.a.get(n.c+"/clue/viewSupplierClueList.do",{params:a}).then(function(n){if(200==n.status){var r,o=n.data.data.rowCount;e(u({current:a.pageSize||1,total:o,pageSize:a.offset||20})),e(p((r={},r[t]=n.data.data.data,r.loading=!1,r)))}}).catch(function(e){})}},y={baseInfoForm:c,modalmodelaction:d,tablemodelaction:p,Paginationmodelaction:u,fetchPosts2:m,fetchcitysPosts:h,fetchPosts:f};t.c=y}},[1411]);