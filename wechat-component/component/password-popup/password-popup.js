/**
 * component/password- popup/password- popup.js
 * 密码输入弹窗
 */
Component({
  /**
   * 组件的属性列表 (组件与组件外数据)
   */
  properties: {
    popup_info_show: {
      type: Boolean,
      value: false
    },
    popup_info_name: {
      type: String,
      value: '消费'
    },
    popup_info_money: {
      type: String,
      value: '0.00'
    },
    popup_info_type: {
      type: String,
      value: '银行卡'
    }
    
  },

  /**
   * 组件的初始数据 (组件内部数据)
   */
  data: {
    popup_input_focus: true,
    popup_input_show:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _setInputFocus: function(){//输入框获取焦点
      this.setData({
        popup_input_focus: true
      })
    },
    _getInputValue: function(e){//输入框赋值
      this.setData({ 
        popup_input_value: e.detail.value 
      });
    },
    _closePopup: function(){//关闭密码弹层
      this.setData({
        popup_input_show: false
      });

      let myEventDetail = {
        popup_input_show: false,
        popup_input_value: this.data.popup_input_value
      }
      this.triggerEvent('callback', myEventDetail);
    }
  },
  
  /**
   * 数据监听器可以用于监听和响应任何属性和数据字段的变化
   */
  observers: {
    'popup_input_value': function () {
      if (this.data.popup_input_value.length>=4){
        this._closePopup();
      }
    },
  },

  /**
   * 组件生命周期函数-在组件实例进入页面节点树时执行
   */
  attached: function() {
    let popup_info_show = this.properties.popup_info_show;
    this.setData({
      popup_input_value: '',
      popup_input_focus: true,
      popup_input_show: true,
      popup_info_show: popup_info_show
    });
  }
})
