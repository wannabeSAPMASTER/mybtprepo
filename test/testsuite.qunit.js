window.suite=function(){"use strict";const t=new parent.jsUnitTestSuite,n=location.pathname.substring(0,location.pathname.lastIndexOf("/")+1);t.addTestPage(`${n}integration/opaTests.qunit.html`);return t};