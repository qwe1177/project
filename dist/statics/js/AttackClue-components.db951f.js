webpackJsonp([41],{1305:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,c,s,i,u=n(31),p=(n.n(u),n(32)),f=n.n(p),m=n(59),E=(n.n(m),n(41)),d=n.n(E),h=n(13),b=(n.n(h),n(14)),y=n.n(b),w=n(0),v=n.n(w),S=n(3),O=n.n(S),R=n(1306),g=(n.n(R),n(1307)),C=n(5),N=n(2),P=n(615),_=(l=Object(C.connect)(function(e){return{personListShower:e.personListShower}},function(e){return Object(N.bindActionCreators)({doReceiveList:P.e,doPreEdit:P.d,doPreAdd:P.c,doEffectFlow:P.b,doCancelForm:P.a},e)}))((i=s=function(e){function t(n){a(this,t);var o=r(this,e.call(this,n));return o.handleCancel=function(){o.props.doCancelForm()},o.effect=function(e){e?(o.setState({title:"编辑联系人"}),o.props.doPreEdit(e)):(o.setState({title:"新建联系人"}),o.props.doPreAdd())},o.state={title:"新建联系人"},o}return o(t,e),t.prototype.componentWillMount=function(){this.props.doReceiveList()},t.prototype.render=function(){var e=this,t=this.state.title,n=y.a.create()(g.a),a=this.props.personListShower,r=a.personList,o=a.visible;return v.a.createElement("div",{className:"personlist-shower"},v.a.createElement("div",{className:"add-wrap",onClick:function(){return e.effect()}},v.a.createElement(d.a,{type:"plus-circle",className:"add"}),"新增联系人"),v.a.createElement("div",{className:"list-wrap"},v.a.createElement("div",{className:"content-wrap"},r.map(function(t,n){return v.a.createElement("div",{className:"item",key:t.key},v.a.createElement("div",{className:"name-wrap"},t.name),v.a.createElement("div",{className:"phone-wrap",onClick:function(){return e.effect(t)}},v.a.createElement("div",{className:"phone-el"},t.telephone),v.a.createElement(d.a,{type:"right"})))}))),v.a.createElement(f.a,{className:"personlist-shower-modal",title:t,visible:o,onCancel:this.handleCancel,footer:null},v.a.createElement(n,null)))},t}(v.a.Component),s.propTypes={requestId:O.a.string.isRequired},c=i))||c;t.default=_},1306:function(e,t){},1307:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l,c,s=n(19),i=(n.n(s),n(18)),u=n.n(i),p=n(46),f=(n.n(p),n(47)),m=n.n(f),E=n(21),d=(n.n(E),n(22)),h=n.n(d),b=n(24),y=(n.n(b),n(25)),w=n.n(y),v=n(27),S=(n.n(v),n(33)),O=n.n(S),R=n(43),g=(n.n(R),n(44)),C=n.n(g),N=n(67),P=(n.n(N),n(65)),_=n.n(P),L=n(13),T=(n.n(L),n(14)),j=n.n(T),k=n(0),I=n.n(k),x=n(26),F=(n.n(x),n(5)),A=n(2),q=n(615),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},H=j.a.Item,M=_.a.Group,D=(l=Object(F.connect)(function(e){return{personListShower:e.personListShower}},function(e){return Object(A.bindActionCreators)({doReceiveList:q.e,doPreEdit:q.d,doPreAdd:q.c,doEffectFlow:q.b,doCancelForm:q.a},e)}))(c=function(e){function t(){var n,o,l;a(this,t);for(var c=arguments.length,s=Array(c),i=0;i<c;i++)s[i]=arguments[i];return n=o=r(this,e.call.apply(e,[this].concat(s))),o.handleSubmit=function(e){e.preventDefault(),o.props.form.validateFields(function(e,t){if(!e){o.props.doEffectFlow(t).then(function(e){e.data.result?C.a.success("提交成功"):C.a.error("提交失败")}).catch(function(e){C.a.error("提交失败")})}})},l=n,r(o,l)}return o(t,e),t.prototype.componentDidMount=function(){var e=this.props.personListShower.pform,t={};for(var n in e)""!=e[n]&&(t[n]=e[n]);this.props.form.setFieldsValue(t)},t.prototype.render=function(){var e=this.props.form.getFieldDecorator,t={labelCol:{span:8},wrapperCol:{span:16}},n={labelCol:{span:3},wrapperCol:{span:21}};return I.a.createElement(j.a,{layout:"horizontal",onSubmit:this.handleSubmit,ref:"test"},I.a.createElement(h.a,null,I.a.createElement(w.a,{span:12},e("key")(I.a.createElement(O.a,{type:"hidden"})),I.a.createElement(H,W({},t,{label:"姓名"}),e("name",{rules:[{required:!0,message:"请输入姓名!"}]})(I.a.createElement(O.a,{placeholder:"请输入姓名"})))),I.a.createElement(w.a,{span:12},I.a.createElement(H,W({},t,{label:"性别",className:"personlist-shower-right-label"}),e("gender")(I.a.createElement(M,null,I.a.createElement(_.a,{value:"men"},"先生"),I.a.createElement(_.a,{value:"women"},"女士")))))),I.a.createElement(h.a,null,I.a.createElement(w.a,{span:12},I.a.createElement(H,W({},t,{label:"生日"}),e("birthday")(I.a.createElement(m.a,null)))),I.a.createElement(w.a,{span:12},I.a.createElement(H,W({},t,{label:"职位",className:"personlist-shower-right-label"}),e("job")(I.a.createElement(O.a,{placeholder:"请输入职位"}))))),I.a.createElement(h.a,null,I.a.createElement(w.a,{span:12},I.a.createElement(H,W({},t,{label:"手机/固话"}),e("telephone",{rules:[{required:!0,message:"请输入手机/固话!"}]})(I.a.createElement(O.a,{placeholder:"请输入手机/固话"})))),I.a.createElement(w.a,{span:12},I.a.createElement(H,W({},t,{label:"邮箱",className:"personlist-shower-right-label"}),e("email")(I.a.createElement(O.a,{placeholder:"请输入邮箱"}))))),I.a.createElement(h.a,null,I.a.createElement(w.a,{span:12},I.a.createElement(H,W({},t,{label:"旺旺"}),e("wangwang")(I.a.createElement(O.a,{placeholder:"请输入旺旺"})))),I.a.createElement(w.a,{span:12},I.a.createElement(H,W({},t,{label:"传真",className:"personlist-shower-right-label"}),e("fax")(I.a.createElement(O.a,{placeholder:"请输入传真"}))))),I.a.createElement(h.a,null,I.a.createElement(w.a,{span:12},I.a.createElement(H,W({},t,{label:"微信"}),e("wechart")(I.a.createElement(O.a,{placeholder:"请输入微信号"})))),I.a.createElement(w.a,{span:12},I.a.createElement(H,W({},t,{label:"QQ",className:"personlist-shower-right-label"}),e("qq")(I.a.createElement(O.a,{placeholder:"请输入QQ号"}))))),I.a.createElement(h.a,null,I.a.createElement(w.a,{span:24},I.a.createElement(H,W({},n,{label:"备注"}),e("remarks")(I.a.createElement(O.a,{placeholder:"请输入备注",type:"textarea",rows:2}))))),I.a.createElement(h.a,null,I.a.createElement(H,{className:"personlist-shower-submit"},I.a.createElement(u.a,{type:"primary",htmlType:"submit",className:"normal"},"提交"))))},t}(I.a.Component))||c;t.a=D},615:function(e,t,n){"use strict";function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(r,o){try{var l=t[r](o),c=l.value}catch(e){return void n(e)}if(!l.done)return Promise.resolve(c).then(function(e){a("next",e)},function(e){a("throw",e)});e(c)}return a("next")})}}n.d(t,"e",function(){return v}),n.d(t,"c",function(){return S}),n.d(t,"a",function(){return O}),n.d(t,"d",function(){return R}),n.d(t,"b",function(){return g});var r=n(20),o=n.n(r),l=n(10),c=n(26),s=n.n(c),i=n(1),u=n.n(i),p=this,f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m=function(e){return{type:"PERSONLISTSHOWER/RECEIVE_LIST",data:e}},E=function(e){return{type:"PERSONLISTSHOWER/PRE_ADD",data:e}},d=function(e){return{type:"PERSONLISTSHOWER/PRE_EDIT",data:e}},h=function(e){return{type:"PERSONLISTSHOWER/CANCEL_FORM",data:e}},b=function(e){return{type:"PERSONLISTSHOWER/SET_FORM",data:e}},y=function(e){return{type:"PERSONLISTSHOWER/RECEIVE_EFFECT_ITEM_SUCCESS",data:e}},w=function(e){return{type:"PERSONLISTSHOWER/RECEIVE_EFFECT_ITEM_FAIL",data:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{key:1,name:"张三1",telephone:"111"},{key:2,name:"张三2",telephone:"222"},{key:3,name:"张三3",telephone:"333"},{key:4,name:"张三4",telephone:"444"},{key:5,name:"张三5",telephone:"555"}];return function(t,n){t(m(e))}},S=function(e){return function(e,t){return e(E())}},O=function(e){return function(e,t){return e(h())}},R=function(e){return function(t,n){var a={key:1,gender:"men",birthday:u()(),email:"sfe@132.com",fax:"12312312",job:"fa",name:"张三",qq:"123123",remarks:"首发得分",telephone:"12324523123",wangwang:"323",wechart:"2312312"};return t(d(f({},a,e)))}},g=function(e){return function(){var t=a(regeneratorRuntime.mark(function t(n,a){var r,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=s.a.omitBy(e,s.a.isUndefined),t.next=4,o.a.get(l.d+"/mockeffectSuccess",{params:r});case 4:if(c=t.sent,!c.data.result){t.next=15;break}return t.next=8,n(b(e));case 8:return t.next=10,n(y());case 10:return t.next=12,v();case 12:return t.abrupt("return",c);case 15:return t.next=17,n(y());case 17:return t.abrupt("return",t.sent);case 19:t.next=28;break;case 21:return t.prev=21,t.t0=t.catch(0),t.next=26,n(w(!1));case 26:return t.abrupt("return",t.sent);case 28:case"end":return t.stop()}},t,p,[[0,21]])}));return function(e,n){return t.apply(this,arguments)}}()}}},[1305]);