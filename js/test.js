/* global m */
"use strict";
var testModule = {};

testModule.controller = function() {
  this.todoList = new todoList.controller();
  this.counterBox = new counterBox.controller(this.todoList.getCount.bind(this.todoList));
};

testModule.view = function(ctrl) {
  return [m("#todo", [new todoList.view(ctrl.todoList)])
         ,m("#count", [new counterBox.view(ctrl.counterBox)])
         ]
};

m.module(document.body, testModule);
//var ctrl = new todo.controller();
//m.render(document, todo.view(ctrl));
