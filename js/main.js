const container = new Vue({
  el: ".container",
  data: {
    promptUser: "",
    nowList: [
      {
        item: "ciaooo"
      },
    ]
  },
  methods: {
    newStuff(){
      this.nowList.push({
      item:  this.promptUser,
      })
      this.promptUser = ""
    },
    cancelStuff(){
      this.nowList.splice({
        item: this.promptUser,
      })
    },
  },
});
