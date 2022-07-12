//@ui5-bundle gitpg/myapp/Component-preload.js
sap.ui.require.preload({
	"gitpg/myapp/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","gitpg/myapp/model/models"],function(e,t,i){"use strict";return e.extend("gitpg.myapp.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"gitpg/myapp/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("gitpg.myapp.controller.controller.App",{onInit(){}})});
},
	"gitpg/myapp/controller/BaseController.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/routing/History","sap/ui/core/UIComponent","gitpg/myapp/model/formatter"],function(e,t,o,n){"use strict";return e.extend("gitpg.myapp.controller.BaseController",{formatter:n,getModel:function(e){return this.getView().getModel(e)},setModel:function(e,t){return this.getView().setModel(e,t)},getResourceBundle:function(){return this.getOwnerComponent().getModel("i18n").getResourceBundle()},navTo:function(e,t,o){this.getRouter().navTo(e,t,o)},getRouter:function(){return o.getRouterFor(this)},onNavBack:function(){const e=t.getInstance().getPreviousHash();if(e!==undefined){window.history.back()}else{this.getRouter().navTo("appHome",{},true)}}})});
},
	"gitpg/myapp/controller/MainView.controller.js":function(){sap.ui.define(["./BaseController","sap/ui/model/json/JSONModel","sap/ui/core/Fragment"],function(e,t,i){"use strict";return e.extend("gitpg.myapp.controller.MainView",{onInit:function(){let e=new t;this.getView().setModel(e,"myNode");e.loadData("http://localhost:8921/files").then(function(){debugger}.bind(this))},onPress:function(e){let t=e.getSource().getId();let n=this.getView().byId("Link1").getId();let g=this.getView().byId("Link2").getId();let l=this.getView().byId("Link3").getId();let a=this.getView().byId("Link4").getId();let d=this.getView().byId("Link5").getId();let s=this.getView().byId("Link6").getId();debugger;let o;if(t===n){o=i.load({name:"gitpg.myapp.view.fragments.Link1",type:"XML",id:"Link1Fragment",controller:this})}else if(t===g){o=i.load({name:"gitpg.myapp.view.fragments.Link2",type:"XML",id:"Link2Fragment",controller:this})}else if(t===l){o=i.load({name:"gitpg.myapp.view.fragments.Link3",type:"XML",id:"Link3Fragment",controller:this})}else if(t===a){o=i.load({name:"gitpg.myapp.view.fragments.Link4",type:"XML",id:"Link4Fragment",controller:this})}else if(t===d){o=i.load({name:"gitpg.myapp.view.fragments.Link5",type:"XML",id:"Link5Fragment",controller:this})}else if(t===s){o=i.load({name:"gitpg.myapp.view.fragments.Link6",type:"XML",id:"Link6Fragment",controller:this})}o.then(function(e){let t=this.getView().byId("myExtend");t.destroyItems();t.addItem(e)}.bind(this))}})});
},
	"gitpg/myapp/i18n/i18n.properties":'# This is the resource bundle for gitpg.myapp\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Title of gitpg.myapp\n\n#YDES: Application description\nappDescription=Description of gitpg.myapp\n#XTIT: Main view title\ntitle=Title of gitpg.myapp',
	"gitpg/myapp/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"gitpg.myapp","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap-ux/fiori-freestyle-writer:basic","version":"0.11.15"}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.60.0","libs":{"sap.m":{},"sap.ui.core":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"gitpg.myapp.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"gitpg.myapp.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteMainView","pattern":":?query:","target":["TargetMainView"]}],"targets":{"TargetMainView":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"MainView","viewName":"MainView"}}},"rootView":{"viewName":"gitpg.myapp.view.App","type":"XML","async":true,"id":"App"}}}',
	"gitpg/myapp/model/formatter.js":function(){sap.ui.define([],function(){"use strict";return{}});
},
	"gitpg/myapp/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){const i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"gitpg/myapp/view/App.view.xml":'<mvc:View controllerName="gitpg.myapp.controller.App" xmlns:html="http://www.w3.org/1999/xhtml" xmlns:mvc="sap.ui.core.mvc" displayBlock="true" xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"gitpg/myapp/view/MainView.view.xml":'<mvc:View controllerName="gitpg.myapp.controller.MainView" xmlns:mvc="sap.ui.core.mvc" displayBlock="true" xmlns="sap.m" xmlns:tnt="sap.tnt"><Page id="page" title="{i18n>title}"><content><Title titleStyle="H1"><Link id="Link6" text="WEB" target="_blank" press=".onPress" /></Title><List><ActionListItem id="Link1" text="CSS" press=".onPress" /><ActionListItem id="Link2" text="HTML" press=".onPress" /><ActionListItem id="Link4" text="create" press=".onPress" /><ActionListItem id="Link3" text="JavaScript" press=".onPress" /><ActionListItem id="Link5" text="5. file list" press=".onPress"/></List><HBox id="myExtend"></HBox></content></Page></mvc:View>',
	"gitpg/myapp/view/fragments/Link1.fragment.xml":'<core:FragmentDefinition \r\nxmlns="sap.m" xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc"><VBox><Title\r\n        level ="H6"\r\n        titleStyle="H1"\r\n        text = "CSS" /><Text text="Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. Although most often used to set the visual style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any XML document, including plain XML, SVG and XUL, and is applicable to rendering in speech, or on other media. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications."/></VBox></core:FragmentDefinition>',
	"gitpg/myapp/view/fragments/Link2.fragment.xml":'<core:FragmentDefinition \r\nxmlns="sap.m" xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc"><VBox><Title\r\n        level ="H6"\r\n        titleStyle="H1"\r\n        text = "HTML" /><Text text = "Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document."/><Text text = "HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets."/></VBox></core:FragmentDefinition>',
	"gitpg/myapp/view/fragments/Link3.fragment.xml":'<core:FragmentDefinition \r\nxmlns="sap.m" xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc"><VBox><Title\r\n        level ="H6"\r\n        titleStyle="H1"\r\n        text = "JavaScript" /><Text text="JavaScript (/ˈdʒɑːvəˌskrɪpt/[6]), often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production. It is used to make webpages interactive and provide online programs, including video games. The majority of websites employ it, and all modern web browsers support it without the need for plug-ins by means of a built-in JavaScript engine. Each of the many JavaScript engines represent a different implementation of JavaScript, all based on the ECMAScript specification, with some engines not supporting the spec fully, and with many engines supporting additional features beyond ECMA."/></VBox></core:FragmentDefinition>',
	"gitpg/myapp/view/fragments/Link4.fragment.xml":'<core:FragmentDefinition \r\nxmlns="sap.m" xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc"><VBox><Title\r\n        level ="H6"\r\n        titleStyle="H1"\r\n        text = "Create" /><TextArea value="" rows="2" /><TextArea value="" rows="8" /><Button text="Submit" type="Accept" press="onPress" /></VBox></core:FragmentDefinition>',
	"gitpg/myapp/view/fragments/Link5.fragment.xml":'<core:FragmentDefinition \r\nxmlns="sap.m" xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc"><VBox><Title\r\n        level ="H6"\r\n        titleStyle="H1"\r\n        text = "filelist" /><Text text="create list"/><List\r\n\t\t><ActionListItem  text="test" press=".onPress" /><ActionListItem  text="ttt" press=".onPress" /><ActionListItem  text="ㅇㅅㅅ2" press=".onPress" /></List></VBox></core:FragmentDefinition>',
	"gitpg/myapp/view/fragments/Link6.fragment.xml":'<core:FragmentDefinition \r\nxmlns="sap.m" xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc"><VBox><Title\r\n        level ="H6"\r\n        titleStyle="H1"\r\n        text = "Welcome" \r\n        /><Text text=" Welcome page"/></VBox></core:FragmentDefinition>'
});
