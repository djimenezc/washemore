'use strict';

module.exports = {

  'step one' : function (browser) {
    browser
      // .url("file://" + __dirname + "/../../dist/index.html")
      .url('http://localhost:8000/')
      .waitForElementVisible('#app', 1000)
      .waitForElementVisible('.notice', 1000)
      .assert.elementPresent('body')
      .assert.elementPresent('.notice')
      // .click('.ns-LinkTo--widgets')
      // .pause(200)
      .saveScreenshot('./selenium-tests/reports/main.js.png')
      .assert.containsText('h1', 'Hello david');

    browser.end();
  }
};
