/* global m */
"use strict";
var todoList = {};

todoList.Todo = function(data) {
  this.description = m.prop(data.description);
  this.done = m.prop(false);
};

todoList.controller = function() {
  this.list = {};
  this.description = m.prop("");

  this.getCount = function() {
    return Object.keys(this.list).length;
  }

  this.add = function(description) {
    if (description() && !this.list.hasOwnProperty(description())) {
      this.list[description()] = (new todoList.Todo({description: description()}));
      this.description("");
      console.log(this.getCount());
    }
  };
};

todoList.view = function(ctrl) {
  return m("html", [
      m("body", [
        m("input", {onchange: m.withAttr("value", ctrl.description)
                   ,value: ctrl.description()}),
        m("button", {onclick: ctrl.add.bind(ctrl, ctrl.description)}, "Add"),
        m("table", [
          Object.keys(ctrl.list).map(function(task) {
            task = ctrl.list[task];
            return m("tr", [
              m("td", [
                m("input[type=checkbox]", {onclick: m.withAttr("checked", task.done)
                                          ,checked: task.done()})
                ]),
              m("td", {style: {textDecoration: task.done() ? "line-through" : "none"}}
                    , task.description()),
              ]);
            })
          ])
        ])
      ]);
};

//m.module(document, todo);
//var ctrl = new todo.controller();
//m.render(document, todo.view(ctrl));
