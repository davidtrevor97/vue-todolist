const container = new Vue({
  el: ".container",
  data: {
    promptUser: "",
    number: 0,
    nowList: [
      {
      },
    ]
  },
  methods: {
    newStuff(){
      this.nowList.push({
      stuff:  this.promptUser,
      })
      console.log(this.promptUser)
      this.promptUser = ""
    },
  },
});
