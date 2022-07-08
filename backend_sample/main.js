const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const qs = require('querystring');
const sanitizehtml = require('sanitize-html');
const myLib = require('./common/lib');
// import myLib from "./common/lib.js";

let app = http.createServer(function (request, response) {
    let _url = request.url;
    let queryData = url.parse(_url, true).query;
    let sPath = url.parse(_url, true).pathname;
    let sFiltedID = '';

    let oCors = {
        origin: ['http://localhost:8080','https://woongkipark.github.io'],
        header: "Origin, X-Requested-With, Content-Type, Accept"
    };

    if (queryData.id) {
        sFiltedID = path.parse(queryData.id).base;
    }

    if (sPath === '/') {
        if (!sFiltedID) {
            sFiltedID = 'welcome'
        }

        // /* -- SYNC 함수 
        let adirContentList = fs.readdirSync('./content');
        let aContentList = myLib.getFileList(adirContentList, 'content');
        let adirmyfilesList = fs.readdirSync('./myfiles');
        let aMyFileList = myLib.getFileList(adirmyfilesList, 'myfiles');

        let aList = [
            ...aContentList,
            ...aMyFileList
        ];

        const oFile = aList.find(function (elem) {
            if (elem.id === sFiltedID) {
                return elem;
            }
        });

        let aTemplateContentList = myLib.templateManager.getTemplateList(aContentList);
        let sDesc = '';

        if (oFile.id === 'filelist') {
            sDesc = sanitizehtml(fs.readFileSync(oFile.fileFullName, 'utf-8'))
            sDesc = sDesc + myLib.templateManager.getTemplateList(aMyFileList);
        } else if (oFile.rootPath === 'myfiles') {
            sDesc = sanitizehtml(fs.readFileSync(oFile.fileFullName, 'utf-8'))
            sDesc = myLib.templateManager.getTemplateFile(sDesc, oFile.id);
        } else {
            sDesc = fs.readFileSync(oFile.fileFullName, 'utf-8')
        }

        let sTemplate = myLib.templateManager.getTemplateBody(aTemplateContentList, oFile.id, sDesc);

        response.writeHead(200);
        response.end(sTemplate);

    } else if (sPath === '/create_process') {
        let sBody = '';

        request.on('data', function (data) {
            sBody = sBody + data;
        });
        request.on('end', function () {
            let post = qs.parse(sBody);
            let sFiltedID = path.parse(post.id).base;
            fs.writeFileSync(`myfiles/${sFiltedID}`, sanitizehtml(post.desc), 'utf-8');

            response.writeHead(302, {
                Location: `/?id=${sFiltedID}`
            });
            response.end();
        });
    } else if (sPath === '/update_process') {
        let sBody = '';

        request.on('data', function (data) {
            sBody = sBody + data;
        });
        request.on('end', function () {
            let post = qs.parse(sBody);
            let sFiltedkey = path.parse(post.key).base;
            let sFiltedID = path.parse(post.id).base;

            fs.renameSync(`myfiles/${sFiltedkey}`, `myfiles/${sFiltedID}`);
            fs.writeFileSync(`myfiles/${sFiltedID}`, sanitizehtml(post.desc), 'utf-8');

            response.writeHead(302, {
                Location: `/?id=${sFiltedID}`
            });
            response.end();
        });
    } else if (sPath === '/delete_process') {
        let sBody = '';

        request.on('data', function (data) {
            sBody = sBody + data;
        });
        request.on('end', function () {
            let post = qs.parse(sBody);
            let sFiltedID = path.parse(post.id).base;

            fs.unlinkSync(`myfiles/${sFiltedID}`);

            response.writeHead(302, {
                Location: `/?id=filelist`
            });
            response.end();
        });
    } else if (sPath === '/update') {
        let adirContentList = fs.readdirSync('./content');
        let aContentList = myLib.getFileList(adirContentList, 'content');
        let adirmyfilesList = fs.readdirSync('./myfiles');
        let aMyFileList = myLib.getFileList(adirmyfilesList, 'myfiles');

        let aList = [
            ...aContentList,
            ...aMyFileList
        ];

        const oFile = aList.find(function (elem) {
            if (elem.id === sFiltedID) {
                return elem;
            }
        });

        let aTemplateContentList = myLib.templateManager.getTemplateList(aContentList);
        let sDesc = '';

        sDesc = fs.readFileSync(oFile.fileFullName, 'utf-8')
        let sTemplateFileEdit = myLib.templateManager.getTemplateFileEdit(oFile.id, sDesc);
        let sTemplate = myLib.templateManager.getTemplateBody(aTemplateContentList, oFile.id, sTemplateFileEdit);

        response.writeHead(200);
        response.end(sTemplate);

    } else if (sPath === '/files') {
        let adirmyfilesList = fs.readdirSync('./myfiles');
        if (adirmyfilesList) {
            let sFilesList = JSON.stringify(adirmyfilesList);
            let origin = request.headers.origin;

            response.setHeader('Content-Type' , 'text/html; charset=utf-8',)
            
            if(oCors.origin.indexOf(origin) >= 0){
                response.setHeader('Access-Control-Allow-Origin', origin);
                response.setHeader('Access-Control-Allow-Headers', oCors.header )
            }
            response.writeHead(200);
            response.end(sFilesList);
        } else {
            response.writeHead(404);
            response.end('not found');
        }
    } else {
        response.writeHead(404);
        response.end('not found');
    }

});

app.listen(8921);