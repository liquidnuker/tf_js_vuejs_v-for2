// import "./js/vendor/vue.min.js";
// import Vue from 'vue';
// var Vue = require("./js/vendor/vue.min.js"); // ok
const Vue = require("./js/vendor/vue.min.js");

const app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [{
      text: "todos1"
    }, {
      text: "todos2"
    }, {
      text: "todos3"
    }]
  }
});

const addItem = () => {
  let count = 0;
  app4.todos.push({
    text: "new item"
  });
};

document.getElementById("demo").onclick = addItem;