//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    arr:[],
    arr2:['国内','国际','娱乐']
  },
  
  onLoad: function () {
    /*调用加载提示框*/
    wx.showToast({
      title: "加载中...",
      icon: "loading",
      duration: 10000
    });


    var that = this;
    wx.request({

      //请求api接口

      url: 'https://v.juhe.cn/toutiao/index?type=top&key=e8e8c332ef6e409b9bfd5e3552148cdf',
      data: {

      },

      method: 'GET',
      header: {

      },

      success: function (res) {

        /* 数据返回成功后隐藏加载提示框*/
        wx.hideToast();

        //接收index.php返回的json数据
        var result = res.data.result.data;

        console.log(result);

        //然后把这个数据绑定到页面遍历
        that.setData({
          arr: result
        })


      }

    })
  },

  co:function(){
    console.log('信息');
  },
 
  get_data:function(e){
    var that = this;
    wx.request({
 
      //请求本地服务器下request里的index.php

      url: 'https://v.juhe.cn/toutiao/index?type=top&key=e8e8c332ef6e409b9bfd5e3552148cdf',
      data: {

      },

      method: 'GET',
      header: {

      },

      success: function (res) {

        //接收index.php返回的json数据
        var result = res.data;

        console.log(result);

        //然后把这个数据绑定到页面遍历
        // that.setData({
        //   arr: result
        // })


      }

    })
  }
})
