const myLib = {
    promisify: function (fn) {
      return function promisified(...params) {
  
        let oPromise = new Promise(function (resolve, reject) {
          return fn(...params.concat([function (err, ...args) {
            return err ? reject(err) : resolve(args.length < 2 ? args[0] : args);
          }]));
        })
  
        return oPromise;
      }
    },
    getFileList: function (alist, sPath) {
      let aReturnList = [];
  
      for (let i = 0; i < alist.length; i++) {
        let sName = alist[i].match(/(\w)+(?=\.)/);
        if (!sName) {
          sName = alist[i];
        } else {
          sName = sName[0];
        }
  
        aReturnList.push({
          id: sName,
          fileFullName: sPath + '/' + alist[i],
          rootPath: sPath
        })
      }
  
      return aReturnList;
    },
    templateManager : {
      getTemplateFile: function (sDesc, sid) {
        return template = `
          <p>${sDesc}</p>
          <p>
            <input type="button" value="File Update" onclick="document.location.href='/update?id=${sid}'"> </button>
            <input type="submit" value="File Delete" form="delete">
            <input type="button" value="Go to Filelist" onclick="document.location.href='/?id=filelist'"> </button>
          </p>
    
          <form id = "delete" action="delete_process" method="post">
            <input type="hidden" name="id" value="${sid}">
          </form>
        `
      },
      getTemplateFileEdit: function (sid, sDesc) {
        return template = `
          <form action="/update_process" method="post">
            <p>
                <input type="hidden" name="key" value="${sid}">
            </p>
    
            <p>
                <input type="text" name="id" value="${sid}">
            </p>
    
            <p>
                <textarea name="desc"> ${sDesc} </textarea>
            </p>
            <p>
                <input type="submit">
            </p>
          </form>
        `
      },
      getTemplateBody: function (sList, sid, sDesc) {
        return template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB2 - ${sid}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ol>
              ${sList}
            </ol>
            <h2>${sid}</h2>
            <p>${sDesc}</p>
          </body>
          </html>  
          `;
      },
      getTemplateList: function (alist) {
        let sList = '';
  
        for (let i = 0; i < alist.length; i++) {
          if (alist[i].id === 'welcome') continue;
  
          sList = sList + `<li><a href="/?id=${alist[i].id}">${alist[i].id}</a></li>`
        }
        return sList;
      }
    }
  }

module.exports = myLib;
// export default myLib;