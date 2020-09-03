// pages/home/home.js
Page({
  data:{
    name:'Ryan',
    age:18,
    students:[
      {id:110,name:'kobe',age:30},
      {id:111,name:'james',age:31},
      {id:112,name:'curry',age:32},
      {id:113,name:'ryan',age:18}
    ],
    counter:0
  },
  handleBtnClick(){
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction(){
    this.setData({
      counter: this.data.counter - 1
    })
  }
})