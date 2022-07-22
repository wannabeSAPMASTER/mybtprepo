sap.ui.define(
  ["./BaseController",
    "sap/ui/model/json/JSONModel", // JSONModel 사용하려면 정의해 주어야 함. 
    "sap/ui/core/Fragment"
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, Fragment) { //JSONModel은 파라미터로 선언하여 사용해야 함. 
    "use strict";

    return Controller.extend("gitpg.myapp.controller.MainView", {
      onInit: function () {


        // let oJson = new JSONModel(  // oJson이라는 객체 
        // {
        //   myArr1 : [ // items = "{myData>/myArr1}"
        //     { filename : 'file1' , fileType : 'xlsx' }, //filename 이라는 속성을 가진 객체의 조합 
        //     { filename : 'file2' , fileType : 'exel' }, // view 의 myData>filename 에 꽂아넣을 것임. 
        //     { filename : 'file3' , fileType : 'ppt'  },
        //     { filename : 'file4' , fileType : 'txt'  },
        //     { filename : 'file5' , fileType : 'word' },
        //     { filename : 'file6' , fileType : 'htm'  }
        //   ],

        //   myArr2 : [ // items = "{myData>/myArr2}"
        //     { filename : 'test1' }, //filename 이라는 속성을 가진 객체의 조합 
        //     { filename : 'test2' }, // view 의 myData>filename 에 꽂아넣을 것임. 
        //     { filename : 'test3' },
        //     { filename : 'test4' },
        //     { filename : 'test5' },
        //     { filename : 'test6' }
        //   ]
        // }
        //   // myArr2 : [
        //   //   { filename : 'file1' }, //filename 이라는 속성을 가진 객체의 조합 
        //   //   { filename : 'file2' }, // view 의 myData>filename 에 꽂아넣을 것임. 
        //   //   { filename : 'file3' },
        //   //   { filename : 'file4' }
        //   // ]
        // );
        // this.getView().setModel(oJson,'myData') //getView()된 결과를 통해 view를 가져오고, setModel()을 통해 oJson을 myData란 이름을 가진 모델로 등록함. 

        
        // let oJson = new JSONModel();

        // this.getView().setModel(oJson, 'myNode');
        // oJson.loadData(
        //     'http://localhost:8921/files'
        //     // 'https://port-8921-nodejs-zealous-dentist-idoexist905555.codeanyapp.com/files'
        // ).then(
        //     function () {
        //         debugger;
        //     }.bind(this)
        // )
        
        // jquery
        // $.ajax(   // 클라이언트가 HTTP 요청을 보낼 서버 URL 주소 / 비동기식
        //   'http://localhost:8921/files', 
          
        //       // 'https://port-8921-nodejs-quaint-lizard-lgx0920328747.codeanyapp.com/files'

        //   {
        //     method: "GET",
        //     success : function (...params) { // 정상적으로 요청-응답된 경우, success 콜백 호출
        //       let sSuccess = JSON.parse(params[0]);

        //         //myData
        //         let oJson = new JSONModel(sSuccess);
        //         this.getView().setModel(oJson,'myData')

        //       debugger;
        //     }.bind(this),
        //     error : function (...params) {  // 정상적으로 응답받지 못한 경우 error 콜백 호출 
        //       debugger;
        //     }
        //   }
        // )
      },
      onPress: function (oEvent) {
        let sIdRaiseEvent = oEvent.getSource().getId();

        let sIdLink1 = this.getView().byId('Link1').getId();
        let sIdLink2 = this.getView().byId('Link2').getId();
        let sIdLink3 = this.getView().byId('Link3').getId();
        let sIdLink4 = this.getView().byId('Link4').getId();
        let sIdLink5 = this.getView().byId('Link5').getId();
        let sIdLink6 = this.getView().byId('Link6').getId();

        debugger;

        let pFragment ;

        if (sIdRaiseEvent === sIdLink1) {
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.Link1",
              type : "XML",
              id : "Link1Fragment",
              controller : this
            }
          )


        } else if (sIdRaiseEvent === sIdLink2) {
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.Link2",
              type : "XML",
              id : "Link2Fragment",
              controller : this
            }
          )


        } else if (sIdRaiseEvent === sIdLink3) {
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.Link3",
              type : "XML",
              id : "Link3Fragment",
              controller : this
            }
          )

          
        }else if (sIdRaiseEvent === sIdLink4) {
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.Link4",
              type : "XML",
              id : "Link4Fragment",
              controller : this
            }
          )

        } else if(sIdRaiseEvent === sIdLink5) {
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.Link5",
              type : "XML",
              id : "Link5Fragment",
              controller : this
            }
          )

        } else if (sIdRaiseEvent === sIdLink6) {
          pFragment = Fragment.load(
            {
              name : "gitpg.myapp.view.fragments.Link6",
              type : "XML",
              id : "Link6Fragment",
              controller : this
            }
          )
        }

        pFragment.then(function (oView) {
          let oMyExtend = this.getView().byId('myExtend');

          oMyExtend.destroyItems();
          oMyExtend.addItem(oView);

        }.bind(this))
      }
      
    });
  }
);