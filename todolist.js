new Vue({
  el: "#app",
  data: {
    items: ["第一項", "第二項", "第三項"],
    newItem: ""
  },
  methods: {
    Add() {
      if (this.newItem) {
        this.items.push(this.newItem);
        this.newItem = "";
      }
    },
    Delete(item) {
      this.items.splice(item, 1);
    }
  }
});
