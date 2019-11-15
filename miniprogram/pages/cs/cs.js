// miniprogram/pages/cs/cs.js
const db = wx.cloud.database();
const _ =db.command;

Page({
  //数据查询
  // lookup:function(){
  //   console.log("lookup");
  //   db.collection("data")
  //    .where({
  //      count:_.in([1,2])
  //    }) 
    
  //   .get().then(console.log)
  // }

   lookup: function () {
    db.collection("data")
      .field({
        dase:true
      })

    .get().then(console.log)
  }
 
 
  
})