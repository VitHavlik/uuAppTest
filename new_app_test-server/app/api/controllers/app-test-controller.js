"use strict";
const AppTestAbl = require("../../abl/app-test-abl.js");

class AppTestController {
  init(ucEnv) {
    return AppTestAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new AppTestController();
