sap.ui.define(
  ["./BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel, Fragment) {
    "use strict";

    return Controller.extend("gitpg.myapp.controller.MainView", {
      onInit: function () {
        let oJson = new JSONModel();
        this.getView().setModel(oJson, 'myNode');
        oJson.loadData(
            'http://localhost:8921/files'
            // 'https://port-8921-nodejs-zealous-dentist-idoexist905555.codeanyapp.com/files'
        ).then(
            function () {
                debugger;
            }.bind(this)
        )
        
        // $.ajax(
        //   'http://localhost:8921/files',
        //   //     'https://port-8921-nodejs-quaint-lizard-lgx0920328747.codeanyapp.com/files'
        //   {
        //     method: "GET",
        //     success : function (...params) {
        //         debugger;
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