// component/money-select/money-select.js
Component({
  
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    money_input_show: true,
    input_msg_show: false,
    money_list: [{
        index: 0,
        money: 30,
        money_text: '30.00元'
      }, {
        index: 1,
        money: 50,
        money_text: '50.00元'
      }, {
        index: 2,
        money: 100,
        money_text: '100.00元'
      }, {
        index: 3,
        money: 150,
        money_text: '150.00元'
      }, {
        index: 4,
        money: 200,
        money_text: '200.00元'
      }, {
        index: 5,
        money: 0,
        money_text: '其他金额'
      }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _switchSelect: function(e) {// 切换选项
      let index = e.currentTarget.dataset.index;
      this.setData({
        index: index
      });

      // 点击输入其他金额
      if (this.data.money_list.length == index+1) {
        this.setData({
          money_input_show: false
        })
      }
    },
    _dialog_hidden: function () {// 隐藏弹窗
      this.setData({
        money_input_show: true
      })
    },
    _dialog_show: function () {// 显示弹窗
      this.setData({
        money_input_show: false,
      })
    },
    _getMoneyInput: function (e) {// 获取弹窗输入值
      this.setData({
        money_input_value: e.detail.value,
        input_msg_show: false
      })
    },
    _dialog_confirm: function () {// 确认输入
      let input_value = this.data.money_input_value;
      let reg = /^[1-9]\d*$/;//正整数
      if (reg.test(input_value)) {
        let index = this.data.money_list.length - 1;
        let item = 'money_list['+index+']';
        this.setData({
          [item]: {
            index: index,
            money: input_value,
            money_text: input_value+'.00元'
          }
        })
        this._dialog_hidden();
      } else{
        this.setData({
          input_msg_show: true
        })
      }
    }
  }
})
