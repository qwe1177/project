webpackJsonp([3],{1314:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(40),r=(n.n(a),n(0)),o=n.n(r),l=n(12),i=(n.n(l),n(2)),c=n(5),s=n(37),u=n.n(s),p=n(38),f=(n.n(p),n(1315)),m=n(39),d=n(1316),h=[u.a],y=Object(i.createStore)(f.a,i.applyMiddleware.apply(void 0,h));Object(l.render)(o.a.createElement(c.Provider,{store:y},o.a.createElement(m.a,null,o.a.createElement(d.a,null))),document.getElementById("root"))},1315:function(e,t,n){"use strict";var a=n(2),r=n(60),o=n(149),l=Object(a.combineReducers)({EditModal:r.a,AllFollowUP:o.a});t.a=l},1316:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l,i,c=n(13),s=(n.n(c),n(14)),u=n.n(s),p=n(0),f=n.n(p),m=n(30),d=(n.n(m),n(167)),h=(n.n(d),n(1317)),y=(n.n(h),n(20)),E=(n.n(y),n(1318)),w=n(1320),g=n(1324),v=n(5),b=n(2),F=n(149),O=(l=Object(v.connect)(function(e){return{AllFollowUP:e.AllFollowUP}},function(e){return Object(b.bindActionCreators)({doQueryFollow:F.c},e)}))(i=function(e){function t(n){return a(this,t),r(this,e.call(this,n))}return o(t,e),t.prototype.componentWillMount=function(){var e=this.props.AllFollowUP;e=_.pick(e,["query","pagination","userList"]),this.props.doQueryFollow(e)},t.prototype.render=function(){var e=u.a.create()(E.a);return f.a.createElement("div",null,f.a.createElement("h3",{className:"page-title"},"全部跟进"),f.a.createElement("div",{className:"query-wrap"},f.a.createElement(e,null)),f.a.createElement("div",{className:"content clearfix"},f.a.createElement("div",{className:"statistics"},f.a.createElement(g.a,null)),f.a.createElement("div",{className:"right-content"},f.a.createElement("div",{className:"card-wrap"},f.a.createElement(w.a,null)))))},t}(p.Component))||i;t.a=O},1317:function(e,t){},1318:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l,i,c=n(19),s=(n.n(c),n(18)),u=n.n(s),p=n(21),f=(n.n(p),n(22)),m=n.n(f),d=n(24),h=(n.n(d),n(25)),y=n.n(h),E=n(27),w=(n.n(E),n(33)),g=n.n(w),v=n(71),b=(n.n(v),n(72)),F=n.n(b),O=n(28),L=(n.n(O),n(29)),C=n.n(L),A=n(46),P=(n.n(A),n(47)),T=n.n(P),U=n(13),N=(n.n(U),n(14)),S=n.n(N),j=n(0),R=n.n(j),M=n(3),x=(n.n(M),n(1)),k=n.n(x),I=n(1319),D=(n.n(I),n(5)),q=n(2),Q=n(149),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},z=S.a.Item,Y=(T.a.MonthPicker,T.a.RangePicker),V=C.a.Option,B=F.a.Group,H=(l=Object(D.connect)(function(e){return{AllFollowUP:e.AllFollowUP}},function(e){return Object(q.bindActionCreators)({doResetQuery:Q.d,doQueryFollow:Q.c},e)}))(i=function(e){function t(){var n,o,l;a(this,t);for(var i=arguments.length,c=Array(i),s=0;s<i;s++)c[s]=arguments[s];return n=o=r(this,e.call.apply(e,[this].concat(c))),o.handleSubmit=function(e){e.preventDefault(),o.props.form.validateFields(function(e,t){if(!e){var n=o.props.AllFollowUP,a=(n.query,n.pagination),r=n.userList,l=W({},a);l.current=1,l.pageSize=10,o.props.doQueryFollow({query:t,userList:r,pagination:l})}})},o.handleReset=function(){o.props.form.resetFields();var e=o.props.AllFollowUP;e.query,e.pagination;o.props.doResetQuery()},o.changeToLastSeven=function(){o.props.form.setFieldsValue({finishData:[k()().subtract(6,"days"),k()()]})},o.changeToToday=function(){o.props.form.setFieldsValue({finishData:[k()(),k()()]})},l=n,r(o,l)}return o(t,e),t.prototype.componentDidMount=function(){this.props.form.validateFields()},t.prototype.componentDidMount=function(){var e=this.props.AllFollowUP.query;e=_.pick(e,["companyName","contactWay","finishData","followupType"]);var t={};for(var n in e)""!=e[n]&&(t[n]=e[n]);this.props.form.setFieldsValue(t)},t.prototype.render=function(){var e=this.props.form.getFieldDecorator,t={labelCol:{span:10},wrapperCol:{span:14}},n={labelCol:{span:5},wrapperCol:{span:16}},a={labelCol:{span:11},wrapperCol:{span:13}},r={labelCol:{span:4},wrapperCol:{span:20}},o=[{label:"供应商",value:"2"},{label:"线索",value:"1"}];return R.a.createElement(S.a,{layout:"horizontal",onSubmit:this.handleSubmit},R.a.createElement(m.a,{gutter:16},R.a.createElement(y.a,{span:8},R.a.createElement(z,W({},n,{label:"企业名称"}),e("companyName",{rules:[{validator:this.checkName}]})(R.a.createElement(g.a,{style:{width:"100%"},onBlur:this.handleConfirmBlur})))),R.a.createElement(y.a,{span:4},R.a.createElement(z,W({},a,{label:"跟进方式"}),e("contactWay")(R.a.createElement(C.a,{style:{width:"100%"},placeholder:"请选择"},R.a.createElement(V,{value:"1"},"电话"),R.a.createElement(V,{value:"2"},"email"),R.a.createElement(V,{value:"3"},"QQ"),R.a.createElement(V,{value:"4"},"微信"),R.a.createElement(V,{value:"5"},"上门拜访"),R.a.createElement(V,{value:"6"},"客户来访"),R.a.createElement(V,{value:"7"},"其它"))))),R.a.createElement(y.a,{span:8},R.a.createElement(z,W({},t,{label:"计划完成日期"}),e("finishData")(R.a.createElement(Y,null)))),R.a.createElement(y.a,{span:4},R.a.createElement("span",{className:"rangeButton",onClick:this.changeToToday},"今天")," ",R.a.createElement("span",{className:"rangeButton",onClick:this.changeToLastSeven},"近7天"))),R.a.createElement(m.a,{gutter:16,className:"followType"},R.a.createElement(y.a,{span:10,style:{textAlign:"left"}},R.a.createElement(z,W({},r,{label:"跟进类型"}),e("followupType")(R.a.createElement(B,{options:o})))),R.a.createElement(y.a,{span:6,offset:6},R.a.createElement(u.a,{size:"large",type:"primary",style:{width:100,marginRight:30},htmlType:"submit"},"查询"),R.a.createElement(u.a,{size:"large",type:"danger",style:{width:100},onClick:this.handleReset},"重置"))))},t}(R.a.Component))||i;t.a=H},1319:function(e,t){},1320:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l,i,c=n(56),s=(n.n(c),n(57)),u=n.n(s),p=n(109),f=(n.n(p),n(110)),m=n.n(f),d=n(31),h=(n.n(d),n(32)),y=n.n(h),E=n(41),w=(n.n(E),n(42)),g=n.n(w),v=n(0),b=n.n(v),F=n(3),O=(n.n(F),n(1321)),L=n(97),C=n(10),A=n(23),P=n(5),T=n(2),U=n(149),N=n(60),S=(l=Object(P.connect)(function(e){return{AllFollowUP:e.AllFollowUP,EditModal:e.EditModal}},function(e){return Object(T.bindActionCreators)({doQueryFollow:U.c,doFormEdit:N.e},e)}))(i=function(e){function t(){var n,o,l;a(this,t);for(var i=arguments.length,c=Array(i),s=0;s<i;s++)c[s]=arguments[s];return n=o=r(this,e.call.apply(e,[this].concat(c))),o.state={confirmVisible:!1,confirmTarget:{action:"removeMess",data:[]},confirmContent:"是否确认删除您的回复?"},o.handlePageChange=function(e,t){var n=o.props.AllFollowUP.pagination;n.current=e,n.pageSize=t,o.props.doQueryFollow({query:o.props.AllFollowUP.query,userList:o.props.AllFollowUP.userList,pagination:n})},o.handleSizeChange=function(e,t){var n=o.props.AllFollowUP.pagination;n.current=e,n.pageSize=t,o.props.doQueryFollow({query:o.props.AllFollowUP.query,userList:o.props.AllFollowUP.userList,pagination:n})},o.showModal=function(e,t){o.props.doFormEdit(e,t)},o.handleEditSucess=function(){var e=o.props.AllFollowUP,t=e.query,n=e.pagination;o.props.doQueryFollow({query:t,pagination:n})},o.handleConfirmOk=function(){if(o.setState({confirmVisible:!1}),"removeMess"==o.state.confirmTarget.action){var e=o.state.confirmTarget.data,t=e.followUpId,n=e.commentId;o.removeOneMess(t,n)}},o.handleConfirmCancel=function(){o.setState({confirmVisible:!1})},o.openConfirmModal=function(e){var t={confirmVisible:!0};if(e){var n=e.confirmContent,a=e.confirmTarget;n&&(t.confirmContent=n),a&&(t.confirmTarget=a)}o.setState(t)},o.removeOneMess=function(e,t){A.a.get(C.c+"/supplier/delSupplierFollowupPostil.do",{params:{id:t}}).then(function(e){if("1"==e.data.code){g.a.success("删除成功!");var t=o.props.AllFollowUP,n=t.query,a=t.pagination;o.props.doQueryFollow({query:n,pagination:a})}else g.a.error(e.data.msg)}).catch(function(e){g.a.error(e.message)})},l=n,r(o,l)}return o(t,e),t.prototype.componentWillMount=function(){},t.prototype.render=function(){var e=this,t=this.props.AllFollowUP,n=t.list,a=t.pagination,r=t.isFetching;return b.a.createElement("div",null,b.a.createElement(u.a,{spinning:r,delay:1e3},b.a.createElement("div",null,null==n?b.a.createElement("div",null):n.map(function(t){return b.a.createElement(O.a,{onEdit:e.showModal.bind(e),data:t,key:t.id,onBeforeDelComment:e.openConfirmModal})}),b.a.createElement(L.default,{onSuccess:this.handleEditSucess.bind(this)}),b.a.createElement(y.a,{visible:this.state.confirmVisible,onOk:this.handleConfirmOk,onCancel:this.handleConfirmCancel},b.a.createElement("p",null,this.state.confirmContent))),b.a.createElement("div",{className:"pagination-wrap"},b.a.createElement(m.a,{defaultCurrent:1,current:a.current,total:a.total,pageSize:a.pageSize,showQuickJumper:!0,showSizeChanger:!0,showTotal:function(e){return"共 "+e+" 条"},onChange:this.handlePageChange,onShowSizeChange:this.handleSizeChange}))))},t}(b.a.Component))||i;t.a=S},1321:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l,i,c,s,u=n(224),p=(n.n(u),n(225)),f=n.n(p),m=n(59),d=(n.n(m),n(43)),h=n.n(d),y=n(21),E=(n.n(y),n(22)),w=n.n(E),g=n(24),v=(n.n(g),n(25)),b=n.n(v),F=n(119),O=(n.n(F),n(120)),L=n.n(O),C=n(0),A=n.n(C),P=n(3),T=n.n(P),U=n(1322),N=(n(15),n(1323)),S=(n.n(N),n(5)),j=n(2),_=n(149),R=(l=Object(S.connect)(function(e){return{AllFollowUP:e.AllFollowUP}},function(e){return Object(j.bindActionCreators)({showOneCommentForm:_.e,doQueryFollow:_.c},e)}))((s=c=function(e){function t(n){a(this,t);var o=r(this,e.call(this,n));return o.showModal=function(e,t){o.props.onEdit(e,t)},o.handleRemoveOneMess=function(e,t){o.props.onBeforeDelComment({confirmTarget:{action:"removeMess",data:{followUpId:e,commentId:t}}})},o.showFrom=function(e){var t=o.props.AllFollowUP.list;o.props.showOneCommentForm(t,e)},o}return o(t,e),t.prototype.componentWillMount=function(){},t.prototype.render=function(){var e=this,t=this.props.data,n=A.a.createElement("div",null,A.a.createElement("a",{src:"#"},t.companyName),A.a.createElement("span",{className:"card-date"},t.createTime)),a=""!=t.followUpFlag?t.followUpFlag.split(","):t.followUpNode.split(","),r=A.a.createElement("div",null,a.map(function(e,t){return A.a.createElement(L.a,{key:t},e)}));return A.a.createElement("div",{className:"allFollowUp"},A.a.createElement(f.a,{title:n,noHovering:!0,extra:r},A.a.createElement(w.a,null,A.a.createElement(b.a,{span:6},A.a.createElement("span",{className:"label"},"跟进人: "),A.a.createElement("span",{className:"value"},t.realName)),A.a.createElement(b.a,{span:6},A.a.createElement("span",{className:"label"},"主动联络方: "),A.a.createElement("span",{className:"value"},t.activeContact)),A.a.createElement(b.a,{span:6},A.a.createElement("span",{className:"label"},"联系人: "),A.a.createElement("span",{className:"value"},t.contactPersonnel)),A.a.createElement(b.a,{span:6},A.a.createElement("span",{className:"label"},"跟进方式: "),A.a.createElement("span",{className:"value"},t.contactWay))),A.a.createElement(w.a,{className:"marginStyle"},A.a.createElement(b.a,null,A.a.createElement("span",{className:"label"},"洽谈内容: "),A.a.createElement("span",{className:"value"},t.followUpTheContent))),A.a.createElement(w.a,null,A.a.createElement(b.a,{span:6},A.a.createElement("span",{className:"label"},"下次跟进计划: "),A.a.createElement("span",{className:"value"},t.planNextContent)),A.a.createElement(b.a,{span:6},A.a.createElement("span",null,t.planNextContactTime))),t.supplierFollowupPostilDTOs.map(function(n){return A.a.createElement(w.a,{key:n.id,className:"region-tool delete-follow",type:"flex",justify:"space-between"},A.a.createElement(b.a,{span:20},A.a.createElement("span",{className:"label"},n.realName,": "),A.a.createElement("span",{className:"value"},n.postilContent)),A.a.createElement(b.a,{span:4,className:"card-option"},A.a.createElement("div",null,n.createTime),"Y"==n.self?A.a.createElement("div",{className:"remove-btn",onClick:function(){return e.handleRemoveOneMess(t.id,n.id)}},"删除"):""))}),"Y"==t.underling&&t.showCommentForm?A.a.createElement(w.a,null,A.a.createElement(b.a,{span:24},A.a.createElement(U.a,{recordsId:t.id}))):"",A.a.createElement(w.a,null,A.a.createElement(b.a,{span:24,className:"card-edit"},"Y"==t.self?A.a.createElement(h.a,{type:"edit",onClick:function(){e.showModal(t.supplierId,t.id)}}):"","Y"==t.underling?A.a.createElement(h.a,{type:"edit",onClick:function(){e.showFrom(t.id)}}):""))))},t}(A.a.Component),c.propTypes={list:T.a.array,isFetching:T.a.bool,pagination:T.a.object},i=s))||i;t.a=R},1322:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l,i,c,s,u=n(21),p=(n.n(u),n(22)),f=n.n(p),m=n(19),d=(n.n(m),n(18)),h=n.n(d),y=n(24),E=(n.n(y),n(25)),w=n.n(E),g=n(27),v=(n.n(g),n(33)),b=n.n(v),F=n(41),O=(n.n(F),n(42)),L=n.n(O),C=n(13),A=(n.n(C),n(14)),P=n.n(A),T=n(0),U=n.n(T),N=n(3),S=n.n(N),j=n(23),_=n(10),R=n(5),M=n(2),x=n(149),k=P.a.Item,I=(l=Object(R.connect)(function(e){return{AllFollowUP:e.AllFollowUP}},function(e){return Object(M.bindActionCreators)({doQueryFollow:x.c},e)}))((s=c=function(e){function t(){var n,o,l;a(this,t);for(var i=arguments.length,c=Array(i),s=0;s<i;s++)c[s]=arguments[s];return n=o=r(this,e.call.apply(e,[this].concat(c))),o.state={numb1:{len:0,color:""}},o.handleSubmit=function(e){e.preventDefault(),o.props.form.validateFields(function(e,t){if(!e){var n={};for(var a in t){n[a.replace(/\d+/g,"")]=t[a]}var r=o.props.recordsId;n.recordsId=r,j.a.get(_.c+"/supplier/addSupplierFollowupPostil.do",{params:n}).then(function(e){if("1"==e.data.code){L.a.success("提交成功!");var t=o.props.AllFollowUP,n=t.query,a=t.pagination;o.props.doQueryFollow({query:n,pagination:a})}else L.a.error(e.data.msg)}).catch(function(e){L.a.error(e)})}})},o.companyIntroductionHandle=function(e,t){return function(n){var a,r=n.target.value,l=r.length,i=new RegExp("(.{"+t+"}).*","g"),c="";l>t&&(n.target.value=n.target.value.replace(i,"$1"),l=t,c="#ff0000"),o.setState((a={},a[e]={len:l,color:c},a))}},l=n,r(o,l)}return o(t,e),t.prototype.render=function(){var e,t=this.props.form,n=t.getFieldDecorator,a=(t.getFieldsError,t.getFieldError,t.isFieldTouched,this.props.recordsId),r="postilContent"+a;return U.a.createElement(P.a,{layout:"vertical",onSubmit:this.handleSubmit,className:"commont-form"},U.a.createElement(f.a,{gutter:16},U.a.createElement(w.a,{span:21},U.a.createElement(k,null,n(r,{rules:[{required:!0,message:"请填写批注内容!"}],onChange:this.companyIntroductionHandle("numb1",100)})(U.a.createElement(b.a,{type:"textarea",rows:3})),U.a.createElement("p",{style:(e={position:"relative"},e.position="absolute",e.bottom="0px",e.right="0px",e.paddingRight="10px",e.color=this.state.numb1.color,e)},this.state.numb1.len,"/100"))),U.a.createElement(w.a,{span:3},U.a.createElement(k,null,U.a.createElement(h.a,{type:"primary",htmlType:"submit",size:"small"},"添加批注")))))},t}(U.a.Component),c.propTypes={recordsId:S.a.number.isRequired},i=s))||i;t.a=P.a.create()(I)},1323:function(e,t){},1324:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l,i,c=n(616),s=(n.n(c),n(617)),u=n.n(s),p=n(618),f=(n.n(p),n(619)),m=n.n(f),d=n(0),h=n.n(d),y=n(5),E=n(2),w=n(149),g=m.a.TreeNode,v=(u.a.Panel,(l=Object(y.connect)(function(e){return{AllFollowUP:e.AllFollowUP}},function(e){return Object(E.bindActionCreators)({doInitList:w.b,doQueryFollow:w.c},e)}))(i=function(e){function t(){var n,o,l;a(this,t);for(var i=arguments.length,c=Array(i),s=0;s<i;s++)c[s]=arguments[s];return n=o=r(this,e.call.apply(e,[this].concat(c))),o.state={defaultExpandAll:!0},o.getUser=function(e){var t=[];return function e(t,n){for(var a=0;a<t.length;a++)"11"==t[a].type&&n.push(t[a].key),t[a].children&&0!==t[a].children.length&&e(t[a].children,n)}(e,t),t},o.onSelect=function(e,t){var n=o,a=o.props.AllFollowUP,r=a.query,l=a.pagination;a.userList;if("11"==t.node.props.type)o.props.doQueryFollow({query:r,userList:e.toString(),pagination:l});else if(t.node.props.dataRef&&0!=t.node.props.dataRef.children.length){var i=n.getUser(t.node.props.dataRef.children);i=0!=i.length?i:i[0]="N",o.props.doQueryFollow({query:r,userList:i.toString(),pagination:l})}else o.props.doQueryFollow({query:r,userList:"N",pagination:l})},o.renderTreeNodes=function(e){return e.map(function(e){return e.children?h.a.createElement(g,{showIcon:"false",title:e.title,key:e.key,dataRef:e},o.renderTreeNodes(e.children)):h.a.createElement(g,e)})},l=n,r(o,l)}return o(t,e),t.prototype.componentWillMount=function(){this.props.doInitList()},t.prototype.render=function(){var e=this.props.AllFollowUP.departmentList,t=function(e){var t=[];return function e(t,n,a){for(var r=0;r<t.length;r++)n.push({title:t[r].realName||t[r].departmentName,key:t[r].userId||t[r].departmentId,type:a}),t[r].children&&0!==t[r].children.length&&(n[r].children=[],e(t[r].children,n[r].children,a)),t[r].userList&&t[r].userList.length&&(n[r].children||(n[r].children=[]),e(t[r].userList,n[r].children,a+"1"))}(e,t,"1"),t}(e);return h.a.createElement("div",{className:"department-list"},h.a.createElement(m.a,{defaultExpandAll:this.state.defaultExpandAll,onSelect:this.onSelect},this.renderTreeNodes(t)))},t}(h.a.Component))||i);t.a=v},149:function(e,t,n){"use strict";function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(r,o){try{var l=t[r](o),i=l.value}catch(e){return void n(e)}if(!l.done)return Promise.resolve(i).then(function(e){a("next",e)},function(e){a("throw",e)});e(i)}return a("next")})}}n.d(t,"b",function(){return g}),n.d(t,"e",function(){return v}),n.d(t,"d",function(){return b}),n.d(t,"c",function(){return F});var r=n(20),o=n.n(r),l=n(15),i=n(10),c=n(10),s=n(26),u=n.n(s),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f=this,m=function(e){return{type:"ALLFOLLOWUP/INIT_LIST",data:e}},d=function(e){return{type:"ALLFOLLOWUP/REQUEST_DATA",data:e}},h=function(e){return{type:"ALLFOLLOWUP/RECEIVE_DATA",data:e}},y=function(e){return{type:"ALLFOLLOWUP/RECEIVE_DATA_FAIL",data:e}},E=function(e){return{type:"ALLFOLLOWUP/RESET_QUERY",data:e}},w=function(e){return{type:"ALLFOLLOWUP/SHOW_COMMENT_FORM",data:e}},g=function(e){return function(){var e=a(regeneratorRuntime.mark(function e(t,n){var a,r,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=Object(l.b)().token,r={token:a},r=u.a.omitBy(r,u.a.isUndefined),e.next=6,o.a.get(c.a+"/api/user/getAllDepartmentUser",{params:r});case 6:return i=e.sent,e.next=9,t(m({departmentList:i.data.data}));case 9:return e.abrupt("return",e.sent);case 12:e.prev=12,e.t0=e.catch(0);case 15:case"end":return e.stop()}},e,f,[[0,12]])}));return function(t,n){return e.apply(this,arguments)}}()},v=function(e,t){return function(){var n=a(regeneratorRuntime.mark(function n(a,r){var o;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:o=e.map(function(e){return e.id==t&&(e.showCommentForm=!0),e}),a(w(o));case 2:case"end":return n.stop()}},n,f)}));return function(e,t){return n.apply(this,arguments)}}()},b=function(e){return function(t,n){return t(E(e))}},F=function(e,t){return function(){var t=a(regeneratorRuntime.mark(function t(n,a){var r,c,s,m,E,w,g,v,b;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n(d(e));case 3:return r=Object(l.b)().token,c=u.a.cloneDeep(e),s=c.query,m=c.pagination,E=c.userList,w={pageNo:m.current,pageSize:m.pageSize},s.finishData&&s.finishData.length>0&&(s.startTime=s.finishData[0].format("YYYY-MM-DD"),s.endTime=s.finishData[1].format("YYYY-MM-DD")),s.followupType&&s.followupType.length>0&&(s.followupType=s.followupType.toString()),g=p({},s,w,{userList:E,token:r}),g.finishData=void 0,g=u.a.omitBy(g,u.a.isUndefined),t.next=13,o.a.get(i.c+"/supplier/viewSupplierFollowupAll.do",{params:g});case 13:if(v=t.sent,"1"!=v.data.code){t.next=22;break}return b=v.data.data.data,m.total=v.data.data.rowCount,t.next=19,n(h({list:b,pagination:m}));case 19:return t.abrupt("return",t.sent);case 22:return t.next=24,n(y());case 24:return t.abrupt("return",t.sent);case 25:t.next=33;break;case 27:return t.prev=27,t.t0=t.catch(0),t.next=32,n(y());case 32:return t.abrupt("return",t.sent);case 33:case"end":return t.stop()}},t,f,[[0,27]])}));return function(e,n){return t.apply(this,arguments)}}()},O={visible:!0,query:{companyName:"",contactWay:"",finishData:[],followupType:[]},pagination:{showQuickJumper:!0,showSizeChanger:!0,total:1,current:1,pageSize:10,showTotal:function(e){return"共 "+e+" 条"}},list:[],isFetching:!1,departmentList:[],userList:""},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"ALLFOLLOWUP/INIT_LIST":var n=t.data.departmentList;return p({},e,{departmentList:n,isFetching:!0});case"ALLFOLLOWUP/REQUEST_DATA":var a=t.data,r=a.query,o=a.userList;return p({},e,{query:r,userList:o,isFetching:!0});case"ALLFOLLOWUP/RECEIVE_DATA":var l=t.data.list,i=p({},e.pagination,t.data.pagination);return p({},e,{list:l,pagination:i,isFetching:!1});case"ALLFOLLOWUP/RECEIVE_DATA_FAIL":return p({},e,{isFetching:!1});case"ALLFOLLOWUP/SHOW_COMMENT_FORM":return p({},e,{list:t.data});case"ALLFOLLOWUP/CHANGE_QUERY":var c=t.data,r=c.query,s=c.pagination;return p({},e,{query:r,pagination:s});default:return e}};t.a=L}},[1314]);