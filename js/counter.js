/* global m */
"use strict";
var counterBox = {};

counterBox.controller = function(fun) {
  this.getCount = function() {
    console.log(fun());
    return fun();
  }
};

counterBox.view = function(ctrl) {
  return m(".counterBox", [
                "count: ", 
                m("", {}, ctrl.getCount())
               ]);
};
