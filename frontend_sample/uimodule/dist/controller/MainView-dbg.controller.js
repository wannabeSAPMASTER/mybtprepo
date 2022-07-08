sap.ui.define(
  ["./BaseController",
    "sap/ui/model/json/JSONModel"
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("gitpg.myapp.controller.MainView", {
      onInit: function () {
        let oJson = new JSONModel();
        this.getView().setModel(oJson, 'myNode');
        oJson.loadData(
            // 'http://localhost:8921/files'
            'https://port-8921-nodejs-quaint-lizard-lgx0920328747.codeanyapp.com/files'
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
    });
  }
);