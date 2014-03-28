/* global m */
"use strict";
var counterBox = {};

counterBox.view = function(ctrl) {
  return m(".counterBox", [
                "count: ", 
                m("", {}, ctrl.count)
               ]);
};
